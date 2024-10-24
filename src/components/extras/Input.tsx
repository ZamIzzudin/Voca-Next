/** @format */

import { Box, Flex, Select } from "@radix-ui/themes";
import { ReactElement, useState } from "react";
import Image from "next/image";

interface InputState {
  type: string;
  placeholder: string;
  icon: ReactElement | null;
  value: string | number;
  handler: (value: string) => void;
}

export function InputField({
  type = "text",
  placeholder = "",
  icon = null,
  value,
  handler,
}: InputState) {
  return (
    <Box className="flex items-center justify-start gap-4 min-w-[100%] bg-form px-3 py-2 rounded-full">
      {icon && icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handler(e.target.value)}
        className="bg-transparent outline-none text-sm w-[100%]"
      />
    </Box>
  );
}

export function DropDown({ data }: { data: any }) {
  const [value, setValue] = useState("0");

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="text-white bg-item border-0 shadow-transparent">
        <Flex as="span" align="center" gap="2">
          {data[parseInt(value)]?.prop && data[parseInt(value)].prop}
          {data[parseInt(value)]?.label}
        </Flex>
      </Select.Trigger>
      <Select.Content
        position="popper"
        className="text-white bg-item border-0 shadow-transparent"
      >
        {data.map((item: any, index: number) => (
          <Select.Item value={index.toString()}>
            {item.prop ? (
              <Flex gap="2">
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
