<script lang="ts">
    import Stat from "$lib/components/Stat.svelte";
    import type { Recipe } from "$lib/model/model";
    export let data;
    let recipe: Recipe = data.recipe;
</script>

<div>
    Recipe:
    <h3>{recipe.name}</h3>
    <p>{recipe.description}</p>
    <p>Intensity: {recipe.intensity}</p>
    <Stat percentage={(recipe.intensity / 10) * 100} />
    <p>Prep time: {recipe.preperationTime}s</p>
    <Stat percentage={(recipe.preperationTime / 360) * 100} />
    <h3>Steps</h3>
    {#each recipe.steps as step, index}
        
        <h4>{index+1}. {step.name}</h4>
        <p>{step.description}</p>
    {/each}
</div>
<style>
    h3{
        margin-top: 1rem;
    }
    h4{
        margin-top: 0.2rem;
    }
</style>
