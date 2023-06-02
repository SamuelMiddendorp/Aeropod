<script lang="ts">
    let currentUser = "Samie";
</script>
<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
    </div>
    <main>
        <h2>Hello {currentUser}</h2>
        <aside>
            <a class="main-link">
                Recipes
                </a>
            <a class="main-link">
                Gear
            </a>
            <a class="main-link">
                Coffee
            </a>
        </aside>
    </main>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Urbanist:wght@100&display=swap');
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    .aero-panel{
        border: 1px solid #e6e6e6;
        border-radius: 0.4rem;
    }
</style>
