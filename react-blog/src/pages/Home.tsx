import "./pageStyles/Home.css";
import BlogPostCard from "../components/BlogPostCard";
import homeSVG from '/homeSvg.svg';

function Home() {
  return (
    <section className="homeSection">
      <h1 className="homeTitle">Latest Posts</h1>
      <div className="contentWrapper">
        <BlogPostCard
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="2020-01-01"
          id={1}
        />
        <BlogPostCard
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="2020-01-01"
          id={2}
        />
        <BlogPostCard
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="2020-01-01"
          id={3}
        />
        <BlogPostCard
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="2020-01-01"
          id={4}
        />
        <BlogPostCard
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          date="2020-01-01"
          id={4}
        />
        <div className="svgContainer">
          <img src={homeSVG} className="homeSVG" />
        </div>
      </div>
    </section>
  );
}

export default Home;
