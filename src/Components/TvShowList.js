import React from 'react';
import TvShow from './TvShow';

const TvShowList = (props) =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.tvshows.map((tvs,i)=>{
                            return (
                                <TvShow key={i} image = {tvs.img[0]} tvData={tvs.data}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TvShowList;