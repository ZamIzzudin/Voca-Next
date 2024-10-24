/** @format */

"use client";

import { useState } from "react";
import { Heading, Text, Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

import OrderBanner from "@/components/OrderBanner";
import Container from "@/components/extras/Container";
import { InputField } from "@/components/extras/Input";
import { OrderCard } from "@/components/extras/Card";

import { IoSearch } from "react-icons/io5";
import Mole from "@/assets/ml_icon.jpg";
import NotFound from "@/assets/not_found.png";

const dummyOrder = {
  gameName: "Mobile Legend",
  imageUrl: Mole,
  details: "14820 Diamonds (12389 + 2431 Bonus)",
  price: "Rp100.000,-",
  payment: "QRIS",
  status: "Success",
  date: "24 Agustus 2023, 14:08",
};

const dummyList: any[] = [1, 2, 3, 4];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  function searchHandler() {}

  return (
    <main className="bg-bg text-white py-16">
      <Container>
        <OrderBanner />
        <section className="my-16">
          <Flex className="bg-item rounded-xl" p="6" direction="column" gap="5">
            <InputField
              placeholder="Ketik nomor HP (0812*******)"
              handler={setSearch}
              value={search}
              icon={<IoSearch />}
              size="md"
              action={{ label: "Cari Pesanan", handler: searchHandler }}
            />
            <Text size="1" className="text-gray-400">
              Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan?
              harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka
              kamu dapat menghubungi kami via
              <Link className="text-xs text-white" href="#">
                {" "}
                Whatsapp
              </Link>
            </Text>
          </Flex>
        </section>
        <section className="my-16">
          <Heading size="8">Riwayat Pesanan</Heading>
          {dummyList.length === 0 ? (
            <Flex direction="column" align="center" justify="center">
              <Flex
                direction="column"
                align="center"
                justify="center"
                gap="4"
                mt="9"
                maxWidth="25%"
              >
                <Image
                  src={NotFound}
                  alt="not found"
                  width={250}
                  height={250}
                />
                <Text align="center" weight="medium">
                  Produk belum bisa ditampilkan, silakan isi nomor HP terlebih
                  dahulu
                </Text>
              </Flex>
            </Flex>
          ) : (
            <Flex gap="4" direction="column" mt="4">
              {dummyList?.map((order) => (
                <OrderCard data={dummyOrder} />
              ))}
            </Flex>
          )}{" "}
        </section>
      </Container>
    </main>
  );
}
