<script lang="ts">
    export const prerender = true;
    import Nav from "$lib/components/Nav.svelte";

    let currentUser = "Samie";
    let currentTheme = "black";
    let switchTheme = () => {

        let globalVars = ["100","200","300","500","700","900","text"];
        currentTheme = currentTheme == "black" ? "white" : "black";

        globalVars.forEach((value: string) => {
            document.documentElement.style.setProperty(`--color-${value}`, `var(--${currentTheme}-${value})`);
        })
    }
    
</script>
<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
        <button on:click={() => switchTheme()}></button>
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
    :root{

        --border-radius: 0.4rem;
        --statement-color: #418f94; 
        --white-900: rgb(230,230,230);
        --white-700: rgb(235,235,235);
        --white-500: rgb(240,240,240);
        --white-300: rgb(245,245,245);
        --white-200: rgb(250,250,250);
        --white-100: rgb(255,255,255);
        --white-text: rgb(5,5,5);

        --black-900: rgb(70,70,70);
        --black-700: rgb(40,40,40);
        --black-500: rgb(30,30,30);
        --black-300: rgb(20,20,20);
        --black-200: rgb(15,15,15);
        --black-100: rgb(10,10,10);
        --black-text: rgb(215,215,215);

        --color-900: var(--black-900);
        --color-700: var(--black-700);
        --color-500: var(--black-500);
        --color-300: var(--black-300);
        --color-200: var(--black-200);
        --color-100: var(--black-100);
        --color-text: var(--black-text);

    }
    @media only screen and (max-width: 600px) {
        .content{
            margin-left: 0 !important;
        }
    }
    
    :global(html) {
        scroll-behavior: smooth;
        background-color: var(--color-200);
    }
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :global(.aero-panel){
        box-shadow: 2px 1px 2px 1px var(--color-300);
        border-radius: var(--border-radius);
    }
    :global(a){
        all: unset;
    }
    :global(h3){
        font-family: "Archivo Black", sans-serif;
        font-size: 2rem;
        margin-bottom: 0.2rem;
        color: var(--color-text);
    }
    :global(h4){
        font-family: "Archivo Black", sans-serif;
        font-size: 1.2rem;
        margin-top: 2rem;
        margin-bottom: 0.4rem;
        color: var(--color-text);
    }
    :global(h5){
        font-family: "Archivo Black", sans-serif;
        font-size: 1.1rem;
        color: var(--color-text);
    }
    :global(p){
        font-family: "Geologica", sans-serif;
        margin-top: 0.6rem;
        color: var(--color-text);
    }

    h1 {
        letter-spacing: 0.2rem;
        font-size: 3rem;
        font-family: "Urbanist";
        font-weight: 100;
        color: var(--color-text);
    }
    .container {
        display: grid;
    }
    .logo {
        margin: 1rem;
        width: min-content;
        position: relative;
    }
    main{
        max-width: 1200px;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: min-content 1fr;
        padding: 1rem;
        place-self: center;
    }
    main h2{
        font-family: "Archivo Black", sans-serif;
        font-size: 4rem;
        color: var(--color-text);
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
