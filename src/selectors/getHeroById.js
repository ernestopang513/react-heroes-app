import { heroes } from "../data/heroes";

export const getHerouesById = (id) => {

    

    return heroes.find(hero => hero.id === id)
}