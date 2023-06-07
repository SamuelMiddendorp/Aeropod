<script lang="ts">
    import type { Recipe } from "$lib/model/model";

    let recipes: Recipe[] = [
        {
            name: "Recipe 1",
            intensity: 7,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe 2",
            intensity: 8,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe 3",
            intensity: 4,
            preperationTime: 30,
            steps: [],
        },
        {
            name: "Recipe 4",
            intensity: 2,
            preperationTime: 30,
            steps: [],
        },
    ];
</script>

<div class="recipes">
    {#each recipes as recipe}
    <div class="recipe">
        <h5>{recipe.name}</h5>
        <p>Intensity: {recipe.intensity}</p>
        <p>Prep time: {recipe.preperationTime}</p>
    </div>
    {/each}
</div>
<style>
    .recipes{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
    .recipe{
        padding: 1rem;
        width: 12rem;
        background-color: var(--color-300);
    }
</style>
