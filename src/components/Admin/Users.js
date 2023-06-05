import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function DataTable() {
  const [users, Setusers] = useState(true);
  const [pending, setpending] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        Setusers(data)
        setpending(false)
        console.log(data)
      })
  }, [])

  return (
    <Container>
      {!users ? 'Locading ...' : (
        <table className='table'>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>username</th>

            </tr>
          </thead>
          <tbody>
            {Object.entries(users).map((user) => (
              <tr>{console.log(user.name)}</tr>

            )

            )}
          </tbody>
        </table>
      )}
    </Container>
  );
}
