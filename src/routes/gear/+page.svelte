<script lang="ts">
    import type { Gear } from "$lib/model/model";
    import { getGear } from "$lib/stores/FakeAPIStore";

let gear: Gear[] = getGear();

</script> 
<h3>Gear</h3>
<div class="gear">
{#each gear as item}
<div class="aero-panel">
    <h4>{item.name}</h4>
    <p>{item.category}</p>
</div>
{/each}
</div>
<style>
    .gear{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
</style>
