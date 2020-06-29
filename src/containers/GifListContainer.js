import React from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

const URL = "https://api.giphy.com/v1/gifs/search?q="

const REST = "&api_key=dc6zaTOxFJmzC&rating=g&limit=3"

export default class GifListContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            gifList: [],
            search: "simpsons"
        }
    }

    componentDidMount() {
        this.fetch()
    }

    fetch = (search = "simpsons") => {
        console.log(search)
        fetch(URL + search + REST)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifList: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }

    render(){
        return (
            <div>
                <GifSearch fetch={this.fetch}/>
                <GifList gifs={this.state.gifList}/>
                </div>
                )
       
    }
}