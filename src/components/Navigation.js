import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { DiCode } from "react-icons/di";
const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md">
            <NavbarBrand href="/" ><DiCode size="3em" color="black"/>Anas Bin Sohail</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
            <NavLink href="/"><button className="btn btn-primary home" >Home</button></NavLink>
                        </NavItem>
                        <NavItem>
                <NavLink href="/about"><button className="btn btn-primary">About</button></NavLink>
                        </NavItem>
                        <NavItem>
                <NavLink href="/services"><button className="btn btn-primary">Skills</button></NavLink>
                        </NavItem>
                        <NavItem>
                  <NavLink href="/contact"><button className="btn btn-primary">Contact</button></NavLink>
                        </NavItem>
                  
                  
                    </Nav>
                  
                   
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;