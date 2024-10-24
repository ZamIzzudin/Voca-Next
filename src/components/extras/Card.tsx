/** @format */

import Image from "next/image";
import { Box, Text, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();
  return (
    <Flex
      className="grow cursor-pointer"
      justify="end"
      align="center"
      direction="column"
      height="180px"
      position="relative"
      onClick={() => push(`/details/${data.id}`)}
    >
      <Image
        src={data.imageUrl}
        alt={data.label}
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
          {data.label}
        </Text>
        <Text size="1" className="opacity-50">
          {data.developer}
        </Text>
      </Flex>
    </Flex>
  );
}

export function OrderCard({ data }: { data: any }) {
  return (
    <Flex
      className="bg-item rounded-xl"
      gap="4"
      p="4"
      align="center"
      justify="between"
    >
      <Image src={data.imageUrl} alt={data.gameName} width={40} height={40} />
      <Flex direction="column">
        <Text size="2" className="opacity-50">
          {data.gameName}
        </Text>
        <Text size="2">{data.details}</Text>
      </Flex>
      <Flex direction="column">
        <Text size="2" className="opacity-50">
          Harga Produk
        </Text>
        <Text size="2">{data.price}</Text>
      </Flex>
      <Flex direction="column">
        <Text size="2" className="opacity-50">
          Metode Pembayaran
        </Text>
        <Text size="2">{data.payment}</Text>
      </Flex>
      <Flex direction="column">
        <Text size="2" className="opacity-50">
          Tanggal
        </Text>
        <Text size="2">{data.date}</Text>
      </Flex>
      <Flex direction="column">
        <Box
          py="2"
          px="5"
          className="text-[#95BF00] bg-[#95BF0020] text-sm rounded-md font-medium"
        >
          {data.status}
        </Box>
      </Flex>
    </Flex>
  );
}
