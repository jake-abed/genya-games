import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import BottomBar from "../components/BottomBar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Genya Games | Indie Games For the Sake of Fun</title>
        <link rel="icon" href={asset("/favicon.ico")} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body class="bg-genyablack">
        <Component />
        <BottomBar />
      </body>
    </html>
  );
}
