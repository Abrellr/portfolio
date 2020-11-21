import React from 'react'
import '../components/styles/aboutStyle.css'
import { Container, Row, Col } from "react-bootstrap"

export default function About() {
    return (
        <Container id="contain" fluid>
            <Row>
            <Col id="about">
            <h3 className="aboutTitle1">About me</h3>
            <h3 className="and"> & </h3>
            <span><h4 className="aboutTitle2">Full-Stack Web Development</h4></span>
            </Col>
            </Row>
        </Container>
    )
}
