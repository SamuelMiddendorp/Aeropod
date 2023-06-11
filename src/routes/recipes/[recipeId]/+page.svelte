<script lang="ts">
    import type { Recipe } from "$lib/model/model";
    export let data;
    let recipe: Recipe = data.recipe;
</script>
<div>
    Recipe:
    <h3>{recipe.name}</h3>
</div>
<style>
    
</style>