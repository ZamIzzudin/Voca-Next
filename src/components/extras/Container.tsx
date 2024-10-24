/** @format */

import { Container as ContainerRoot } from "@radix-ui/themes";
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <ContainerRoot className="px-28">{children}</ContainerRoot>;
}
