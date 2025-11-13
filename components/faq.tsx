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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-foreground uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about fancy text generation
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-2 border-border rounded-lg px-6 hover:border-accent/50 transition-all bg-card"
            >
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline hover:text-accent py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
