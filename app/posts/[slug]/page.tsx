import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
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
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      notFound();
    }

    const { title, content, description, published_at } = post;

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {isEnabled && (
            <Card className="mb-6 border-accent bg-accent/10">
              <CardContent className="py-3">
                {/* Draft mode enabled - You are previewing unpublished content */}
                <p className="text-sm font-medium text-accent-foreground">
                  Draft mode enabled - You are previewing unpublished content
                </p>
              </CardContent>
            </Card>
          )}

          <article>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-4xl font-bold mb-2 text-balance">
                  {title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {new Date(published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {description && (
                  <p className="text-lg text-muted-foreground mt-4 text-pretty">
                    {description}
                  </p>
                )}
              </CardHeader>
              <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {content}
                </div>
              </CardContent>
            </Card>
          </article>
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
      title: post.seo?.title || post.title,
      description: post.seo?.meta_description || post.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}
