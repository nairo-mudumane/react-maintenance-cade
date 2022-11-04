import { MainButtonProps } from "./types";

export function MainButton(props: MainButtonProps) {
  return (
    <button className="text-sm text-white font-bold uppercase bg-green1 border-2 border-green1 shadow-md shadow-[rgba(255,255,255,0.3)] rounded-2xl py-1 px-4 hover:bg-transparent hover:border-green1 hover:text-green1 md:text-lg md:py-2 md:px-5">
      {props.text}
    </button>
  );
}
