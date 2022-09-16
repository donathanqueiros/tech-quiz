import styled from "styled-components";

const Footer = () => {
  return (
    <Content>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum a ligula.
        </span>
      </div>
    </Content>
  );
};

const Content = styled.footer`
  display: flex;
  flex-direction: column;
  height: 144px;
  width: 100%;
  padding: 80px 80px;
  justify-content: center;
  gap: 12px;
  color: white;
  background-color: ${(props) => props.theme.colors.primary}20;

  /* div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  } */
`;

export default Footer;
