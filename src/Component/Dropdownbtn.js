import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offerbtn from './Offerbtn';
import {Link} from "react-router-dom";


const Dropdownbtn = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='dropdown'>
        <Container>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <DropdownButton id="dropdown-item-button" title="SHOP BY CATEGORY">
              <Link to={'/fruites'} style={{ textDecoration: 'none' }} ><Dropdown.Item as="button" >Fruites & Vegetables</Dropdown.Item></Link>
              <Link to={'./egg'} style={{ textDecoration: 'none' }}><Dropdown.Item as="button" >Egg , Fish & Meat</Dropdown.Item></Link>
              <Link to={'./beauty'} style={{ textDecoration: 'none' }}><Dropdown.Item as="button" >Beauty Care</Dropdown.Item></Link>
              <Link to={'./breakfast'} style={{ textDecoration: 'none' }}><Dropdown.Item as="button" > BreakFast & Snacks</Dropdown.Item></Link>
            </DropdownButton>
            <Offerbtn />
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default Dropdownbtn;


