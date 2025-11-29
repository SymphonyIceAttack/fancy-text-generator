"use client";

import { readItems } from "@directus/sdk";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

interface RecentPostsProps {
  posts: Array<{
    id: string;
    title: string;
    slug: string;
    description?: string;
    published_at: string;
  }>;
}

export async function getRecentPosts(currentSlug: string) {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: currentSlug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

    return posts;
  } catch (error) {
    console.error("[v0] Error fetching recent posts:", error);
    return [];
  }
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const router = useRouter();

  const handlePostClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    router.push(`/posts/${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <h2 className="text-4xl font-black mb-4 text-white drop-shadow-lg text-center">
          📖 Recent Posts
        </h2>
        <p className="text-white/80 text-lg mb-8 text-center">
          Check out our latest articles
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              onClick={(e) => handlePostClick(e, post.slug)}
              className="group"
            >
              <Card className="h-full border-2 border-white/30 bg-white/10 .dark:bg-black/20 backdrop-blur-xl rounded-2xl hover:border-cyan-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                {post.description && (
                  <CardContent className="p-6 pt-0">
                    <p className="text-white/80 text-sm line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
