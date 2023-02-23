import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offerbtn from './Offerbtn'




const Dropdownbtn=() =>{
 
  return (
    <>
      <Navbar bg="light" expand="lg" className='dropdown'>
        <Container>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <DropdownButton id="dropdown-item-button" title="SHOP BY CATEGORY">
              <Dropdown.Item as="button" >Fruites & Vegetables</Dropdown.Item>
              <Dropdown.Item as="button" >Egg , Fish & Meat</Dropdown.Item>
              <Dropdown.Item as="button" >Beauty Care</Dropdown.Item>
              <Dropdown.Item as="button" > BreakFast & Snacks</Dropdown.Item>
            </DropdownButton>
            <Offerbtn />
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default Dropdownbtn