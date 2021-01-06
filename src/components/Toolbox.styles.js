import styled from "styled-components";

export const ToolboxContainer = styled.div`
  text-align: center;
`;

export const ToolboxIconParent = styled.span`
  margin: auto;
  font-size: 20px;
`;

const activeToolBox = `
    background: #ccc;
    ${ToolboxIconParent} {
      font-size: 21px;
      color: #fff;
    }
`;

export const ToolboxElement = styled.div`
  border-bottom: 2px solid #ccc;
  padding: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  cursor: pointer;

  &:hover {
    ${activeToolBox}
  }
  ${props => props.active && activeToolBox}
`;
