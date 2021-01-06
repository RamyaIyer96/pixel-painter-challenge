import styled from "styled-components";

export const ScreenContainer = styled.div`
  background: #eee;
`;

export const ScreenHeader = styled.div`
  height: 60px;
  border-bottom: 2px solid #ccc;
  display: flex;

  div {
    box-shadow: none !important;
  }

  .flexbox-fix {
    display: none !important;
  }
`;

export const ColorPicker = styled.div`
  margin: auto 0 auto 10px;
`;

export const ScreenContent = styled.div`
  display: flex;
  min-height: 84vh;
`;

export const ScreenToolbarContainer = styled.div`
  border-right: 2px solid #ccc;
  max-width: 80px;
`;

export const ScreenCanvasContainer = styled.div`
`;

export const DimentionInputs = styled.div`
  margin: auto 0 auto 10px;
`;

export const NumberInput = styled.input.attrs({ type: "number" })`
  height: 25px;
  width: 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  height: 32px;
  margin: auto 0 auto 10px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border-color: #444 !important;
    background: #444;
  }
`;
