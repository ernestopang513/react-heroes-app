import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    
    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);
    // console.log(q)

    const [formValues, handleInputChange ] = useForm({
        searchText: q
    });
    
    const { searchText} = formValues;
    
    // const heroesFiltered = getHeroByName(searchText);

    const heroesFiltered =useMemo(() => getHeroByName(q), [q])
    
    
    const handleSearch = (e) => {

        e.preventDefault()
        // console.log(searchText);
        // reset();
        history.push(`?q=${encodeURI(searchText)}`)

    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className = 'row'>

                <div className = 'col-5'>
                    <h4> Search Form</h4>
                    <hr/>

                    <form onSubmit = {handleSearch}>

                        <input
                            type = 'text'
                            name = 'searchText'
                            placeholder = 'Find you hero'
                            className = 'Form-control'
                            onChange = {handleInputChange}
                            value = {searchText}
                            // value = 'hola'
                            autoComplete = 'off'
                        />

                        <button
                            type = 'submit'
                            className = 'btn m-1 btn-block btn-outline-primary'
                        >
                            Search....
                        </button>



                    </form>


                </div>

                <div className = 'col-7' >

                    <h4> Results </h4>
                    <hr/>

                    { (q === '' ) && <div className = 'alert alert-info'>
                        Search a hero
                    </div>
                    }
                    { (q !== '' && heroesFiltered.length === 0 ) && <div className = 'alert alert-danger'>
                        There is no hero with {q}
                    </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key = {hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
