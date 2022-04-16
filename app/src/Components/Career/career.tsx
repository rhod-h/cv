import React from 'react';

import Typography from '@mui/material/Typography';
import Job from '../Job';
import JobDetails from '../../Models/JobDetails';
import Styles from './styles.module.css';

interface CareerProps {
  title: string;
  content: JobDetails[];
}

function Career({ ...props }: CareerProps) {
  return (
    <section id="Career">
      <div className={Styles.title}>
        <Typography variant="h4">
          {props.title}
        </Typography>
      </div>

      {props.content.map((job: JobDetails) => (
        <Job job={job} />
      ))}

    </section>
  );
}

export default Career;
