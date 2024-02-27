import React, { useState } from "react";

import styled from "styled-components";
import { useTheme } from "../../theme/ThemeProvider.jsx";

import { useTranslation, Trans } from "react-i18next";
import LanguageSelector from "../../../languageSelector.jsx";
import "../../../i18n.js";

const StyledNavbar = styled.nav`
  display: flex;

  justify-content: flex-end;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 45px;
  margin-bottom: 80px;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.linkColor};

  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }
`;
const StyledButton = styled.button`
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.linkColor};

  &:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }
`;

function Navbar() {
  const { t } = useTranslation();
  const { toggleDarkMode } = useTheme();
  return (
    <StyledNavbar>
      <StyledLinks>
        <LanguageSelector />
        <StyledLink href="/About">{t("AboutMe")}</StyledLink>
        <StyledLink href="/Contact">{t("Contact")}</StyledLink>
        <StyledLink href="Skills">{t("Skills")}</StyledLink>
        <StyledLink href="/Projects">{t("Projects")}</StyledLink>
        <StyledButton id="switch-theme" onClick={toggleDarkMode}>
          Switch Theme
        </StyledButton>
      </StyledLinks>
    </StyledNavbar>
  );
}

export default Navbar;
