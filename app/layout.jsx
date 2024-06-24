// import { createClient } from "@/prismicio";
// import localFont from "next/font/local";

import NextTopLoader from "nextjs-toploader";
// import Footer from "@/components/footer/Footer";
// import Header from "@/components/header/Header";
import StyledJsxRegistry from "@/lib/StyleRegistry";

import "@splidejs/react-splide/css";

// ===== prismic preview toolbar =====
// import { PrismicPreview } from "@prismicio/next";
// import { repositoryName } from "@/prismicio";

// ===== Google Fonts import =====
import { Jost, Lora } from "next/font/google";
import HeaderComponent from "@/components/header/HeaderComponent";

// import WhatsappButton from "@/components/WhatsappButton";
// import Script from "next/script";

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
      <body style={{ marginBottom: 200 }}>
        <NextTopLoader color="#DEA057" />
        <HeaderComponent />
        <main className="theme-dark overflow-hidden">
          <StyledJsxRegistry>
            {/* <Header data={header?.data} /> */}
            <div>{children}</div>
            {/* <Footer data={footer?.data} /> */}
            {/* <WhatsappButton number={number?.[0]?.text} text={text?.[0]?.text} /> */}
          </StyledJsxRegistry>
        </main>
        {/* <script
          id="ruttl-site-embed-script"
          src="https://app.ruttl.com/plugin.js?id=z8oD0qWJ7C4lozxdrV1o&e=1"
          defer
          async></script> */}

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-EL06TRD4FP"
        />
        <Script strategy="lazyOnload">
          {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-EL06TRD4FP');
				`}
        </Script> */}
        {/* <PrismicPreview repositoryName={repositoryName} /> */}
      </body>
    </html>
  );
}
