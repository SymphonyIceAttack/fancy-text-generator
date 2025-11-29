import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownWithIds } from "@/components/blog/markdown-with-ids";
import { PostCTA } from "@/components/blog/post-cta";
import { RecentPosts } from "@/components/blog/recent-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import directus from "@/lib/directus";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      notFound();
    }

    const { title, content, description, published_at, imageurl } = post;

    const recentPosts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: slug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

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
                <Link
                  href="/posts"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-gray-500 hover:from-yellow-400 hover:to-gray-400 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  Blog
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Content container with glass morphism */}
          <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl min-h-screen">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-7xl mx-auto">
                {isEnabled && (
                  <div className="mb-6 bg-cyan-500/20 border border-cyan-400/50 rounded-xl p-4">
                    <p className="text-cyan-200 font-medium">
                      Draft mode enabled - You are previewing unpublished
                      content
                    </p>
                  </div>
                )}

                <div className="flex gap-8">
                  <article className="flex-1 min-w-0">
                    <Card className="border-2 border-white/30 bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-xl">
                      <CardHeader className="p-8">
                        <CardTitle className="text-4xl font-black mb-4 text-balance text-white drop-shadow-lg">
                          {title}
                        </CardTitle>
                        <p className="text-white/60 text-lg">
                          {new Date(published_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        {description && (
                          <p className="text-white/90 text-xl mt-6 text-pretty leading-relaxed">
                            {description}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="prose prose-lg prose-invert max-w-none p-8 pt-0">
                        {imageurl && (
                          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                              fill={true}
                              src={`https://symcloud.top/${imageurl}`}
                              alt={title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <MarkdownWithIds content={content} />
                      </CardContent>
                    </Card>

                    <PostCTA />

                    <RecentPosts posts={recentPosts} />
                  </article>

                  <aside className="w-64 shrink-0 hidden md:block">
                    <TableOfContents content={content} />
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("[v0] Error fetching post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        limit: -1,
      }),
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("[v0] Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      return {
        title: "Post not found",
      };
    }

    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}
