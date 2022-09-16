import React from 'react'
import { UserOutlined, LockOutlined,PhoneOutlined, MailOutlined} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';

import { withFormik } from 'formik'
import * as Yup from 'yup';

export default function FormCreateUser(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
  return (
    <form className="container" onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-12">

            <div className="form-group">
                <p className="font-weight-bold">User Id</p>
                <input value={values.id} disabled className="form-control" name="id" />
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
                <input value={values.name} className="form-control" name="name" onChange={handleChange} />
            </div>
            <div className="text-danger">{errors.name}</div>
        </div>
        
    </div>
</form >
  )
}
const CreateUserWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        phoneNumber:'',
        name:'',

    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required!').email('email is invalid!'),
        password: Yup.string().min(6, 'password must have min 6 characters').max(32, 'password  have max 32 characters'),
        phoneNumber: Yup.string().max(11, 'Phone number  have max 11 characters'),
        name: Yup.string().min(1, 'Name must have min 1 characters').max(32, 'Name have max 32 characters'),

    }),
    

    handleSubmit: ({ email, password, phoneNumber, name }, { props, setSubmitting }) => {
    
      


    },
    displayName: 'Create User',
})(FormCreateUser);