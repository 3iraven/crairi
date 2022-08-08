import React from 'react';
import { Container, Button } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Tdsvideomodal from './Tdsvideomodal';

import './Tdsbanner.css';
class Tdsbanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                0: {
                    nav: false,
                    dots: true,
                },
                767: {
                    nav: true
                },

            },
        }

    }

    render() {
        return (

            <section className="banner">

                <OwlCarousel
                    className="banner-owl owl-theme"
                    loop={true}
                    margin={0}
                    autoplay={true}
                    autoplayTimeout={3000}
                    smartSpeed={500}
                    nav={true}
                    items="1"
                    responsive={this.state.responsive}
                    dots={false} >
                    <div className="item">
                        <div className="banner-one banner-img">
                            <Container>
                                <div className="banner-text text-center">
                                    <h1 >THE BEST  <span> CONGOLESE </span>   & THINK TANK</h1>
                                    <p>Prof Jose K.</p>
                                    <div className="d-flex justify-content-center">
                                        <Button color="primary mr-3">Get Started</Button>
                                        <Tdsvideomodal></Tdsvideomodal>
                                    </div>

                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="item">
                        <div className="banner-two banner-img">
                            <Container>
                                <div className="banner-text text-center">
                                    <h1 >INTERNATIONAL  <span>POLICY RESEARCH</span>   & POLITICAL STRATEGY</h1>
                                    <p>CONGO.</p>
                                    <div className="d-flex justify-content-center">
                                        <Button color="primary mr-3">Get Started</Button>
                                        <Tdsvideomodal></Tdsvideomodal>
                                    </div>
                                </div>
                            </Container>
                        </div>

                    </div>
                </OwlCarousel>
            </section>
        );
    }
}


export default Tdsbanner;
