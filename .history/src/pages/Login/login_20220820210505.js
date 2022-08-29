import React, { useState } from 'react'

export default function Login(props) {
    const [userLogin,setUserLogin] = useState({userName:'',password:''})
  return (
    <div className='container'>
        <div className='form-group'>
            <p>Tài Khoản</p>
            <input name='userName' className='form-control' onChange={handleChange}/>
        </div>
    </div>
  )
}
