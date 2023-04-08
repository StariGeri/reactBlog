import "./pageStyles/Edit.css";
import EditForm from "../components/formComponents/EditForm";



const Edit = () => {
    return (
        <div className="editSection">
            <h1>Edit Blog Post</h1>
            <EditForm />
        </div>
    );
};

export default Edit;