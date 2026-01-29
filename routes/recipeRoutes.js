import express, { Router } from "express";
import {
    getAllRecipes,
    getSpecificRecipe
} from "../services/recipeServices.js"

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/recipe-lookup", getSpecificRecipe);

export default router;