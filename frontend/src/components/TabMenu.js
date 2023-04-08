import React from 'react';
import styled from 'styled-components';
import { NavLink, useMatch } from 'react-router-dom';

const StyledContainer = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    gap: 8px;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    `

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
        font-weight: bold;
        text-decoration: underline;
    }
    `

const TabMenu = () => {
  return (
    <StyledContainer>
      <StyledNavLink className={useMatch('') ? 'active' : ''} to="/">
        Students
      </StyledNavLink>
      <StyledNavLink className={useMatch('/courses') ? 'active' : ''} to="/courses">
        Courses
      </StyledNavLink>
      <StyledNavLink className={useMatch('/matriculas') ? 'active' : ''} to="/matriculas">
        Matriculas
      </StyledNavLink>
    </StyledContainer>
  );
};

export default TabMenu;