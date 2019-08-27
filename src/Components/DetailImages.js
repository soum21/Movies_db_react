import React,{Component} from 'react';
import ItemImage from './ItemImage';
import M from 'materialize-css';

class DetailImage extends Component{
componentDidMount(){
    var options = {fullWidth: true,
        indicators: true};
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, options);
}

render(){
    
    return (
        <div className="carousel carousel-slider center">
        {
                this.props.images.filter(img => img.type !== "POSTER").map((img, i)=>{
                    return(
                        <a className="carousel-item" key={img.id} >
                             <ItemImage key={i} image={img.url} />
                             <span className="black-text">
                            slide left or right           
                            </span>
                        </a>  
                        )
                })
            }
        </div>
    )
}
 
}

export default DetailImage;