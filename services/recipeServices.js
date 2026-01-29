import fs from "fs/promises";

const filePath = new URL("../data/recipes.json", import.meta.url);

async function loadData() {
    try {
        const response = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(response); 

        return data
    } catch (error) {
        console.log("error loading recipes:", error)
    }
}

const recipeData = await loadData() || [];

const findRecipe = (proteinSelected) => {
    return recipeData.find((recipe) => recipe.ingredients?.protein?.name?.toLowerCase() === proteinSelected?.toLowerCase());
}

export const getAllRecipes = (req, res) => {
    res.render("index.ejs", {
        recipe: null,
    });
}

export const getSpecificRecipe = (req, res) => {

    const recipe = findRecipe(req.body.ingredient);
    
    if (!recipe) {
        return res.render("index.ejs", {
            recipe: null,
        })
    }

    res.render("index.ejs", { 
        recipe
    })
}