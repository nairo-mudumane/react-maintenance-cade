import { StyledButton as Button } from "./styles";
import { MainButtonProps } from "./types";

export function MainButton(props: MainButtonProps) {
  return (
    <Button className="text-sm font-semibold uppercase shadow-lg rounded-2xl py-1 px-4 hover:shadow-xl md:text-lg md:py-2 md:px-5">
      {props.text}
    </Button>
  );
}
