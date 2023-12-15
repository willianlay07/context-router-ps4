import { useParams } from "react-router-dom";
import { usePost } from "../../contexts/PostProvider";
import Loading from "../../ui/Loading";
import { useEffect } from "react";
import Error from "../../ui/Error";

const IndiPost = () => {
  const { id } = useParams();

  const { isLoading, isError, title, body, fetchPost } = usePost();

  useEffect(() => {
    fetchPost(id);
  }, [id, fetchPost]);

  if (isLoading) return <Loading />;

  if (isError) return <Error message={isError} />;

  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Body: {body}</p>
    </div>
  );
};

export default IndiPost;
