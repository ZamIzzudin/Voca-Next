/** @format */
"use client";

import { useState, useEffect } from "react";
import useStore from "../utils/store";

import Container from "@/components/extras/Container";
import Banner from "@/components/Banner";
import { GameCard } from "@/components/extras/Card";
import { Grid, Box, Flex, Heading } from "@radix-ui/themes";

export default function Home() {
  const { products, getProducts } = useStore();
  const [category, setCategory] = useState("Rekomendasi");

  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="overflow-x-hidden text-white bg-bg">
      <Banner />
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
                } py-3 px-4 text-left rounded`}
                onClick={() => setCategory("Rekomendasi")}
              >
                Rekomendasi
              </button>
              <span
                className={`${
                  category === "Mobile"
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                }  py-3 px-4 text-left rounded`}
                onClick={() => setCategory("Mobile")}
              >
                Mobile Game
              </span>
              <span
                className={`${
                  category === "PC"
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } py-3 px-4 text-left rounded`}
                onClick={() => setCategory("PC")}
              >
                PC Game
              </span>
            </Flex>
          </Flex>
          <Flex wrap="wrap" gap="4">
            {dummy.map((product, index) => (
              <GameCard data={product} key={index} />
            ))}
          </Flex>
        </Grid>
      </Container>
    </main>
  );
}
