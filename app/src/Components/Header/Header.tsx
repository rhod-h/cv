/* eslint-disable no-unused-vars */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobeAmericas, faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Styles from './styles.module.css';

type IconDefinitionMap = Record<string, IconDefinition>;
const iconMap : IconDefinitionMap = {
  website: faGlobeAmericas,
  linkedin: faLinkedin,
};

interface LinksProps {
  url: string
  icon: string;
  name: string
}

interface HeaderProps {
  profilePic: string;
  name: string;
  links: LinksProps[];
}

function Header({ ...props }: HeaderProps) {
  return (
    <section id="header">
      <div className={Styles.header}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Avatar
              src={props.profilePic}
              alt="Profile Pic"
              sx={{ width: 100, height: 100 }}
              className={Styles.avatar}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              {props.name}
            </Typography>
          </Grid>
        </Grid>
      </div>

    </section>
  );
}

export default Header;
