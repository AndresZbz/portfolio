import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import heart from "../../assets/heart.png";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="transparent" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <div className="d-flex gap-3">
              <Image src={heart} width={16} />
              <Image src={heart} width={16} />
              <Image src={heart} width={16} />
              <Image src={heart} width={16} />
              <Image src={heart} width={16} />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
