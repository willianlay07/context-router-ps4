import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostProvider } from "./contexts/PostProvider";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import IndiPost from "./features/posts/IndiPost";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<IndiPost />} />

            <Route path="/log-in" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
