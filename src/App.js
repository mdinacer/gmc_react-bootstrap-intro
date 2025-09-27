import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="#">My React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mb-4">Welcome to React Bootstrap</h1>

        {/* Cards */}
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
