import React, { Component } from 'react';
import styled, { keyframes, injectGlobal } from 'styled-components';
import { Collapse, Nav, NavLink, NavItem, Container } from 'reactstrap';
import { StyledNavbar, StyledNavbarBrand, StyledNavbarToggler, StyledNavLink } from '../styles';

class Navigation extends Component {
	
	constructor(props) {
		super(props);
		// set state
		this.toggleSmallNavigation = this.toggleSmallNavigation.bind(this);

		this.state = {
			isNavigationOpen: false
		};
	}
	
	toggleSmallNavigation () {
		this.setState ({
			isNavigationOpen: !this.state.isNavigationOpen
		});
	}
	
	render() {
		return (
			<StyledNavbar className={'fixed-top'} expand="lg" light id="mainNav">
				<Container>
					<StyledNavbarBrand href="#page-top" >Braces Easy Way</StyledNavbarBrand>
					<StyledNavbarToggler onClick={this.toggleSmallNavigation} >
						Menu &nbsp;
						<i className="fa fa-bars"></i>
					</StyledNavbarToggler>
					<Collapse isOpen={this.state.isNavigationOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<StyledNavLink className="js-scroll-trigger" href="#download">Download</StyledNavLink>
							</NavItem>
							<NavItem>
								<StyledNavLink className="js-scroll-trigger" href="#features">Features</StyledNavLink>
							</NavItem>
							<NavItem>
								<StyledNavLink className="js-scroll-trigger" href="#contact">Contact</StyledNavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</StyledNavbar>
		);
	}
}

export default Navigation;
