"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a fancy text generator?",
    answer:
      "A fancy text generator transforms regular text into special Unicode characters that create different visual styles. These characters can be copied and used anywhere that supports Unicode text, including social media, messaging apps, and websites.",
  },
  {
    question: "Will these fancy text styles work everywhere?",
    answer:
      "Yes! All transformations use standard Unicode characters that are supported across all modern platforms, devices, and applications. However, the visual appearance may vary slightly depending on the font used by each platform.",
  },
  {
    question: "Can I use fancy text for commercial purposes?",
    answer:
      "The text transformations are free to use for any purpose, including commercial projects. Unicode characters are universal standards and can be used without restrictions.",
  },
  {
    question: "Does fancy text affect SEO or accessibility?",
    answer:
      "For SEO: Search engines may not recognize fancy Unicode text the same way as regular text, so it's best to use standard text for important keywords. For accessibility: Screen readers may struggle with certain Unicode characters, so use regular text for critical content.",
  },
  {
    question: "How do I copy the generated text?",
    answer:
      "Simply click the 'Copy' button next to any styled text result. The text will be copied to your clipboard and you can paste it anywhere you like. The button will show a checkmark to confirm the text has been copied.",
  },
  {
    question: "Does the generator support multiple languages?",
    answer:
      "Yes! The generator supports both English and Chinese characters. For languages with Unicode character variants (like English), they will be transformed. For languages without variants (like Chinese), the original characters are preserved while maintaining readability.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-pink-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 text-white drop-shadow-2xl uppercase tracking-tight">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about fancy text generation
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-2 border-white/30 rounded-2xl px-8 hover:border-cyan-400/70 transition-all duration-500 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <AccordionTrigger className="text-lg font-bold text-white hover:text-cyan-200 py-6 hover:no-underline transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
