import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "600"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Sharull | Portfolio | Frontend developer",
  description:
    "Explore a captivating collection of frontend projects that showcase technical prowess. Browse the best of my work, and envision how together, we can bring your next big idea to life. Let's collaborate and turn dreams into reality. Contact me today and let's embark on a transformative creative partnership!",
  verification: {
    google: "Kn-9zZ3xqj-Oa7BYWCABVXxW5RgXc57Si0Kk9SCW4YA"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
