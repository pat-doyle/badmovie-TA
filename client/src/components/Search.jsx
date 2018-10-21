import React from 'react';
const axios = require('axios');
// const getMovies = require('../server/helpers/apiHelpers.js');
// const getMovieGenres = require('../server/helpers/apiHelpers.js');

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      genres: []
    };
    this.updateSelected = this.updateSelected.bind(this);
  }
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genres')
    .then(res => {
      console.log('response data in search get request', res.data)
      this.setState({genres: res.data})
    })
  }

  updateSelected(selected) {
    console.log('this in updateSelected', selected.target.value)
    this.setState({selected: selected.target.value})
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* How can you tell which option has been selected from here? */}
        <select onChange={this.updateSelected}>
          <option value="empty">Genres</option>
          {this.props.genres.map(genre => {
            return(
              <option value={genre.id}>{genre.name}</option>
            )
          })}
        </select>
        <br/><br/>

        <button onClick={()=>{this.props.getMovies()}}>Search</button>

      </div>
    );
  }
}

export default Search;