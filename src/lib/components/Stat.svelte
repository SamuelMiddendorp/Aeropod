<script lang="ts">
    export let percentage: number = 0;
</script>
<div class="outer">
    <div style="width: {percentage}%"class="inner">&nbsp;</div>
</div>
<style>
    .outer{
        display: inline-block;
        width: 100%;
        background-color: var(--color-500);
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    .inner{
        position: relative;
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        background-color: var(--color-900);
    }
</style>
