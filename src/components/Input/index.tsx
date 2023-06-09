import { InputHTMLAttributes } from "react";
import ReactInputMask from "react-input-mask";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  mask?: string | (string | RegExp)[];
};

export function Input({ id, label, mask, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor="id" className="font-bold mb-2">
          {label}
        </label>
      )}
      {mask ? (
        <ReactInputMask
          mask={mask}
          {...rest}
          className="border-b border-b-purple-500 px-2 py-1 rounded-sm placeholder:text-zinc-500 text-zinc-900"
        />
      ) : (
        <input
          id={id}
          {...rest}
          className="border-b border-b-purple-500 px-2 py-1 rounded-sm placeholder:text-zinc-500 text-zinc-900"
        />
      )}
    </div>
  );
}
