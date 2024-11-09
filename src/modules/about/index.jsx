import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card
      id="about"
      className="text-white rounded-5"
      style={{ marginTop: 290, padding: 20, background: "#2a2929" }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: 50 }}>About</Card.Title>
        <Card.Text className="mt-5" style={{ fontSize: 20 }}>
          Hey! I'm Juan Bouza or AndresZbz depending on my name or username, I'm
          a CS student at Venezuela currently working as a Frontend Web
          developer but with a passion of building videogames, currently working
          on 2.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
