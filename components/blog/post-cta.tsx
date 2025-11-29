import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function PostCTA() {
  return (
    <Card className="mt-12 border-2 border-white/30 bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-xl">
      <CardContent className="py-12 px-8 text-center">
        <h2 className="text-4xl font-black mb-6 text-white drop-shadow-lg">
          ✨ Try Our Fancy Text Generator
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your text into stunning styles with our free online tool.
          Perfect for social media, messaging apps, and creative projects.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          Generate Fancy Text Now →
        </Link>
      </CardContent>
    </Card>
  );
}
