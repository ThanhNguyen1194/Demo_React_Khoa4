import { withFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';

function FormEditUser(props) {
    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory);
    const dispatch = useDispatch();


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
    <form className="container-fuild" onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-4">

            <div className="form-group">
                <p className="font-weight-bold">User Id</p>
                <input value={values.userid} disabled className="form-control" name="userId" />
            </div>


        </div>
        <div className="col-4">
            <div className="form-group">
                <p className="font-weight-bold">Email</p>
                <input value={values.email} className="form-control" name="email" onChange={handleChange} />
            </div>
        </div>
        <div className="col-4">
            <div className="form-group">
                <p className="font-weight-bold">Phone Number</p>
                <input value={values.email} className="form-control" name="phoneNumber" onChange={handleChange} />
            </div>
        </div>
        <div className="col-4">
            <div className="form-group">
                <p className="font-weight-bold">User Name</p>
                <input value={values.email} className="form-control" name="userName" onChange={handleChange} />
            </div>
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
            userName: userEdit.userName,
            email: userEdit.email,
            phoneNumber: userEdit.phoneNumber
        }
    },
    validationSchema: Yup.object().shape({


    }),
    handleSubmit: (values, { props, setSubmitting }) => {

        //Khi người dùng bấm submit => đưa dữ liệu về backedn thông qua api
        // const action = {
        //     type:'UPDATE_PROJECT_SAGA',
        //     prjectUpdate:values
        // }
        //Gọi saga
        props.dispatch({
            type:'UPDATE_PROJECT_SAGA',
            prjectUpdate:values
        })

    },
    displayName: 'EditProjectForm',
})(FormEditUser);

const mapStateToProps = (state) => ({

   userEdit: state.UserLoginCyberBugsReducer.userEdit

})



export default connect(mapStateToProps)(EditUserForm);