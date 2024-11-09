import { Card } from "react-bootstrap";

const Projects = () => {
  return (
    <Card
      id="projects"
      className="text-white rounded-5"
      style={{ marginTop: 110, padding: 20, background: "#2a2929" }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: 50 }}>Projects</Card.Title>
        <Card.Text className="mt-5">Nothing to show for now :)</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Projects;
