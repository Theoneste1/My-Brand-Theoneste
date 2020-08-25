import express from "express"
import profileValidate from "./../validators/profile"
import { verfyingToken, assigningToken } from "../middlewares/verfyingToken"
import { createProfile, deleteProfile, upDateProfile } from "../controllers/profileController"
const router = express.Router();

router.post("/api/user/profile", verfyingToken, profileValidate, createProfile)
// router.get("/api/user/profile", verfyingToken, findAllProfiles)
router.patch("/api/user/profile/:id", verfyingToken, profileValidate, upDateProfile)
router.delete("/api/user/profile/:id", verfyingToken, deleteProfile)

export default router
