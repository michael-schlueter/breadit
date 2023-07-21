import MiniCreatePost from "@/components/MiniCreatePost";
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = params;

  const session = await getAuthSession();

  const subreddit = await db.subreddit.findFirst({
    where: {
      name: slug,
    },
    // JOIN in prisma
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
          comments: true,
          subreddit: true,
        },
        // Only take a specific amount of posts
        take: INFINITE_SCROLLING_PAGINATION_RESULTS,
      },
    },
  });

  // Returns 404 error if subreddit does not exist
  if (!subreddit) return notFound();

  return <>
    <h1 className="font-bold text-3xl md:text-4xl h-14">
        r/{subreddit.name}
    </h1>
    <MiniCreatePost session={session} />
    {/* TODO: Show posts in user feed */}
  </>;
};

export default page;
