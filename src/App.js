//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';
import GuidedDemoIntegration from "pubnub-demo-integration-react";

function App() {

  const actionCompleted = (arg1) => {
    GuidedDemoIntegration.actionCompleted(arg1);
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
            <Button variant="primary" onClick={(event) => actionCompleted('Send a message')}>Complete 'Send a message'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => actionCompleted('Test Action 2')}>Complete 'Test Action 2'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => actionCompleted('Test Action 3')}>Complete 'Test Action 3'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => actionCompleted('Test Action 4')}>Complete 'Test Action 4'</Button>
          </Row>
          <Row className="m-1">
            <Button variant="primary" onClick={(event) => actionCompleted('Test Action 5')}>Complete 'Test Action 5'</Button>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;