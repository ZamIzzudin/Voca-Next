/** @format */

"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { IoSearch } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { InputField, DropDown } from "./extras/Input";
import Container from "./extras/Container";
import Logo from "@/assets/logo.png";
import ID from "@/assets/id.svg";
import US from "@/assets/us.svg";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const countries = [
    {
      id: "id",
      label: "ID-ID",
      prop: <Image src={ID} alt="ID Flag" width={15} />,
    },
    {
      id: "en",
      label: "EN-US",
      prop: <Image src={US} alt="US Flag" width={15} />,
    },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-item text-white">
      <Box className="bg-item text-white border-b border-white/10">
        <Container>
          <Flex justify="between" align="center" py="4">
            <Flex align="center" gap="2">
              <Image src={Logo} alt="logo" width={60} height={40} />
              <Text size="3" weight="bold">
                GameManiac
              </Text>
            </Flex>
            <Box className="min-w-[50dvw]">
              <InputField
                type="text"
                value={search}
                handler={setSearch}
                icon={<IoSearch />}
                placeholder="Cari..."
              />
            </Box>
            <DropDown data={countries} />
          </Flex>
        </Container>
      </Box>

      <Container>
        <Flex py="4" gap="5">
          <Link href="/" className="flex items-center gap-2 text-sm">
            <HiOutlineHome />
            Beranda
          </Link>
          <Link href="/orders" className="flex items-center gap-2 text-sm">
            <IoSearch />
            Lacak Pesanan
          </Link>
        </Flex>
      </Container>
    </nav>
  );
}
