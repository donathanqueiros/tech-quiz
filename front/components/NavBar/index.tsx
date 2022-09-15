import styled from "styled-components";
import Wrapper from "../Wrapper";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Lorem</h1>
        </div>
        <Nav>
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Quizzes</a>
            </li>
            <li>
              <a>Sobre</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
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
  padding: 0 2rem;
  color: #fff;
  height: 4rem;
  width: 100%;

  ${styled(Wrapper)} {
    display: flex;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      margin: 0 1rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: #282c34;
  color: #fff;
  height: 72px;
`;
