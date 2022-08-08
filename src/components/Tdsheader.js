import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Container, Nav, NavItem, NavLink } from 'reactstrap';
// import logo from '../logowhite.svg';
// import logob from '../logoblack.svg';
import './Tdsheader.css';

class Tdsheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activeMenu: 'home'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    handleScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const navbar = document.querySelector("nav");

        const sections = document.querySelectorAll(".section");
        var scrollDistance = window.scrollY;
        sections.forEach((section, key) => {
            if (section.getBoundingClientRect().top <= scrollDistance && (section.getBoundingClientRect().top > -150 && section.getBoundingClientRect().top < 50)) {

                this.setState({
                    activeMenu: section.getAttribute('id')
                });
            }
        });


        if (scrollY > 20) {
            if (navbar.classList.contains("is-sticky") == false) {
                navbar.classList.add("is-sticky");
            }
        }
        else {
            if (navbar.classList.contains("is-sticky") == true) {
                navbar.classList.remove("is-sticky");
            }
        }

    }

    handleClickOutside = event => {

        this.setState({
            isOpen: false,
        });

    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
    scrollToTop = (element) => {

        this.setState({
            activeMenu: element
        });

        var elementPosition = document.getElementById(element).offsetTop;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <header>
                <Navbar expand="md" fixed={'top'}>
                    <Container>
                        <NavbarBrand onClick={() => this.scrollToTop('home')} className={(this.state.activeMenu == 'home') ? "active" : ""}>
                            {/* <img src={logo} className="logowhite" alt="logo" />
                            <img src={logob} className="logoblack" alt="logo" /> */}
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} ><span></span></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar className="menu-ul">
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('home')} className={(this.state.activeMenu == 'home') ? "active" : ""}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('about')} className={(this.state.activeMenu == 'about') ? "active" : ""}>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('services')} className={(this.state.activeMenu == 'services') ? "active" : ""}>Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('team')} className={(this.state.activeMenu == 'team') ? "active" : ""}>Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('portfolio')} className={(this.state.activeMenu == 'portfolio') ? "active" : ""}>Portfolio</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('price')} className={(this.state.activeMenu == 'price') ? "active" : ""}>Price</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('blog')} className={(this.state.activeMenu == 'blog') ? "active" : ""}>Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={() => this.scrollToTop('contact')} className={(this.state.activeMenu == 'contact') ? "active" : ""}>Contact</NavLink>
                                </NavItem>

                            </Nav>

                        </Collapse>
                    </Container>
                </Navbar>
            </header>

        );
    }
}


export default Tdsheader;
