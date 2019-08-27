import React from 'react';
import { Link } from 'react-router-dom';

const TvShow = (props) => {

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light" style={{textAlign: 'center'}}>
                    {
                        props.image == null ? (<img src={`https://cdn11.bigcommerce.com/s-gho61/stencil/31cc7cb0-5035-0136-2287-0242ac11001b/e/3dad8ea0-5035-0136-cda0-0242ac110004/images/no-image.svg`} alt="card image" style={{ width: "100%", height: 360 }} />)
                            : (<Link to={'/' + props.tvData.id}><img src={props.image} alt="card image" /></Link>)
                    }
                        <span className="black-text text-darken-2" style={{fontSize: 12, fontWeight:"bold"}}>{props.tvData.title}</span>

                </div>
            </div>
        </div>
    )
}

export default TvShow;