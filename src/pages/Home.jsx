import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import { Balance, Gavel, Security, People } from '@mui/icons-material';

const Home = () => {
  // Services offered by the law firm
  const services = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance on business formation, governance, compliance, and complex transactions.',
      icon: <Balance fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Civil Litigation',
      description: 'Strategic representation in complex disputes, focusing on efficient and favorable resolutions.',
      icon: <Gavel fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Family Law',
      description: 'Compassionate counsel for divorce, custody, support, and other family legal matters.',
      icon: <People fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Estate Planning',
      description: 'Comprehensive planning services to protect your assets and secure your family\'s future.',
      icon: <Security fontSize="large" sx={{ color: 'secondary.main' }} />
    }
  ];

  // Testimonials from clients
  const testimonials = [
    {
      quote: "Ortiz & Partners provided exceptional representation during our corporate merger. Their attention to detail and strategic approach saved us from potential complications.",
      author: "Michael Johnson",
      position: "CEO, TechVision Inc."
    },
    {
      quote: "The team at Ortiz & Partners guided me through a complex estate planning process with compassion and expertise. I feel confident that my family's future is secure.",
      author: "Sarah Williams",
      position: "Retired Executive"
    },
    {
      quote: "During a challenging litigation case, the attorneys at Ortiz & Partners demonstrated remarkable skill and dedication. Their representation was invaluable.",
      author: "David Chen",
      position: "CFO, Global Enterprises"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 600,
                mb: 2,
                fontFamily: '"Cormorant Garamond", serif'
              }}
            >
              Excellence in Legal Representation
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: '80%'
              }}
            >
              Dedicated attorneys committed to your success through strategic counsel and personalized service.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                href="/practice-areas"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500
                }}
              >
                Our Practice Areas
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="/contact"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3, 
                  color: 'primary.main',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600
                }}
              >
                A Tradition of Legal Excellence
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}>
                For over two decades, Ortiz & Partners has been at the forefront of legal practice in South Carolina, 
                providing exceptional representation to individuals and businesses alike.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary' }}>
                Our team of experienced attorneys combines deep legal knowledge with a commitment to client service, 
                ensuring that every matter receives the attention and expertise it deserves.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                href="/about"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img"
                src="/images/about-team.jpg"
                alt="Ortiz & Partners Team"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Our Legal Services
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              We offer comprehensive legal solutions tailored to your specific needs and circumstances.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }
                  }}
                  elevation={1}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary"
              href="/practice-areas"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              View All Practice Areas
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Client Testimonials
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              Our clients' success stories speak to our commitment to excellence and personalized service.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        fontStyle: 'italic',
                        position: 'relative',
                        '&:before': {
                          content: '"\\\u201C"',
                          fontFamily: 'Georgia, serif',
                          fontSize: '4rem',
                          color: 'rgba(166, 124, 82, 0.2)',
                          position: 'absolute',
                          left: -15,
                          top: -20
                        }
                      }}
                    >
                      {testimonial.quote}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 8 }, 
          backgroundColor: 'primary.main',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Ready to Discuss Your Legal Needs?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
              Our team is ready to provide the expert legal guidance you deserve. Contact us today to schedule a consultation.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              href="/contact"
              size="large"
              sx={{ 
                px: 5, 
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Contact Us Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
