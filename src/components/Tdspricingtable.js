import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Tdspricingtable.css';

class Tdspricingtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="pricing-tab">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Monthly
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Yearly
          </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col md="4" lg="4">
                                <div className="pricing-table">
                                    <div className="pricing-header">BASIC</div>
                                    <div className="price"><sup>$</sup>345</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>2 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>6 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>5 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                            <Col md="4" lg="4">
                                <div className="pricing-table active">
                                    <div className="pricing-header">STANDARD</div>
                                    <div className="price"><sup>$</sup>445</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>5 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>8 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>8 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                            <Col md="4" lg="4">
                                <div className="pricing-table">
                                    <div className="pricing-header">PREMIUM</div>
                                    <div className="price"><sup>$</sup>555</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>10 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>12 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>15 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col md="4" lg="4">
                                <div className="pricing-table active">
                                    <div className="pricing-header">BASIC</div>
                                    <div className="price"><sup>$</sup>545</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>10 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>12 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>15 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                            <Col md="4" lg="4">
                                <div className="pricing-table ">
                                    <div className="pricing-header">STANDARD</div>
                                    <div className="price"><sup>$</sup>745</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>10 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>12 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>15 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                            <Col md="4" lg="4">
                                <div className="pricing-table active">
                                    <div className="pricing-header">PREMIUM</div>
                                    <div className="price"><sup>$</sup>999</div>
                                    <ul className="pricing-features">
                                        <li>Any Ware Access</li>
                                        <li>10 GB Hosting</li>
                                        <li>2 Unique Users</li>
                                        <li>12 GB Capacity</li>
                                        <li>Weekly Backups</li>
                                        <li>15 Domain Names</li>
                                        <li>Enhanced Security</li>
                                        <li>Support 24/7 Hour</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary">Purchase Now</button>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}


export default Tdspricingtable;
