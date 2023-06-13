import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
export default function Register() {
  let [Username, SetUsername] = useState('');
  let [Email, SetEmail] = useState('');
  let [Password, SetPassword] = useState('');


  let submitUser = () => {
    let obj = {
      user: Username,
      email: Email,
      password: Password
    }
    console.log('Register SuccessFully')
    console.log(obj);

    fetch('https://database1.iran.liara.run/Users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(data => console.log('End Process', data))
  }
  function EmailChanger(event) {
    SetEmail(event.target.value);
  }
  function UserChanger(event) {
    SetUsername(event.target.value);
  }
  function PasswordChanger(event) {
    SetPassword(event.target.value);

  }
  return (
    <div className='Back_Form'>
      <div className='container'>
        <div className='Box_Form'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12 Right_Box'>
              <img src='./img/Welcome.jpg ' />
            </div>
            <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12 Left_Box text-center'>
              <h2>ثبت نام</h2>

              <input onChange={UserChanger} value={Username} placeholder='یوزنیم' className='form-control' />
              <input onChange={EmailChanger} value={Email} placeholder='ایمیل' className='form-control' />
              <input onChange={PasswordChanger} value={Password} placeholder='پسوورد' className='form-control' />
              <input placeholder='تکرار پسوورد' className='form-control' />

              <button onClick={submitUser} className='btn btn-info col-6 ms-auto mt-5'>ثبت نام</button>
              <br />
              <Link to='/Login'>
                <button className='btn btn-danger col-6 ms-auto mt-5'>حساب کاربری دارید ؟ ورود </button>
              </Link>





            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
