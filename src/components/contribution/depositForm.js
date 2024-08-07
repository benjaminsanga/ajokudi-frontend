import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toFirstLetterUpperCase } from "../../utils/utilities";
import Loading from "../../utils/loading";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {DepositSchema} from "../../form-schema/depositSchema";
import {InvalidFormField} from "../Errors/invalidFormField";
import {useGetProjectByCode, useProjectDeposit} from "../../hooks/customHooks";

const DepositForm = () => {

    // set project 
    const { code } = useParams();
    const [errorMessage, setErrorMessage] = useState("");
    
    // consumer_id
    // consumer_mac

    const [projectInfo, setProjectInfo] = useState({});

    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm({
        resolver: yupResolver(DepositSchema)
    })

    const {
        isLoading,
        isSuccess,
        data,
        isError,
        error
    } = useGetProjectByCode(code)

    const {
        isLoading: depositIsLoading,
        isSuccess: depositIsSuccess,
        data: depositData,
        isError: depositIsError,
        error: depositError,
        mutate: depositMutate
    } = useProjectDeposit()

    useEffect(() => {
        if (isSuccess) {
            setProjectInfo(data?.data?.result);
        }
        if (isError) {
            console.log(error, 'error')
            setErrorMessage(error?.response?.data?.message);
        }
    }, [data?.data, error, isError, isSuccess]);

    useEffect(() => {
        if (depositIsSuccess) {
            console.log(depositData, 'depositData')
            window.location.href = depositData?.data?.data?.link;
        }
        if (depositIsError) {
            console.log(depositError, 'error')
            setErrorMessage(`Error: ${depositError?.response?.data?.message}`);
        }
    }, [depositIsSuccess, depositIsError, depositData, error, depositError])

    const handleDepositSubmit = (data) => {
        console.log(data, 'form data')
        data['project_Id'] = code;
        data['project_title'] = projectInfo?.project_name
        depositMutate(data)
    }

    return (
        <>
            {/* <PaymentSuccessful projectCode={projectInfo?.project_code} /> */}
            {isLoading && <Loading />}
            {isSuccess && <div id="deposit" className='container'>
                <div className="d-flex flex-column align-items-center">
                    <h2 className="mb-2">Deposit for &nbsp;
                        <span className="text-secondary">
                            { toFirstLetterUpperCase(projectInfo?.project_name)}
                        </span>
                    </h2>
                    <span className="mb-5">Purpose of project: {toFirstLetterUpperCase(projectInfo?.project_purpose)}</span>
                    {depositIsLoading && <h4 className="text-center text-secondary p-3">Initializing...</h4>}
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(handleDepositSubmit)}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name" className="form-label">Name of Depositor</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder=""
                                        className="form-control"
                                        id="name"
                                        {...register('name')}
                                        aria-invalid={!!errors?.name ? 'true' : 'false'}
                                    />
                                    {!!errors.name && <InvalidFormField message={errors.name?.message} />}
                                    <input type="hidden" value="xxx-xxxx-xxx" id="project_id" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        placeholder=""
                                        className="form-control"
                                        id="phone"
                                        {...register('phone')}
                                        aria-invalid={!!errors?.phone ? 'true' : 'false'}
                                    />
                                    {!!errors.phone && <InvalidFormField message={errors.phone?.message} />}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder=""
                                        className="form-control"
                                        id="email"
                                        {...register('email')}
                                        aria-invalid={!!errors?.email ? 'true' : 'false'}
                                    />
                                    {!!errors.email && <InvalidFormField message={errors.email?.message} />}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        placeholder=""
                                        className="form-control"
                                        id="amount"
                                        {...register('amount')}
                                        aria-invalid={!!errors?.amount ? 'true' : 'false'}
                                    />
                                    {!!errors.amount && <InvalidFormField message={errors.amount?.message} />}
                                </div>
                            </div>
                            <div>
                                <em className="text-warning">
                                    Please note:<br/>
                                    * This transaction is non-refundable.<br/>
                                    * Your data will be stored for reference.<br/>
                                </em>
                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-primary fw-lighter btn-lg"
                                >Continue</button>
                            </div>
                            <p className="text-center text-danger" id="payment-error">{errorMessage}</p>
                        </form>
                        <div>
                            <p><Link to="/create-account">Register</Link></p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>}
        </>
    );
};

export default DepositForm;
