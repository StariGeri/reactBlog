import React from "react";
import "./Home.css";
import BlogPostCard from "../components/BlogPostCard";
import Curve from "../components/curve";

function Home() {
  return (
    <section className="homeSection">
      <Curve />
      <div className="contentWrapper">
        <BlogPostCard title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." date="2020-01-01" id={1} />
        <BlogPostCard title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." date="2020-01-01" id={2} />
      </div>
    </section>
  );
}

export default Home;
