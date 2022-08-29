import React, { useState } from 'react'

export default function Login(props) {
    const [userLogin,setUserLogin] = useState({userName:'',password:''})

    const handleChange = (e) => {
        const {value,name} = e.target
    }

  return (
    <div className='container'>
        <h4 className='display-4'>Đăng Nhập</h4>
        <div className='form-group'>
            <p>UserName</p>
            <input name='userName' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input name='userName' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group'>
            
            <button> Đăng Nhập</button>
        </div>
    </div>
  )
}
