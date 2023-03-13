var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

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
  black: "#000",
  test: "#FFF"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    radii,
    fonts,
    fontWeights,
    lineHeights,
    fontSizes,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$mb",
  padding: "$4"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  color: "$gray100",
  margin: 0,
  lineHeight: "$base",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  color: "$gray100",
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$shorter",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";

// src/components/Avatar/style.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  width: "$12",
  height: "$12",
  borderRadius: "$full",
  overflow: "hidden",
  display: "inline-block"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, { children: [
    /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ jsx(User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  boxSizing: "border-box",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$small",
  textAlign: "center",
  minWidth: 120,
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  cursor: "pointer",
  svg: {
    height: "$4",
    width: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$green500",
        transition: "background-color 0.2s",
        "&:not(:disabled):hover": {
          background: "$green700"
        },
        "&:disabled": {
          background: "$gray200"
        }
      },
      secondary: {
        color: "$green300",
        border: "1px solid $green500",
        transition: "background-color 0.2s",
        "&:not(:disabled):hover": {
          background: "$green500",
          color: "$white"
        },
        "&:disabled": {
          borderColor: "$gray200",
          color: "$white"
        }
      },
      tertiary: {
        color: "$gray100",
        transition: "color 0.2s",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  padding: "$3 $4",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$green300"
  },
  "&:has(input:disabled)": {
    opacity: 0.6,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  color: "$gray400",
  fontWeight: "regular",
  fontFamily: "$default",
  fontSize: "$sm"
});
var Input = styled("input", {
  border: 0,
  backgroundColor: "transparent",
  color: "$white",
  width: "100%",
  fontFamily: "$default",
  fontWeight: "regular",
  fontSize: "$sm",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ jsx2(Prefix, { children: prefix }),
    /* @__PURE__ */ jsx2(Input, __spreadValues({}, props))
  ] });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$md",
  boxSizing: "border-box",
  padding: "$3 $4",
  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  minHeight: 80,
  resize: "vertical",
  "&:focus": {
    outline: 0,
    borderColor: "$green300"
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid $gray900",
  transition: "border-color 0.2s",
  '&[data-state="checked"]': {
    backgroundColor: "$green300"
  },
  "&:focus": {
    borderColor: "$green300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx3(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ jsx3(Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/style.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  margin: "$1",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, { children: [
    /* @__PURE__ */ jsxs3(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ jsx4(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ jsx4(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var ToastContainer = styled(Toast.Root, {
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  background: "$gray800",
  padding: "$3 $5",
  width: "100%",
  maxWidth: "22.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  borderRadius: "$md",
  border: "1px solid $gray600",
  fontFamily: "Roboto"
});
var ToastTitle = styled(Toast.Title, {
  color: "$white",
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  fontSize: "$xl"
});
var ToastAction = styled(Toast.Action, {
  background: "transparent",
  border: "0",
  cursor: "pointer",
  svg: {
    color: "$gray200",
    cursor: "pointer",
    transition: "color 0.2s",
    "$:hover": {
      color: "$gray400"
    }
  }
});
var ToastDescription = styled(Toast.Description, {
  fontSize: "$sm",
  lineHeight: "$base",
  color: "$gray200"
});

// src/components/Toast/index.tsx
import ptBr from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { X } from "phosphor-react";
import * as ToastUI from "@radix-ui/react-toast";
import { useEffect, useRef, useState } from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Toast2({ isSheduled = true, dateSheduled }) {
  const [isOpenToast, setIsOpenToast] = useState(false);
  const timerRef = useRef(0);
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  const date = format(
    new Date(dateSheduled),
    "EEEE'-feira' ',' dd 'de' MMMM '\xE1s' HH'h'",
    {
      locale: ptBr
    }
  );
  function handleActiveToast() {
    setIsOpenToast(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsOpenToast(true);
    }, 100);
  }
  return /* @__PURE__ */ jsxs4(ToastUI.Provider, { swipeDirection: "right", children: [
    /* @__PURE__ */ jsx5(Button, { onClick: handleActiveToast, children: "Criar agenda" }),
    /* @__PURE__ */ jsxs4(ToastContainer, { open: isOpenToast, onOpenChange: setIsOpenToast, children: [
      /* @__PURE__ */ jsxs4(ToastTitle, { children: [
        isSheduled ? "Agendamento realizado" : "Agendamento n\xE3o realizado",
        /* @__PURE__ */ jsx5(ToastAction, { altText: "Close", asChild: true, children: /* @__PURE__ */ jsx5(X, { weight: "bold", size: 14 }) })
      ] }),
      /* @__PURE__ */ jsx5(ToastDescription, { children: date })
    ] }),
    /* @__PURE__ */ jsx5(ToastUI.Viewport, {})
  ] });
}

// src/components/Tooltip/index.tsx
import * as TooltipUI from "@radix-ui/react-tooltip";
import { format as format2 } from "date-fns";

// src/components/Tooltip/style.ts
import * as Tooltip from "@radix-ui/react-tooltip";
var TooltipRoot = styled(Tooltip.Root, {});
var TooltipContent = styled(Tooltip.Content, {
  background: "$gray900",
  color: "$gray100",
  padding: "$3 $4",
  fontSize: "$md",
  lineHeight: "$short",
  borderRadius: "5px"
});
var TooltipTrigger = styled(Tooltip.Trigger, {
  background: "transparent",
  border: 0,
  cursor: "pointer"
});

// src/components/Tooltip/index.tsx
import ptBr2 from "date-fns/locale/pt-BR";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Tooltip2({ date, isAvailable = false, children }) {
  const dateAvailable = format2(new Date(date), "dd 'de' MMMM ", {
    locale: ptBr2
  });
  return /* @__PURE__ */ jsx6(TooltipUI.Provider, { children: /* @__PURE__ */ jsxs5(TooltipUI.Root, { children: [
    /* @__PURE__ */ jsx6(TooltipTrigger, { children }),
    /* @__PURE__ */ jsx6(TooltipUI.Portal, { children: /* @__PURE__ */ jsxs5(TooltipContent, { "data-side": "bottom", align: "center", children: [
      `${dateAvailable} - ${isAvailable ? "Dispon\xEDvel" : "Indispon\xEDvel"}`,
      /* @__PURE__ */ jsx6(TooltipUI.Arrow, { width: 16, height: 8 })
    ] }) })
  ] }) });
}
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast2 as Toast,
  Tooltip2 as Tooltip
};
