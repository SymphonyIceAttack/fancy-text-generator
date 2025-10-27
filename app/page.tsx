"use client";

import { Check, Copy } from "lucide-react";
import Header from "./components/Header";
import { Textarea } from "./components/textarea";
import { textStyles, usetextStylesHook } from "./usetextStylesHook";

export default function Home() {
  const [inputText, setInputText, copiedIndex, copyToClipboard] =
    usetextStylesHook();
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 p-1 pt-10 pb-5">
      <div className="max-w-5xl mx-auto">
        <Header />
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-6 mb-8 border-2">
          <label
            htmlFor="input-text"
            className="block text-sm font-medium mb-2"
          >
            Enter your text
          </label>
          <Textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type something..."
            className="min-h-[120px] text-lg resize-none"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Styled Results</h2>
          <div className="grid gap-4">
            {textStyles.map((style, index) => {
              const transformedText = style.transform(inputText);
              const isCopied = copiedIndex === index;

              return (
                <div
                  key={style.name}
                  className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-5 transition-all hover:shadow-md border-2  ${isCopied && "border-accent"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-sm">{style.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {style.description}
                        </span>
                      </div>
                      <p className="text-xl break-words leading-relaxed">
                        {transformedText}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(transformedText, index)}
                      className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 shrink-0 transition-all ${isCopied && "bg-muted-foreground hover:bg-muted-foreground text-accent-foreground"}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground ">
            <p className="text-pretty">
              All transformations use Unicode characters and work across most
              platforms and applications.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
