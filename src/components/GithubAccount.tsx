import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

interface Props {
  nickname: string;
  avatar: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkContainer: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
      color: 'inherit',
    },
  })
);

const GithubProfile = ({ nickname, avatar }: Props) => {
  const classes = useStyles();
  const githubLink = `https://github.com/${nickname}/`;

  return (
    <Link
      className={classes.linkContainer}
      href={githubLink}
      target="_blank"
      rel="noopener"
    >
      <Avatar alt={nickname} src={avatar} />
    </Link>
  );
};

export default GithubProfile;
