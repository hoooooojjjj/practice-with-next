import styled from "@emotion/styled";

export const ChooseButton = styled.button`
  color: ${(props) => props.color};
  margin: 10px;
  border: 1px solid white;
  width: 100px;
  border-radius: 5px;
  &:hover {
    background-color: white;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
