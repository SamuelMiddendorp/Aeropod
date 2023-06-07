<script lang="ts">
    export let percentage: number = 0;
</script>
<div class="outer aero-panel">
    <div style="width: {percentage}%"class="inner">&nbsp;</div>
</div>
<style>
    .outer{
        display: inline-block;
        width: 100%;
        background-color: var(--color-500);
    }
    .inner{
        position: relative;
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        background-color: var(--statement-color);
    }
</style>
