import express from "express";
import { retrieveCodes, createCodes, queryCode } from "../controllers/discount.js";

const router = express.Router();

router.get("/", retrieveCodes);

router.post("/create", createCodes);

router.post("/query-code", queryCode)

export default router;
