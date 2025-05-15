import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" className="bg-primary text-white py-8 mt-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="mb-4">
              <img src="/logo.svg" alt="Ortiz And Partners" className="h-12 mb-2" />
            </div>
            <Typography variant="body2">
              Committed to Excellence in Legal Services
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-serif mb-4">
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Practice Areas', path: '/practice-areas' },
                { text: 'Our Team', path: '/team' },
                { text: 'Contact', path: '/contact' },
              ].map((link) => (
                <Grid item key={link.text}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-secondary no-underline"
                  >
                    <Typography variant="body2">{link.text}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-serif mb-4">
              Contact Us
            </Typography>
            <Typography variant="body2" className="mb-2">
              123 Legal Avenue
              <br />
              Suite 500
              <br />
              New York, NY 10001
            </Typography>
            <Typography variant="body2" className="mb-4">
              Phone: (567) 318-3651
              <br />
              Email: joeortiz@counsellor.com
            </Typography>
            <div className="flex gap-2">
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <Typography variant="body2" className="text-center mt-8 pt-4 border-t border-gray-600">
          © 2025 Ortiz And Partners. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
