export default function Background() {
  return (
    <div class="absolute w-[100dvw] h-[100svh]">
      <div class="absolute gradient-bg h-[40svh] md:h-1/2 w-[40svw] opacity-25 blur-3xl inset-x-1/3 inset-y-[30svh] rounded-full">
      </div>
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#6944592F" cx="5" cy="5" r="2" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
      </svg>
    </div>
  );
}
