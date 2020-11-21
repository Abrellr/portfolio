import React from "react"
import './styles/headerStyle.css'
import { Container, Row, Col } from "react-bootstrap"
import Profil from './assets/Profil.png'

const Header = () => {
  return(
    <Container fluid className="header">
      <Row id="wrapper">
          <Col lg={8}>
            <Row id="textRow">
              <Col lg={6}>
              <h3 id="hello">Hey there,</h3>
              </Col>
              <Col lg={6}>
              <h3 id="hello">welcome to my page!</h3>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <img id="foto" className="foto" src={Profil} alt="rosmalina"></img>
          </Col>
      </Row>
    </Container>
  )
}

export default Header;