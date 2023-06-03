<script lang="ts">
    import Nav from "../lib/model/components/Nav.svelte";

    let currentUser = "Samie";
</script>
<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
    </div>
    <main>
        <h2>Hello {currentUser}, let's get started</h2>
        <aside>
            <Nav/>
        </aside>
        <div class="content">
        <slot></slot>
        </div>
    </main>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Geologica:wght@100&family=Urbanist:wght@100&display=swap');
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :global(.aero-panel){
        box-shadow: 2px 1px 2px 1px rgb(238, 238, 238);
        border-radius: 0.4rem;
    }
    :global(a){
        all: unset;
    }
    :global(h3){
        font-family: "Archivo Black", sans-serif;
        font-size: 2rem;
        margin-bottom: 0.2rem;
    }
    :global(h4){
        font-family: "Archivo Black", sans-serif;
        font-size: 1.2rem;
        margin-top: 2rem;
        margin-bottom: 0.4rem;
    }
    :global(p){
        font-family: "Geologica", sans-serif;
        margin-top: 0.6rem;
    }

    h1 {
        letter-spacing: 0.2rem;
        font-size: 3rem;
        font-family: "Urbanist";
        font-weight: 100;
    }
    .container {
        display: grid;
    }
    .logo {
        margin: 1rem;
        padding: 1rem;
        width: min-content;
        position: relative;
    }
    main{
        width: 1200px;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: min-content 1fr;
        place-self: center;
    }
    main h2{
        font-family: "Archivo Black", sans-serif;
        font-size: 4rem;
        margin-bottom: 2rem;
        grid-row: 1;
        grid-column: 1/3;
    }
    main aside{
        grid-row: 2;
        grid-column: 1;
    }
    main .content{
        margin-left: 4rem;
        grid-row: 2;
        grid-column: 2;
    }
</style>
