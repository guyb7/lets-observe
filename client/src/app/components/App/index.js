import React, { Component } from 'react'
import { Button, Col, Grid, Row } from '../Components'

class App extends Component {
  render() {
    return <div>
      <h1>App</h1>
      <Button>Click</Button>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
      </Grid>
    </div>
  }
}

export default App
