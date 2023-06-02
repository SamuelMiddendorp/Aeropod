export interface Recipe{
    name: string,
    intensity: number,
    preperationTime: number,
    steps: Step[]
}
export interface Step{
    name: string,
    description: string
}