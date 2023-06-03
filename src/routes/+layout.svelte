<script lang="ts">
    import Nav from "../lib/model/components/Nav.svelte";

    let currentUser = "Samie";
</script>
<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
    </div>
    <main>
        <h2>Hello {currentUser}</h2>
        <aside>
            <Nav/>
        </aside>
        <div class="main-content">
        <slot></slot>
        </div>
    </main>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Urbanist:wght@100&display=swap');
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* debug */
    :global(*){
        border: 2px solid #333;
    }
    :global(.aero-panel){
        border: 1px solid #e6e6e6;
        border-radius: 0.4rem;
    }
    h1 {
        letter-spacing: 0.2rem;
        font-size: 3rem;
        font-family: "Urbanist";
        font-weight: 100;
    }
    h2{
        font-family: "Archivo Black", sans-serif;
        font-size: 4rem;
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
        max-width: 1200px;
        display: grid;
        place-self: center;
        place-content: center;
    }
</style>
