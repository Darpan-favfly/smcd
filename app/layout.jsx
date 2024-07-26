// import { createClient } from "@/prismicio";
// import localFont from "next/font/local";

// ===== import nextjs-toploader =====
import NextTopLoader from "nextjs-toploader";

// ===== import components =====
// import Footer from "@/components/footer/Footer";
import Header from "@/components/layout/header/Header";
import FooterComponent from "@/components/layout/footer/FooterComponent";

import StyledJsxRegistry from "@/lib/StyleRegistry";

// ===== prismic preview toolbar =====
// import { PrismicPreview } from "@prismicio/next";
// import { repositoryName } from "@/prismicio";

// ===== Google Fonts import =====
import { Jost, Lora } from "next/font/google";

import FirebaseAuthProvider from "@/lib/provider/authProvider/FirebaseAuthProvider";
import { Toaster } from "react-hot-toast";

// ===== initialize fonts =====
const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "SMC Diamonds",
  description: "SMC Diamonds",
};

// ===== import splide css =====
import "@splidejs/react-splide/css";
import { Suspense } from "react";

export default async function RootLayout({ children }) {
  // ===== create prismic client =====
  // const client = createClient();

  // ===== fetch header data =====
  // const headerData = await client.getSingle("header");

  // ===== fetch footer data =====
  // const footerData = await client.getSingle("footer");

  // ===== fetch whatsapp data =====
  // const whatsAppData = await client.getSingle("whatsapp_button");

  // Wait for the promises to resolve
  // const [header, footer, whatsApp] = await Promise.all([
  //   headerData,
  //   footerData,
  //   whatsAppData,
  // ]);

  // const { number, text } = whatsApp?.data;

  return (
    <html lang="en" className={`${jost.variable} ${lora.variable}`}>
      <head>
        {/* ===== FAVICONS ===== */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* // =========== CSS =========== */}
        <link rel="stylesheet" href="/styles/bootstrap.css" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <link rel="stylesheet" href="/styles/dark-theme.css" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        {/* // ===== nextjs-toploader ===== */}
        <NextTopLoader color="#DEA057" />

        <main className="theme-dark overflow-hidden">
          <StyledJsxRegistry>
            <FirebaseAuthProvider>
              <Suspense>
                <Header />
                <div>{children}</div>
                <FooterComponent />
              </Suspense>
            </FirebaseAuthProvider>
          </StyledJsxRegistry>

          {/* // ===== react-hot-toast ===== */}
          <Toaster />
        </main>

        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  );
}
