import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vh;
  margin: 0;
  background-color: royalblue;
`;


const AppLayout = () => {
  return (
    <StyledAppLayout>
      <NavBar />
      <Outlet />
    </StyledAppLayout>
  );
};

export default AppLayout;
