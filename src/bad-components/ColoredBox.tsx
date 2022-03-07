import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface color {
    color: () => void;
}

function ChangeColor({ color }: color): JSX.Element {
    return <Button onClick={color}>Next Color</Button>;
}

function ColorPreview({ colorindex }: { colorindex: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorindex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const newcolorindex = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor color={newcolorindex}></ChangeColor>
                <ColorPreview colorindex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
