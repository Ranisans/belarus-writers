import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const timingFunc = 'cubic-bezier(0.08, 0.03, 0.22, 0.87)';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: 30,
    width: 'calc(50% - 60px)',
    cursor: 'pointer',

    '&:nth-child(even)': {
      top: 80,

      '@media (max-width: 560px)': {
        top: 0,
      },
    },

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

      '& $text': {
        transform: 'translate(-50%, -30%)',
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
  },

  img: {
    display: 'block',
    width: '100%',
    height: 'auto',
    float: 'left',
    transition: `transform 0.6s ${timingFunc}, filter 0.6s ${timingFunc}`,
  },

  text: {
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
    color: '#fff',

    '@media (max-width: 840px)': {
      fontSize: '1.125rem',
    },
  },

  dates: {
    fontFamily: '"Din", sans-serif',
    fontSize: ' 0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    lineHeight: 1.6,
    color: '#fff',
  },

  label: {
    position: 'relative',
    transform: 'translateY(-10px)',
    fontFamily: '"Din", sans-serif',
    fontSize: '1rem',
    letterSpacing: 1.5,
    color: '#fff',
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
      backgroundColor: '#3b3f3f',
      transition: `width 1s ${timingFunc}`,
    },
  },
});

const WriterCard = ({ edge }: any) => {
  const {
    fullName,
    birthData,
    deathDate,
    placeOfBirth,
    image,
  } = edge.node.frontmatter;
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={fullName} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{fullName}</h2>
        <p className={styles.dates}>
          {birthData} - {deathDate}
        </p>
        <p className={styles.dates}>{placeOfBirth}</p>
        <span className={styles.label}>Read more</span>
      </div>
    </div>
  );
};

export default WriterCard;
