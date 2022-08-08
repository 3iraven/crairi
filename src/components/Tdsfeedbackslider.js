
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Tdsfeedbackslider.css';

class Tdsaboutslider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        }

    }
    render() {
        return (

            <OwlCarousel
                className="feedback-owl owl-theme"
                loop
                margin={30}
                nav={false}
                items="1"
                dots={true}
                lazyLoad={true}
                responsive={this.state.responsive}
            >


                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img1.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-2">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>

                </div>

                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img2.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-2">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img3.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-2">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>

                </div>
                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img1.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-1">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>

                </div>

                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img2.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-1">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="feedback-box">
                        <div className="client-info">
                            <div className="client-img">
                                <img src={require("./../images/client-img3.jpg")} alt="" className="img-fluid" />
                            </div>
                            <h5 className="mb-1">josh brolin</h5>
                            <p>Web Developer</p>
                        </div>
                        <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. when our power of choice is untrammelled and when nothing prevents.</p>
                    </div>

                </div>

            </OwlCarousel>

        );
    }

}

export default Tdsaboutslider;