<script lang="ts">
    import type { Gear } from "$lib/model/model";
    import { getGear } from "$lib/stores/FakeAPIStore";

let gear: Gear[] = getGear();

</script> 
<h3>Gear</h3>
{#each gear as item}
<div class="gear item aero-panel">
    <h4>{item.name}</h4>
    <p>{item.category}</p>
    </div>
{/each}
