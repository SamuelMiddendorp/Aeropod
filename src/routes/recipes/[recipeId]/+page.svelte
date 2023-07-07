<script lang="ts">
    import Stat from "$lib/components/Stat.svelte";
    import type { Recipe } from "$lib/model/model";
    import { setRecipe } from "$lib/stores/FakeAPIStore";
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

            <input class="number-input" type="number" bind:value={recipe.coffeeIn}>
            <p>grams of coffee</p>
        </div>
        {/if}
        {#if recipe.coffeeOut != null}
        <div class="property aero-panel">
            <input class="number-input" type="number" bind:value={recipe.coffeeOut}>
            <p>ml's of water</p>
        </div>
        {/if}
        {#if recipe.inverted != null}
        <div class="property aero-panel">
            <input type="checkbox" bind:checked={recipe.inverted}>
            <h4>{recipe.inverted? "inverted" : "normal"}</h4>
            <p>brewing</p>
        </div>
        {/if}
        {#if recipe.coldBrew != null}
        <div class="property aero-panel">
            <input type="checkbox" bind:checked={recipe.coldBrew}>
            <h4>{recipe.coldBrew ? "cold" : "hot"}</h4>
            <p>brew</p>
        </div>
        {/if}                                                                                                                                                                                                                                                   
    </div>
    <input class="text-input-h3" type="text" bind:value={recipe.name}>
    <p>{recipe.description}</p>
    <p>Intensity: <input class="number-input" type="number" bind:value={recipe.intensity}>
    <Stat percentage={(recipe.intensity / 10) * 100} />
    <p>Prep time: {recipe.preparationTime}s</p>
    <Stat percentage={(recipe.preparationTime / 360) * 100} />
    <h3>Steps</h3>
    {#each recipe.steps as step}
        <div class="step">
        <input class="text-input-h4" bind:value={step.name}>
        <textarea cols="50" rows="2" class="text-input-multiline" bind:value={step.description}></textarea>
        <button on:click={() => recipe.steps = recipe.steps.filter(s => s != step)}>Remove step -</button>
        </div>
    {/each}
    <button on:click={() => recipe.steps = [...recipe.steps, {name: "Step Name", description: "Step Description"}]}>Add step +</button>
    <button on:click={() => setRecipe(recipe)}>Save recipe!</button>  
    </form>
</div>

<style>
    .step{
        margin-bottom: 1rem;
    }
    .text-input-multiline{
        all: unset;
        display: block;
        padding: 0.2rem;
        border-radius: var(--border-radius);
        margin-bottom: 0.4rem;
        font-family: "Geologica", sans-serif;
        color: var(--color-text);
    }
    .text-input-multiline:focus{
        border: 2px solid var(--color-900);
    }
    .text-input-h3{
        all: unset;
        font-size: 2rem;
        margin-top: 1rem;
        font-family: "Archivo Black", sans-serif;
        color: var(--color-text);
    }
    .text-input-h3:focus{
        border: 2px solid var(--color-900);
    }
    .text-input-h4:focus{
        border: 2px solid var(--color-900);
    }
    .text-input-h4{
        all: unset;
        margin-bottom: 0.4rem;
        font-size: 1.2rem;
        font-family: "Archivo Black", sans-serif;
        color: var(--color-text);
    }
    .number-input{
        all: unset;
        max-width: 5rem;
        font-family: "Archivo Black", sans-serif;
        color: var(--color-text);
        text-align: center;
    }
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
