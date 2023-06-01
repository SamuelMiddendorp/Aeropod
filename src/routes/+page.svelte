<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Kodchasan:wght@200&family=Urbanist:wght@100&display=swap");
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
    .container {
        display: grid;
        grid-template-rows: 6rem;
    }
    .logo {
        padding: 1rem;
        position: relative;
        display: grid;
        align-items: center;
        justify-items: start;
        grid-template-columns: 1fr;
    }
    .logo svg {
        margin-left: 0.4rem;
        height: 75%;
    }
</style>
