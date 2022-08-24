import React from "react";

const test = () => "asd";

const jsxWithJsxFragment = <>{test}</>;
const jsxWithReactFragment = <React.Fragment>{test}</React.Fragment>;
