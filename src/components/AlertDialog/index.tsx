import { ReactNode } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { X } from "phosphor-react";

type Props = {
  title: string;
  children?: ReactNode;
  description?: string;
  onConfirm: () => void;
};

export function AlertDialog({
  title,
  description,
  children,
  onConfirm,
}: Props) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay
        className="
        bg-white/40 fixed top-0 left-0 w-full min-h-screen backdrop-blur-sm
          flex items-center justify-center
      "
      >
        <AlertDialogPrimitive.Content className="bg-zinc-400 w-[560px] max-w-full pb-4">
          <header className="flex bg-zinc-500 py-2 px-4 justify-between">
            <AlertDialogPrimitive.Title>{title}</AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Cancel>
              <X className="text-red-500 hover:text-red-400 transition-colors" />
            </AlertDialogPrimitive.Cancel>
          </header>

          <div className="px-4 py-4">
            <AlertDialogPrimitive.Description>
              {description}
            </AlertDialogPrimitive.Description>

            {children}
          </div>

          <footer className="flex justify-between items-center px-4 py-2 gap-2">
            <AlertDialogPrimitive.Cancel
              className="flex flex-1 bg-red-500 py-1 rounded-sm items-center justify-center border border-red-400
                hover:bg-red-400 transition-colors
              "
            >
              Cancelar
            </AlertDialogPrimitive.Cancel>

            <AlertDialogPrimitive.Action
              className="
                  flex flex-1 items-center justify-center border border-green-400 py-1 rounded-sm
                  hover:bg-green-400 transition-colors
                "
              onClick={onConfirm}
            >
              Confirmar
            </AlertDialogPrimitive.Action>
          </footer>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Overlay>
    </AlertDialogPrimitive.Portal>
  );
}
