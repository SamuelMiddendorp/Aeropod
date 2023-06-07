<script lang="ts">
    import { browser } from "$app/environment";

    export let title: string;
    let anchor = title.toLowerCase();
    let url: string;
    if (browser) {
        url = `${window?.location.href.split("#")[0]}#${anchor}`;
    }
</script>

<h4 id={anchor}>
    {title}<button on:click={() => (window.location.href = url)}>#</button>
</h4>

<style>
    button {
        all: unset;
        cursor: pointer;
        color: #418f94;
        display: none;
        margin-left: 0.2rem;
    }
    h4:hover button {
        display: inline;
    }
    h4:active button {
        display: inline;
    }
</style>
