import React from 'react'
import{
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Paper
} from '@mui/material'
import './BlogForm.css'

const BlogForm = () => {
  return (
    <Container maxWidth='xs'>
        <Paper elevation={8} sx={{p:4,mt:4,mb:4}}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:'center',
               
            }}>
                <Typography component='h1' variant="h5" gutterBottom>
                    BLOG FORM
                </Typography>
                <Box component="form" 
                     sx={{mt:1}}>
                      <TextField 
                        sx={{mb:3}}
                         required
                         fullWidth
                         id="bname"
                         label="Blog Name:"
                         name="blogname"
                         type="text"
                         autoFocus/>
                      <TextField
                      sx={{mb:3}}
                        required
                        fullWidth
                        id="desc"
                        label="Description"
                        multiline
                        rows={4}                       
                      />
                      <TextField 
                        sx={{mb:3}}
                         required
                         fullWidth
                         id="author"
                         label="Author:"
                         name="author"
                         type="text"
                         autoFocus/>
                      <Button 
                         id="b"
                         type="submit"
                         fullWidth
                         variant="contained"
                         sx={{mt: 3, mb: 2}}
                         >
                         submit
                      </Button>
                 </Box>
              </Box>
           </Paper>
    </Container>
  )
}
export default BlogForm