import React, { useMemo } from 'react'
import { getHerouesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    // const heroes = getHerouesByPublisher(publisher); //Sustitución por el hook de useMemo

    const heroes = useMemo(() => getHerouesByPublisher(publisher), [publisher])

    return (
        <div className = 'animate__animated d-flex flex-wrap animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard  
                        
                        key = {hero.id}
                        {...hero}
                    />
        
                ))
            }
        </div>
    )
}
