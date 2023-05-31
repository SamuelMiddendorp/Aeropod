<div class="container">
    <div class="logo">
        <h1>AeroPod</h1>
        <svg
            height="100%"
            version="1.1"
            viewBox="0 0 29.904167 28.485369"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                transform="translate(-73.683332,-106.85213)"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <g stroke-width=".8">
                    <circle cx="88.635414" cy="109.80209" r="2.5499623" />
                    <circle cx="88.635414" cy="128.32292" r="2.5499625" />
                    <circle cx="88.635414" cy="119.06251" r="2.5499625" />
                </g>
                <path
                    d="m74.083331 134.9375h9.260417v-21.16667"
                    stroke-width=".4"
                />
                <path
                    d="m103.1875 134.9375h-9.260419v-21.16667"
                    stroke-width=".4"
                />
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
        letter-spacing: 0.6rem;
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
