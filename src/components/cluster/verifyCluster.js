import EmailIcon from '../../assets/icons/email.svg';
import ClusterAccountVerified from "./clusterAccountVerified";
import {useVerifyCluster} from "../../hooks/customHooks";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {VerifyClusterSchema} from "../../form-schema/verifyClusterSchema";
import {InvalidFormField} from "../Errors/invalidFormField";

const VerifyCluster = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(VerifyClusterSchema)
    })

    const {
        mutate,
        isSuccess,
        isError,
        error
    } = useVerifyCluster()

    const handleVerify = (data) => {
        mutate(data)
    }

    return (
        <>
            {isSuccess && <ClusterAccountVerified />}

            {!isSuccess &&
            <div className="row" style={{maxWidth: '100%'}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="d-flex flex-column align-items-center justify-content-center success">
                        <img src={EmailIcon} alt="Email" />
                        <h3 className="py-2">Almost there!</h3>
                        <span className="pb-1">Enter the code we sent to your email to verify your account.</span>
                        <form onSubmit={handleSubmit(handleVerify)} className="w-100">
                            <input
                                type='number'
                                id='verification_code'
                                className='form-control text-center'
                                {...register('verification_code')}
                                aria-invalid={!!errors.verification_code ? "true" : "false"}
                            />
                            {!!errors.verification_code && <InvalidFormField message={errors.verification_code?.message} />}
                            <button className="btn btn-lg btn-primary fw-lighter mt-3" type="submit">Verify</button>
                            {isError && <p className="text-center text-danger" id="submission-error">{error?.message}</p>}
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            }
        </>
    );
}

export default VerifyCluster;
