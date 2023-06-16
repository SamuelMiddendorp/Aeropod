<script lang="ts">
    import Stat from "$lib/components/Stat.svelte";
    import type { Recipe } from "$lib/model/model";
    export let data;
    let recipe: Recipe = data.recipe;
</script>

<div>
    <div class="properties">
        {#if recipe.coffeeIn}
            <h4>{recipe.coffeeIn} gram coffee</h4>
        {/if}
        {#if recipe.coffeeOut}
            <h4>{recipe.coffeeOut} ml water</h4>
        {/if}
        {#if recipe.inverted}
            <h4>{recipe.inverted ? "Inverted" : "Normal"}</h4>
        {/if}
    </div>
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
    <p>Intensity: {recipe.intensity}</p>
    <Stat percentage={(recipe.intensity / 10) * 100} />
    <p>Prep time: {recipe.preperationTime}s</p>
    <Stat percentage={(recipe.preperationTime / 360) * 100} />
    <h3>Steps</h3>
    {#each recipe.steps as step, index}
        <h4>{index + 1}. {step.name}</h4>
        <p>{step.description}</p>
    {/each}
</div>

<style>
    h3 {
        margin-top: 1rem;
    }
    h4 {
        margin-top: 0.2rem;
    }
    .properties{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
    .properties h4{
        border-radius: var(--border-radius);
        display: grid;
        place-content: center;
        padding: 1rem;
        background-color: var(--color-500);
    }
</style>
