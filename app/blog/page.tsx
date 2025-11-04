import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import Link from "next/link";
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
  description: "Read our latest articles and updates",
};

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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-balance">Blog Posts</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Explore our latest articles and updates
            </p>
          </div>

          {posts.length === 0 ? (
            <Card className="border-2">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No posts published yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-accent border-2">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-accent transition-colors text-balance">
                        {post.title}
                      </CardTitle>
                      <CardDescription>
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
                      <p className="text-muted-foreground line-clamp-3 text-pretty">
                        {post.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-destructive">
            <CardContent className="py-12 text-center space-y-4">
              <p className="text-destructive font-semibold">
                Error loading posts
              </p>
              <p className="text-sm text-muted-foreground">
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
              {!process.env.NEXT_PUBLIC_DIRECTUS_URL && (
                <p className="text-sm text-muted-foreground">
                  Please check if NEXT_PUBLIC_DIRECTUS_URL environment variable
                  is set
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }
}
