import "../ui/styles/global.css";
import type { AppProps } from "next/app";
import Header from "../ui/Header/Header";

const links = [
  { title: "Our approach", href: "/our-approach" },
  { title: "Solutions", href: "/solutions" },
  { title: "About us", href: "/about-us" },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header links={links} />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
