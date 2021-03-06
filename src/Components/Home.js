import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import TvShowList from './TvShowList';
import Pagination from './Pagination';

class Home extends Component {
    state = {
        data: [],
        movies: [],
        tvShows: [],
        img16x9: '',
        altimg: '',
        totalResults: 0,
        currentPage:1
    }

    componentDidMount() {
        let movieTemp = [];
        let movieImg = [];
        let tvShowTemp = [];
        let tvShowImg = [];
        setTimeout(() => {
            axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=6').then((res) => {
                res.data.data.filter(x => {
                    if (x.type = "Multi-Title-Manual-Curation" && x.data !== null) {
                        x.data.map((y, i) => {
                            if (y.as === "MOVIE") {
                                var new_temp = {
                                    data: y,
                                    img: []
                                }
                                y.images.filter((img) => img.type === "POSTER").map((res, j) => {

                                    var newStr = (res.url.substring(0, res.url.length - 1));
                                    new_temp.img.push(newStr.toString())
                                    movieImg.push(res.url)

                                })
                                movieTemp.push(new_temp)

                            }
                            if (y.as === "TVSHOW") {
                                var new_temp = {
                                    data: y,
                                    img: []
                                }
                                y.images.filter((img) => img.type === "POSTER").map((res, j) => {

                                    var newStr = (res.url.substring(0, res.url.length - 1));
                                    new_temp.img.push(newStr.toString())
                                    tvShowImg.push(res.url)

                                })
                                tvShowTemp.push(new_temp)

                            }
                        })
                    }
                });

                // console.log(temp)
                this.setState({
                    movies: movieTemp,
                    tvShows: tvShowTemp,
                    totalResults: movieTemp.length
                })
            }, 1500)
        });



    }

    nextPage = (pageNumber) =>{
        let movieTemp = [];
        let movieImg = [];
        let tvShowTemp = [];
        let tvShowImg = [];
        setTimeout(() => {
            axios.get(`https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=${pageNumber}&perPage=5`).then((res) => {
                res.data.data.filter(x => {
                    if (x.type = "Multi-Title-Manual-Curation" && x.data !== null) {
                        x.data.map((y, i) => {
                            if (y.as === "MOVIE") {
                                var new_temp = {
                                    data: y,
                                    img: []
                                }
                                y.images.filter((img) => img.type === "POSTER").map((res, j) => {

                                    var newStr = (res.url.substring(0, res.url.length - 1));
                                    new_temp.img.push(newStr.toString())
                                    movieImg.push(res.url)

                                })
                                movieTemp.push(new_temp)

                            }
                            if (y.as === "TVSHOW") {
                                var new_temp = {
                                    data: y,
                                    img: []
                                }
                                y.images.filter((img) => img.type === "POSTER").map((res, j) => {

                                    var newStr = (res.url.substring(0, res.url.length - 1));
                                    new_temp.img.push(newStr.toString())
                                    tvShowImg.push(res.url)

                                })
                                tvShowTemp.push(new_temp)

                            }
                        })
                    }
                });

                // console.log(temp)
                this.setState({
                    movies: movieTemp,
                    tvShows: tvShowTemp,
                    currentPage:pageNumber
                })
            }, 1500)
        });

    }


    render() {
        const numberPages = Math.floor(this.state.totalResults/7);


        const movieList = this.state.movies.length ? (
            <MovieList movies={this.state.movies} />

        ) : (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )


        const tvShowList = this.state.tvShows.length ? (
            <TvShowList tvshows={this.state.tvShows} />
        ) : (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        return (
            <div className="container">
                <h1>Movies</h1>
                <div className="row">
                {movieList}
                </div>
                <h1>TvShows</h1>
                <div className="row">
                {tvShowList}

                </div>
                {this.state.totalResults > 5 ? <Pagination pages ={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>: ''}
            </div>
        )
    }
}

export default Home;