import React from 'react';

const ItemImage = (props) => {
    console.log(props)

    return (

        <div className="card-image waves-effect waves-block waves-light" style={{ textAlign: 'center' }}>
            {
                props.image === null ? (<img src={`https://cdn11.bigcommerce.com/s-gho61/stencil/31cc7cb0-5035-0136-2287-0242ac11001b/e/3dad8ea0-5035-0136-cda0-0242ac110004/images/no-image.svg`} alt="card image" style={{ width: "100%", height: 360 }} />)
                    : (
                            <img src={props.image} alt= "No image"/>
                    )
            }

        </div>
    )
}

export default ItemImage;