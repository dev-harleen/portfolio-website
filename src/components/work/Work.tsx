// https://getchup.ca/

import React from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";
import lumieresrc from "../../assets/projects/lumiere.png";

export const Work = () => {
  return (
    <section>
      <Container>
        <h1 className="text-center">Projects</h1>
        <h2>What I built</h2>
        <Stack direction="horizontal" gap={3}>
          <Card
            as="a"
            href="https://lumiereapp.ca/"
            target="_blank"
            className="shadow-sm"
            style={{ width: "30rem", textDecoration: "none" }}>
            <Card.Img variant="top" src={lumieresrc} />
            <Card.Body>
              <Card.Title>Lumière</Card.Title>
              <Card.Text>
                A web application that helps beauty salon businesses to
                streamline their inventory management process and reduce product
                wastage.
              </Card.Text>
              <Button
                variant="primary"
                href="https://lumiereapp.ca/"
                target="_blank">
                Visit website
              </Button>
            </Card.Body>
          </Card>
          <Card
            as="a"
            href="https://lumiereapp.ca/"
            target="_blank"
            className="shadow-sm"
            style={{ width: "30rem", textDecoration: "none" }}>
            <Card.Img variant="top" src={lumieresrc} />
            <Card.Body>
              <Card.Title>Lumière</Card.Title>
              <Card.Text>
                A web application that helps beauty salon businesses to
                streamline their inventory management process and reduce product
                wastage.
              </Card.Text>
              <Button
                variant="primary"
                href="https://lumiereapp.ca/"
                target="_blank">
                Visit website
              </Button>
            </Card.Body>
          </Card>
          <Card
            as="a"
            href="https://lumiereapp.ca/"
            target="_blank"
            className="shadow-sm"
            style={{ width: "30rem", textDecoration: "none" }}>
            <Card.Img variant="top" src={lumieresrc} />
            <Card.Body>
              <Card.Title>Lumière</Card.Title>
              <Card.Text>
                A web application that helps beauty salon businesses to
                streamline their inventory management process and reduce product
                wastage.
              </Card.Text>
              <Button
                variant="primary"
                href="https://lumiereapp.ca/"
                target="_blank">
                Visit website
              </Button>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </section>
  );
};
