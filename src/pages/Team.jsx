import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Divider, IconButton, Stack } from '@mui/material';
import { LinkedIn, Email, Phone } from '@mui/icons-material';

const Team = () => {
  const teamMembers = [
    {
      name: 'Joe Ortiz',
      role: 'Managing Partner',
      image: '/images/team/maria-ortiz.jpg',
      specialization: 'Corporate Law',
      education: 'J.D., Harvard Law School',
      experience: '20+ years of experience in corporate law and mergers & acquisitions.',
      linkedin: 'https://linkedin.com',
      email: 'joeortiz@counsellor.com',
      phone: '(567) 318-3651',
      bio: 'Joe Ortiz founded Ortiz & Partners with a vision to provide exceptional legal services with integrity and dedication. His extensive experience in corporate law and mergers & acquisitions has earned her a reputation as one of the most respected attorneys in South Carolina. Joe leads our corporate practice and has successfully guided numerous clients through complex business transactions.'
    },
    {
      name: 'James Alvarez',
      role: 'Senior Partner',
      image: '/images/team/james-chen.jpg',
      specialization: 'Civil Litigation',
      education: 'J.D., Yale Law School',
      experience: '15+ years of experience in complex civil litigation and dispute resolution.',
      linkedin: 'https://linkedin.com',
      email: 'jamesalvarez@ortizandpartners.com',
      phone: '(555) 234-5678',
      bio: 'James Alvarez brings strategic thinking and meticulous preparation to every case he handles. As the head of our litigation practice, James has successfully represented clients in high-stakes disputes across various industries. His analytical approach and courtroom presence have resulted in numerous favorable outcomes for our clients.'
    },
    {
      name: 'Sarah Thompson',
      role: 'Partner',
      image: '/images/team/sarah-thompson.jpg',
      specialization: 'Family Law',
      education: 'J.D., Columbia Law School',
      experience: '12+ years of experience in family law and mediation.',
      linkedin: 'https://linkedin.com',
      email: 'sarahthompson@counsellor.com',
      bio: 'Sarah Thompson leads our family law practice with compassion and dedication. She understands the sensitive nature of family legal matters and approaches each case with empathy and discretion. Sarah has helped countless families navigate challenging transitions with dignity and respect. Her client-centered approach ensures that each family receives personalized attention and effective representation.'
    },
    {
      name: 'Martin Rodriguez',
      role: 'Associate',
      image: '/images/team/michael-rodriguez.jpg',
      specialization: 'Estate Planning',
      education: 'J.D., Stanford Law School',
      experience: '8+ years of experience in estate planning and probate law.',
      linkedin: 'https://linkedin.com',
      email: 'martinrodriguez@counsellor.com',
      bio: 'Martin Rodriguez specializes in helping clients protect their assets and plan for the future. His comprehensive approach to estate planning ensures that each client\'s unique needs and wishes are addressed. Martin is known for his ability to explain complex legal concepts in accessible terms, making the estate planning process less intimidating for clients.'
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
              Our Team
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
              Meet the experienced attorneys who will guide you through your legal journey
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Team Introduction */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            maxWidth: 800, 
            mx: 'auto', 
            mb: 6,
            fontSize: '1.1rem',
            color: 'text.secondary'
          }}
        >
          At Ortiz & Partners, our team of dedicated attorneys brings together diverse expertise and a shared commitment to excellence. 
          With decades of combined experience across various practice areas, we provide comprehensive legal solutions tailored to your specific needs.
        </Typography>

        {/* Team Members Grid */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={5}>
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      sx={{ 
                        height: '100%',
                        minHeight: { xs: 300, md: '100%' },
                        objectFit: 'cover'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <CardContent sx={{ p: 3, height: '100%' }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 1
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        color="secondary.main" 
                        sx={{ 
                          fontWeight: 500,
                          mb: 2
                        }}
                      >
                        {member.role}
                      </Typography>
                      
                      <Divider sx={{ mb: 2 }} />
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Specialization:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.specialization}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Education:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.education}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Experience:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.experience}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {member.bio}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        <IconButton 
                          size="small" 
                          color="primary" 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedIn />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          color="primary" 
                          href={`mailto:${member.email}`}
                        >
                          <Email />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          color="primary" 
                          href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                        >
                          <Phone />
                        </IconButton>
                      </Stack>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                color: 'primary.main'
              }}
            >
              Ready to Work With Our Team?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
              Our attorneys are ready to provide the expert legal guidance you deserve. Contact us today to schedule a consultation.
            </Typography>
            <IconButton 
              color="secondary" 
              href="/contact"
              sx={{ 
                backgroundColor: 'secondary.main', 
                color: 'white',
                p: 2,
                '&:hover': {
                  backgroundColor: 'secondary.dark'
                }
              }}
            >
              <Typography variant="button" sx={{ mx: 2, fontWeight: 500 }}>
                Contact Us Today
              </Typography>
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;
