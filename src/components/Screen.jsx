import React, { useState } from "react";
import { CompactPicker } from "react-color";

import Toolbox from "./Toolbox";
import Canvas from "./Canvas";
import defaultConfig from "../helpers/common";

import {
  ScreenContainer,
  ScreenToolbarContainer,
  ScreenCanvasContainer,
  ScreenHeader,
  ScreenContent,
  DimentionInputs,
  NumberInput,
  Button,
  ColorPicker,
} from "./Screen.styles";

const Screen = () => {
  const [config, setConfig] = useState({
    tool: "pencil",
    canvasHeight: defaultConfig.canvasHeight,
    canvasWidth: defaultConfig.canvasWidth,
    color: "#333",
  });

  const updateDimentions = () => {
    const canvasHeight = document.getElementById("d-height")?.value;
    const canvasWidth = document.getElementById("d-width")?.value;
    setConfig((prevConfig) => ({
      ...prevConfig,
      canvasHeight: Number(canvasHeight),
      canvasWidth: Number(canvasWidth),
    }));
  };

  const inputValueChanged = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    if (e.target.value > defaultConfig.canvasMaxLimit) {
      e.target.value = defaultConfig.canvasMaxLimit;
    }
  };

  return (
    <ScreenContainer>
      <ScreenHeader>
        <ColorPicker>
          <CompactPicker
            color={config.color}
            colors={defaultConfig.colors}
            onChangeComplete={(e) => {
              setConfig((prevConfig) => ({ ...prevConfig, color: e.hex }));
            }}
          />
        </ColorPicker>
        <DimentionInputs>
          <span>Height:</span>
          <NumberInput
            id="d-height"
            onChange={inputValueChanged}
            defaultValue={config.canvasHeight}
          />
        </DimentionInputs>
        <DimentionInputs>
          <span>Width:</span>
          <NumberInput
            onChange={inputValueChanged}
            id="d-width"
            defaultValue={config.canvasWidth}
          />
        </DimentionInputs>
        <Button onClick={updateDimentions}>Update</Button>
      </ScreenHeader>
      <ScreenContent>
        <ScreenToolbarContainer>
          <Toolbox {...config} setConfig={setConfig} />
        </ScreenToolbarContainer>
        <ScreenCanvasContainer>
          <Canvas {...config} />
        </ScreenCanvasContainer>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default Screen;
