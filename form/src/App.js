import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./components/Menu";
import Leftside from "./components/LeftSide";
import RightSide from "./components/RightSide";
function App() {
  return (
    <Row className="App">
      <Menu />
      <Row className="landing">
        <Col>
          <Leftside />
        </Col>
        <Col>
          <RightSide />
        </Col>
      </Row>
    </Row>
  );
}

export default App;
