import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Logo from '../assets/images/logo-5.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '80px' }} />
      <Stack direction="row" gap="20px">
        <Link href="https://github.com/quantmharsh" target="_blank" rel="noopener noreferrer">
          <GitHubIcon color="primary" fontSize="large" />
        </Link>
        <Link href="https://www.linkedin.com/in/harsh-srivastava2001/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon color="primary" fontSize="large" />
        </Link>
        <Link href="https://www.instagram.com/harsh_srivastava.ig" target="_blank" rel="noopener noreferrer">
          <InstagramIcon color="primary" fontSize="large" />
        </Link>
        <Link href="https://www.codingninjas.com/studio/profile/Quantam_harsh" target="_blank" rel="noopener noreferrer">
          <CodeIcon color="primary" fontSize="large" />
        </Link>
      </Stack>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      Made with ❤️ by Quantam Harsh
    </Typography>
  </Box>
);

export default Footer;
