import './componentStyles/EditForm.css'
import Button from './Button';
import { Link } from 'react-router-dom';


const EditForm = () => {
    return (
        <div className="editFormWrapper">
            <form className='editForm'>
                <label>
                    Title
                </label>
                <input type="text" />
                <label>
                    Date
                </label>
                <input type="text" />

                <label>
                    Content
                </label>
                <textarea />
                <div className="formButtonContainer">
                    <Button isFilled={true} type="submit" text="Save Changes" />
                    <Link to="/Admin">
                        <Button isOutlined={true} text="Discard" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditForm;