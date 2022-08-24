import React from "react";

const test = () => "asd";

// No Errors
const jsxWithJsxFragment = <>{test}</>;

// Type '() => string' is not assignable to type 'ReactNode'.
const jsxWithReactFragment = <React.Fragment>{test}</React.Fragment>;
