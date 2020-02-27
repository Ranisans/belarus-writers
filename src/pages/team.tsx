import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Grid, CardMedia, Card, CardContent, Typography, Link} from '@material-ui/core';

import Layout from '../components/Layout';
import tabs from '../constants/tabsName';

import team from '../data/team';
import {TeamMemberModel} from "../models/teamMemberModel";
import {GitHub} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  section: {
    // borderTop: '1px solid #ccc'
  },
});

const TeamPage = () => {
  const styles = useStyles();

  const members = team.map((member: TeamMemberModel) => {
    return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
            style={{height: '300px'}}
        image={member.avatar}
        title={member.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {member.name}
            </Typography>
            <Link href={'https://github.com/' + member.nickname} target="_blank">
                <GitHub />
                Link
            </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    );
  })

  return (
  <div className={styles.root}>
    <Layout tabIndex={tabs.workLog}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
            {members}
        </Grid>
      </Container>
    </Layout>
  </div>
  );
};

export default TeamPage;
