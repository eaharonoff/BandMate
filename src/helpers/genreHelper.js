import React from 'react'
import Fuse from 'fuse.js'


const genreHelper = (event) => {
  event.preventDefault()
  var genre = event.target.children[2].value
  var genres = ['rock', 'pop', 'jazz', 'indie', 'jingle', 'blues', 'folk', 'funk', 'gospel', 'techno', 'metal', 'k-pop', 'j-pop', 'classical']
  var list = []
  genres.forEach(genre => {
    list.push({name: genre})
  })
  var options = {
    keys: ['name']
  };
  var fuse = new Fuse(list, options); // "list" is the item array
  var result = fuse.search(genre)
  event.target.children[2].value = ""
  return result
}

export default genreHelper
