import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
      </Buttons>
      <DownArrow src="/images/down-arrow.svg" />
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 250px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.button`
  background-color: #3e4145;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.95;
  text-transform: uppercase;
  font-size: 12px;
  border: none;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #e8e8e7;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow: hidden;
`;

const Buttons = styled.div``;
