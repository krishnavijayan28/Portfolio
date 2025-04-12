import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Box,Card,CardContent,Typography,CardActionArea,Button} from '@mui/material'

const Dashboard = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>setItems(response.data))
        .catch(error=>console.error(error))
    },[])
  return (
    <h1 style={{textAlign:"center"}}> OUR BLOGS
    <Box
      sx={{
        width: '100%',
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap:1,
      }}
    >
      {items.map((items,id) => (
        <Card key={items.id}>
          <CardActionArea
            data-active={items === id ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {items.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {items.body}
              </Typography>
              <Button size="small" >Share</Button>
              <Button size="small" >learn more...</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </h1>
  );
}

export default Dashboard