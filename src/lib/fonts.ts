import { Playfair_Display, Lato } from "next/font/google";

/** Editorial high-contrast serif — headlines, section titles, quotes. */
export const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

/** Polished, readable sans — body, navigation, UI, forms. */
export const sans = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});
