/* eslint-disable no-unused-vars */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

export const Register = AsyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile,
    impressions,
  } = req.body;

  if (
    [firstName, lastName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const validUser = await User.findOne({ email });

  if (validUser) {
    throw new ApiError(409, "Email already in use ");
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile: Math.floor(Math.random() * 10000),
    impressions: Math.floor(Math.random() * 10000),
  });

  const createdUser = await User.findById(newUser._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user Created sucessfully"));
});

export const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    throw new ApiError(400, "Please provide an email and a password");
  }
  const vaildUser = await User.findOne({ email });

  if (!vaildUser) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = bcrypt.compare(password, vaildUser.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Password");
  }

  const token = jwt.sign({ id: vaildUser._id }, process.env.JWT_SECERT);
  const { password:pass, ...rest } = vaildUser._doc;
  return res
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .json(new ApiResponse(200, rest, "login Succesfully"));
});
