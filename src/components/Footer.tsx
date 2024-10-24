/** @format */

import { Text, Flex, Grid, Box } from "@radix-ui/themes";
import Container from "./extras/Container";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-item text-white">
      <Container>
        <Flex>
          <Grid
            columns="1fr 1.5fr"
            gap="1"
            width="100%"
            className="border-b-2 border-white"
            py="9"
          >
            <Box>
              <Flex align="center" gap="2">
                <Image src={Logo} alt="Website Logo" width={80} height={55} />
                <Text size="5" weight="bold">
                  GameManiac
                </Text>
              </Flex>
            </Box>
            <Flex justify="between" px="9">
              <Box>
                <Text size="2">PETA SITUS</Text>
                <ul className="mt-4 space-y-4 text-sm">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/games">Semua Game</Link>
                  </li>
                  <li>
                    <Link href="/login">Masuk</Link>
                  </li>
                  <li>
                    <Link href="/register">Daftar</Link>
                  </li>
                </ul>
              </Box>

              <Box>
                <Text size="2">TOP UP LAINNYA</Text>
                <ul className="mt-4 space-y-4 text-sm">
                  <li>
                    <Link href="/topup/mobile-legends">Mobile Legends</Link>
                  </li>
                  <li>
                    <Link href="/topup/free-fire">Free Fire</Link>
                  </li>
                  <li>
                    <Link href="/topup/pubg-mobile">PUBG Mobile</Link>
                  </li>
                  <li>
                    <Link href="/topup/undawn">Undawn</Link>
                  </li>
                </ul>
              </Box>

              <Box className="pr-[5%]">
                <Text size="2">IKUTI KAMI</Text>
                <Box className="flex space-x-2 text-sm" mt="3" mb="5">
                  <Link
                    href="#"
                    className="text-xl bg-form flex p-3 rounded-full"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="#"
                    className="text-xl bg-form flex p-3 rounded-full"
                  >
                    <FaTiktok />
                  </Link>
                  <Link
                    href="#"
                    className="text-xl bg-form flex p-3 rounded-full"
                  >
                    <FaYoutube />
                  </Link>
                </Box>
                <Box>
                  <Text size="2">PERTANYAAN BISNIS</Text>
                  <Link href="#" className="block my-4 text-sm">
                    contact@email.id
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Grid>
        </Flex>
        <Flex justify="between" align="center" py="4" className="text-[0.8rem]">
          <p>&copy; PT BERMAIN BERSAMA INDONESIA, 2023</p>
          <Link href="/privacy-policy">Kebijakan Privasi</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact-us">Hubungi Kami</Link>
        </Flex>
      </Container>
    </footer>
  );
}
