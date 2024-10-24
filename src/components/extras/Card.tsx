/** @format */

import Image from "next/image";
import { Box, Text, Flex } from "@radix-ui/themes";

import MoleIcon from "@/assets/ml_icon.jpg";

interface DiamondCardProps {
  label: string;
  gameName: string;
  discountPercentage: number;
  imageUrl: any;
}

export function BannerCard({ data }: { data: DiamondCardProps }) {
  return (
    <Box className="bg-black rounded-lg overflow-hidden grow">
      <Flex align="center" gap="3" p="3" className="bg-gray-800 rounded-lg">
        <Image
          src={data.imageUrl}
          alt={`${data.label}`}
          width={40}
          height={40}
          className="rounded-md"
        />
        <Flex direction="column">
          <Text weight="bold" size="2" className="block">
            {data.label}
          </Text>
          <Text size="1" className="opacity-50">
            {data.gameName}
          </Text>
        </Flex>
      </Flex>
      <Flex p="3" align="center" justify="between">
        <Box className="bg-red-600 rounded-full text-sm" px="3" py="1">
          <Text size="1" className="text-white">
            PROMO
          </Text>
        </Box>
        <Text align="right" size="2" className="text-white">
          -{data.discountPercentage}%
        </Text>
      </Flex>
    </Box>
  );
}

export function GameCard({ data }: { data: any }) {
  const dummy = {
    imageUrl: MoleIcon,
    label: "Mobile Legend Bang-Bang",
    developer: "Montoon",
  };
  return (
    <Flex
      className="grow"
      justify="end"
      align="center"
      direction="column"
      height="180px"
      position="relative"
    >
      <Image
        src={dummy.imageUrl}
        alt={dummy.label}
        width={115}
        height={115}
        className="absolute top-0 rounded"
      />
      <Flex
        direction="column"
        align="center"
        justify="end"
        className="bg-item p-4 rounded-tr-[30px] rounded-bl-[30px] rounded-tl-[5px] rounded-br-[5px]"
        width="150px"
        height="100px"
      >
        <Text size="1" className="max-w-[100px] truncate" weight="bold" my="1">
          {dummy.label}
        </Text>
        <Text size="1" className="opacity-50">
          {dummy.developer}
        </Text>
      </Flex>
    </Flex>
  );
}
