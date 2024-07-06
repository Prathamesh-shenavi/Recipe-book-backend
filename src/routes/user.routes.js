import {Router} from "express";
import {
  addUser,
  getUserById,
  getUserByUserName,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();


router.get("/:username", getUserByUserName);
router.post("/", addUser);
router.put("/:id", updateUser);
export default router;
