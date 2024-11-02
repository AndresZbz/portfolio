import { Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Card
      id="skills"
      className="bg-transparent text-white"
      style={{ marginTop: 110, padding: 20 }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: 50 }} className="text-end">
          Skills
        </Card.Title>
        <Card.Text className="mt-5" style={{ fontSize: 20 }}>
          Here's a simple list with the tech stack I work with, including
          Web-dev and Game-dev
          <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center mt-5">
            {[
              { src: "./src/assets/html.svg", alt: "the core html" },
              { src: "./src/assets/js.svg", alt: "javascript" },
              { src: "./src/assets/vue.svg", alt: "vue the beloved" },
              { src: "./src/assets/react.svg", alt: "react the one" },
              { src: "./src/assets/bootstrap.svg", alt: "the good bootstrap" },
              { src: "./src/assets/csharp.svg", alt: "C# my beloved" },
              { src: "./src/assets/godot.svg", alt: "Godot" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="skill-icon"
              >
                <Image src={item.src} width={64} alt={item.alt} />
              </motion.div>
            ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Skills;
