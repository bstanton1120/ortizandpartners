import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Balance, Gavel, People, Security, Business, AccountBalance, Apartment, FamilyRestroom, Gavel as GavelIcon, Description } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PracticeAreas = () => {
  // Practice areas with detailed services
  const practiceAreas = [
    {
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses of all sizes, from startups to established corporations.',
      icon: <Business fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Business Formation & Entity Selection',
        'Corporate Governance & Compliance',
        'Mergers & Acquisitions',
        'Contract Drafting & Negotiation',
        'Commercial Transactions',
        'Corporate Restructuring'
      ]
    },
    {
      title: 'Civil Litigation',
      description: 'Strategic representation in complex disputes, focusing on efficient and favorable resolutions.',
      icon: <Gavel fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Commercial Litigation',
        'Contract Disputes',
        'Employment Litigation',
        'Real Estate Litigation',
        'Alternative Dispute Resolution',
        'Appeals'
      ]
    },
    {
      title: 'Family Law',
      description: 'Compassionate counsel for divorce, custody, support, and other family legal matters.',
      icon: <FamilyRestroom fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Alimony & Spousal Support',
        'Property Division',
        'Prenuptial & Postnuptial Agreements',
        'Domestic Violence Protection'
      ]
    },
    {
      title: 'Estate Planning',
      description: 'Comprehensive planning services to protect your assets and secure your family\'s future.',
      icon: <Description fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Wills & Trusts',
        'Power of Attorney',
        'Healthcare Directives',
        'Estate Administration',
        'Probate Services',
        'Asset Protection Planning'
      ]
    },
    {
      title: 'Real Estate Law',
      description: 'Expert guidance for residential and commercial real estate transactions and disputes.',
      icon: <Apartment fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Property Purchases & Sales',
        'Commercial Leases',
        'Title Examinations',
        'Zoning & Land Use',
        'Construction Contracts',
        'Real Estate Litigation'
      ]
    },
    {
      title: 'Banking & Finance',
      description: 'Specialized legal services for financial institutions and complex financial transactions.',
      icon: <AccountBalance fontSize="large" sx={{ color: 'secondary.main' }} />,
      services: [
        'Loan Documentation',
        'Regulatory Compliance',
        'Secured Transactions',
        'Debt Restructuring',
        'Financial Institution Representation',
        'Commercial Finance'
      ]
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
              Our Practice Areas
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
              Comprehensive legal solutions tailored to your specific needs
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Introduction */}
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
          At Ortiz & Partners, we offer a wide range of legal services to meet the diverse needs of our clients. 
          Our team of experienced attorneys brings specialized expertise to each practice area, ensuring that you 
          receive knowledgeable and effective representation for your specific legal matter.
        </Typography>

        {/* Practice Areas Grid */}
        <Grid container spacing={4}>
          {practiceAreas.map((area, index) => (
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
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ mr: 2 }}>{area.icon}</Box>
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      sx={{ 
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 600,
                        color: 'primary.main'
                      }}
                    >
                      {area.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {area.description}
                  </Typography>
                  
                  <Divider sx={{ mb: 3 }} />
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 600
                    }}
                  >
                    Our Services Include:
                  </Typography>
                  
                  <List disablePadding>
                    {area.services.map((service, serviceIndex) => (
                      <ListItem key={serviceIndex} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon color="secondary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={service} 
                          primaryTypographyProps={{ 
                            variant: 'body2',
                            color: 'text.secondary'
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Client-Centered Approach */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  color: 'primary.main'
                }}
              >
                Our Client-Centered Approach
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                At Ortiz & Partners, we believe that effective legal representation begins with understanding your unique needs and goals. 
                Our attorneys take the time to listen to your concerns, answer your questions, and develop a strategy tailored to your specific situation.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                We are committed to providing clear communication, responsive service, and practical solutions that address your legal challenges 
                while considering your long-term objectives. Our goal is not just to resolve your current legal matter, but to build a lasting 
                relationship as your trusted legal advisors.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Whether you are facing a complex business transaction, a difficult family matter, or planning for the future, our team is here to 
                provide the guidance and advocacy you need to achieve the best possible outcome.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  backgroundColor: 'primary.main', 
                  color: 'white',
                  borderRadius: 2,
                  p: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
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
                  Why Choose Ortiz & Partners?
                </Typography>
                
                <List disablePadding>
                  {[
                    'Experienced attorneys with specialized expertise in each practice area',
                    'Personalized attention and tailored legal strategies',
                    'Clear communication and responsive service',
                    'Commitment to achieving the best possible outcomes',
                    'Transparent fee structures with no hidden costs',
                    'Convenient location in Columbia, South Carolina'
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                      <ListItemIcon sx={{ minWidth: 36, color: 'secondary.main' }}>
                        <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ 
                          variant: 'body2',
                          sx: { opacity: 0.9 }
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
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
          <Box 
            component="a" 
            href="/contact"
            sx={{ 
              display: 'inline-block',
              backgroundColor: 'secondary.main',
              color: 'white',
              py: 2,
              px: 4,
              borderRadius: 1,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: 'secondary.dark'
              }
            }}
          >
            Contact Us Today
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PracticeAreas;
