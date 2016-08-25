import React from 'react'
import Fuse from 'fuse.js'

const instrumentHelper = (event) => {
  var instrument = event.target.children[2].value
  var instruments = ['guitar', 'drums', 'bass_guitar', 'mandolin', 'accordion', 'bagpipes', 'banjo', 'clarinet', 'fiddle', 'flute', 'harmonica', 'piano', 'ukulele', 'alto_saxophone', 'tenor_saxophone', 'trumpet']
  var list = []
  instruments.forEach(instrument => {
    list.push({name: instrument})
  })
  var options = {
    keys: ['name']
  };
  var fuse = new Fuse(list, options); // "list" is the item array
  var result = fuse.search(instrument);
  event.target.children[2].value = ""
  return result
}

export default instrumentHelper
