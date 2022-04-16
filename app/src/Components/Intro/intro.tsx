import React from 'react';
import Typography from '@mui/material/Typography';
import Styles from './styles.module.css';

interface IntroProps {
  title: string;
  summary: string[];
}

function Intro({ ...props }: IntroProps) {
  return (
    <section id="intro">
      <div className={Styles.intro}>

        <div className={Styles.title}>
          <Typography id="title" variant="h4">
            {props.title}
          </Typography>
        </div>
        <div className={Styles.block}>
          {props.summary.map((paragraph :string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
            <Typography key={index} paragraph className={Styles.info}>{paragraph}</Typography>))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
