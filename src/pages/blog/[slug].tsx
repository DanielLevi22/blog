import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
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