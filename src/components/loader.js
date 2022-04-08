import { CircularProgress } from '@mui/material';
import * as React from 'react';

export default function Loader(props) {
  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  )
}