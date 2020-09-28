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
import {Link} from 'react-scroll'
const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md">
            <NavbarBrand href="/home" ><DiCode size="3em" color="black"/>Anas Bin Sohail</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
            <Link to="homepage" 
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            
            activeClass="active"><button className="btn" id="home-btn" >Home</button></Link>
                        </NavItem>
                        <NavItem>
                <Link to="aboutme"
                
                spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                
                ><button className="btn" id="about-btn">About</button></Link>
                        </NavItem>
                        <NavItem>
                <Link to='skills'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                
                
                ><button className="btn " id="skills-btn">Skills</button></Link>
                        </NavItem>
                        <NavItem>
                  <Link to="experience"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                      
                  
                  
                  
                  ><button className="btn " id="exp-btn">Experience</button></Link>
                        </NavItem>
                  
                  
                    </Nav>
                  
                   
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;