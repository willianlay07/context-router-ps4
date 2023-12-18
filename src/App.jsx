import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostProvider } from "./contexts/PostProvider";
import { AuthProvider } from "./contexts/AuthProvider";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import IndiPost from "./features/posts/IndiPost";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<IndiPost />} />

              <Route path="/log-in" element={<Login />} />
              <Route path="/auth/profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
