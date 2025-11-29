import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

export const metadata: Metadata = {
  title: "Blog - Fancy Text Generator",
  description:
    "Read our latest articles and updates about Unicode text transformation",
};

export const revalidate = 86400;

export default async function BlogPage() {
  try {
    console.log("[v0] Fetching posts from Directus...");
    console.log("[v0] Directus URL:", process.env.NEXT_PUBLIC_DIRECTUS_URL);

    const posts = await directus.request(
      readItems("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "status",
        ],
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-published_at"],
        limit: -1,
      }),
    );

    console.log("[v0] Successfully fetched", posts.length, "posts");

    return (
      <main className="min-h-screen relative">
        {/* Modern gradient background with animated elements */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 .dark:from-gray-950 .dark:via-slate-950 .dark:to-gray-950">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-pink-500/10 .dark:from-transparent .dark:via-cyan-400/5 .dark:to-pink-400/5" />

          {/* Floating orbs effect */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-400/15 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Main content with glass morphism */}
        <div className="relative z-10">
          <nav className="border-b border-white/20 bg-white/10 .dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-black tracking-tight text-white drop-shadow-lg hover:text-cyan-200 transition-colors duration-300"
              >
                ✨ Fancy Text Generator
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-gray-500 hover:from-cyan-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-gray-500 hover:from-purple-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-gray-500 hover:from-pink-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:from-green-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Contact
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Content container with glass morphism */}
          <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl min-h-screen">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <h1 className="text-6xl font-black mb-6 text-white drop-shadow-2xl uppercase tracking-tight">
                    📝 Blog
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Explore our latest articles and updates about Unicode text
                    transformation
                  </p>
                </div>

                {posts.length === 0 ? (
                  <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 text-center">
                    <p className="text-white/80 text-lg">
                      No posts published yet
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/posts/${post.slug}`}
                        className="group"
                      >
                        <Card className="h-full transition-all hover:shadow-2xl hover:shadow-cyan-400/20 hover:border-cyan-400/70 border-2 border-white/30 rounded-3xl p-8 bg-white/10 .dark:bg-black/20 backdrop-blur-xl">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-2xl group-hover:text-cyan-200 transition-colors text-balance text-white font-bold">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="text-white/60">
                              {new Date(post.published_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-white/80 line-clamp-3 text-pretty leading-relaxed">
                              {post.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("[v0] Error fetching posts:", error);
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      cause: error instanceof Error ? error.cause : undefined,
      stack: error instanceof Error ? error.stack : undefined,
      directusUrl: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    });

    return (
      <main className="min-h-screen relative">
        {/* Modern gradient background with animated elements */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 .dark:from-gray-950 .dark:via-slate-950 .dark:to-gray-950">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-pink-500/10 .dark:from-transparent .dark:via-cyan-400/5 .dark:to-pink-400/5" />

          {/* Floating orbs effect */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-400/15 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Main content with glass morphism */}
        <div className="relative z-10">
          <nav className="border-b border-white/20 bg-white/10 .dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-black tracking-tight text-white drop-shadow-lg hover:text-cyan-200 transition-colors duration-300"
              >
                ✨ Fancy Text Generator
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-gray-500 hover:from-cyan-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-gray-500 hover:from-purple-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-gray-500 hover:from-pink-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-gray-500 hover:from-green-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Contact
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Content container with glass morphism */}
          <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl min-h-screen">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-red-500/50 text-center">
                  <p className="text-red-300 font-bold text-xl mb-4">
                    Error loading posts
                  </p>
                  <p className="text-white/80 text-lg mb-6">
                    {error instanceof Error ? error.message : "Unknown error"}
                  </p>
                  {!process.env.NEXT_PUBLIC_DIRECTUS_URL && (
                    <p className="text-white/60">
                      Please check if NEXT_PUBLIC_DIRECTUS_URL environment
                      variable is set
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
