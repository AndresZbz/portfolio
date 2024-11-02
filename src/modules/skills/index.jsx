import { Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import vue from "../../assets/vue.svg";
import react from "../../assets/react.svg";
import bs from "../../assets/bootstrap.svg";
import csharp from "../../assets/csharp.svg";
import godot from "../../assets/godot.svg";
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
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={html} width={64} alt="html" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={js} width={64} alt="js" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={react} width={64} alt="react" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={vue} width={64} alt="vue" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={bs} width={64} alt="bootstrap" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={csharp} width={64} alt="csharp" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skill-icon">
              <Image src={godot} width={64} alt="godot" />
            </motion.div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Skills;
