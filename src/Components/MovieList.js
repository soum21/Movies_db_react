import React from 'react';
import Movie from './Movie';

const MovieList = (props) =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((mov,i)=>{
                            return (
                                <Movie key={i} image = {mov.img[0]} movData={mov.data}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;