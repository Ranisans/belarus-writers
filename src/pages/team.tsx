import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, Link } from '@material-ui/core';

import { GitHub } from '@material-ui/icons';
// import Layout from '../components/Layout';
// import tabs from '../data/tabsName';

import team from '../data/team';
import { TeamMemberModel } from '../types';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    borderRadius: '50%',
  },
  card: {
    height: '100%',
    display: 'block',
    textAlign: 'center',
    boxShadow: 'none',
  },
  imageWrapper: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    background: 'rgba(255, 255, 255, .7)',
    margin: '0',
  },
  git: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    transition: '.3s',

    '&:hover': {
      color: '#111',
      textDecoration: 'none',
    },
  },
  gitIcon: {
    marginRight: '10px',
  },
});

const TeamPage = () => {
  const styles = useStyles();

  const members = team.map((member: TeamMemberModel) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={member.id}>
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.avatar}
              src={member.avatar}
              alt={member.name}
            />
            <Typography
              className={styles.title}
              gutterBottom
              variant="h5"
              color="textSecondary"
              component="h2"
            >
              <Link
                className={styles.git}
                href={`https://github.com/${member.nickname}`}
                target="_blank"
              >
                <GitHub className={styles.gitIcon} />
                {member.name}
              </Link>
            </Typography>
          </div>
          <Typography variant="body2" component="p">
            {member.description}
          </Typography>
        </Card>
      </Grid>
    );
  });

  return (
    // <Layout tabIndex={tabs.workLog}>
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        {members}
      </Grid>
    </Container>
    // </Layout>
  );
};

export default TeamPage;
