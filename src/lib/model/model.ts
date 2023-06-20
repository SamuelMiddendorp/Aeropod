export interface Recipe{
    id: string,
    name: string,
    description: string,
    coffeeIn?: number,
    coffeeOut?: number,
    inverted?: boolean,
    coldBrew?: boolean,
    intensity: number,
    preparationTime: number,
    steps: Step[]
}

export interface Step{
    name: string,
    description: string
}

export interface Gear{
    category: string,
    name: string,
    brand: string
}
