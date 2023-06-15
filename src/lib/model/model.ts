export interface Recipe{
    id: string,
    name: string,
    description: string,
    coffeeIn?: number,
    coffeeOut?: number,
    inverted?: boolean,
    intensity: number,
    preperationTime: number,
    steps: Step[]
}
export interface Step{
    name: string,
    description: string
}