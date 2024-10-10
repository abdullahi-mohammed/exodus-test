import express from 'express'
import { getTotalSupply } from '../controllers/totalSupply.js'

const router = express();

router.get("/total_supply", getTotalSupply);

export const totalSupplyRouter = router;
