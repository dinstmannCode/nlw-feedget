import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <>
      <div className="w-screen h-screen p-5 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl max-w-screen-md">
          Bem vindo ao Widget de Feedback
        </h1>
        <p className="p-8 max-w-screen-sm">
          Ao clicar no botão da camera o Widget ira tirar uma screenshot
          automática
        </p>
      </div>
      <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="p-2"></span>
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </>
  );
}
