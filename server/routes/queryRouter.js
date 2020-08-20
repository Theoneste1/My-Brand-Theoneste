import express from "express"
import queryValidator from "./../validators/query"
import { createQuery, findAllQueries, findOneQuery, deleteQuery } from "./../controllers/queriesController"
import { verfyingToken, assigningToken } from "./../middlewares/verfyingToken"
const router = express.Router();

router.post("/api/queries/",queryValidator, createQuery)
router.get("/api/queries/", verfyingToken, findAllQueries)
router.get("/api/queries/:id", verfyingToken, findOneQuery)
router.delete("/api/queries/:id/", verfyingToken, deleteQuery)

export default router;
