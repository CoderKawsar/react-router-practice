import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FriendDetails from "./components/FriendDetail/FriendDetails";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/PostDetails/PostDetails";
import Post from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/posts" element={<Post />}>
          <Route path=":postId" element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path="/friend/:friendId" element={<FriendDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
