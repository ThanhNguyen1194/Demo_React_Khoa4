import React, { useState } from 'react'

export default function Login(props) {
    const [userLogin,setUserLogin] = useState({userName:'',password:''})
console.log(userLogin)
    const handleChange = (e) => {
        const {value,name} = e.target

        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userLogin.userName === 'admin' && userLogin.password === 'admin') {
            //về lại trang trước đó
            props.history.goBack()
            //trả về trang chỉ định
            props.history.push('/home')
            //trả về trang chỉ định nhưng khi bấm quay về không còn về trang login nữa mà là trang trước login
        }else{
            alert('mật khẩu hoặc tài khoản ko đúng')
            return
        }
    }

  return (
    <form className='container' onSubmit={handleSubmit}>
        <h4 className='display-4'>Đăng Nhập</h4>
        <div className='form-group'>
            <p>UserName</p>
            <input name='userName' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input name='password' className='form-control' onChange={handleChange}/>
        </div>
        <div className='form-group'>
            
            <button className='btn btn-primary'> Đăng Nhập</button>
        </div>
    </form>
  )
}
