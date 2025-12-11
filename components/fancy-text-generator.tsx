"use client";

import { Check, Copy, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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
    h: "ｈ",
    i: "ｉ",
    j: "ｊ",
    k: "ｋ",
    l: "ｌ",
    m: "ｍ",
    n: "ｎ",
    o: "ｏ",
    p: "ｐ",
    q: "ｑ",
    r: "ｒ",
    s: "ｓ",
    t: "ｔ",
    u: "ｕ",
    v: "ｖ",
    w: "ｗ",
    x: "ｘ",
    y: "ｙ",
    z: "ｚ",
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
  doubleStruck: {
    A: "𝔸",
    B: "𝔹",
    C: "ℂ",
    D: "𝔻",
    E: "𝔼",
    F: "𝔽",
    G: "𝔾",
    H: "ℍ",
    I: "𝕀",
    J: "𝕁",
    K: "𝕂",
    L: "𝕃",
    M: "𝕄",
    N: "ℕ",
    O: "𝕆",
    P: "𝕙",
    Q: "ℚ",
    R: "ℝ",
    S: "𝕊",
    T: "𝕋",
    U: "𝕌",
    V: "𝕍",
    W: "𝕎",
    X: "𝕏",
    Y: "𝕐",
    Z: "ℤ",
    a: "𝕒",
    b: "𝕓",
    c: "𝕔",
    d: "𝕕",
    e: "𝕖",
    f: "𝕗",
    g: "𝕘",
    h: "𝕙",
    i: "𝕚",
    j: "𝕛",
    k: "𝕜",
    l: "𝕝",
    m: "𝕞",
    n: "𝕟",
    o: "𝕠",
    p: "𝕡",
    q: "𝕢",
    r: "𝕣",
    s: "𝕤",
    t: "𝕥",
    u: "𝕦",
    v: "𝕧",
    w: "𝕨",
    x: "𝕩",
    y: "𝕪",
    z: "𝕫",
  },
  fraktur: {
    A: "𝔄",
    B: "𝔅",
    C: "ℭ",
    D: "𝔇",
    E: "𝔈",
    F: "𝔉",
    G: "𝔊",
    H: "ℌ",
    I: "ℑ",
    J: "𝔍",
    K: "𝔎",
    L: "𝔏",
    M: "𝔐",
    N: "𝔑",
    O: "𝔒",
    P: "𝔓",
    Q: "𝔔",
    R: "ℜ",
    S: "𝔖",
    T: "𝔗",
    U: "𝔘",
    V: "𝔙",
    W: "𝔚",
    X: "𝔛",
    Y: "𝔜",
    Z: "ℨ",
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
  },
  greek: {
    A: "𝛂",
    B: "𝛃",
    C: "𝛾",
    D: "𝛅",
    E: "𝛆",
    F: "𝛉",
    G: "𝛍",
    H: "𝛈",
    I: "𝛊",
    J: "𝛋",
    K: "𝛌",
    L: "𝛍",
    M: "𝛎",
    N: "𝛏",
    O: "𝛐",
    P: "𝛑",
    Q: "𝛒",
    R: "𝛠",
    S: "𝛋",
    T: "𝛕",
    U: "𝛖",
    V: "𝛗",
    W: "𝛖",
    X: "𝛘",
    Y: "𝛜",
    Z: "𝛝",
    a: "𝛂",
    b: "𝛃",
    c: "𝛾",
    d: "𝛅",
    e: "𝛆",
    f: "𝛉",
    g: "𝛍",
    h: "𝛈",
    i: "𝛊",
    j: "𝛋",
    k: "𝛌",
    l: "𝛍",
    m: "𝛎",
    n: "𝛏",
    o: "𝛐",
    p: "𝛑",
    q: "𝛒",
    r: "𝛠",
    s: "𝛋",
    t: "𝛕",
    u: "𝛖",
    v: "𝛗",
    w: "𝛖",
    x: "𝛘",
    y: "𝛜",
    z: "𝛝",
  },
  smallCaps: {
    A: "ᴀ",
    B: "ʙ",
    C: "ᴄ",
    D: "ᴅ",
    E: "ᴇ",
    F: "ꜰ",
    G: "ɢ",
    H: "ʜ",
    I: "ɪ",
    J: "ᴊ",
    K: "ᴋ",
    L: "ʟ",
    M: "ᴍ",
    N: "ɴ",
    O: "ᴏ",
    P: "ᴘ",
    Q: "ǫ",
    R: "ʀ",
    S: "ꜱ",
    T: "ᴛ",
    U: "ᴜ",
    V: "ᴠ",
    W: "ᴡ",
    X: "x",
    Y: "ʏ",
    Z: "ᴢ",
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "ꜱ",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  },
  superScript: {
    a: "ᵃ",
    b: "ᵇ",
    c: "ᶜ",
    d: "ᵈ",
    e: "ᵉ",
    f: "ᶠ",
    g: "ᵍ",
    h: "ʰ",
    i: "ᶦ",
    j: "ʲ",
    k: "ᵏ",
    l: "ˡ",
    m: "ᵐ",
    n: "ⁿ",
    o: "ᵒ",
    p: "ᵖ",
    q: "ᵠ",
    r: "ʳ",
    s: "ˢ",
    t: "ᵗ",
    u: "ᵘ",
    v: "ᵛ",
    w: "ʷ",
    x: "ˣ",
    y: "ʸ",
    z: "ᶻ",
    A: "ᴬ",
    B: "ᴮ",
    C: "ᶜ",
    D: "ᴰ",
    E: "ᴱ",
    F: "ᶠ",
    G: "ᴳ",
    H: "ᴴ",
    I: "ᴵ",
    J: "ᴶ",
    K: "ᴷ",
    L: "ᴸ",
    M: "ᴹ",
    N: "ᴺ",
    O: "ᴼ",
    P: "ᴾ",
    Q: "ᵠ",
    R: "ᴿ",
    S: "ˢ",
    T: "ᵀ",
    U: "ᵁ",
    V: "ⱽ",
    W: "ᵂ",
    X: "ˣ",
    Y: "ʸ",
    Z: "ᶻ",
  },
  subScript: {
    a: "ₐ",
    b: "b",
    c: "c",
    d: "d",
    e: "ₑ",
    f: "f",
    g: "g",
    h: "h",
    i: "ᵢ",
    j: "ⱼ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    o: "ₒ",
    p: "ₚ",
    q: "q",
    r: "ᵣ",
    s: "ₛ",
    t: "ₜ",
    u: "ᵤ",
    v: "ᵥ",
    w: "w",
    x: "ₓ",
    y: "y",
    z: "z",
    A: "ₐ",
    B: "B",
    C: "C",
    D: "D",
    E: "ₑ",
    F: "F",
    G: "G",
    H: "H",
    I: "ᵢ",
    J: "ⱼ",
    K: "ₖ",
    L: "ₗ",
    M: "ₘ",
    N: "ₙ",
    O: "ₒ",
    P: "ₚ",
    Q: "Q",
    R: "ᵣ",
    S: "ₛ",
    T: "ₜ",
    U: "ᵤ",
    V: "ᵥ",
    W: "W",
    X: "ₓ",
    Y: "Y",
    Z: "Z",
  },
  musical: {
    A: "♫",
    B: "♪",
    C: "♬",
    D: "♩",
    E: "♫",
    F: "♪",
    G: "♬",
    H: "♩",
    I: "♫",
    J: "♪",
    K: "♬",
    L: "♩",
    M: "♫",
    N: "♪",
    O: "♬",
    P: "♩",
    Q: "♫",
    R: "♪",
    S: "♬",
    T: "♩",
    U: "♫",
    V: "♪",
    W: "♬",
    X: "♩",
    Y: "♫",
    Z: "♪",
    a: "♫",
    b: "♪",
    c: "♬",
    d: "♩",
    e: "♫",
    f: "♪",
    g: "♬",
    h: "♩",
    i: "♫",
    j: "♪",
    k: "♬",
    l: "♩",
    m: "♫",
    n: "♪",
    o: "♬",
    p: "♩",
    q: "♫",
    r: "♪",
    s: "♬",
    t: "♩",
    u: "♫",
    v: "♪",
    w: "♬",
    x: "♩",
    y: "♫",
    z: "♪",
  },
  heartStar: {
    A: "♥",
    B: "★",
    C: "☆",
    D: "♥",
    E: "★",
    F: "☆",
    G: "♥",
    H: "★",
    I: "☆",
    J: "♥",
    K: "★",
    L: "☆",
    M: "♥",
    N: "★",
    O: "☆",
    P: "♥",
    Q: "★",
    R: "☆",
    S: "♥",
    T: "★",
    U: "☆",
    V: "♥",
    W: "★",
    X: "☆",
    Y: "♥",
    Z: "★",
    a: "♥",
    b: "★",
    c: "☆",
    d: "♥",
    e: "★",
    f: "☆",
    g: "♥",
    h: "★",
    i: "☆",
    j: "♥",
    k: "★",
    l: "☆",
    m: "♥",
    n: "★",
    o: "☆",
    p: "♥",
    q: "★",
    r: "☆",
    s: "♥",
    t: "★",
    u: "☆",
    v: "♥",
    w: "★",
    x: "☆",
    y: "♥",
    z: "★",
  },
};

// Symbol and decoration libraries
export interface SymbolLibrary {
  name: string;
  category: "arrows" | "separators" | "decorations" | "emojis" | "borders";
  symbols: string[];
  description: string;
}

export const symbolLibraries: SymbolLibrary[] = [
  {
    name: "Elegant Arrows",
    category: "arrows",
    symbols: [
      "→",
      "⇒",
      "⟶",
      "⟹",
      "➜",
      "➤",
      "➡",
      "⇢",
      "↗",
      "↘",
      "↙",
      "↖",
      "↑",
      "↓",
      "←",
      "↕",
      "↔",
      "⇅",
      "⇆",
    ],
    description: "Beautiful arrow symbols for decoration and direction",
  },
  {
    name: "Decorative Separators",
    category: "separators",
    symbols: [
      "❦",
      "❧",
      "✦",
      "✧",
      "★",
      "☆",
      "✪",
      "✫",
      "✬",
      "✭",
      "✮",
      "✯",
      "✰",
      "❀",
      "❁",
      "❂",
      "❃",
      "❄",
      "❅",
      "❆",
      "❇",
      "❈",
      "❉",
      "❊",
      "❋",
    ],
    description: "Ornate divider symbols perfect for text separation",
  },
  {
    name: "Script Dividers",
    category: "separators",
    symbols: [
      "∼",
      "∿",
      "≈",
      "≋",
      "≃",
      "≅",
      "≈",
      "≡",
      "≠",
      "≤",
      "≥",
      "≪",
      "≫",
      "∝",
      "∼",
      "∽",
      "≅",
      "≈",
      "≡",
    ],
    description: "Curved and script-style line separators",
  },
  {
    name: "Border Frames",
    category: "borders",
    symbols: [
      "┌─┐",
      "│ │",
      "└─┘",
      "╔═╗",
      "║ ║",
      "╚═╝",
      "┌─┬─┐",
      "├─┼─┤",
      "└─┴─┘",
      "╔═╦═╗",
      "╠═╬═╣",
      "╚═╩═╝",
      "╔╗",
      "╠╣",
      "╚╝",
    ],
    description: "Frame and border elements for text boxes",
  },
  {
    name: "Heart Collection",
    category: "emojis",
    symbols: [
      "♥",
      "♡",
      "❤",
      "❥",
      "💖",
      "💗",
      "💓",
      "💕",
      "💘",
      "💙",
      "💚",
      "💛",
      "💜",
      "💝",
      "💞",
      "💟",
      "🧡",
      "🤍",
      "🖤",
      "❤️",
    ],
    description: "Various heart symbols for romantic and friendly decoration",
  },
  {
    name: "Star Collection",
    category: "emojis",
    symbols: [
      "★",
      "☆",
      "✦",
      "✧",
      "✩",
      "✪",
      "✫",
      "✬",
      "✭",
      "✮",
      "✯",
      "✰",
      "⭐",
      "🌟",
      "✨",
      "💫",
      "🌠",
      "🌟",
      "✴",
      "🌠",
    ],
    description: "Starry symbols for magical and decorative effects",
  },
  {
    name: "Floral Ornaments",
    category: "decorations",
    symbols: [
      "❀",
      "❁",
      "❂",
      "❃",
      "❄",
      "❅",
      "❆",
      "❇",
      "❈",
      "❉",
      "❊",
      "❋",
      "❦",
      "❧",
      "❢",
      "❣",
      "❀",
      "❁",
      "❂",
      "❃",
    ],
    description: "Floral and botanical decorative elements",
  },
  {
    name: "Geometric Shapes",
    category: "decorations",
    symbols: [
      "◆",
      "◇",
      "◈",
      "◉",
      "●",
      "○",
      "▲",
      "△",
      "▼",
      "▽",
      "■",
      "□",
      "▬",
      "▭",
      "▪",
      "▫",
      "◊",
      "◌",
      "◍",
      "◐",
      "◑",
      "◒",
      "◓",
    ],
    description: "Geometric shapes for modern decorative effects",
  },
];

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
  category: "readable" | "decorative" | "fun" | "professional";
  useCase: string;
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
    description: "Bold Unicode characters",
    category: "readable",
    useCase:
      "Perfect for Instagram nicknames, TikTok bios, and Discord usernames",
  },
  {
    name: "Italic Text",
    transform: (text) => transformTextWithChineseCheck(text, "italic"),
    description: "Italic Unicode style",
    category: "readable",
    useCase:
      "Great for Twitter handles, Facebook profiles, and creative signatures",
  },
  {
    name: "Bold Italic",
    transform: (text) => transformTextWithChineseCheck(text, "boldItalic"),
    description: "Bold and italic combined",
    category: "readable",
    useCase:
      "Ideal for gaming names, special titles, and eye-catching usernames",
  },
  {
    name: "Script Text",
    transform: (text) => transformTextWithChineseCheck(text, "script"),
    description: "Script cursive style",
    category: "decorative",
    useCase:
      "Perfect for romantic messages, elegant signatures, and artistic bios",
  },
  {
    name: "Monospace",
    transform: (text) => transformTextWithChineseCheck(text, "monospace"),
    description: "Monospace code style",
    category: "professional",
    useCase:
      "Great for technical profiles, developer bios, and professional communications",
  },
  {
    name: "Circled",
    transform: (text) => transformTextWithChineseCheck(text, "circled"),
    description: "Circled letters",
    category: "decorative",
    useCase:
      "Excellent for social media posts, hashtags, and decorative text elements",
  },
  {
    name: "Squared",
    transform: (text) => transformTextWithChineseCheck(text, "squared"),
    description: "Squared letters",
    category: "decorative",
    useCase: "Perfect for gaming avatars, channel names, and modern usernames",
  },
  {
    name: "Fullwidth",
    transform: (text) => transformTextWithChineseCheck(text, "fullwidth"),
    description: "Fullwidth Asian style",
    category: "decorative",
    useCase:
      "Great for Asian-style nicknames, aesthetic usernames, and wide text effects",
  },
  {
    name: "Upside Down",
    transform: upsideDownTextWithChineseCheck,
    description: "Upside down text",
    category: "fun",
    useCase:
      "Perfect for funny messages, quirky usernames, and creative social media content",
  },
  {
    name: "Reversed",
    transform: reverseText,
    description: "Mirror reversed text",
    category: "fun",
    useCase:
      "Excellent for hidden messages, mysterious profiles, and optical illusion effects",
  },
  {
    name: "Wide Spaced",
    transform: wideText,
    description: "Extra spacing",
    category: "decorative",
    useCase:
      "Great for emphasis, wide usernames, and spacing effects in social posts",
  },
  {
    name: "Strikethrough",
    transform: (text) =>
      text
        .split("")
        .map((char) => `${char}̶}`)
        .join(""),
    description: "Strikethrough text",
    category: "professional",
    useCase:
      "Perfect for edited content, corrections, and professional documentation",
  },
  {
    name: "Double Struck",
    transform: (text) => transformTextWithChineseCheck(text, "doubleStruck"),
    description: "Blackboard bold mathematical style",
    category: "professional",
    useCase:
      "Great for mathematical notation, academic profiles, and technical documents",
  },
  {
    name: "Fraktur",
    transform: (text) => transformTextWithChineseCheck(text, "fraktur"),
    description: "Old German blackletter style",
    category: "decorative",
    useCase:
      "Perfect for artistic designs, vintage aesthetics, and creative typography",
  },
  {
    name: "Greek Letters",
    transform: (text) => transformTextWithChineseCheck(text, "greek"),
    description: "Greek alphabet characters",
    category: "professional",
    useCase:
      "Excellent for academic content, scientific notation, and educational materials",
  },
  {
    name: "Small Caps",
    transform: (text) => transformTextWithChineseCheck(text, "smallCaps"),
    description: "Small capital letters",
    category: "readable",
    useCase:
      "Great for elegant writing, book titles, and sophisticated social media profiles",
  },
  {
    name: "Super Script",
    transform: (text) => transformTextWithChineseCheck(text, "superScript"),
    description: "Superscript characters",
    category: "professional",
    useCase:
      "Perfect for mathematical expressions, footnotes, and scientific notation",
  },
  {
    name: "Sub Script",
    transform: (text) => transformTextWithChineseCheck(text, "subScript"),
    description: "Subscript characters",
    category: "professional",
    useCase:
      "Excellent for chemical formulas, mathematical subscripts, and technical notation",
  },
  {
    name: "Musical Notes",
    transform: (text) => transformTextWithChineseCheck(text, "musical"),
    description: "Musical symbols and notes",
    category: "fun",
    useCase:
      "Perfect for music-related content, artist profiles, and creative social media posts",
  },
  {
    name: "Hearts & Stars",
    transform: (text) => transformTextWithChineseCheck(text, "heartStar"),
    description: "Decorative hearts and star symbols",
    category: "decorative",
    useCase:
      "Great for romantic messages, cute usernames, and aesthetic social media content",
  },
];

export function FancyTextGenerator() {
  const [inputText, setInputText] = useState("Create Instagram nickname");
  const [copiedAll, setCopiedAll] = useState(false);
  const [previewSelectedStyles, setPreviewSelectedStyles] = useState<
    Set<number>
  >(new Set());
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showAllStyles, setShowAllStyles] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  // New feature states
  const [favoriteStyles, setFavoriteStyles] = useState<Set<number>>(new Set());
  const [recentStyles, setRecentStyles] = useState<number[]>([]);
  const [showSymbolLibrary, setShowSymbolLibrary] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);

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

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("fancy-text-favorites");
    const savedRecent = localStorage.getItem("fancy-text-recent");

    if (savedFavorites) {
      try {
        const favoriteIndices = JSON.parse(savedFavorites);
        setFavoriteStyles(new Set(favoriteIndices));
      } catch (e) {
        console.error("Failed to load favorites:", e);
      }
    }

    if (savedRecent) {
      try {
        const recentIndices = JSON.parse(savedRecent);
        setRecentStyles(recentIndices);
      } catch (e) {
        console.error("Failed to load recent styles:", e);
      }
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (favorites: Set<number>) => {
    localStorage.setItem(
      "fancy-text-favorites",
      JSON.stringify(Array.from(favorites)),
    );
  };

  // Save recent styles to localStorage
  const saveRecentStyles = (recent: number[]) => {
    localStorage.setItem("fancy-text-recent", JSON.stringify(recent));
  };

  // Add style to favorites
  const toggleFavorite = (styleIndex: number) => {
    const newFavorites = new Set(favoriteStyles);
    if (newFavorites.has(styleIndex)) {
      newFavorites.delete(styleIndex);
    } else {
      newFavorites.add(styleIndex);
    }
    setFavoriteStyles(newFavorites);
    saveFavorites(newFavorites);
  };

  // Add style to recent and update
  const _addToRecent = (styleIndex: number) => {
    const updatedRecent = [
      styleIndex,
      ...recentStyles.filter((i) => i !== styleIndex),
    ].slice(0, 10);
    setRecentStyles(updatedRecent);
    saveRecentStyles(updatedRecent);
  };

  // Generate combined text versions
  const copyAllVariants = async () => {
    const allText = textStyles
      .map((style) => `${style.name}: ${style.transform(inputText)}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(allText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error("[v0] Failed to copy all:", err);
    }
  };

  const selectAllPreviewStyles = () => {
    if (previewSelectedStyles.size === displayStyles.length) {
      setPreviewSelectedStyles(new Set());
    } else {
      setPreviewSelectedStyles(new Set(displayStyles.map((_, i) => i)));
    }
  };

  const copySelectedPreviewStyles = () => {
    if (previewSelectedStyles.size === 0) {
      console.log("🟡 copySelectedPreviewStyles: No styles selected");
      // toast.error("🟡 Preview: No styles selected", {
      //   description: "Please select some styles to copy",
      //   duration: 3000,
      // });
      return;
    }

    // Prevent multiple simultaneous calls
    if (isTransforming) return;
    setIsTransforming(true);

    try {
      const selectedText = Array.from(previewSelectedStyles)
        .filter((index) => index < displayStyles.length) // Only use valid indices
        .map((index) => displayStyles[index].transform(inputText))
        .join("\n");

      navigator.clipboard.writeText(selectedText);
      setCopiedAll(true);

      console.log("🟡 copySelectedPreviewStyles called");
      // toast.success(
      //   `🟡 Preview: Copied ${previewSelectedStyles.size} style${previewSelectedStyles.size !== 1 ? "s" : ""}`,
      //   {
      //     description: "Styles copied to clipboard",
      //     duration: 3000,
      //   },
      // );

      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error("[v0] Failed to copy selected:", err);
      // toast.error("🟡 Preview: Failed to copy styles", {
      //   description: "Please try again",
      //   duration: 3000,
      // });
    } finally {
      setIsTransforming(false);
    }
  };

  const previewStyles = textStyles.slice(0, 4);
  const displayStyles = showAllStyles ? textStyles : previewStyles;

  // Clean up preview selection when display mode changes
  useEffect(() => {
    const validIndices = new Set(
      Array.from(previewSelectedStyles).filter(
        (index) => index < displayStyles.length,
      ),
    );
    if (validIndices.size !== previewSelectedStyles.size) {
      setPreviewSelectedStyles(validIndices);
    }
  }, [displayStyles.length, previewSelectedStyles, setPreviewSelectedStyles]);

  return (
    <div className="min-h-screen py-6 md:py-12 px-3 sm:px-4 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-cyan-300 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-300/20 rounded-full blur-xl animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl text-balance text-center">
              {displayedTitle}
              <span className="text-cyan-300 animate-pulse">|</span>
            </h1>
            <div className="relative">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-300 animate-pulse delay-300" />
              <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-300" />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            Create stunning Instagram nicknames, TikTok bios, Discord usernames,
            and special symbols with Unicode text styles.
            <span className="text-cyan-200 font-semibold">
              {" "}
              Copy and paste anywhere!
            </span>
          </p>
        </div>

        {/* Hero Input Section - First Screen Focus */}
        <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-white/25 to-white/10 dark:from-black/40 dark:to-black/20 backdrop-blur-xl border-white/40 shadow-2xl">
          <div className="space-y-8">
            {/* Main CTA Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                🎨 Generate Unique Fonts for Social Media
              </h2>
              <p className="text-lg text-white/90">
                Instagram fonts, TikTok text styles, Discord special characters
              </p>
            </div>

            {/* Large Input Area - Center Focus */}
            <div className="max-w-4xl mx-auto">
              <label
                htmlFor="input-text"
                className="block text-xl font-bold mb-4 text-white drop-shadow-md text-center"
              >
                📝 Enter your text here
              </label>
              <Textarea
                id="input-text"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setIsTransforming(true);
                  // Simulate transformation delay for visual feedback
                  setTimeout(() => setIsTransforming(false), 300);
                }}
                placeholder="Type text to transform, e.g.: Hello World, My Name, 2024..."
                className="min-h-[140px] text-xl md:text-2xl resize-none bg-white/95 dark:bg-black/60 border-2 border-cyan-400/60 text-foreground placeholder:text-muted-foreground focus:border-cyan-400 focus:ring-cyan-400/50 transition-all duration-300 rounded-2xl text-center font-medium"
              />
            </div>

            {/* Quick Templates - More Compact */}
            <div className="bg-black/20 rounded-xl p-4">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center justify-center gap-2">
                🔥 Popular Templates
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {[
                  {
                    name: "🎮 Game ID",
                    text: "ProGamer_2024",
                    category: "Gaming",
                  },
                  { name: "✨ Nickname", text: "CoolUser", category: "Social" },
                  {
                    name: "📝 Signature",
                    text: "Dream Big Work Hard",
                    category: "Personal",
                  },
                  {
                    name: "📱 Bio",
                    text: "Creator | Designer | Dreamer",
                    category: "Social",
                  },
                  {
                    name: "🎵 Music Status",
                    text: "Now Playing 🎵",
                    category: "Entertainment",
                  },
                  {
                    name: "💫 Status",
                    text: "Available ✨",
                    category: "Status",
                  },
                  {
                    name: "🏷️ Tags",
                    text: "#Awesome #Creative",
                    category: "Tags",
                  },
                  {
                    name: "📧 Email",
                    text: "hello@world.com",
                    category: "Contact",
                  },
                  {
                    name: "💼 Job Title",
                    text: "Full Stack Developer",
                    category: "Career",
                  },
                  {
                    name: "🌟 Slogan",
                    text: "Make It Happen!",
                    category: "Motivation",
                  },
                ].map((template) => (
                  <Button
                    key={template.name}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputText(template.text)}
                    className="bg-white/15 hover:bg-white/25 text-white border-cyan-400/30 hover:border-cyan-400/50 transition-all text-xs h-auto py-2 px-2 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs font-medium">{template.name}</span>
                    <span className="text-xs text-white/70 truncate w-full text-center">
                      {template.text}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Real-time Preview - Enhanced */}
            <div className="bg-black/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  ⚡ Live Preview
                  <span className="text-xs bg-green-500/30 px-2 py-1 rounded-full">
                    Instant
                  </span>
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllStyles(!showAllStyles)}
                  className="text-white/60 hover:text-white text-xs"
                >
                  {showAllStyles
                    ? "Collapse"
                    : `View All (${textStyles.length})`}
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {displayStyles.map((style, previewIndex) => {
                  const isSelected = previewSelectedStyles.has(previewIndex);

                  // Find the corresponding index in textStyles
                  const actualIndex = textStyles.findIndex(
                    (s) => s.name === style.name,
                  );
                  const isFavorite =
                    actualIndex >= 0 && favoriteStyles.has(actualIndex);

                  return (
                    <Card
                      key={style.name}
                      className={cn(
                        "p-3 transition-all cursor-pointer group border-2 rounded-lg",
                        isSelected
                          ? "bg-cyan-500/20 border-cyan-400 shadow-cyan-400/30"
                          : "bg-white/10 hover:bg-white/20 border-white/20 hover:border-cyan-400/50",
                      )}
                      onClick={() => {
                        // Toggle selection for preview styles
                        setPreviewSelectedStyles((prev) => {
                          const newSet = new Set(prev);
                          if (newSet.has(previewIndex)) {
                            newSet.delete(previewIndex);
                          } else {
                            newSet.add(previewIndex);
                          }
                          return newSet;
                        });
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-xs text-cyan-200 font-medium">
                              {style.name}
                            </p>
                            <span
                              className={cn(
                                "px-1.5 py-0.5 text-xs rounded-full font-medium",
                                style.category === "readable" &&
                                  "bg-green-500/30 text-green-200",
                                style.category === "decorative" &&
                                  "bg-purple-500/30 text-purple-200",
                                style.category === "fun" &&
                                  "bg-yellow-500/30 text-yellow-200",
                                style.category === "professional" &&
                                  "bg-blue-500/30 text-blue-200",
                              )}
                            >
                              {style.category === "readable" && "📖"}
                              {style.category === "decorative" && "🎨"}
                              {style.category === "fun" && "😄"}
                              {style.category === "professional" && "💼"}
                            </span>
                            {isSelected && (
                              <Check className="w-3 h-3 text-cyan-400" />
                            )}
                            {isFavorite && (
                              <span className="text-red-400 text-xs">❤️</span>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-white break-words leading-relaxed">
                            {style.transform(inputText)}
                          </p>
                          <p className="text-xs text-white/50 mt-1">
                            {style.description}
                          </p>
                          <p className="text-xs text-cyan-300/70 mt-1 font-medium">
                            {style.useCase}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              const textToCopy = style.transform(inputText);
                              navigator.clipboard.writeText(textToCopy);
                              toast.success("Copied to clipboard!", {
                                duration: 2000,
                              });
                            }}
                            className="bg-cyan-500/20 hover:bg-cyan-500/30 text-white border-cyan-400/50 hover:border-cyan-400 shrink-0 text-xs px-2 py-1"
                          >
                            <Copy className="w-3 h-3 mr-1" />
                            Copy
                          </Button>

                          {/* Favorite Button */}
                          {actualIndex >= 0 && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(actualIndex);
                              }}
                              className={cn(
                                "shrink-0 text-xs px-2 py-1",
                                isFavorite
                                  ? "text-red-400 hover:text-red-300"
                                  : "text-white/40 hover:text-red-400",
                              )}
                            >
                              {isFavorite ? "❤️" : "🤍"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Unified Action Controls */}
            <div className="bg-black/20 rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🎯 Action Controls
                </h3>
                <p className="text-white/70 text-sm">
                  Copy styles or manage your selections
                </p>
              </div>

              {/* Main Action Buttons */}
              <div className="flex justify-center mb-6">
                <Button
                  onClick={copyAllVariants}
                  size="default"
                  className={cn(
                    "text-sm font-medium py-4 transition-all duration-300 h-auto max-w-sm",
                    copiedAll
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-400/50"
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-md hover:shadow-cyan-400/30",
                  )}
                >
                  {copiedAll ? (
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>✅ Copied All!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      <span>📋 Copy All ({textStyles.length})</span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Copy Selected Button (when styles are selected) */}
              {previewSelectedStyles.size > 0 && (
                <div className="flex justify-center mb-6">
                  <Button
                    variant="outline"
                    onClick={copySelectedPreviewStyles}
                    className="text-sm font-medium py-4 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-cyan-400/50 h-auto transition-all duration-300 max-w-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Copy className="w-4 h-4" />
                      <span>
                        🎯 Copy Selected ({previewSelectedStyles.size})
                      </span>
                    </div>
                  </Button>
                </div>
              )}

              {/* New Feature Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-6">
                <Button
                  variant="outline"
                  onClick={() => setShowSymbolLibrary(!showSymbolLibrary)}
                  className="text-sm font-medium py-3 bg-purple-500/20 hover:bg-purple-500/30 text-white border-purple-400/50 hover:border-purple-400 h-auto transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span>✨</span>
                    <span>Symbol Library</span>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    // Show favorites and recent styles
                    const favoriteText = Array.from(favoriteStyles)
                      .map(
                        (index) =>
                          `${textStyles[index].name}: ${textStyles[index].transform(inputText)}`,
                      )
                      .join("\n\n");
                    if (favoriteText) {
                      navigator.clipboard.writeText(favoriteText);
                      toast.success("Copied favorites!", { duration: 2000 });
                    }
                  }}
                  className="text-sm font-medium py-3 bg-yellow-500/20 hover:bg-yellow-500/30 text-white border-yellow-400/50 hover:border-yellow-400 h-auto transition-all duration-300"
                  disabled={favoriteStyles.size === 0}
                >
                  <div className="flex items-center gap-2">
                    <span>❤️</span>
                    <span>Favorites ({favoriteStyles.size})</span>
                  </div>
                </Button>
              </div>

              {/* Quick Control Buttons */}
              <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setInputText("")}
                  className="text-white/60 hover:text-white hover:bg-white/10 text-xs"
                >
                  🗑️ Clear Text
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={selectAllPreviewStyles}
                  className="text-white/60 hover:text-white hover:bg-white/10 text-xs"
                >
                  {previewSelectedStyles.size === displayStyles.length
                    ? "🚫 Deselect All"
                    : "✅ Select All"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllStyles(!showAllStyles)}
                  className="text-white/60 hover:text-white hover:bg-white/10 text-xs"
                >
                  {showAllStyles
                    ? "📱 Collapse Preview"
                    : `👁️ View All (${textStyles.length})`}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Sticky Bottom Action Bar - Now uses toast notifications */}

        {/* Symbol Library Section */}
        {showSymbolLibrary && (
          <Card className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 backdrop-blur-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                ✨ Symbol & Decoration Library
              </h2>
              <p className="text-white/80">
                Add beautiful symbols, emojis, and decorations to enhance your
                styled text
              </p>
            </div>

            {/* Selected Symbols Preview */}
            {selectedSymbols.length > 0 && (
              <div className="p-4 bg-black/30 rounded-xl border border-white/20 mb-6">
                <div className="text-center mb-3">
                  <h4 className="text-white font-medium">
                    Selected Symbols Preview:
                  </h4>
                  <p className="text-2xl mt-2">{selectedSymbols.join("")}</p>
                </div>
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={() => {
                      const previewText = `${selectedSymbols.join("")} ${inputText} ${selectedSymbols.join("")}`;
                      navigator.clipboard.writeText(previewText);
                      toast.success("Symbols copied!", { duration: 2000 });
                    }}
                    className="bg-purple-500 hover:bg-purple-400 text-white"
                  >
                    Copy with Text
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedSymbols([])}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Clear Selection
                  </Button>
                </div>
              </div>
            )}

            <div className="grid gap-6 md:gap-8">
              {symbolLibraries.map((library) => (
                <div key={library.name} className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    {library.category === "arrows" && "➡️"}
                    {library.category === "separators" && "❦"}
                    {library.category === "decorations" && "🎨"}
                    {library.category === "emojis" && "😊"}
                    {library.category === "borders" && "▣"}
                    {library.name}
                  </h3>
                  <p className="text-white/70 text-sm">{library.description}</p>

                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                    {library.symbols.map((symbol, symbolIndex) => {
                      const isSelected = selectedSymbols.includes(symbol);
                      const symbolKey = `${library.name}-${symbol}-${symbolIndex}`;
                      return (
                        <Button
                          key={symbolKey}
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedSymbols(
                                selectedSymbols.filter((s) => s !== symbol),
                              );
                            } else {
                              setSelectedSymbols([...selectedSymbols, symbol]);
                            }
                          }}
                          className={cn(
                            "h-12 w-12 text-lg transition-all duration-200",
                            isSelected
                              ? "bg-purple-500/50 border-2 border-purple-300 text-white"
                              : "bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:border-purple-400/50",
                          )}
                        >
                          {symbol}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Favorites & Recent Styles */}
        {(favoriteStyles.size > 0 || recentStyles.length > 0) && (
          <Card className="p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 backdrop-blur-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                ⭐ Your Style Collection
              </h2>
              <p className="text-white/80">
                Quickly access your favorite and recently used styles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Favorites */}
              {favoriteStyles.size > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    ❤️ Favorite Styles ({favoriteStyles.size})
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {Array.from(favoriteStyles).map((styleIndex) => (
                      <div
                        key={styleIndex}
                        className="flex items-center justify-between p-3 bg-white/10 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">
                            {textStyles[styleIndex].name}
                          </p>
                          <p className="text-white/70 text-sm">
                            {textStyles[styleIndex].transform(inputText)}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                textStyles[styleIndex].transform(inputText),
                              );
                              toast.success("Copied!", { duration: 1500 });
                            }}
                            className="text-white/60 hover:text-white"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(styleIndex)}
                            className="text-red-400 hover:text-red-300"
                          >
                            ❤️
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Styles */}
              {recentStyles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    🕒 Recently Used ({recentStyles.length})
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {recentStyles.slice(0, 10).map((styleIndex) => (
                      <div
                        key={`recent-${styleIndex}`}
                        className="flex items-center justify-between p-3 bg-white/10 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">
                            {textStyles[styleIndex].name}
                          </p>
                          <p className="text-white/70 text-sm">
                            {textStyles[styleIndex].transform(inputText)}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                textStyles[styleIndex].transform(inputText),
                              );
                              toast.success("Copied!", { duration: 1500 });
                            }}
                            className="text-white/60 hover:text-white"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(styleIndex)}
                            className={cn(
                              favoriteStyles.has(styleIndex)
                                ? "text-red-400 hover:text-red-300"
                                : "text-white/40 hover:text-red-400",
                            )}
                          >
                            {favoriteStyles.has(styleIndex) ? "❤️" : "🤍"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* FAQ Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to know about using fancy text styles
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* FAQ Items */}
            {[
              {
                key: "platform-compatibility",
                q: "Are these text styles compatible with all platforms?",
                a: "Yes! All our text styles use Unicode characters that work across social media platforms (Instagram, Twitter, Facebook, TikTok), messaging apps, email, and most websites. They may not display in very old systems or certain apps.",
              },
              {
                key: "mobile-compatibility",
                q: "Will these characters display correctly on mobile devices?",
                a: "Absolutely! Modern mobile operating systems (iOS, Android) fully support Unicode characters. These text styles work perfectly on smartphones and tablets.",
              },
              {
                key: "seo-readability",
                q: "Do fancy text styles affect SEO or readability?",
                a: "For accessibility, stick to readable styles like Bold, Italic, or Monospace for important content. Decorative styles are great for social media, bios, and creative projects but may impact screen readers.",
              },
              {
                key: "character-display",
                q: "Which characters might not display properly?",
                a: "Very rare Unicode characters or very old devices might not display certain styles. Bold, Italic, and basic styles have the highest compatibility. If a character doesn't display, try a different style.",
              },
              {
                key: "professional-use",
                q: "Can I use these for business or professional content?",
                a: "Yes! Professional styles like Monospace and Strikethrough work great for business content. For professional documents, we recommend readable styles to ensure accessibility.",
              },
            ].map((faq) => (
              <Card
                key={faq.key}
                className="p-6 bg-white/10 backdrop-blur-xl border-white/20"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Use Tutorial */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📚 How to Use
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Simple steps to transform your text and use it anywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                key: "type-text",
                step: "1",
                title: "Type Your Text",
                description:
                  "Enter or paste your text in the input field above",
                icon: "✏️",
              },
              {
                key: "choose-style",
                step: "2",
                title: "Choose a Style",
                description:
                  "Browse through our 12 beautiful text styles or use the quick templates",
                icon: "🎨",
              },
              {
                key: "copy-paste",
                step: "3",
                title: "Copy & Paste",
                description:
                  "Click the copy button and paste anywhere you want to use it",
                icon: "📋",
              },
              {
                key: "share-everywhere",
                step: "4",
                title: "Share Everywhere",
                description:
                  "Use on social media, messaging apps, emails, or any text field",
                icon: "🌐",
              },
            ].map((step) => (
              <Card
                key={step.key}
                className="p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border-cyan-400/30 text-center"
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <div className="text-sm font-bold text-cyan-300 mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </Card>
            ))}
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
