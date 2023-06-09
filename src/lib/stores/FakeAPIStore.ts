import type { Gear, Recipe } from "$lib/model/model";

let recipes: Recipe[] = [
    {
        id: "1",
        name: "Recipe 1",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        intensity: 7,
        preparationTime: 360,
        steps: [],
    },
    {
        id: "2",
        name: "Recipe 2",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        intensity: 8,
        preparationTime: 360,
        steps: [],
    },
    {
        id: "3",
        name: "Recipe 3",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        intensity: 10,
        preparationTime: 30,
        steps: [],
    },
    {
        id: "4",
        name: "Recipe 4",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        intensity: 2,
        preparationTime: 70,
        steps: [],
    },
    {
        id: "5",
        name: "Recipe 5",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        intensity: 1,
        preparationTime: 60,
        steps: [],
    },
    {
        id: "6",
        name: "Recipe 6",
        description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
        coffeeIn: 8,
        coffeeOut: 200,
        inverted: true,
        coldBrew: true,
        intensity: 7,
        preparationTime: 45,
        steps: [{
            "name": "Grind coffee",
            "description": "Grind 18 grams of coffee on a course/medium setting"
        }],
    },
];

export const getRecipes = () => {
    return recipes;
}
export const getGear = () : Gear[] => {
    return [
        {
            name: "grinder1",
            category: "grinder",
            brand: "timemore"
        },
        {
            name: "grinder2",
            category: "grinder",
            brand: "timemore"
        }
    ];
}
export const setRecipe = (recipe: Recipe) => {
    console.log("updating recipe");
    let index = recipes.indexOf(recipes.find(x => x.id == recipe.id)!);
    recipes[index] = recipe;
}

export const getRecipe = (recipeId: string): Promise<Recipe> => {

    return new Promise((resolve, reject) => {
        let recipe = recipes.find(r => r.id == recipeId);
        recipe ? resolve(recipe) : reject(`Can not find recipe ${recipeId}`)
    });
};