import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='container' >
        <Col md={12} >
          <h1>quiz</h1>
           <SearchBox />
        </Col>
      </div>
    )
  }
}

export default App
