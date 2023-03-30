import { Specie } from "./models";

export function parseSpecie(obj: Specie): Specie {
    return {
        ...obj,
    }
}