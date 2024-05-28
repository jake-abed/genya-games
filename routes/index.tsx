import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <header class="bg-genyablack h-28 flex justify-center items-center w-[100dvw]">
        <img
          src={asset("/genya-red-black.svg")}
          alt="Genya Games Logo"
          class="h-24"
        />
      </header>
      <div class="gradient-bg h-1 w-[100dvw]">
      </div>
      <section class="content">
        <h1 class="p-2 text-center font-sans text-genyared text-4xl">
          GENYA GAMES FULL SITE COMING SOON
        </h1>
      </section>
    </div>
  );
}
