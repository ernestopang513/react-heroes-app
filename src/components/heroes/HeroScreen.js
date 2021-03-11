import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHerouesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroeId} =useParams();

    // const hero = getHerouesById(heroeId);
    const hero = useMemo(() => getHerouesById(heroeId), [heroeId])

    if(!hero){
        return <Redirect to = '/'/>
    }

    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
            

    const {superhero,publisher,alter_ego,first_appearance, characters} = hero;

    return (
        <div className = 'mt-5'>
            
            <div className = 'd-flex justify-content-between'>
                <img 
                    src = {`../assets/heroes/${heroeId}.jpg`}
                    alt = {superhero}
                    width = '250'
                    className = ' animate__animated  animate__zoomIn'
                />

                <div  className = ' animate__animated  animate__zoomIn'>
                    <h3>{superhero}</h3>

                    <ul>

                        <li> 
                            <b>Alter ego</b> {alter_ego}
                        </li>
                        <li> 
                            <b>Publisher</b> {publisher}
                        </li>
                        <li> 
                            <b>First appearance</b> {first_appearance}
                        </li>
                    </ul>

                    <h5> Characters</h5>
                    <p> {characters} </p>

                    <button
                        className = 'btn btn-primary'
                        onClick = {handleReturn}
                    >
                        Return
                    </button>

                </div>

            </div>
        </div>
    )
}

