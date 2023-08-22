import './Login.css'
import { Link, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
export default function Register() {
  let [UserName, SetUserName] = useState();
  let [Password, SetPassword] = useState();
  let [CheckTrue, SetCheckTrue] = useState();
  let [CheckPermession, SetPermession] = useState('');
  useEffect(() => {
    console.log(CheckTrue)
  }, [CheckTrue])


  function LoginToPanel() {
    console.log(Password, UserName)
    fetch('https://database1.iran.liara.run/Users')
      .then(res => res.json())
      .then(data => {
        let ResultDataBase = Object.entries(data).filter(datas => {
          return datas['1']['user'] == UserName
        })
        if (ResultDataBase['0']['1']['password'] == Password) {
          if (ResultDataBase['0']['1']['type'] == 'Owner') {
            console.log("Welcome Admin")
            SetPermession(ResultDataBase['0']['1']['type'])
          }
          else {
            console.log("Welcome User")
            SetPermession(ResultDataBase['0']['1']['type'])

          }
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          setTimeout(() => {
            SetCheckTrue(true);

            document.cookie = "checkLogin=True";
          }, 2500)


        } else {
          console.log("Login Failed , Please Try")

        }

      })

  }
  function UserUpdate(event) {
    SetUserName(event.target.value);

  }
  function PasswordUpdate(event) {
    SetPassword(event.target.value);

  }
  return (
    <div className='Back_Form'>
      <div className='container'>
        <div className='Box_Form'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12 Right_Box'>
              <img src='../img/Welcome.jpg ' />
            </div>
            <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12 Left_Box text-center'>
              <h2>ورود به سایت</h2>

              <input onChange={UserUpdate} value={UserName} placeholder='یوزنیم' className='form-control' />
              <input onChange={PasswordUpdate} value={Password} placeholder='پسوورد' className='form-control' />


              <button onClick={LoginToPanel} className='btn btn-info col-6 ms-auto mt-5'>ورود</button>
              <br />
              <Link to='/Register'>
                <button className='btn btn-danger col-6 ms-auto mt-5'>حساب کاربری ندارید ؟ ثبت نام </button>
              </Link>





            </div>

          </div>
          {CheckPermession === 'Owner' ? <Navigate to="/admin" /> : CheckPermession === 'User' ? <Navigate to="/user" /> : null}



        </div>
      </div>
    </div>
  )
}