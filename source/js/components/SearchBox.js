import React, { Component } from 'react'

const libraries = [
  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/' },
  { name: 'AngularJS', url: 'https://angularjs.org/' },
  { name: 'jQuery', url: 'http://jquery.com/' },
  { name: 'Prototype', url: 'http://www.prototypejs.org/' },
  { name: 'React', url: 'http://facebook.github.io/react/' },
  { name: 'Ember', url: 'http://emberjs.com/' },
  { name: 'Knockout.js', url: 'http://knockoutjs.com/' },
  { name: 'Dojo', url: 'http://dojotoolkit.org/' },
  { name: 'Mootools', url: 'http://mootools.net/' },
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/' },
  { name: 'Lodash', url: 'http://lodash.com/' },
  { name: 'Moment', url: 'http://momentjs.com/' },
  { name: 'Express', url: 'http://expressjs.com/' },
  { name: 'Koa', url: 'http://koajs.com/' },
]

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      libs: libraries,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const searchString = e.target.value.trim().toLowerCase()
    const filteredLibs = libraries.filter(item => item.name.trim().toLowerCase().includes(searchString))
    this.setState({
      libs: filteredLibs,
    })

  }

  render() {
    console.log('state', this.state)
    return (
      <div>
        <input type='text' onChange={this.handleChange} placeholder='Type here' />
        <ul>
          {this.state.libs.map(item =>
            <li key={item.name} >{item.name}
              <a href={item.url} >{item.url}</a>
            </li>)}
        </ul>
      </div>)
  }
}

export default SearchBox
