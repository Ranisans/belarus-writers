import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import eve2 from './eve2.jpg';

const timingFunc = 'cubic-bezier(0.08, 0.03, 0.22, 0.87)';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: 30,
    width: 510,
    cursor: 'pointer',

    // '&:hover': {
    //   & .img: {
    //     filter: 'brightness(0.75)',
    //     transform: 'scale(1.1)',
    //   },

    //   "& text": {
    //     transform: 'translate(-50%, -30%)',
    //   },

    //   '& .label': {
    //     visibility: 'visible',
    //     transform: 'translateY(20px)',
    //   },

    //   '& .label:before': {
    //     width: '115%',
    //   },
    // },
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
    width: 270,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transition: `transform 0.5s ${timingFunc}`,
  },

  title: {
    margin: 0,
    fontFamily: '"Din", sans-serif',
    color: '#fff',
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '3.5rem',
    letterSpacing: 1.5,
    width: 240,
  },

  dates: {
    fontFamily: '"Din", sans-serif',
    fontSize: ' 1.2rem',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: 1.5,
    lineHeight: 1.6,
  },

  label: {
    position: 'relative',
    transform: 'translateY(-10px)',
    visibility: 'hidden',
    fontFamily: '"Din", sans-serif',
    fontSize: '1.6rem',
    letterSpacing: 1.5,
    color: '#fff',
    transition: `transform 0.5s ${timingFunc}`,

    '&:before': {
      content: '',
      position: 'absolute',
      left: '-10%',
      top: '50%',
      height: '50%',
      width: 0,
      backgroundColor: '#3b3f3f',
      transition: `width 1s ${timingFunc}`,
      zIndex: -1,
    },
  },
});

const WriterCard = ({ edge }: any) => {
  const styles = useStyles();

  const { fullName, birthData, deathDate, image } = edge.node.frontmatter;

  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={eve2} alt="" />
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
