import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillSetting, AiOutlineComment, AiTwotoneHome } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { MdLocalMovies, MdMovie, MdOutlineMovieCreation, MdSlowMotionVideo } from 'react-icons/md';
import { RiVipLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { IoLogoDropbox } from 'react-icons/io'
import './SideBar.css';

export default function SideBar() {
    return (
        <div className='menu-right '>



            <ul className='menu-right-ul'>
                <Link to='/Admin'><li> <AiTwotoneHome></AiTwotoneHome>صفحه اصلی</li></Link>

                <h6>پست جدید
                </h6>
                <Link to='addMovie'><li> <MdMovie></MdMovie>افزودن فیلم</li></Link>
                <Link to='addSerie'><li> <BiCameraMovie></BiCameraMovie>افزودن سریال</li></Link>
                <Link to='addTrailer'><li> <MdSlowMotionVideo></MdSlowMotionVideo>افزودن تریلر</li></Link>
                <Link to='addNews'><li> <FaRegNewspaper></FaRegNewspaper>افزودن اخبار</li></Link>
                <Link to='newCollection'><li> <BsFillCollectionPlayFill></BsFillCollectionPlayFill>کالکشن ها</li></Link>

            </ul>
            <ul className='menu-right-ul'>
                <h6>مدیریت</h6>
                <Link to='User-Management'><li> <HiUsers></HiUsers>مدیریت کاربران</li></Link>
                <Link to='Movies-Management'><li><MdLocalMovies></MdLocalMovies>مدیریت فیلم ها  </li></Link>
                <Link to='Series-Management'><li> <MdOutlineMovieCreation></MdOutlineMovieCreation>مدیریت سریال ها</li></Link>
                <Link to='Comments-Management'><li><AiOutlineComment></AiOutlineComment> مدیریت کامنت ها</li></Link>
            </ul>
            <ul className='menu-right-ul'>
                <h6>تنظیمات</h6>
                <Link to='BoxOffice'><li><IoLogoDropbox></IoLogoDropbox> باکس آفیس</li></Link>
                <Link to='Plans'><li> <RiVipLine></RiVipLine>اشتراک ها</li></Link>
                <Link to='setting'><li> <AiFillSetting> </AiFillSetting>تنظیمات کلی قالب</li></Link>

            </ul>

        </div>
    )
}
