import {User} from "../models/user.model.js";

const getUserByIdDB = async (id) => {
  try {
    const existedUser = await User.findById(id);
    return existedUser;
  } catch (e) {
    throw new Error(
      `[Database Error] Can't find User with id: ${id} + ${e.message}`
    );
  }
};

const getUserByUserNameDB = async (username) => {
  try {
    const existedUser = await User.findOne({
      username: username,
    });
    return existedUser;
  } catch (e) {
    throw new Error(
      `[Database Error] Can't find User with username: ${username} + ${e.message}`
    );
  }
};

const addUserDB = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (e) {
    throw new Error("[Database Error] User is not added: " + e.message);
  }
};

const updateUserDB = async (user) => {
  try {
    const newUser = await User.findByIdAndUpdate({_id: user.id}, user, {
      new: true,
    });
    return newUser;
  } catch (e) {
    throw new Error("[Database Error] User is not updated: " + e.message);
  }
};

export {addUserDB, getUserByIdDB, getUserByUserNameDB, updateUserDB};
