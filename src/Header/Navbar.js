import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Cartbtn from "../Component/Cartbtn";
import { BsSearch } from "react-icons/bs";
import "./Header.css"

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container className="navbar">
        <Navbar.Brand href="#">
          <img
            src="https://www.bbassets.com/static/v2629/custPage/build/content/img/bb_logo.png"
            alt="img"
          ></img>
        </Navbar.Brand>

        <Form className="d-flex">
          <input
            type="search"
            placeholder="Search for Products.."
            className="box"
            aria-label="Search"
          />
          <Button variant="outline-success" className="search-btn">
            <BsSearch />
          </Button>
        </Form>

        <Cartbtn />
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
