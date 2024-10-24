/** @format */
"use client";

import { useState } from "react";
import useStore from "../utils/store";

import Container from "@/components/extras/Container";
import HomeBanner from "@/components/HomeBanner";
import { GameCard } from "@/components/extras/Card";
import { Grid, Flex, Heading } from "@radix-ui/themes";

import MoleIcon from "@/assets/ml_icon.jpg";

const dummyProduct = {
  imageUrl: MoleIcon,
  label: "Mobile Legend Bang-Bang",
  developer: "Montoon",
};

const dummyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  const { products } = useStore();
  const [category, setCategory] = useState("Rekomendasi");

  return (
    <main className="overflow-x-hidden text-white bg-bg">
      <HomeBanner />
      <Container>
        <Heading size="7" mt="9" mb="5">
          Temukan Game Favorit
        </Heading>
        <Grid columns="1fr 5fr" gap="9" mb="9">
          <Flex direction="column">
            <Flex direction="column" className="text-sm gap-2">
              <button
                className={`${
                  category === "Rekomendasi"
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } py-3 px-4 text-left rounded cursor-pointer`}
                onClick={() => setCategory("Rekomendasi")}
              >
                Rekomendasi
              </button>
              <span
                className={`${
                  category === "Mobile"
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                }  py-3 px-4 text-left rounded cursor-pointer`}
                onClick={() => setCategory("Mobile")}
              >
                Mobile Game
              </span>
              <span
                className={`${
                  category === "PC"
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } py-3 px-4 text-left rounded cursor-pointer`}
                onClick={() => setCategory("PC")}
              >
                PC Game
              </span>
            </Flex>
          </Flex>
          <Flex wrap="wrap" gap="5" py="4">
            {dummyList.map((product, index) => (
              <GameCard
                data={{ ...dummyProduct, id: products[0]?.id }}
                key={index}
              />
            ))}
          </Flex>
        </Grid>
      </Container>
    </main>
  );
}
