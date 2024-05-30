import { asset } from "$fresh/runtime.ts";
import { JSX } from "preact";

export default function BottomBar() {
  return (
    <footer class="bg-genyablack w-[100dvw] h-16 m-auto fixed flex flex-col justify-end bottom-0 z-10">
      <div class="gradient-bg h-2 w-[100dvw]"></div>
      <div class="h-[100px] flex gap-3 justify-center items-center">
        <p class="text-white text-xl">GENYA GAMES™ 2024</p>
        <a href="https://genya-games.itch.io/">
          <img
            src={asset("/itch.svg")}
            alt="itch.io Logo"
            width="24"
            height="24"
          />
        </a>
        <a href="https://x.com/GenyaGames">
          <img
            src={asset("/twitter.svg")}
            alt="Twitter Logo"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  );
}
