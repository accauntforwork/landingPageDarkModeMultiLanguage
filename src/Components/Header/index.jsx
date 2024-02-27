import React from "react";
import styled from "styled-components";
import Navbar from "./../Navbar/index";
import Hero from "./../Hero/index";

const StyledHeader = styled.header`
  padding: 60px 50px 0;
  background: linear-gradient(
    to right,
    rgba(31, 48, 64, 1) 50%,
    rgba(255, 148, 66, 1) 50%
  );
`;

const StyledContainer = styled.div`
  padding: 60px;
  background: ${(props) => props.theme.background};
`;

function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Navbar />
        <Hero />
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
