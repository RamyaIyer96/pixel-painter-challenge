import React from "react";
import { faPencilAlt, faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  ToolboxContainer,
  ToolboxElement,
  ToolboxIconParent,
} from "./Toolbox.styles";

const Toolbox = ({ tool, color, setConfig }) => {
  return (
    <ToolboxContainer>
      <ToolboxElement
        active={tool === "pencil"}
        onClick={() => {
          setConfig((prevConfig) => ({ ...prevConfig, tool: "pencil" }));
        }}
        title="Pencil"
      >
        <ToolboxIconParent>
          <Icon icon={faPencilAlt} size="1x" />
        </ToolboxIconParent>
      </ToolboxElement>
      <ToolboxElement
        active={tool === "floodFill"}
        onClick={() => {
          setConfig((prevConfig) => ({ ...prevConfig, tool: "floodFill" }));
        }}
        title="Flood Fill"
      >
        <ToolboxIconParent>
          <Icon icon={faFillDrip} size="1x" />
        </ToolboxIconParent>
      </ToolboxElement>
    </ToolboxContainer>
  );
};

export default Toolbox;
