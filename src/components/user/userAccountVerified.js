import { Link } from "react-router-dom";
import CheckIcon from '../../assets/icons/circle-check.svg';

const UserAccountVerified = () => {
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="d-flex flex-column align-items-center justify-content-center success">
                    <img src={CheckIcon} alt="Success face" />
                    <h3 className="text-center">Your account has been created and verified Successfully!</h3>
                    <Link to='/login'>
                        <button className="btn btn-lg btn-primary fw-lighter mt-2">Go to Login</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default UserAccountVerified;
