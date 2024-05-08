// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// Extend the PaletteColor interface
PaletteColor.prototype = {
  [key]: string,
};

// Extend the Palette interface
Palette.prototype = {
  tertiary: PaletteColor,
};
