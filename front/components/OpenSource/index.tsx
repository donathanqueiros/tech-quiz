import styled from "styled-components";

const OpenSource = () => {
  return (
    <Container>
      <h1 className="title">Open Source</h1>

      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum
        a ligula a auctor. Sed semper felis a augue vehicula:
      </p>

      <div className="git-button">
        <button>
          <img src="" alt="" /> Star
        </button>
        <div>
          <span>1234</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;

  min-height: 313px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: white;

  border-top: 1px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;

  .title {
    font-weight: 700;
    font-size: 36px;
  }

  .desc {
    font-size: 18px;
  }

  .git-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
      width: 82px;
      height: 30px;
      background-color: white;
    }
    div {
      background-color: white;
      color: black;
    }
  }
`;

export default OpenSource;
