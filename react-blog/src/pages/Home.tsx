import "./pageStyles/Home.css";
import homeSVG from '/homeSvg.svg';
import BlogPosts from "../components/BlogPosts";


const blogPosts = [
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-01" },
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-02" },
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-03" },
];

function Home() {
  return (
    <section className="homeSection">
      <div className="pageButtonContainer">

      </div>
      <h1 className="homeTitle">Latest Posts</h1>
      <div className="contentWrapper">
        <BlogPosts posts={blogPosts} />
        <div className="svgContainer">
          <img src={homeSVG} className="homeSVG" />
        </div>
      </div>
    </section>
  );
}

export default Home;
