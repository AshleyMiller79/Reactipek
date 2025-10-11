import React from "react";

import data from "../data.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {

  const navigate=useNavigate()

  return (
    <Container>
      <Row>
        {data.map((a) => {
          const { id, name, img, text } = a;

          return (
            <Col key={id}
              // xs={12} sm={6} lg={4}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                   {text}
                  </Card.Text>
                  <Button
                  onClick={()=>navigate(`/courses/${name}`)}
                  
                   variant="primary">DETAILS</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
