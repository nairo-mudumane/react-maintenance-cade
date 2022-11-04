import styled from "styled-components";
import { TextField } from "@mui/material";
import { styled as MuiStyled } from "@mui/styles";
import { THEME } from "../../global";

export const StyledModal = styled.div`
  color: #fff;
  background-color: #fff;
  /* background-color: rgba(1, 228, 208, 0.9); */
`;

export const CssTextField = MuiStyled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {},

  // input label when focused
  "& label.Mui-focused": {
    color: THEME.colors.green1,
  },

  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: THEME.colors.green1,
    },
  },
});
