import { Typography, Button, Box, Divider, Stack } from '@mui/material'
import React from 'react'
import '../../styles/ReviewScreenStyles/ProductSnippet.css'

const ProductSnippet = () => {
    
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '5rem',
            mt: '2rem',
            p: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
            maxWidth: '30rem',
            mx: 'auto',
            mb: '2rem',
            mt: '2rem',
            color: 'text.primary',
            border: '1px solid transparent',
        }}>
            <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png'
            alt='' width={150} height={150}/>
            <Stack>
                <Typography variant='h5'>Yeezy Jordan</Typography>
                <Typography variant='p'>Nike</Typography>
            </Stack>
        </Box>
    )
}


 {/* <section className='product-snippet'>
            <img
            className='product-thumb'
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""/>
            <div className='product-info-rev'>
            <span>Nike</span>
            <h1>Red Booster Shoes</h1>
        </div>
        </section>
)*/}

export default ProductSnippet
