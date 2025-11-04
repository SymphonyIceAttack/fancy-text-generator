import Link from "next/link";
import { FancyTextGenerator } from "@/components/fancy-text-generator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Fancy Text Generator
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Blog
          </Link>
        </div>
      </nav>
      <FancyTextGenerator />
    </main>
  );
}
