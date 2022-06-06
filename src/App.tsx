import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';

import {actionCompleted, containsEmoji} from "pubnub-demo-integration-react/build"

function App() {

  const clickHandlerAction = (arg1: string) => {
    actionCompleted({action:arg1, blockDuplicateCalls:false, debug:true});
  };

  const clickHandlerEmoji = (arg1: string) => {
    containsEmoji({testString:arg1, debug:true});
  };


  return (

    <div className="App">
      <Container fluid="md p-2">
        <Col>
          <Row as="h3">
            Guided Demo Integration Test
          </Row>
          <Row>
            Send specified test action to the PubNub guided demo system
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerAction('Test Action 1')}>Complete 'Test Action 1'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerAction('Test Action 2')}>Complete 'Test Action 2'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerAction('Test Action 3')}>Complete 'Test Action 3'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerAction('Test Action 4')}>Complete 'Test Action 4'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerAction('Test Action 5')}>Complete 'Test Action 5'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerEmoji('Test Emoji :)')}>Test Emoji :)</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => clickHandlerEmoji('Test Emoji 🙂')}>Test Emoji 🙂</Button>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
