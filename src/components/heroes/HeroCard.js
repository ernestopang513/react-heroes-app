import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id,superhero,publisher,alter_ego,first_appearance, characters}) => {


    return (
        <div
            className = ' card ms-auto mt-5' 
            style = {{width: 10 + 'rem'}}
        >
            <div>
                <img 
                    src = {`./assets/heroes/${id}.jpg`}  
                    width = '160' 
                    alt = {superhero} 
                />
            </div>
            <div>
                <h5 className = 'text-center'>{superhero}</h5>
                <p>{alter_ego}</p>
                
                {
                    (alter_ego !== characters)
                    && <p>{characters}</p>
                }

                <p>
                    <small>{first_appearance}</small>
                </p>

                <Link className = 'btn btn-primary' to = {`./hero/${id}`}>
                    Más....
                </Link>
            </div>
        </div>
    )
}
