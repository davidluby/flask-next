import { Html, Head, Main, NextScript } from 'next/document'
import Nav from "./components/nav/Nav";

export default function Document() {
  return (
    <Html lang="en" className="base">
      <Head />
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}