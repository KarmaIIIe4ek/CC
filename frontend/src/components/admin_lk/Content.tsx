
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import PeopleIcon from '@mui/icons-material/People';
import Box from '@mui/material/Box';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import './style.scss'
import axios from 'axios';
import { useState } from 'react';

// const users = [
//   {
//     id: 'Пользователи',
//     usersList: [
//       {
//         id: 'user1',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//       {
//         id: 'user2',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//       {
//         id: 'user3',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//       {
//         id: 'user4',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//       {
//         id: 'user5',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//     ],
    
//   }
// ];



export default function Content() {        
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Поиск по email"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Найти
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography color="text.secondary" align="center">
        {/* 
      {users.map(({ id, usersList }) => (
          <Box key={id} sx={{ bgcolor: '#ccc' }}>
            {usersList.map(({ id, icon }) => (
              <ListItem disablePadding key={id}>
                <ListItem sx={{ py: 2, px: 3 }}>
                  <ListItemText sx={{ color: '#101F33' }}>{id}</ListItemText>
                  <ListItemIcon>{icon}</ListItemIcon>
                </ListItem>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      */}
      </Typography>
    </Paper>
  );
}
