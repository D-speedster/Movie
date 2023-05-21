import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Box_ofiice() {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>تعداد نمایش در صفحه اصلی</Form.Label>
          <Form.Control type='text'></Form.Control>
          <Form.Text>عددی بین 5 الی 10 انتخاب نمایید</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>هرچند وقت یکبار باکس آفیس آپدیت شود</Form.Label>
          <Form.Control type='text'></Form.Control>
          <Form.Text>عددی بین 1 الی 30 انتخاب نمایید .. روز</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            آیتم های مورد نیاز برای فیلم
          </Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="نمایش رتبه"
          />
             <Form.Check
            type="switch"
            id="custom-switch"
            label="فروش کلی"
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="تعداد هفته اکران شده"
          />

           <Form.Check
            type="switch"
            id="custom-switch"
            label="تعداد هفته اکران شده"
          />
        </Form.Group>
      </Form>
    </Container>
  )
}
