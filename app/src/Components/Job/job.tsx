import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Styles from './styles.module.css';
import JobDetails from '../../Models/JobDetails';

interface JobProps {
  job: JobDetails;
}

function Job({ ...props }: JobProps) {
  return (
    <section id={props.job.company}>
      <Paper elevation={3} className={Styles.job}>
        <Typography>{props.job.jobTitle}</Typography>
      </Paper>

    </section>
  );
}

export default Job;
