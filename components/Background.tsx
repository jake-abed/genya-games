export default function Background() {
  return (
    <div class="absolute w-[100dvw] h-[100svh]">
      <div class="absolute gradient-bg h-1/3 w-1/3 opacity-15 blur-3xl inset-1/3 rounded-full">
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
            <circle fill="#5544441F" cx="5" cy="5" r="2.5" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
      </svg>
    </div>
  );
}
