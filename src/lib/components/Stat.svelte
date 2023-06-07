<script lang="ts">
    export let percentage: number = 0;
</script>
<div class="aero-panel">
    <div style="width: {percentage}%"class="inner">.</div>
</div>
<style>
    div{
        display: inline-block;
        width: 100%;
        background-color: var(--color-500);
    }
    .inner{
        position: relative;
        background-color: var(--color-900);
    }
</style>
