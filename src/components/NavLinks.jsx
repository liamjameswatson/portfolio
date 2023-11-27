import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLinks = styled.div`
  display: flex;

  gap: 2rem;
`;

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to='/contact'>Contact</Link>
    </StyledNavLinks>
  );
};

export default NavLinks;
