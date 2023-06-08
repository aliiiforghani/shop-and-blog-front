import PostList from "@/components/post";
import axios from "axios";

async function getPosts() {
  const res = await axios.get(
    "http://localhost:5500/api/posts?page=1&limit=10"
  );

  return res.data.data.docs;
}

export default async function Post() {
  const post = await getPosts();
  return(
  <PostList post={post} />)
}