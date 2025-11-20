import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import './Comment.css'
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { ImForward } from 'react-icons/im';
import ApiRequest from '../../../Services/Axios/config';

export default function Comment(props) {
    let [LoadComment, SetComments] = useState('');
    let [comment, Setcomment] = useState('');
    let [nameMember, SetnameMember] = useState('');
    let [EmailComment, SetnEmailComment] = useState('');
    let [selectedAvatar, setSelectedAvatar] = useState(null);
    let [likes, setLikes] = useState({});
    let [dislikes, setDislikes] = useState({});
    useEffect(() => {
        ApiRequest.get('/Comments').then(data=>{
            const matchingData = Object.values(data).filter(i => i.idMovie === props.id);
            SetComments(matchingData);
        })

    }, [props.id]);

    const CommentHandlr = () => {
        if (!comment.trim() || !nameMember.trim() || !EmailComment.trim()) {
            alert('لطفا تمام فیلدها را پر کنید');
            return;
        }

        let obj = {
            idMovie: props.id,
            member: nameMember,
            email: EmailComment,
            data: new Date().toISOString().slice(0, 10),
            comment: comment,
            avatar: selectedAvatar || Avatars[0].src,
            likes: 0,
            dislikes: 0
        }

        ApiRequest.post('/Comments', obj).then(data => {
            alert('نظر شما با موفقیت ثبت شد');
            Setcomment('');
            SetnameMember('');
            SetnEmailComment('');
            setSelectedAvatar(null);
            // Refresh comments
            ApiRequest.get('/Comments').then(data => {
                const matchingData = Object.values(data).filter(i => i.idMovie === props.id);
                SetComments(matchingData);
            });
        }).catch(err => {
            console.error('Error posting comment:', err);
            alert('خطا در ثبت نظر');
        });
    }

    const handleLike = (commentId) => {
        setLikes(prev => ({
            ...prev,
            [commentId]: (prev[commentId] || 0) + 1
        }));
    }

    const handleDislike = (commentId) => {
        setDislikes(prev => ({
            ...prev,
            [commentId]: (prev[commentId] || 0) + 1
        }));
    }

    const handleAvatarSelect = (avatarSrc) => {
        setSelectedAvatar(avatarSrc);
    }
    const CommentText = (event) => {
        Setcomment(event.target.value)
    }
    const NameHandler = (event) => {
        SetnameMember(event.target.value)
    }
    const EmailCommentFun = (event) => {
        SetnEmailComment(event.target.value)

    }
    let [Avatars, SetAvatars] = useState([
        { name: 'Boy1', src: '/img/avatar/boy_2.png' },
        { name: 'Boy2', src: '/img/avatar/boy_3.png' },
        { name: 'Boy3', src: '/img/avatar/boy_4.png' },
        { name: 'Girl1', src: '/img/avatar/girl_3.jpg' },
        { name: 'Girl2', src: '/img/avatar/girl_2.png' },
        { name: 'Girl3', src: '/img/avatar/girl_1.jpg' }
    ])
    return (
        <div className='section_Comment mt-5' style={{ color: 'white' }}>
            <Container>
                <Row>
                    <Col lg={4} md={4} xs={12} sm={12} className="Info_Comment me-lg-3 me-md-3">
                        <h6>Send a Comment</h6>
                        <textarea onChange={CommentText} className='form-control' placeholder='نظر شما '></textarea>
                        <br />
                        <label>Name</label>
                        <input onChange={NameHandler} placeholder='نام' className='form-control' />
                        <br />
                        <label>Email</label>
                        <input onChange={EmailCommentFun} placeholder='ایمیل ...' className='form-control' />
                        <hr />
                        <Row>
                            {Avatars.map((item, index) => {
                                return (
                                    <Col lg={4} xs={2} sm={2} key={index}>
                                        <img 
                                            src={item.src} 
                                            alt={`آواتار ${item.name}`}
                                            onClick={() => handleAvatarSelect(item.src)}
                                            style={{
                                                cursor: 'pointer',
                                                border: selectedAvatar === item.src ? '3px solid #17a2b8' : 'none',
                                                borderRadius: '50%',
                                                transition: 'all 0.3s'
                                            }}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>

                        <br />
                        <button onClick={CommentHandlr} className='btn btn-info'>انتشار کامنت</button>

                    </Col>
                    <Col lg={7} md={8} xs={12} sm={12} className="Comments mx-lg-3 mx-md-3">
                        <br /><br /><br />
                        {Object.values(LoadComment).map((b, index) => (
                            <Card key={index} className='mb-3'>
                                <Card.Header>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img 
                                                width='60px' 
                                                height='60px' 
                                                src={b.avatar || Avatars[2].src} 
                                                alt={`آواتار ${b.member}`}
                                                style={{ borderRadius: '50%' }}
                                            />
                                            <span className='mt-3 me-2' style={{ fontSize: '19px' }}>{b.member}</span>
                                        </div>

                                        <div className='d-flex mt-3 '>
                                            <div className='me-2'>
                                                <button 
                                                    onClick={() => handleLike(index)}
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                    aria-label="لایک"
                                                >
                                                    <BiLike style={{ color: 'green', fontSize: '24px' }} />
                                                    <span style={{ fontSize: '14px', marginLeft: '5px' }}>
                                                        {(b.likes || 0) + (likes[index] || 0)}
                                                    </span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDislike(index)}
                                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                    aria-label="دیسلایک"
                                                >
                                                    <BiDislike style={{ color: 'red', fontSize: '24px' }} />
                                                    <span style={{ fontSize: '14px', marginLeft: '5px' }}>
                                                        {(b.dislikes || 0) + (dislikes[index] || 0)}
                                                    </span>
                                                </button>
                                            </div>
                                            <span>{b.data}</span>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p>{b.comment}</p>
                                    <button 
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            color: '#17a2b8', 
                                            cursor: 'pointer' 
                                        }}
                                        aria-label="پاسخ به نظر"
                                    >
                                        <ImForward /><span> پاسخ</span>
                                    </button>
                                </Card.Body>
                            </Card>
                        ))}


                    </Col>
                </Row>
            </Container>

        </div>
    )
}
