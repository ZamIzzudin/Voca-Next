/** @format */

"use client";

import { Grid, Box, Heading, Flex, Text } from "@radix-ui/themes";
import useStore from "@/utils/store";

import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "@/components/extras/Container";
import DetailsBanner from "@/components/DetailsBanner";
import { DropDown, InputField } from "@/components/extras/Input";

import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDiscount } from "react-icons/md";

import QRIS from "@/assets/qris.png";
import GameIcon from "@/assets/game_icon.png";

interface Props {
  params: {
    id: string;
  };
}

export default function Details({ params }: Props) {
  const { id } = params;
  const { products } = useStore();
  const [selected, setSelected] = useState<any>(null);
  const [qrisVisible, setQrisVisible] = useState(false);
  const [walletVisible, setWalletVisible] = useState(false);

  const [form, setForm] = useState<any>({
    product: null,
    userID: "",
    zoneID: "",
    contact: "",
    voucher: "",
    payment: "",
  });

  useEffect(() => {
    const data = products.find((item) => item.id === id);
    setSelected(data);
  }, [products]);

  function checkVoucher() {}

  return (
    <main className="bg-bg text-white py-16">
      <Container>
        <DetailsBanner data={selected} />
        {selected && (
          <Grid columns="1.5fr 1fr" gap="4" mt="4">
            <Box>
              <Flex direction="column" className="bg-item rounded-lg" p="5">
                <Heading size="6" weight="medium">
                  Pilih Produk
                </Heading>
                <Flex className="border-b border-white/30" py="5">
                  <button className="flex items-center gap-2 border border-white px-4 py-3 rounded-lg">
                    <Image
                      src={selected?.items[0].iconUrl}
                      alt={selected?.items[0].name.split(" ")[1]}
                      width={32}
                      height={32}
                    />
                    {selected?.items[0].name.split(" ")[1]}
                  </button>
                </Flex>
                <Flex gap="4" mt="5">
                  {selected?.items.map((item: any) => (
                    <Flex
                      align="center"
                      justify="between"
                      className="basis-1/3 border border-white/30 rounded-lg p-3"
                    >
                      <Box className="text-sm flex flex-col space-y-2">
                        <Text size="2">{item.name}</Text>
                        <Text size="2" className="text-green-500">
                          Rp.
                          {item.priceDiscount > 0
                            ? item.priceDiscount
                            : item.price}
                          ,-
                        </Text>
                        {item.priceDiscount > 0 && (
                          <Text size="2" className="opacity-50">
                            Rp.{item.price},-
                          </Text>
                        )}
                      </Box>
                      <Image
                        src={item.iconUrl}
                        alt={item.name}
                        width={32}
                        height={32}
                      />
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Box>
            <aside className="space-y-4">
              <Box className="bg-item rounded-lg" p="5">
                <Flex align="center" gap="4">
                  <Image
                    src={GameIcon}
                    height={48}
                    width={48}
                    alt="topup icon"
                    className="rounded-2xl bg-form p-4 box-content"
                  />
                  <Box>
                    <Heading size="6" weight="medium">
                      Topup Game
                    </Heading>
                    <Text size="4" className="opacity-50">
                      Lengkapi data dan dapatkan produk anda!
                    </Text>
                  </Box>
                </Flex>
                <Box className="border-t border-white/30 space-y-4" mt="5">
                  <Flex gap="4" pt="5">
                    <Box className="basis-1/2 space-y-2">
                      <Text size="2">UserID*</Text>
                      <InputField
                        value={form?.userID}
                        handler={(value) => setForm({ ...form, userID: value })}
                        size="md"
                        placeholder="Masukkan User ID"
                      />
                    </Box>
                    <Box className="basis-1/2 space-y-2">
                      <Text size="2">ZoneID*</Text>
                      <InputField
                        value={form?.zoneID}
                        handler={(value) => setForm({ ...form, zoneID: value })}
                        size="md"
                        placeholder="Masukkan Zone ID"
                      />
                    </Box>
                  </Flex>
                  <Box className="space-y-2">
                    <Text size="2">Nomor Whatsapp</Text>
                    <InputField
                      value={form?.contact}
                      handler={(value) => setForm({ ...form, contact: value })}
                      size="md"
                      placeholder="Ketik nomor WA (081*********21)"
                    />
                  </Box>
                  <Text
                    size="1"
                    className="opacity-50 block leading-5 text-justify"
                  >
                    Untuk mengetahui User ID Anda, silakan klik menu profile
                    dibagian kiri atas pada menu utama game. User ID akan
                    terlihat dibagian bawah Nama Karakter Game Anda. Silakan
                    masukkan User ID dan Server ID / Zone ID Anda untuk
                    menyelesaikan transaksi. User ID berada diluar tanda kurung
                    dan Server ID / Zone ID didalam tanda kurung. Contoh :
                    12345678(1234).
                  </Text>
                </Box>
              </Box>
              <Box className="bg-item rounded-lg" p="5">
                <InputField
                  value={form?.voucher}
                  handler={(value) => setForm({ ...form, voucher: value })}
                  size="md"
                  icon={<IoSearch />}
                  placeholder="Ketik kode promo (opsional)"
                  action={{ label: "Gunakan", handler: checkVoucher }}
                />
                <Flex direction="column" mt="4">
                  <button
                    onClick={() => setQrisVisible(!qrisVisible)}
                    className="flex justify-between items-center w-full bg-form p-3 rounded-lg"
                  >
                    <Flex align="center" gap="4" justify="center">
                      <MdDiscount />
                      Lihat promo tersedia
                    </Flex>

                    <span>
                      {qrisVisible ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </span>
                  </button>
                </Flex>
              </Box>
              <Box className="bg-item rounded-lg space-y-4" p="5">
                <Heading size="4" weight="medium">
                  Pilih Metode Pembayaran
                </Heading>
                <button
                  onClick={() => setQrisVisible(!qrisVisible)}
                  className="flex justify-between items-center w-full bg-form p-3 rounded-lg"
                >
                  QRIS
                  <span>
                    {qrisVisible ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </span>
                </button>
                {qrisVisible && (
                  <Flex gap="4" wrap="wrap" align="center" justify="between">
                    <Flex
                      className="bg-form rounded-xl"
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                    <Flex
                      className="bg-form rounded-xl"
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                  </Flex>
                )}
                <button
                  onClick={() => setWalletVisible(!walletVisible)}
                  className="flex justify-between items-center w-full bg-form p-3 rounded-lg"
                >
                  E-Wallet
                  <span>
                    {walletVisible ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </span>
                </button>
                {walletVisible && (
                  <Flex wrap="wrap" align="center" justify="between" gap="4">
                    <Flex
                      className="bg-form rounded-xl "
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                    <Flex
                      className="bg-form rounded-xl "
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                    <Flex
                      className="bg-form rounded-xl "
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                    <Flex
                      className="bg-form rounded-xl "
                      direction="column"
                      p="3"
                      gap="1"
                    >
                      <Image
                        src={QRIS}
                        alt="qris"
                        className="mb-3"
                        width="165"
                      />
                      <Text size="2">QRIS</Text>
                      <Text size="2" className="opacity-50">
                        Biaya Layanan
                      </Text>
                      <Text size="2">+ Rp. 100.000,-</Text>
                    </Flex>
                  </Flex>
                )}
              </Box>
            </aside>
          </Grid>
        )}
      </Container>
    </main>
  );
}
