import { Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
        <div className="flex items-center gap-2">
          <Crown
            size={24}
            className="text-amber-300"
          />
          <span className="font-serif text-lg font-semibold">
            Chess Coach
          </span>
        </div>

        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Chess Coach.
          Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}