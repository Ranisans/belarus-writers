import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import WriterCard from '../components/WriterCard';

const Writers = ({ data }: any) => (
  <Layout>
    {data.allMarkdownRemark.edges.map((edge: any) => (
      <WriterCard key={edge} edge={edge} />
    ))}
  </Layout>
);

export default Writers;

export const data = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            fullName
            birthData(formatString: "DD.MM.YYYY")
            deathDate(formatString: "DD.MM.YYYY")
            image
          }
        }
      }
    }
  }
`;

// import React, { FC } from 'react';
// import { makeStyles } from '@material-ui/styles';
// import eve2 from './eve2.jpg';

// const timingFunc = 'cubic-bezier(0.08, 0.03, 0.22, 0.87)';

// const useStyles = makeStyles({
//   root: {
//     position: 'relative',
//     margin: 30,
//     width: 510,
//     cursor: 'pointer',

//     '& div:first-child': {
//       overflow: 'hidden',

//       '& img': {
//         width: '100%',
//         height: 'auto',
//         transform: 'scale(1.1)',
//         filter: 'brightness(0.75)',
//         transition: `transform 0.6s ${timingFunc}, filter 0.6s ${timingFunc}`,
//       },
//     },

//     '& div:last-child': {
//       position: 'absolute',
//       left: '50%',
//       top: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: 270,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       transition: `transform 0.5s ${timingFunc}`,

//       '& h2': {
//         margin: 0,
//         fontFamily: '"Din", sans-serif',
//         color: '#fff',
//         fontWeight: 700,
//         textTransform: 'uppercase',
//         textAlign: 'center',
//         fontSize: '3.5rem',
//         letterSpacing: 1.5,
//         width: 240,
//       },

//       '& p': {
//         fontFamily: '"Din", sans-serif',
//         fontSize: ' 1.2rem',
//         color: '#fff',
//         textTransform: 'uppercase',
//         fontWeight: 700,
//         letterSpacing: 1.5,
//         lineHeight: 1.6,
//       },

//       '& span': {
//         position: 'relative',
//         transform: 'translateY(-10px)',
//         visibility: 'hidden',
//         fontFamily: '"Din", sans-serif',
//         fontSize: '1.6rem',
//         letterSpacing: 1.5,
//         color: '#fff',
//         transition: `transform 0.5s ${timingFunc}`,

//         '&:before': {
//           content: '',
//           position: 'absolute',
//           left: '-10%',
//           top: '50%',
//           height: '50%',
//           width: 0,
//           backgroundColor: '#3b3f3f',
//           transition: `width 1s ${timingFunc}`,
//           zIndex: -1,
//         },
//       },
//     },

//     '&:hover': {
//       '& div:first-child': {
//         '& img': {
//           filter: 'brightness(0.75)',
//           transform: 'scale(1.1)',
//         },
//       },

//       '& div:last-child': {
//         transform: 'translate(-50%, -30%)',

//         '& span': {
//           visibility: 'visible',
//           transform: 'translateY(20px)',
//         },

//         '& span:before': {
//           width: '115%',
//         },
//       },
//     },
//   },
// });
