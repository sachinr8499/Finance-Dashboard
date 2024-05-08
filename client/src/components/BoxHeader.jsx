import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

const BoxHeader = ({ icon, title, subtitle, sideText }) => {
  const { palette } = useTheme();
  return (
    React.createElement(FlexBetween, { color: palette.grey[400], margin: "1.5rem 1rem 0 1rem" },
      React.createElement(FlexBetween, null,
        icon,
        React.createElement(Box, { width: "100%" },
          React.createElement(Typography, { variant: "h4", mb: "-0.1rem" },
            title
          ),
          React.createElement(Typography, { variant: "h6" },
            subtitle
          )
        )
      ),
      React.createElement(Typography, { variant: "h5", fontWeight: "700", color: palette.secondary[500] },
        sideText
      )
    )
  );
};

export default BoxHeader;
