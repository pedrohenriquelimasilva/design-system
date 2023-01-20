// ../tokens/dist/index.mjs
var colors = {
  gray100: "#e1e1e6",
  gray200: "#a9a9b2",
  gray400: "#7c7c8a",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292e",
  gray800: "#202024",
  gray900: "#121214",
  green300: "#00b37e",
  green500: "#00875f",
  green700: "#015f43",
  green900: "#00291d",
  white: "#FFF",
  black: "#000"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", { style: { color: colors.gray400 }, children: "Hello, Word!" });
}
export {
  App
};
