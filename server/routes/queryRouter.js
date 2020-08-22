import express from "express"
import queryValidator from "./../validators/query"
import { createQuery, findAllQueries, findOneQuery, deleteQuery } from "./../controllers/queriesController"
import { verfyingToken, assigningToken } from "./../middlewares/verfyingToken"
const router = express.Router();

router.post("/api/user/queries/",queryValidator, createQuery)
router.get("/api/user/queries/", verfyingToken, findAllQueries)
router.get("/api/user/queries/:id", verfyingToken, findOneQuery)
router.delete("/api/user/queries/:id/", verfyingToken, deleteQuery)

export default router;
