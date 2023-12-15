import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { usePost } from "../contexts/PostProvider";
import Postlist from "../features/posts/Postlist";

const Posts = () => {
  const { posts, isLoading, isError } = usePost();

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? <Loading /> : <Postlist posts={posts} />}
      {isError && <Error message={isError} />}
    </div>
  );
};

export default Posts;
