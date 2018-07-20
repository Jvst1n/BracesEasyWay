// Main Page
export const StyledNavbar = styled(Navbar)`
	border-color: rgba(34, 34, 34, 0.05);
	background-color: white;
	-webkit-transition: all .35s;
	-moz-transition: all .35s;
	transition: all .35s;
	font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
	font-weight: 200;
	letter-spacing: 1px;
	@media (min-width: 992px) { 
		border-color: transparent;
		background-color: transparent;
	}
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
	color: #fa8072;
	font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
	font-weight: 200;
	letter-spacing: 1px;
	
	@media (min-width: 992px) { 
		color: fade(white, 70%);
	}
	
	&:hover, &:focus {
		color: #fcbd20;
		@media (min-width: 992px) { 
			color: white;
		}
	}
`;

export const StyledNavbarToggler = styled(NavbarToggler)`
	font-size: 12px;
	padding: 8px 10px;
	color: #222222;
`;

export const StyledNavLink = styled(NavLink)`
	font-size: 11px;
	font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
	letter-spacing: 2px;
	text-transform: uppercase;

	@media (min-width: 992px) { 
		color: rgba(255, 255, 255, 0.7);
	}
	
	&:hover {
		background-color: transparent;
		color: #fdcc52;
	}
	
	&.active {
		color: #fdcc52 !important;
		background-color: transparent;
	}
	
	&:focus {
		color: #222222;
	}
	
	&:focus:hover {
		color: #fdcc52;
	}
`;
