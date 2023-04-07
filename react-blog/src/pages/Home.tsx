import "./pageStyles/Home.css";
import homeSVG from '/homeSvg.svg';
import BlogPosts from "../components/BlogPosts";

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
    </section>
  );
}

export default Home;
