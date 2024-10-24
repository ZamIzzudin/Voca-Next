/** @format */

import { Box, Flex, Select } from "@radix-ui/themes";
import { ReactElement, useState } from "react";

interface InputRequiredState {
  value: string | number;
  handler: (value: any) => void;
}

interface InputOpsionalState {
  type: string;
  placeholder: string;
  icon: null | ReactElement;
  capsule: boolean;
  size: string;
  action: null | {
    label: string;
    handler: () => void;
  };
}

interface InputState extends InputRequiredState, InputOpsionalState {}

const inputDefaultState: InputOpsionalState = {
  type: "text",
  placeholder: "",
  icon: null,
  capsule: false,
  size: "sm",
  action: null,
};

InputField.defaultProps = inputDefaultState;

export function InputField({
  type,
  placeholder,
  icon,
  value,
  handler,
  capsule,
  size,
  action,
}: InputState) {
  return (
    <Box
      className={`flex items-center justify-start gap-4 min-w-[100%] bg-form rounded-${
        capsule ? "full" : "xl"
      } ${
        size === "sm" ? "text-md  px-3 py-2" : "text-2xl  px-4 py-4"
      } relative`}
    >
      {icon && icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e.target.value)}
        className="bg-transparent outline-none text-sm w-[100%]"
      />
      {action && (
        <button
          className="text-sm font-medium flex bg-white text-bg absolute right-0 top-0 bottom-0 justify-center items-center px-4 rounded-r-xl"
          onClick={() => action.handler()}
        >
          {action.label}
        </button>
      )}
    </Box>
  );
}

interface DropDownState {
  id: string;
  label: string;
  prop: null | ReactElement;
}

export function DropDown({ data }: { data: DropDownState[] }) {
  const [value, setValue] = useState("0");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="text-white" variant="ghost">
        <Flex as="span" align="center" gap="2">
          {data[parseInt(value)]?.prop && data[parseInt(value)].prop}
          {data[parseInt(value)]?.label}
        </Flex>
      </Select.Trigger>
      <Select.Content position="popper" className="text-white bg-item">
        {data.map((item: any, index: number) => (
          <Select.Item value={index.toString()}>
            {item.prop ? (
              <Flex gap="2" align="center" justify="center">
                {item.prop}
                {item.label}
              </Flex>
            ) : (
              item.label
            )}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
