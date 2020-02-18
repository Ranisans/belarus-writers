import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

const timingFunc = 'cubic-bezier(0.08, 0.03, 0.22, 0.87)';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: 30,
    width: 510,
    cursor: 'pointer',

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
    width: '100%',
    height: 'auto',
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
    width: 270,
    transition: `transform 0.5s ${timingFunc}`,
  },

  title: {
    margin: 0,
    width: 240,
    fontFamily: '"Din", sans-serif',
    fontSize: '3.5rem',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#fff',
  },

  dates: {
    fontFamily: '"Din", sans-serif',
    fontSize: ' 1.2rem',
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
    fontSize: '1.6rem',
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
  const { fullName, birthData, deathDate, image } = edge.node.frontmatter;
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
        <span className={styles.label}>Read more</span>
      </div>
    </div>
  );
};

export default WriterCard;
