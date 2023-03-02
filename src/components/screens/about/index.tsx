import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutScreen = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{height: '70vh', textAlign: 'center'}}>
        <Typography>About Screen</Typography>
      </Box>
    </Container>
  );
};

export default AboutScreen;
