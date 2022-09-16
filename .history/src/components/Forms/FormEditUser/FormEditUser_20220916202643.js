import { withFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';

function FormEditUser(props) {
    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory);
    const dispatch = useDispatch();

    useEffect(() => {


        //Load sự kiện submit lên drawer nút submit
        dispatch({ type: 'SET_SUBMIT_EDIT_USER', submitFunction: handleSubmit });
        



    }, [])

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues,
        setFieldValue
    } = props;
  return (
    <form className="container" onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-12">

            <div className="form-group">
                <p className="font-weight-bold">User Id</p>
                <input value={values.userId} disabled className="form-control" name="userId" />
            </div>

        </div>
        <div className="col-12">
            <div className="form-group">
                <p className="font-weight-bold">Email</p>
                <input value={values.email} className="form-control" name="email" onChange={handleChange} />
            </div>
            <div className="text-danger">{errors.email}</div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <p className="font-weight-bold">Phone Number</p>
                <input value={values.phoneNumber} className="form-control" name="phoneNumber" onChange={handleChange} />
            </div>
            <div className="text-danger">{errors.phoneNumber}</div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <p className="font-weight-bold">User Name</p>
                <input value={values.userName} className="form-control" name="userName" onChange={handleChange} />
            </div>
            <div className="text-danger">{errors.userName}</div>
        </div>
        
    </div>
</form >
  )
}

const EditUserForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const { userEdit } = props;

        return {
            userId: userEdit?.userId,
            userName: userEdit.name,
            email: userEdit.email,
            phoneNumber: userEdit.phoneNumber
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required!').email('email is invalid!'),
        userName: Yup.string().min(6, 'password must have min 6 characters').max(32, 'password  have max 32 characters'),
        phoneNumber: Yup.number().min(6, 'password must have min 6 characters').max(12, 'phoneNumber  have max 12 characters')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {

        //Khi người dùng bấm submit => đưa dữ liệu về backedn thông qua api
        // const action = {
        //     type:'UPDATE_PROJECT_SAGA',
        //     prjectUpdate:values
        // }
        //Gọi saga
        // props.dispatch({
        //     type:'UPDATE_PROJECT_SAGA',
        //     prjectUpdate:values
        // })
        console.log(values);
    },
    displayName: 'EditUser',
})(FormEditUser);

const mapStateToProps = (state) => ({

   userEdit: state.UserLoginCyberBugsReducer.userEdit

})



export default connect(mapStateToProps)(EditUserForm);