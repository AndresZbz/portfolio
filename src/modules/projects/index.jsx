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
        <Card.Text className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem natus quibusdam at hic quo accusamus deleniti. Saepe
          sit, unde adipisci, sed distinctio minus cumque hic quidem quam,
          possimus explicabo nemo?
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Projects;
