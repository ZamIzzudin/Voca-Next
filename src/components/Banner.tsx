/** @format */

import React from "react";
import { Box, Heading, Text, Flex } from "@radix-ui/themes";

import Container from "./extras/Container";
import { BannerCard } from "./extras/Card";
import { BannerSlider } from "./extras/Slider";
import Counter from "./extras/Counter";

import Image from "next/image";

import WaveDark from "@/assets/wave_dark.svg";
import WaveLight from "@/assets/wave_light.svg";
import MoleIcon from "@/assets/ml_icon.jpg";

export default function Banner() {
  const dummy = [
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
    {
      label: "100 Diamonds",
      gameName: "Mobile Legends Bang Bang",
      discountPercentage: 10,
      imageUrl: MoleIcon,
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-purple-800 to-blue-600 py-16 text-white">
      <BannerSlider />
      <Container>
        <Box className=" py-8">
          <Heading weight="bold" size="8" mb="4">
            Starlight November 2023: Melissa "Nightwalker"
          </Heading>
          <Text size="5">
            Segera dapatkan skin starlight Melissa "Nightwalker" dengan topup
            murah hanya di VocaGame.
          </Text>
          <Flex gap="5" align="center" className="mt-32 mb-4">
            <Heading size="8" weight="bold">
              FLASH SALE
            </Heading>
            <Counter target="Jan 5, 2030 15:37:25" />
          </Flex>
          <Text size="5">
            Segera dapatkan penawaran terbatas dari kami, jangan sampai
            ketinggalan!
          </Text>
        </Box>
        <Flex gap="4" wrap="wrap">
          {dummy.map((item) => (
            <BannerCard data={item} />
          ))}
        </Flex>
      </Container>
      <div className="absolute bottom-0 left-0 right-0">
        <Image src={WaveLight} alt="wave" className="w-screen" />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Image src={WaveDark} alt="wave" className="w-screen" />
      </div>
    </section>
  );
}
