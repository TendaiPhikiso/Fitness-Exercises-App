import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
    <Box sx={{mt:{ lg: '213px', xs: '70px'}, ml: {sm: '50px'} }} position="relative" p="20px">

        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
           The  Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{fontSize: {lg:'44px', xs: '40px'}}} mb="23px" mt="30px">
            Remember WHY <br />you started!
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective exercises!
        </Typography>

        <Button variant='contained' color='error' href="#exercises"
            sx={{
                backgroundColor: '#FF2625',
                padding: '10px'
            }}
        
        > Explore Exercises </Button>

        <Typography color="#FF2625" fontWeight={600} fontSize= "200px" sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}

        }}>
           WORKOUT
        </Typography>

        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>


    </Box>
  )
}

export default HeroBanner