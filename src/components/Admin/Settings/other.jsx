import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'


export default function other() {
    return (
        <Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>زبان سایت</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>انتخاب زبان</option>
                    <option value="1">فارسی</option>
                    <option value="2">انگلیسی</option>

                </Form.Select>
                <Form.Text>
                    به صورت پیشفرض زبان فارسی میباشد
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>حالت شب و روز</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>انتخاب حالت شب و روز</option>
                    <option value="1">حالت شب / تیره</option>
                    <option value="2">حالت روز / روشن</option>
                    <option value="3">انتخاب کاربر</option>


                </Form.Select>
                <Form.Text>
                    به صورت پیشفرض تم شب / تیره میاشد
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>اشتراک سایت</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>انتخاب حالت رایگان و اشتراکی</option>
                    <option value="0">حالت اشتراکی / نیاز به خرید برای دانلود</option>
                    <option value="1">حالت رایگان / بدون نیاز به خرید اشتراک</option>


                </Form.Select>
                <Form.Text>
                    به صورت پیشفرض سایت به صورت رایگان میباشد
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>مرچنت کد</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text >
                    برای فعالسازی درگاه نیاز هست این مورد پر شود
                </Form.Text>
            </Form.Group>
        </Container>
    )
}
