import PostList from "@/components/post";
import axios from "axios";

async function getPostsBycategory(categorySlug) {
  const res = await axios.get(
    `http://localhost:5500/api/posts/${categorySlug}`
  );

  return res.data.data.docs ? res.data.data.docs : [res.data.data];
}

export default async function PostByCategory({ params }) {
  const post = await getPostsBycategory(params.categorySlug);

  return (<PostList post={post} />)
}
