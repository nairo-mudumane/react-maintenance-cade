import { useFormModal } from "../../hooks";
import { MainButtonProps } from "./types";

export function MainButton(props: MainButtonProps) {
  const { onOpen: openModal } = useFormModal();

  if (props.size) {
    if (props.size === "small") {
      return (
        <button
          onClick={openModal}
          className="text-xs italic font-bold uppercase text-white bg-green1 border border-green1 rounded-[3rem] py-2 px-6 shadow-md shadow-[rgba(255,255,255,0.3)] hover:bg-transparent hover:text-green1"
        >
          {props.text}
        </button>
      );
    }
  }

  return (
    <button
      onClick={openModal}
      className="text-2xl italic font-bold uppercase text-white bg-green1 border border-green1 rounded-[3rem] py-2 px-8 shadow-md shadow-[rgba(255,255,255,0.3)] hover:bg-transparent hover:text-green1"
    >
      {props.text}
    </button>
  );
}
