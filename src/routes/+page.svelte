<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
        <svg
            height="100%"
            version="1.1"
            viewBox="0 0 5.8999252 24.420761"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                transform="translate(-85.685452,-110.82086)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".8"
            >
                <circle cx="88.635414" cy="113.77082" r="2.5499623" />
                <circle cx="88.635414" cy="132.29166" r="2.5499625" />
                <circle cx="88.635414" cy="123.03124" r="2.5499625" />
            </g>
        </svg>
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
        grid-template-columns: max-content 1fr;
    }
    .logo svg {
        margin-left: 0.4rem;
        height: 75%;
    }
</style>
