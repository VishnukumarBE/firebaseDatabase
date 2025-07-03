import express from "express";
import { getAllUsers,updateUserById,deleteUserById,createUser,getUserById } from "../controllers/user.controller";
const router = express.Router();
router.post("/users", createUser);
router.get("/users/:uid",getUserById );
router.patch("/users/:uid",updateUserById );
router.delete("/users/:uid",deleteUserById );
router.get("/allusers",getAllUsers );
export default router;
