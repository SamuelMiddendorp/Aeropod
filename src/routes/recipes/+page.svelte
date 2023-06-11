<script lang="ts">
    import Stat from "$lib/components/Stat.svelte";
import type { Recipe } from "$lib/model/model";

    let recipes: Recipe[] = [
        {
            name: "Recipe 1",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 7,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe 2",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 8,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe 3",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 10,
            preperationTime: 30,
            steps: [],
        },
        {
            name: "Recipe 4",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 2,
            preperationTime: 70,
            steps: [],
        },
        {
            name: "Recipe 5",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 1,
            preperationTime: 60,
            steps: [],
        },
        {
            name: "Recipe 6",
            description: "lorem ipsum coffe blablba recipe, nice to drink blabla",
            intensity: 7,
            preperationTime: 45,
            steps: [],
        },
    ];
</script>

<div class="recipes">
    {#each recipes as recipe}
    <div class="recipe aero-panel">
        <button on:click={() => recipes = recipes.filter((x) => x != recipe)}>-</button>
        <a draggable="false" href="recipes/22">
        <h5>{recipe.name}</h5>
        <h4>{recipe.description}</h4>
        <p>Intensity: {recipe.intensity}</p>
        <Stat percentage={(recipe.intensity / 10 * 100)}/>
        <p>Prep time: {recipe.preperationTime}s</p>
        <Stat percentage={(recipe.preperationTime/ 360 * 100)}/>
        </a>
    </div>
    {/each}
</div>
<style>
    h4{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
    .recipes{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
    .recipe button{
        all: unset;
        font-size: 1.4rem;
        color: var(--color-text);
        background-color: var(--color-500);
        display: grid;
        border-top-right-radius: var(--border-radius);
        place-content: center;

        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0;
        right: 0;
    }
    .recipe{
        transition: all 0.2s ease-in-out;
        position: relative;
        padding: 1rem;
    }
    .recipe:hover{
        background-color: var(--color-700);
    }
    p{
        margin-bottom: 0.4rem;
    }
</style>
