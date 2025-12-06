"use client";

import { Check, Copy, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const charMaps = {
  bold: {
    A: "𝗔",
    B: "𝗕",
    C: "𝗖",
    D: "𝗗",
    E: "𝗘",
    F: "𝗙",
    G: "𝗚",
    H: "𝗛",
    I: "𝗜",
    J: "𝗝",
    K: "𝗞",
    L: "𝗟",
    M: "𝗠",
    N: "𝗡",
    O: "𝗢",
    P: "𝗣",
    Q: "𝗤",
    R: "𝗥",
    S: "𝗦",
    T: "𝗧",
    U: "𝗨",
    V: "𝗩",
    W: "𝗪",
    X: "𝗫",
    Y: "𝗬",
    Z: "𝗭",
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾",
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
  },
  italic: {
    A: "𝘈",
    B: "𝘉",
    C: "𝘊",
    D: "𝘋",
    E: "𝘌",
    F: "𝘍",
    G: "𝘎",
    H: "𝘏",
    I: "𝘐",
    J: "𝘑",
    K: "𝘒",
    L: "𝘓",
    M: "𝘔",
    N: "𝘕",
    O: "𝘖",
    P: "𝘗",
    Q: "𝘘",
    R: "𝘙",
    S: "𝘚",
    T: "𝘛",
    U: "𝘜",
    V: "𝘝",
    W: "𝘞",
    X: "𝘟",
    Y: "𝘠",
    Z: "𝘡",
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
  },
  boldItalic: {
    A: "𝘼",
    B: "𝘽",
    C: "𝘾",
    D: "𝘿",
    E: "𝙀",
    F: "𝙁",
    G: "𝙂",
    H: "𝙃",
    I: "𝙄",
    J: "𝙅",
    K: "𝙆",
    L: "𝙇",
    M: "𝙈",
    N: "𝙉",
    O: "𝙊",
    P: "𝙋",
    Q: "𝙌",
    R: "𝙍",
    S: "𝙎",
    T: "𝙏",
    U: "𝙐",
    V: "𝙑",
    W: "𝙒",
    X: "𝙓",
    Y: "𝙔",
    Z: "𝙕",
    a: "𝙖",
    b: "𝙗",
    c: "𝙘",
    d: "𝙙",
    e: "𝙚",
    f: "𝙛",
    g: "𝙜",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "𝙤",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝘹",
    y: "𝙮",
    z: "𝙯",
  },
  script: {
    A: "𝒜",
    B: "ℬ",
    C: "𝒞",
    D: "𝒟",
    E: "ℰ",
    F: "ℱ",
    G: "𝒢",
    H: "ℋ",
    I: "ℐ",
    J: "𝒥",
    K: "𝒦",
    L: "ℒ",
    M: "ℳ",
    N: "𝒩",
    O: "𝒪",
    P: "𝒫",
    Q: "𝒬",
    R: "ℛ",
    S: "𝒮",
    T: "𝒯",
    U: "𝒰",
    V: "𝒱",
    W: "𝒲",
    X: "𝒳",
    Y: "𝒴",
    Z: "𝒵",
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "ℯ",
    f: "𝒻",
    g: "ℊ",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "ℴ",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
  },
  monospace: {
    A: "𝙰",
    B: "𝙱",
    C: "𝙲",
    D: "𝙳",
    E: "𝙴",
    F: "𝙵",
    G: "𝙶",
    H: "𝙷",
    I: "𝙸",
    J: "𝙹",
    K: "𝙺",
    L: "𝙻",
    M: "𝙼",
    N: "𝙽",
    O: "𝙾",
    P: "𝙿",
    Q: "𝚀",
    R: "𝚁",
    S: "𝚂",
    T: "𝚃",
    U: "𝚄",
    V: "𝚅",
    W: "𝚆",
    X: "𝚇",
    Y: "𝚈",
    Z: "𝚉",
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
    0: "𝟶",
    1: "𝟷",
    2: "𝟸",
    3: "𝟹",
    4: "𝟺",
    5: "𝟻",
    6: "𝟼",
    7: "𝟽",
    8: "𝟾",
    9: "𝟿",
  },
  circled: {
    A: "Ⓐ",
    B: "Ⓑ",
    C: "Ⓒ",
    D: "Ⓓ",
    E: "Ⓔ",
    F: "Ⓕ",
    G: "Ⓖ",
    H: "Ⓗ",
    I: "Ⓘ",
    J: "Ⓙ",
    K: "Ⓚ",
    L: "Ⓛ",
    M: "Ⓜ",
    N: "Ⓝ",
    O: "Ⓞ",
    P: "Ⓟ",
    Q: "Ⓠ",
    R: "Ⓡ",
    S: "Ⓢ",
    T: "Ⓣ",
    U: "Ⓤ",
    V: "Ⓥ",
    W: "Ⓦ",
    X: "Ⓧ",
    Y: "Ⓨ",
    Z: "Ⓩ",
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
    0: "⓪",
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥",
    7: "⑦",
    8: "⑧",
    9: "⑨",
  },
  squared: {
    A: "🄰",
    B: "🄱",
    C: "🄲",
    D: "🄳",
    E: "🄴",
    F: "🄵",
    G: "🄶",
    H: "🄷",
    I: "🄸",
    J: "🄹",
    K: "🄺",
    L: "🄻",
    M: "🄼",
    N: "🄽",
    O: "🄾",
    P: "🄿",
    Q: "🅀",
    R: "🅁",
    S: "🅂",
    T: "🅃",
    U: "🅄",
    V: "🅅",
    W: "🅆",
    X: "🅇",
    Y: "🅈",
    Z: "🅉",
  },
  fullwidth: {
    A: "Ａ",
    B: "Ｂ",
    C: "Ｃ",
    D: "Ｄ",
    E: "Ｅ",
    F: "Ｆ",
    G: "Ｇ",
    H: "Ｈ",
    I: "Ｉ",
    J: "Ｊ",
    K: "Ｋ",
    L: "Ｌ",
    M: "Ｍ",
    N: "Ｎ",
    O: "Ｏ",
    P: "Ｐ",
    Q: "Ｑ",
    R: "Ｒ",
    S: "Ｓ",
    T: "Ｔ",
    U: "Ｕ",
    V: "Ｖ",
    W: "Ｗ",
    X: "Ｘ",
    Y: "Ｙ",
    Z: "Ｚ",
    a: "ａ",
    b: "ｂ",
    c: "ｃ",
    d: "ｄ",
    e: "ｅ",
    f: "ｆ",
    g: "ｇ",
    h: "𝙝",
    i: "𝙞",
    j: "𝙟",
    k: "𝙠",
    l: "𝙡",
    m: "𝙢",
    n: "𝙣",
    o: "ⓞ",
    p: "𝙥",
    q: "𝙦",
    r: "𝙧",
    s: "𝙨",
    t: "𝙩",
    u: "𝙪",
    v: "𝙫",
    w: "𝙬",
    x: "𝘹",
    y: "𝘆",
    z: "𝙯",
    0: "０",
    1: "１",
    2: "２",
    3: "３",
    4: "４",
    5: "５",
    6: "６",
    7: "７",
    8: "８",
    9: "９",
  },
};

function reverseText(text: string): string {
  return text.split("").reverse().join("");
}

function wideText(text: string): string {
  return text.split("").join(" ");
}

interface TextStyle {
  name: string;
  transform: (text: string) => string;
  description: string;
}

// Helper function to check if character is Chinese
function isChinese(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 0x4e00 && code <= 0x9fff) ||
    (code >= 0x3400 && code <= 0x4dbf) ||
    (code >= 0x20000 && code <= 0x2a6df)
  );
}

function transformTextWithChineseCheck(
  text: string,
  mapName: keyof typeof charMaps,
): string {
  const map = charMaps[mapName];
  return text
    .split("")
    .map((char) => {
      if (isChinese(char)) return char;
      return map[char as keyof typeof map] || char;
    })
    .join("");
}

function upsideDownTextWithChineseCheck(text: string): string {
  const flipMap: Record<string, string> = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "∀",
    B: "q",
    C: "Ɔ",
    D: "p",
    E: "Ǝ",
    F: "Ⅎ",
    G: "פ",
    H: "H",
    I: "I",
    J: "ſ",
    K: "ʞ",
    L: "˥",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "b",
    R: "ɹ",
    S: "S",
    T: "┴",
    U: "∩",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
    0: "0",
    1: "Ɩ",
    2: "ᄅ",
    3: "Ɛ",
    4: "ㄣ",
    5: "ϛ",
    6: "9",
    7: "ㄥ",
    8: "8",
    9: "6",
    ".": "˙",
    ",": "'",
    "!": "¡",
    "?": "¿",
    "'": ",",
    '"': "„",
  };
  return text
    .split("")
    .map((char) => {
      if (isChinese(char)) return char;
      return flipMap[char] || char;
    })
    .reverse()
    .join("");
}

const textStyles: TextStyle[] = [
  {
    name: "Bold Text",
    transform: (text) => transformTextWithChineseCheck(text, "bold"),
    description: "𝗕𝗼𝗹𝗱 𝗨𝗻𝗶𝗰𝗼𝗱𝗲 𝗰𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀",
  },
  {
    name: "Italic Text",
    transform: (text) => transformTextWithChineseCheck(text, "italic"),
    description: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘜𝘯𝘪𝘤𝘰𝘥𝘦 𝘴𝘵𝘺𝘭𝘦",
  },
  {
    name: "Bold Italic",
    transform: (text) => transformTextWithChineseCheck(text, "boldItalic"),
    description: "𝘽𝙤𝙡𝙙 𝙖𝙣𝙙 𝙞𝙩𝙖𝙡𝙞𝙘 𝙘𝙤𝙢𝙗𝙞𝙣𝙚𝙙",
  },
  {
    name: "Script Text",
    transform: (text) => transformTextWithChineseCheck(text, "script"),
    description: "𝒮𝒸𝓇𝒾𝓅𝓉 𝒸𝓊𝓇𝓈𝒾𝓋ℯ 𝓈𝓉𝘆𝓁ℯ",
  },
  {
    name: "Monospace",
    transform: (text) => transformTextWithChineseCheck(text, "monospace"),
    description: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚌𝚘𝚍𝚎 𝚜𝚝𝚢𝚕𝚎",
  },
  {
    name: "Circled",
    transform: (text) => transformTextWithChineseCheck(text, "circled"),
    description: "Ⓒⓘⓡⓒⓛⓔⓓ ⓛⓔⓣⓣⓔⓡⓢ",
  },
  {
    name: "Squared",
    transform: (text) => transformTextWithChineseCheck(text, "squared"),
    description: "🅂🅀🅄🄰🅁🄴🄳 🄻🄴🅃🅃🄴🅁🅂",
  },
  {
    name: "Fullwidth",
    transform: (text) => transformTextWithChineseCheck(text, "fullwidth"),
    description: "Ｆｕｌｌｗｉｄｔｈ　Ａｓｉａｎ　ｓｔｙｌｅ",
  },
  {
    name: "Upside Down",
    transform: upsideDownTextWithChineseCheck,
    description: "uʍop ǝpᴉsdn pǝddᴉlℲ",
  },
  {
    name: "Reversed",
    transform: reverseText,
    description: "Mirror reversed text",
  },
  {
    name: "Wide Spaced",
    transform: wideText,
    description: "E x t r a   s p a c i n g",
  },
  {
    name: "Strikethrough",
    transform: (text) =>
      text
        .split("")
        .map((char) => `${char}\u0336`)
        .join(""),
    description: "Strikethrough text",
  },
];

export function FancyTextGenerator() {
  const [inputText, setInputText] = useState("Transform your text");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("[v0] Failed to copy text:", err);
    }
  };

  return (
    <div className="min-h-screen py-6 md:py-12 px-3 sm:px-4 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-cyan-300 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-300/20 rounded-full blur-xl animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl text-balance text-center">
              {displayedTitle} - Transform Text with Unicode Styles
              <span className="text-cyan-300 animate-pulse">|</span>
            </h1>
            <div className="relative">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-300 animate-pulse delay-300" />
              <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-300" />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed px-2">
            Transform your plain text into stunning Unicode characters.
            <span className="text-cyan-200 font-semibold">
              {" "}
              Copy and paste anywhere
            </span>{" "}
            - social media, messaging apps, and more!
          </p>
        </div>

        {/* Enhanced Input Section */}
        <Card className="p-4 md:p-8 mb-8 md:mb-10 bg-white/20 dark:bg-black/30 backdrop-blur-xl border-white/30 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <label
            htmlFor="input-text"
            className="block text-base md:text-lg font-bold mb-3 md:mb-4 text-white drop-shadow-md"
          >
            ✍️ Enter your text
          </label>
          <Textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type something magical..."
            className="min-h-[100px] md:min-h-[140px] text-base md:text-lg resize-none bg-white/90 dark:bg-black/50 border-white/50 text-foreground placeholder:text-muted-foreground focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300"
          />
        </Card>

        {/* Enhanced Output Section */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-xl text-center mb-6 md:mb-8">
            🎨 Styled Results
          </h2>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {textStyles.map((style, index) => {
              const transformedText = style.transform(inputText);
              const isCopied = copiedIndex === index;

              return (
                <Card
                  key={style.name}
                  className={cn(
                    "p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-2 backdrop-blur-xl",
                    isCopied
                      ? "border-cyan-400 bg-cyan-500/20 shadow-cyan-400/50"
                      : "border-white/30 bg-white/10 dark:bg-black/20 hover:border-cyan-400/70 hover:shadow-cyan-400/30",
                  )}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-6">
                    <div className="flex-1 min-w-0 order-2 sm:order-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="px-2 md:px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/30 to-gray-500/30 border border-white/20 self-start">
                          <h3 className="font-bold text-xs md:text-sm text-white whitespace-nowrap">
                            {style.name}
                          </h3>
                        </div>
                        <span className="text-xs text-white/70 font-medium block">
                          {style.description}
                        </span>
                      </div>
                      <p className="break-words leading-relaxed text-lg md:text-2xl font-medium text-white drop-shadow-sm">
                        {transformedText}
                      </p>
                    </div>
                    <Button
                      size="default"
                      variant={isCopied ? "default" : "outline"}
                      onClick={() => copyToClipboard(transformedText, index)}
                      className={cn(
                        "shrink-0 transition-all duration-300 hover:scale-110 backdrop-blur-sm order-1 sm:order-2 w-full sm:w-auto",
                        isCopied
                          ? "bg-gradient-to-r from-cyan-500 to-gray-500 text-white border-0 shadow-lg"
                          : "bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-cyan-400/50",
                      )}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <p className="text-sm md:text-base text-white/90 font-medium">
              ✨ All transformations use Unicode characters that work across all
              platforms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
