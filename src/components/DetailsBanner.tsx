/** @format */

import { Heading, Flex, Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

import MoleBanner from "@/assets/ml_banner.png";
import MoleIcon from "@/assets/ml_icon.jpg";

export default function DetailsBanner({ data }: { data: any }) {
  return (
    <section
      className="bg-white text-black w-full rounded-3xl overflow-hidden bg-center bg-cover min-h-[480px] text-white"
      style={{ backgroundImage: `url(${MoleBanner.src})` }}
    >
      <Flex justify="start" align="end" minHeight="480px">
        <Flex
          className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30"
          width="100%"
          p="6"
          gap="6"
        >
          <Image
            src={MoleIcon}
            alt="logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <Flex direction="column" justify="end" gap="1">
            <Heading size="7" weight="medium">
              {data?.name}
            </Heading>
            <Text size="4" weight="light">
              {data?.publisher}
            </Text>
            <Flex gap="2" mt="1">
              <Flex
                align="center"
                gap="2"
                className="bg-[#ffffff20] py-1 px-3 rounded-full"
              >
                <RiCustomerServiceFill />
                <Text size="2" weight="medium">
                  Customer Service 24/7
                </Text>
              </Flex>
              <Flex
                align="center"
                gap="2"
                className="bg-[#ffffff20] py-1 px-3 rounded-full"
              >
                <SiAdguard />
                <Text size="2" weight="medium">
                  Official Distributor
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
