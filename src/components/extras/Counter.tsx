/** @format */
"use client";

import { Box, Text } from "@radix-ui/themes";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function Counter({ target }: { target: string }) {
  return (
    <Box className="flex gap-2 text-white">
      <FlipClockCountdown
        to={new Date().getTime() + (24 * 3600 * 1000 + 5000)}
        renderOnServer
        stopOnHiddenVisibility
        showSeparators={false}
        showLabels={false}
        digitBlockStyle={{
          backgroundColor: "#E64848",
          fontSize: "1rem",
          height: "40px",
          width: "30px",
          borderRadius: "5px",
        }}
        spacing={{ clock: 3, digitBlock: 5 }}
      />
    </Box>
  );
}
