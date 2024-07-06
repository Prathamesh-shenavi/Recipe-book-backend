import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {
  addUserDB,
  getUserByIdDB,
  getUserByUserNameDB,
  updateUserDB,
} from "../services/user.service.js";

const addUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res.status(401).send(new ApiError(401, "Invalid User Inputs", []));
  }
  const existedUser = await getUserByUserNameDB(username);
  if (existedUser) {
    return res
      .status(400)
      .send(
        new ApiError(400, "User already exists with given username", [
          "User already exists",
        ])
      );
  }
  const newUser = await addUserDB({username, password});
  return res
    .status(201)
    .send(new ApiResponse(201, newUser, "User created successfully"));
});

const getUserByUserName = asyncHandler(async (req, res) => {
  const {username} = req.params;
  if (!username) {
    return res.status(401).send(new ApiError(401, "username required"));
  }
  const dbUser = await getUserByUserNameDB(username);
  if (!dbUser) {
    return res
      .status(200)
      .send(
        new ApiResponse(200, null, `User Not found with name: ${username}`)
      );
  }
  return res
    .status(200)
    .send(
      new ApiResponse(200, {user: dbUser}, `User found with name: ${username}`)
    );
});
const getUserById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  if (!id) {
    return res.status(401).send(new ApiError(401, "id is required"));
  }
  const dbUser = await getUserByIdDB(id);
  if (!dbUser) {
    return res
      .status(404)
      .send(new ApiError(404, `User is not found with id: ${id}`));
  }
  return res
    .status(200)
    .send(new ApiResponse(200, {user: dbUser}, `User found with name: ${id}`));
});
const updateUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body;
  const {id} = req.params;
  if (!username || !password || !id) {
    throw new ApiError(401, "Invalid User Inputs", []);
  }
  console.log(req.cookies);
  const newUser = await updateUserDB({username, password, id});
  return res.status(200).send(new ApiResponse(200, {newUser}, "User updated"));
});
export {addUser, getUserByUserName, getUserById, updateUser};
