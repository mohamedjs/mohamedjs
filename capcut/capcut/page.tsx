import type { Metadata } from "next";
import CapcutBoard from "@/components/store/capcut/CapcutBoard";

export const metadata: Metadata = {
  title: "CapCut Template | 7alm",
  description: "Split Explainer Reel instructions.",
  robots: { index: false, follow: false },
};

export default function CapcutPage() {
  return <CapcutBoard />;
}
