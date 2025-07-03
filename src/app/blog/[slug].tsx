import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const post = allPosts.find((post) => post.slug === slug);
  
  if (!post) return null;
  
  return (
    <PostPage 
      post={post}
    />
  )
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 5);
  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;



export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps;    