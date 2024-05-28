import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <header class="bg-genyablack h-36 flex justify-center items-center w-[100dvw]">
        <img
          src={asset("/genya-red-black.svg")}
          alt="Genya Games Logo"
          class="h-32"
        />
      </header>
      <div class="gradient-bg h-2 w-[100dvw]">
      </div>
      <section class="content">
      </section>
    </div>
  );
}
