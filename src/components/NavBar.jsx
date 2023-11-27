import styled from "styled-components";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 3rem 0 1rem;
`;

const NavBar = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>LJW</h1>{" "}
      </Link>
      <NavLinks />
    </StyledHeader>
  );
};

export default NavBar;
