import express from "express"

import { verfyingToken, assigningToken } from "../middlewares/verfyingToken"

import { createProfile, deleteProfile, findAllProfiles, upDateProfile } from "../controllers/profileController"

const router = express.Router();

router.post("/api/user/profile", verfyingToken, createProfile)
router.get("/api/user/profile", verfyingToken, findAllProfiles)
router.patch("/api/user/profile/:id", verfyingToken, upDateProfile)
router.delete("/api/user/profile/:id", verfyingToken, deleteProfile)

export default router
