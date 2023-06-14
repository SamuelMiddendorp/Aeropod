
import { getRecipe } from "$lib/stores/FakeAPIStore";
export const load = ({params}) => {
    const fetchRecipe = async (id) => {
        return await getRecipe(id);
    }
    return {recipe: fetchRecipe(params.recipeId)};
}