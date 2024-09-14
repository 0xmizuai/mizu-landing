import { OverallMetrics } from "@/components/OverallMetrics";
import { TgBotMetrics } from "@/components/TgBotMetrics";
import { UserTrackMetrics } from "@/components/UserTrackMetrics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZU Analytics",
  description: "The first decentralized open source data layer",
};

export default function Home() {
  return (
    <main className="relative min-h-screen px-16 py-5">
      <OverallMetrics />

      <UserTrackMetrics />

      <TgBotMetrics />
    </main>
  );
}
