import Link from "next/link";
import { FancyTextGenerator } from "@/components/fancy-text-generator";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 dark:from-violet-950 dark:via-fuchsia-950 dark:to-cyan-950">
      <nav className="border-b-2 border-primary/20 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-foreground uppercase"
          >
            Fancy Text Generator
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all font-bold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <FancyTextGenerator />
    </main>
  );
}
