import { Card } from "react-bootstrap";

const Projects = () => {
  return (
    <Card
      id="projects"
      className="bg-transparent text-white"
      style={{ marginTop: 110, padding: 20 }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: 50 }}>Projects</Card.Title>
        <Card.Text className="mt-5">Nothing to show for now :)</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Projects;
