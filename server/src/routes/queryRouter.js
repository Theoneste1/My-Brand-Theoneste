import express from "express"
import queryValidator from "./../validators/query"
import createQuery from "./../controllers/queries/createQuey"
import deleteQuery from "./../controllers/queries/deleteQuery"
import findOneQuery from "./../controllers/queries/findOneQuery"
import findAllQueries from "./../controllers/queries/findAllQueries"



const router = express.Router();

router.post("/api/queries/",queryValidator, createQuery)
router.get("/api/queries/", findAllQueries)
router.get("/api/queries/:id", findOneQuery)
router.delete("/api/queries/:id/", deleteQuery)

export default router;
