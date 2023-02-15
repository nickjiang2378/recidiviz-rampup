import React from "react"
import "./App.css"

interface BoxProps {
    color: string;
}

export default function Box(props: BoxProps) {
    return (
        <div style={{ backgroundColor: props.color }} className="box">
            Sample Text
        </div>
    );
}