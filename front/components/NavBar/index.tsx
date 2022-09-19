import styled, { css } from "styled-components";
import Wrapper from "../Wrapper";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>TechQUIZ</h1>
        </div>
        <Nav>
          <ul>
            <NavItem selected>
              <a>Inicio</a>
            </NavItem>
            <NavItem>
              <a>Quizzes</a>
            </NavItem>
            <NavItem>
              <a>Sobre</a>
            </NavItem>
            <NavItem>
              <a>Contato</a>
            </NavItem>
          </ul>
        </Nav>
      </Wrapper>
    </Container>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    list-style: none;
    gap: 42px;
    li {
      margin: 0 1rem;
    }
  }
`;

const NavItem = styled.li<{ selected?: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #770cf2;
    }
  }

  ${({ theme, selected }) =>
    selected &&
    css`
      a {
        box-sizing: content-box;
        color: #770cf2;
      }

      border-bottom: 4px solid ${theme.colors.primary};
    `}
`;

const Container = styled.header`
  border-bottom: 2px solid #770cf2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background: #000;
  color: #fff;
  height: 72px;
  width: 100%;

  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`;
