/**
 * Entry application component used to compose providers and render Routes.
 * */
import React from 'react';
import {
  Button, Container, Row, Col, Media, Card, CardImg, CardText, Form, FormGroup, Input,
  CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';
// Web Icon fonts
import Icofont from 'react-icofont';
// Web theme color root css
import './components/colors.css';
import Tdsheader from './components/Tdsheader';
import Tdsbanner from './components/Tdsbanner';
import Tdsinputgroup from './components/Tdsinputgroup';
import Tdsaboutslider from './components/Tdsaboutslider';
import Tdsfeedbackslider from './components/Tdsfeedbackslider';
import Tdslightbox from './components/Tdslightbox';
import Tdspricingtable from './components/Tdspricingtable';
import Tdsfooter from './components/Tdsfooter';
import './App.css';
import './responsive.css';
class App extends React.Component{

    render() {
        return (
        <div className="App" >
            {/* Navbar  */}
            <Tdsheader   />
            
            {/* Hero Section Start */}
            <div id="home" className="section">
            <Tdsbanner />
            </div>
            {/* Subscribe Section Start*/}
            <div className=" subscribe-box grapping">
            <Container>
                <Row className="align-items-center">
                <Col xs="12" md="12" lg="8" className="text-left"><h4 className="text-white"> Join the CRARI! Sign up for the latest updates and news.</h4></Col>
                <Col xs="12" md="12" lg="4">
                    <Tdsinputgroup />
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Welcome Section Start */}
            <div className=" welcome-box grapping">
            <Container>
                <div className="title-box">
                <h2>Welcome to <b>CRARI</b></h2>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <Row>
                <Col xs="12" sm="12" md="4">
                    <div className="white-bg wel-box coman-box">
                    <Icofont icon="icofont-drag2" />
                    <h4>Creative Design</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <div className="white-bg wel-box coman-box">
                    <Icofont icon="icofont-code" />
                    <h4>Friendly Codes</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <div className="white-bg wel-box coman-box">
                    <Icofont icon="icofont-live-support" />
                    <h4>Fast Support</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* About us Section Start */}
            <div className="section about-box grapping" id="about">
            <Container>
                <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                    <div className="about-img">
    
                    <img src={require("./images/aboutus.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Tdsaboutslider />
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Our Services Section Start */}
            <div className="section ourservice grapping" id="services">
            <Container>
                <div className="title-box">
                <h2>Our  <b>Services</b></h2>
                <p>There are many variations of passages of available.</p>
                </div>
                <Row>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-crown" />
                    <h4>Branding</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-pen-alt-3" />
                    <h4>UX/UI Design</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-camera-alt" />
                    <h4>Photography</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-chart-growth" />
                    <h4>Marketing</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-laptop-alt" />
                    <h4>Web Design</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="icofont-tick-boxed" />
                    <h4>Development</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="15" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="paper" />
                    <h4>Content Writer</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="white-bg coman-box ourservice-box">
                    <Icofont icon="search-job" />
                    <h4>SEO & SMM</h4>
                    <p>There are many variations of passages of available.</p>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Team Section Start */}
            <div className="section expert-team grapping" id="team">
            <Container>
                <div className="title-box">
                <h2>Expert <b>Team</b></h2>
                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <Row>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img1.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Lucy Smith</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
    
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img2.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Alex Maxwel</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img3.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white">Steven Doe</h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                <Col xs="12" sm="6" md="6" lg="3">
                    <div className="text-center coman-box team-box">
                    <div className="team-img">
                        <img src={require("./images/team-img4.jpg")} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <h4 className="text-white"> Maxwel Doe </h4>
                    <p className="text-white">When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <ListGroup className="social-icon-team">
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                        <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
    
                    </ListGroup>
                    </div>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Portfolio Section Start*/}
            <div className="section ourportfolio grapping" id="portfolio">
            <Container>
                <div className="title-box">
                <h2>Our   <b>Portfolio</b></h2>
                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <Tdslightbox></Tdslightbox>
            </Container>
            </div>
            {/* Marketing Section Start*/}
            <div className="marketing-section grapping" >
            <Container>
    
                <Row className="align-items-center">
                <Col xs="12" sm="12" md="12" lg="6">
                    <div className="marketing-img">
                    <img src={require("./images/digitalmarketing.jpg")} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6">
                    <Media className="markrt-box">
                    <Media left href="#">
                        <Icofont icon="icofont-web" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Fully Responsive
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                    <Media left href="#">
                        <Icofont icon="icofont-chart-pie" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Digital Marketing
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
                    <Media className="markrt-box">
                    <Media left href="#" >
                        <Icofont icon="icofont-brand-designfloat" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Clean & Unique Design
                        </Media>
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore aliquam quaerat voluptatem.
                    </Media>
                    </Media>
    
                </Col>
                </Row>
            </Container>
            </div>
            {/* Expert Feadback Section Start */}
            <div className="expertfeesback grapping" >
            <Container>
                <div className="title-box">
                <h2>Expert <b>Feadback</b></h2>
                <p>Extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain</p>
                </div>
                <Tdsfeedbackslider></Tdsfeedbackslider>
            </Container>
            </div>
            {/* Our  Pricing Section Start*/}
            <div className="section ourlatest-pricing grapping" id="price">
            <Container>
                <div className="title-box">
                <h2>Our Latest  <b>Pricing</b></h2>
                <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <Tdspricingtable></Tdspricingtable>
            </Container>
            </div>
            {/*Our Latest News  Section Start*/}
            <div className="section latestnews grapping" id="blog">
            <Container>
                <div className="title-box">
                <h2>Our Latest  <b>News</b></h2>
                <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <Row>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new1.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new2.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                <Col xs="12" sm="12" md="4">
                    <Card>
                    <CardImg top width="100%" src={require("./images/blog-new3.jpg")} alt="Card image cap" />
                    <Card body>
                        <CardTitle>Dignissimos ducimus qui</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Read More</Button>
                    </Card>
                    </Card>
                </Col>
                </Row>
            </Container>
            </div>
            {/* Work With Us  Section Start*/}
            <div className="workwithus grapping">
            <Container>
                <div className="title-box mb-0">
                <h2 className="text-white"><b>Want to work with us?</b></h2>
                <p className="text-white mb-4">Lets talk about project</p>
                <Button>Get Started</Button>
                </div>
    
            </Container>
            </div>
            {/* Contact Us Section Start  */}
            <div className="section contactus grapping" id="contact">
            <Container>
                <div className="title-box">
                <h2>Contact   <b>Us</b></h2>
                <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <Row>
                <Col xs="12" md="12" lg="4">
                    <Media className="address-box">
                    <Media left href="#" >
                        <Icofont icon="icofont-location-pin" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Address
                        </Media>
                       <p> Exercisplan 4, 111 49
    
    Stockholm, Sweden</p>
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <Media className="address-box">
                    <Media left href="#" >
                        <Icofont icon="icofont-mail" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Email
                        </Media>
                        <a href="mailto:info@CRARI.com"> Info@CRARI.com</a> <br />
                        <a href="mailto:support@CRARI.com">support@CRARI.com</a>
    
    
    
                    </Media>
                    </Media>
                </Col>
                <Col xs="12" md="6" lg="4">
                    <Media className="address-box">
                    <Media left href="#" >
                        <Icofont icon="icofont-phone" />
                    </Media>
                    <Media body>
                        <Media heading>
                        Phone
    
                        </Media>
                        <a href="tel:+44 8888 888"> +44 8888 888</a> <br />
                        <a href="tel:+44 5555 458">+44 5555 458</a>
                    </Media>
                    </Media>
                </Col>
                </Row>
                <Row className="mt-3">
                <Col xs="12" md="12" lg="4">
                    <h4>Get in Touch</h4>
                    <hr />
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. account of the system, and expound the actual teachings of the great explorer praising  I will give you a complete </p>
                    <ListGroup className="social-icon">
                    <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-facebook" /></ListGroupItem>
                    <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-twitter" /></ListGroupItem>
                    <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-instagram" /></ListGroupItem>
                    <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-linkedin" /></ListGroupItem>
                    <ListGroupItem tag="a" href="#">  <Icofont icon="icofont-youtube-play" /></ListGroupItem>
                    </ListGroup>
                </Col>
    
                <Col xs="12" md="12" lg="8">
                    <Form className="mt-4">
                    <Row>
                        <Col md={6}>
                        <FormGroup>
    
                            <Input type="text" name="name" id="examplename" placeholder="Name" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
    
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
    
                        <Input type="textarea" name="address" id="exampleAddress" placeholder="Your message" />
                    </FormGroup>
    
    
    
                    <Button color="primary">Send Message</Button>
                    </Form>
                </Col>
                </Row>
    
            </Container>
            </div>
            {/* Footer  Section Start */}
            <div className=""> 
                <Tdsfooter></Tdsfooter>
            </div>
        </div>
        );
    }
  }
  
  export default App;
  