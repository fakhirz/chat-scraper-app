import { Box, Typography } from '@mui/material';
import React from 'react'

function DashboardContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography >Dashboard content for {pathname}</Typography>
    </Box>
  );
}

export default DashboardContent;