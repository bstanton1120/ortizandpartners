import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider, Stack } from '@mui/material';
import { Balance, Gavel, People, Security, History, School } from '@mui/icons-material';

const About = () => {
  // Firm values
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our practice, from legal research to client communication.',
      icon: <Balance fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and are committed to honesty and transparency in all our dealings.',
      icon: <Gavel fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Client-Centered',
      description: 'Our clients are at the center of everything we do. We listen carefully to understand your unique needs and goals.',
      icon: <People fontSize="large" sx={{ color: 'secondary.main' }} />
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative approaches to legal challenges, finding creative solutions to complex problems.',
      icon: <Security fontSize="large" sx={{ color: 'secondary.main' }} />
    }
  ];

  // Firm history milestones
  const milestones = [
    {
      year: '2005',
      title: 'Firm Founded',
      description: 'Ortiz & Partners was established by Maria Ortiz with a vision to provide exceptional legal services with integrity and dedication.'
    },
    {
      year: '2010',
      title: 'Expansion of Practice Areas',
      description: 'The firm expanded its practice areas to include family law and estate planning, providing more comprehensive services to clients.'
    },
    {
      year: '2015',
      title: 'New Office Location',
      description: 'Ortiz & Partners moved to its current location in Columbia, South Carolina, to better serve clients throughout the state.'
    },
    {
      year: '2020',
      title: 'Recognition of Excellence',
      description: 'The firm was recognized as one of the top law firms in South Carolina for corporate law and civil litigation.'
    },
    {
      year: '2025',
      title: 'Continued Growth',
      description: 'Today, Ortiz & Partners continues to grow, maintaining its commitment to excellence and client-centered service.'
    }
  ];

  return (
    <Box>
      {/* Page Header */}
      <Box 
        sx={{ 
          backgroundColor: 'primary.main', 
          color: 'white', 
          py: { xs: 6, md: 8 },
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                mb: 2
              }}
            >
              About Our Firm
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
              A Legacy of Legal Excellence Since 2005
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Firm Overview */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3, 
                color: 'primary.main',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}>
              Founded in 2005 by Maria Ortiz, our firm has grown from a small practice to one of the most respected law firms in South Carolina. 
              What began as a vision to provide exceptional legal services with integrity and dedication has evolved into a full-service law firm 
              with expertise across multiple practice areas.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}>
              Throughout our history, we have remained committed to our founding principles: excellence in legal representation, 
              integrity in all our dealings, and a client-centered approach that puts your needs first. These values continue to 
              guide our practice as we grow and evolve.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
              Today, Ortiz & Partners is proud to serve individuals and businesses throughout South Carolina with the same 
              dedication and commitment to excellence that has defined our firm since its inception.
            </Typography>
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

      {/* Our Values */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Our Core Values
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              These principles guide our practice and define our commitment to our clients and community.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
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
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our History */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600
              }}
            >
              Our History
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              The journey that has shaped Ortiz & Partners into the firm it is today.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Box 
              sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: 0, 
                bottom: 0, 
                width: 4, 
                backgroundColor: 'primary.light',
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' }
              }}
            />

            {milestones.map((milestone, index) => (
              <Box 
                key={index} 
                sx={{ 
                  mb: 5, 
                  position: 'relative',
                  '&:last-child': { mb: 0 }
                }}
              >
                <Grid 
                  container 
                  spacing={4} 
                  sx={{ 
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    display: { xs: 'block', md: 'flex' }
                  }}
                >
                  <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
                    <Box 
                      sx={{ 
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute', 
                        top: '50%', 
                        [index % 2 === 0 ? 'right' : 'left']: -28,
                        width: 56, 
                        height: 56, 
                        borderRadius: '50%', 
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'translateY(-50%)',
                        zIndex: 1
                      }}
                    >
                      <History />
                    </Box>
                    <Card 
                      sx={{ 
                        borderRadius: 2,
                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 3
                      }}
                    >
                      <Typography 
                        variant="h2" 
                        sx={{ 
                          color: 'secondary.main', 
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: 'primary.main',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Community Involvement */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600
                }}
              >
                Our Commitment to Community
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                At Ortiz & Partners, we believe in giving back to the communities we serve. Our attorneys and staff are actively involved in various community service initiatives and pro bono work.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                We regularly participate in legal aid clinics, volunteer with local organizations, and support charitable causes throughout South Carolina. This commitment to service extends beyond our legal practice and reflects our dedication to making a positive impact in our community.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Through these efforts, we strive to improve access to justice and contribute to the well-being of our community as a whole.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: 2, 
                  p: 4,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 600
                  }}
                >
                  Our Community Initiatives
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        minWidth: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <School fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Legal Education Outreach
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Workshops and seminars to educate the public on legal rights and responsibilities.
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        minWidth: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <Gavel fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Pro Bono Legal Services
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Free legal representation for those who cannot afford it.
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        minWidth: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      <People fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Community Sponsorships
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Supporting local events, organizations, and initiatives that strengthen our community.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
