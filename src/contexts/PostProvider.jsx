import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const PostContext = createContext();
const BASE_URL = "https://jsonplaceholder.typicode.com/";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchAllPost() {
      setIsLoading(true);
      setIsError("");

      try {
        const res = await fetch(`${BASE_URL}posts/`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw Error("Something went wrong!");
        }

        const data = await res.json();

        setIsLoading(false);
        setPosts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsLoading(false);
          setIsError(error.message);
        }
      }
    }

    fetchAllPost();

    return () => {
      controller.abort();
    };
  }, []);

  const fetchPost = useCallback(async function fetchPost(id) {
    setIsLoading(true);
    setIsError("");
    try {
      const res = await fetch(`${BASE_URL}posts/${id}`);

      if (!res.ok) {
        throw Error("Something went wrong!");
      }

      const data = await res.json();

      setIsLoading(false);
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  }, []);

  // async function fetchPost(id) {
  //   setIsLoading(true);
  //   setIsError("");
  //   try {
  //     const res = await fetch(`${BASE_URL}posts/${id}`);

  //     if (!res.ok) {
  //       throw Error("Something went wrong!");
  //     }

  //     const data = await res.json();

  //     setIsLoading(false);
  //     setTitle(data.title);
  //     setBody(data.body);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setIsError(error.message);
  //   }
  // }

  return (
    <PostContext.Provider
      value={{
        posts,
        isLoading,
        isError,
        title,
        body,
        fetchPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

function usePost() {
  const context = useContext(PostContext);

  if (context === undefined) {
    throw Error("PostContext is outside of PostProvider");
  }

  return context;
}

export { PostProvider, usePost };
