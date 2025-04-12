import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from '@mui/material'

const Posts = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setItems(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: 'auto', marginTop: 4 }}>
      <Typography variant="h6" align="center" sx={{ padding: 2 }}>
        Posts Table
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Title</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Posts