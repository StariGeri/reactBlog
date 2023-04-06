import "./pageStyles/Admin.css";
import BlogPosts from "../components/BlogPosts";
import Button from "../components/Button";

const blogPosts = [
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-01"},
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-02"},
  { title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", date: "2022-01-03"},
];

function Admin() {
  return (
    <div className="adminSection">
      <h1 className="adminTitle">Admin</h1>
      <BlogPosts posts={blogPosts} isAdmin={true}/>
    </div>
  );
}
export default Admin;
