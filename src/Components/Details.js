import React, { Component } from 'react';
import axios from 'axios';
import DetailImage from './DetailImages';
import M from 'materialize-css';
class Details extends Component {
    state = {
        id: null,
        title: '',
        languages: [],
        cast: [],
        description: '',
        short_description: '',
        runningTime: '',
        images: [],
        genre: [],
        seasons:[],
        detail_type:''
    }
    componentDidMount() {
        let id = this.props.match.params.movie_id;

        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        setTimeout(() => {
            axios.get('https://cdn-discover.hooq.tv/v1.2/discover/titles/' + id).then((res) => {
                console.log(res.data.data)
               if(res.data.data.as === "MOVIE"){
                this.setState({
                    id: this.props.match.params.movie_id,
                    title: res.data.data.title,
                    languages: res.data.data.languages,
                    cast: res.data.data.people,
                    description: res.data.data.description,
                    short_description: res.data.data.short_description,
                    runningTime: res.data.data.running_time_friendly,
                    genre: res.data.data.tags,
                    images: res.data.data.images
                })
               } 
               else{
                this.setState({
                    detail_type:"TVSHOW",
                    id: this.props.match.params.movie_id,
                    title: res.data.data.title,
                    languages: res.data.data.languages,
                    cast: res.data.data.people,
                    description: res.data.data.description,
                    short_description: res.data.data.short_description,
                    runningTime: res.data.data.running_time_friendly,
                    genre: res.data.data.tags,
                    images: res.data.data.images,
                    seasons: res.data.data.seasons
                })
               }
                
            })
        }, 30)

    }

    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        console.log(this.state)
        const ImageList = this.state.images.length ? (
            <DetailImage images={this.state.images} />

        ) : (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )

        const description = this.state.description ? (
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="col s10">
                        <h4>Description</h4>
                        <p className="text">
                            {this.state.description}
                        </p>
                    </div>
                </div>
            </div>


        ) : (
                null
            )

        const tags = this.state ? (

            this.state.cast.map((cast, i) => {
                return (
                    <div className="col" key={i}>
                        <p> {cast.name}</p>
                    </div>
                )
            })
        ) : (null)

        const seasons = this.state ? (
            this.state.seasons.map((ses, i)=>{
                return(
                <div className="left" style={{ marginBottom: 20 }} key={i}>
                <h6> {ses} , </h6>
            </div>)
            })
        ) : (null)

        const genre = this.state ? (
            this.state.genre.map((genre, j) => {
                return (
                   
                    <div className="left" style={{ marginBottom: 20 }} key={j}>
                        <h6> {genre.label} , </h6>
                    </div>)

            })
        ) : (null)

        return (

            <div className="container">
                <i className="material-icons left waves-effect waves-light" style={back_button_style} onClick={this.handleClick}>keyboard_backspace</i>
                {this.state !== null ?
                    <div>
                    <h4>
                    {this.state.title}
                    </h4>
                    </div>

                    : <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                }
                <div className="col s5" >
                        <h4>Genre</h4>
                        <div className="col">
                            {genre}
                        </div>
                    </div>
                {ImageList}
                <div className="row">
                    <div className="col s7" >
                        <h4>Cast</h4>
                        {tags}
                    </div>
                    {this.state.detail_type !== '' ? (
                    <div className="col s5" >
                     <h4>Seasons</h4>
                     <div className="col">
                            {seasons}
                        </div>
                        </div>
                    ) : (
                        <div className="col s5" >
                        <h4>Length</h4>
                        <div className="col">
                            {this.state.runningTime}
                        </div>
                    </div>
                    )}

                    

                </div>
                {description}

            </div>
        )
    }
}

const back_button_style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    height: 20,
    width: 20
};

const col_style = {
    marginTop: 20
};

export default Details;