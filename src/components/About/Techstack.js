import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython } from "react-icons/di";
import {
  SiBlender,
  SiSwift,
  SiCss3,
  SiUnity,
  SiMicrosoftexcel,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
    </Row>
  );
}

export default Techstack;
