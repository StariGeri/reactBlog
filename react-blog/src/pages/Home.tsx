import "./pageStyles/Home.css";
import homeSVG from '/homeSvg.svg';
import BlogPosts from "../components/blogComponents/BlogPosts";

import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <section className="homeSection">
      <div className="pageButtonContainer">

      </div>
      <h1 className="homeTitle">Latest Posts</h1>
      <div className="contentWrapper">
        <BlogPosts />
        <div className="svgContainer">
          <img src={homeSVG} className="homeSVG" />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Home;
