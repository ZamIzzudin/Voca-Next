/** @format */
import { Heading, Flex, Box, Text } from "@radix-ui/themes";
import Image from "next/image";

import Hylos from "@/assets/hylos.png";
import Logo from "@/assets/logo_order.png";

export default function OrderBanner() {
  return (
    <section className="bg-white text-black w-full rounded-xl overflow-hidden">
      <Flex justify="between" align="center" position="relative" py="9" px="7">
        <Flex gap="5">
          <Image src={Logo} alt="logo" width={100} height={100} />
          <Flex direction="column" gap="4">
            <Box className="bg-gray-200 w-fit rounded" py="1" px="2">
              <Text size="2" weight="medium">
                GameManiac.com
              </Text>
            </Box>
            <Heading size="8">Lacak Pesanan</Heading>
          </Flex>
        </Flex>
        <Image
          src={Hylos}
          alt="hylos"
          width={330}
          className="absolute right-0 bottom-0"
        />
      </Flex>
    </section>
  );
}
