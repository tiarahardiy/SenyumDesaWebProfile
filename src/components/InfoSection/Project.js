import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {
    BannerContainer, TextBanner
   } from './SectionElements';

// import Sonnet from '../../components/Sonnet';

const Project = () => {
  return (
    <div>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" href="#">
                Tab 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" href="#">
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <TextBanner>Bantu kami menebarkan senyuman ke seluruh indonesia.</TextBanner>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <TextBanner>Bantu kami menebarkan senyuman ke seluruh indonesia.</TextBanner>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Project