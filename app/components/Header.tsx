import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const fullTitle = "Fancy Text Generator";
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 mb-4">
        <Sparkles className="w-8 h-8 text-accent" />
        <h1 className="text-5xl font-bold text-balance">
          {displayedTitle}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
      <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
        Transform your plain text into stylish Unicode characters. Perfect for
        social media, messaging, and creative projects.
      </p>
    </div>
  );
}
