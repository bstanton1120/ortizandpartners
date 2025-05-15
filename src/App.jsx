import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Box, Typography, Button, Drawer, List, ListItem, IconButton, CssBaseline, Divider } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Create a custom theme with law firm colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2B4B', // Deep navy blue
      light: '#2c3e60',
      dark: '#0f1a2e',
    },
    secondary: {
      main: '#A67C52', // Gold accent
      light: '#c09a78',
      dark: '#8c5e2c',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

// Navigation component with responsive design
const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600 }}>
          Ortiz & Partners
        </Typography>
        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button 
              component={RouterLink} 
              to={item.path} 
              sx={{ 
                width: '100%', 
                py: 1.5, 
                color: 'primary.main',
                '&:hover': { backgroundColor: 'rgba(27, 43, 75, 0.04)' }
              }}
            >
              {item.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src="/logo.svg" alt="Ortiz & Partners" sx={{ height: 50, mr: 2 }} />
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  display: { xs: 'none', sm: 'block' },
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  color: 'primary.main'
                }}
              >
                Ortiz & Partners
              </Typography>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button 
                  key={item.name} 
                  component={RouterLink} 
                  to={item.path}
                  sx={{ 
                    mx: 1, 
                    color: 'primary.main',
                    '&:hover': { backgroundColor: 'rgba(27, 43, 75, 0.04)' }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

// Footer component
const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Cormorant Garamond", serif' }}>
              Ortiz & Partners
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 400 }}>
              A premier law firm dedicated to providing exceptional legal services with integrity, professionalism, and a commitment to client success.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Cormorant Garamond", serif' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              1401 Main Street, Suite 300
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Columbia, SC 29201
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              (567) 318-3651
            </Typography>
            <Typography variant="body2">
              joeortiz@counsellor.com
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Cormorant Garamond", serif' }}>
              Office Hours
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Monday - Friday: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body2">
              Saturday: By Appointment
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
        
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Ortiz & Partners. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
