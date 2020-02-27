import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

import theme from '../../static/themes/theme';

import { Edge } from '../types';

const timingFunc = 'cubic-bezier(0.08, 0.03, 0.22, 0.87)';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: 30,
    width: 'calc(50% - 60px)',
    cursor: 'pointer',

    '@media (max-width: 840px)': {
      width: 'calc(50% - 30px)',
      margin: 15,
    },

    '@media (max-width: 560px)': {
      width: '100%',
      margin: '5px 10px',
    },

    '&:hover': {
      '& $img': {
        filter: 'brightness(0.75)',
        transform: 'scale(1.1)',
      },

      '& $textContainer': {
        transform: 'translate(-50%, -40%)',
      },

      '& $label': {
        visibility: 'visible',
        transform: 'translateY(20px)',

        '&:before': {
          width: '115%',
        },
      },
    },
  },

  imgContainer: {
    overflow: 'hidden',
    minHeight: 300,
  },

  img: {
    display: 'block',
    width: '100%',
    height: 'auto',
    float: 'left',
    transition: `transform 0.6s ${timingFunc}, filter 0.6s ${timingFunc}`,
  },

  textContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '85%',
    transition: `transform 0.5s ${timingFunc}`,
  },

  title: {
    margin: 0,
    textAlign: 'center',
    fontFamily: '"Din", sans-serif',
    fontSize: '2.1875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: theme.palette.text.primary,

    '@media (max-width: 840px)': {
      fontSize: '1.125rem',
    },
  },

  text: {
    fontFamily: '"Din", sans-serif',
    fontSize: ' 0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1.5,
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },

  label: {
    position: 'relative',
    transform: 'translateY(-10px)',
    fontFamily: '"Din", sans-serif',
    fontSize: '1rem',
    letterSpacing: 1.5,
    color: theme.palette.text.primary,
    visibility: 'hidden',
    transition: `transform 0.5s ${timingFunc}`,

    '&:before': {
      content: "''",
      position: 'absolute',
      left: '-10%',
      top: '50%',
      zIndex: -1,
      height: '50%',
      width: 0,
      backgroundColor: theme.palette.primary.main,
      transition: `width 1s ${timingFunc}`,
    },
  },
});

interface WriterCardProps {
  edge: Edge;
}

const WriterCard: React.FC<WriterCardProps> = ({ edge }) => {
  const {
    page,
    fullName,
    birthDate,
    deathDate,
    placeOfBirth,
    image,
  } = edge.node.frontmatter;
  const styles = useStyles();
  const intl = useIntl();
  const label = intl.formatMessage({ id: 'writerCard.label' });

  return (
    <div className={styles.root}>
      <Link to={`/${intl.locale}/writer/${page}`}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt={fullName} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{fullName}</h2>
          <p className={styles.text}>
            {deathDate !== null
              ? `${birthDate} - ${deathDate}`
              : `${birthDate} - `}
          </p>
          <p className={styles.text}>{placeOfBirth}</p>
          <span className={styles.label}>{label}</span>
        </div>
      </Link>
    </div>
  );
};

export default WriterCard;
