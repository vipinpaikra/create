import React from "react";
import { useState } from "react";
import rgbToHex from "./utils";
import { FaCopy } from "react-icons/fa";
function SingleColor({ rgb, weight, index, hex }) {
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);

    const bcg = rgb.join(",");

    return (
        <article
            className={`color`}
            style={{
                backgroundColor: `rgb(${bcg})`,
                border: "1px solid white",
            }}
        >
            {/* <p className="percent-value">{weight}%</p> */}
            <p
                onClick={() => {
                    navigator.clipboard.writeText(`#${hex}`);
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 1000);
                }}
                id="para1"
                className="color-value"
                style={{
                    color: index <= 10 ? "white" : "black",
                    backgroundColor: index <= 10 ? "black" : "white",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
            >
                <b>#{hex}</b>
            </p>
            {show && (
                <p
                    style={{
                        textAlign: "center",
                        color: index <= 10 ? "black" : "white",
                        fontSize: "20px",
                    }}
                >
                    <b>
                        copied <FaCopy />
                    </b>
                </p>
            )}
        </article>
    );
}

export default SingleColor;
