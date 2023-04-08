import "./pageStyles/Admin.css";
import BlogPosts from "../components/blogComponents/BlogPosts";


function Admin() {
  return (
    <div className="adminSection">
      <h1 className="adminTitle">Admin</h1>
      <BlogPosts isAdmin={true}/>
    </div>
  );
}
export default Admin;
