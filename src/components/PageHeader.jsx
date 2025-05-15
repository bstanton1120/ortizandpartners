import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
  const MotionDiv = motion.div;

  return (
    <Box
      className="bg-primary text-white py-16 mb-12"
      style={{
        backgroundImage: 'linear-gradient(rgba(27, 43, 75, 0.9), rgba(27, 43, 75, 0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" className="text-4xl md:text-5xl font-serif mb-4 text-center">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h5" className="text-center font-light">
              {subtitle}
            </Typography>
          )}
        </MotionDiv>
      </Container>
    </Box>
  );
};

export default PageHeader;
