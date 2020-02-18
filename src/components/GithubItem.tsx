import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

interface Props {
  name: string,
  nickname: string,
  avatar: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
      color: 'inherit',
    },

    text: {
      ['@media (max-width:780px)']: {
        display: 'none'
      }
    }

  }),
);


const GithubProfile = ({name, nickname, avatar}: Props) => {
  const classes = useStyles();
  const githubLink = `https://github.com/${nickname}/`;

  return (
    <Link className={classes.item} href={githubLink} target="_blank" rel="noopener">
      <Avatar alt={name} src={avatar} />
      <p className={classes.text}>{name}</p>
    </Link>
  );
}

export default GithubProfile;