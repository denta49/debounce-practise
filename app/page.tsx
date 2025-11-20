import DebounceInput from "@/components/DebounceInput";
import { ThrottleScrollToTop } from "@/components/ThrottleScrollToTop";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World! Hello World! Hello World! Hello World!
            Hello World! Hello World!
          </h1>
        </div>
        Debounce:
        <DebounceInput />
        Throttle:
        <ThrottleScrollToTop />
      </main>
    </div>
  );
}
