export interface Recipe{
    id: string,
    name: string,
    description: string,
    intensity: number,
    preperationTime: number,
    steps: Step[]
}
export interface Step{
    name: string,
    description: string
}