import * as React from 'react';
import Slider from '@mui/material/Slider';
import { blue, lightBlue } from "@mui/material/colors";

export default function SxProp() {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 300,
        color: 'lightBlue',
      }}
    />
  );
}