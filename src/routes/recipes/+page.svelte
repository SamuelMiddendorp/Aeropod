<script lang="ts">
    import type { Recipe } from "$lib/model/model";

    let recipes: Recipe[] = [
        {
            name: "Recipe1",
            intensity: 7,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe2",
            intensity: 8,
            preperationTime: 360,
            steps: [],
        },
        {
            name: "Recipe3",
            intensity: 4,
            preperationTime: 30,
            steps: [],
        },
    ];
</script>

<body>
    {#each recipes as recipe}
    <div class="recipe">
        <h3>{recipe.name}</h3>
    </div>
    {/each}
</body>
