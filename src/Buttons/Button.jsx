import React from "react";
import "./Button.css";

const Button = () => {
    return (
        <div className="button-wrapper">
            <button className="button">
                <div className="outline" />
                <div className="state state--default">
                    <div className="icon">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#shadow)">
                                <path
                                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63Z"
                                    fill="currentColor"
                                />
                            </g>
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow
                                        dx="0"
                                        dy="1"
                                        stdDeviation="0.6"
                                        floodOpacity="0.5"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <p className="text">
                        {["S", "e", "n", "d", "M", "e", "s", "s", "a", "g", "e"].map(
                            (char, i) => (
                                <span key={i} style={{ "--i": i }}>
                                    {char}
                                </span>
                            )
                        )}
                    </p>
                </div>
                <div className="state state--sent">
                    <div className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            strokeWidth="0.5px"
                            stroke="black"
                        >
                            <g filter="url(#shadow)">
                                <path
                                    fill="currentColor"
                                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z"
                                />
                            </g>
                        </svg>
                    </div>
                    <p className="text">
                        {["S", "e", "n", "t"].map((char, i) => (
                            <span key={i} style={{ "--i": i + 5 }}>
                                {char}
                            </span>
                        ))}
                    </p>
                </div>
            </button>
        </div>
    );
};

export default Button;
