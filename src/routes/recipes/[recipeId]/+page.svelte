<script lang="ts">
    import Stat from "$lib/components/Stat.svelte";
    import type { Recipe } from "$lib/model/model";
    export let data;
    let recipe: Recipe = data.recipe;
    $: {
        console.log(recipe.coffeeIn);
    }
</script>

<div>
    <form>
    <div class="properties">
        {#if recipe.coffeeIn != null}
        <div class="property aero-panel">

            <input type="text" bind:value={recipe.coffeeIn}>
            <p>grams of coffee</p>
        </div>
        {/if}
        {#if recipe.coffeeOut != null}
        <div class="property aero-panel">
            <h4>{recipe.coffeeOut}</h4>
            <p>ml's of water</p>
        </div>
        {/if}
        {#if recipe.inverted != null}
        <div class="property aero-panel">
            <h4>{recipe.inverted ? "Inverted" : "Normal"}</h4>
            <p>brewing</p>
        </div>
        {/if}
        {#if recipe.coldBrew != null}
        <div class="property aero-panel">
            <h4>{recipe.coldBrew ? "Cold" : "Hot"}</h4>
            <p>brew</p>
        </div>
        {/if}                                                                                                                                                                                                                                                   
    </div>
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
    <p>Intensity: <span>{recipe.intensity}</span></p>
    <Stat percentage={(recipe.intensity / 10) * 100} />
    <p>Prep time: {recipe.preparationTime}s</p>
    <Stat percentage={(recipe.preparationTime / 360) * 100} />
    <h3>Steps</h3>
    {#each recipe.steps as step, index}
        <h4>{index + 1}. {step.name}</h4>
        <p>{step.description}</p>
    {/each}
    </form>
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
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
    .property{
        border-radius: var(--border-radius);
        display: grid;
        width: 10rem;
        place-content: center;
        place-items: center;
        padding: 1rem;
        background-color: var(--color-500);
    }
    p{
        margin-bottom: 0.4rem;
    }
</style>
