import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Form.Group>
        <Form.Label>تعداد نمایش اسلاید برای هر ژانر</Form.Label>
        <Form.Select>
          <option>انتخاب تعداد</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>

        </Form.Select>
        <Form.Text>تعداد پیشفرض 10 میباشد</Form.Text>
      </Form.Group>
    </Container>
  )
}
