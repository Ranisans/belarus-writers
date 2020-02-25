import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '../../static/themes/theme';
import Layout from '../components/Layout';
import { Edge } from '../types';
import tabs from '../constants/tabsName';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    padding: '5px',

    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: '1',
    '@media (max-width: 780px)': {
      padding: '20px',
    },
    boxSizing: 'border-box',
  },

  '@keyframes blinker': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  title: {
    textDecoration: 'uppercase',
    textAlign: 'center',
    '@media (max-width: 780px)': {
      margin: '0',
    },
  },

  paragraph: {
    margin: '0',
    padding: '0',
    textIndent: '1.5em',
    textAlign: 'justify',
  },

  columnWrapper: {
    maxWidth: '400px',
    padding: '15px',
  },

  descriptionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    display: 'block',
    width: '100%',
    maxHeight: 'auto',
  },

  author: {
    marginTop: '15px',
    textDecoration: 'uppercase',
    fontSize: '2rem',
    textAlign: 'center',
  },

  data: {
    margin: '0',
    fontSize: '1.75rem',
  },

  btn: {
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
    marginTop: '0.5rem',
    padding: '8px 40px',
    fontSize: '1rem',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.secondary.contrastText,
    '@media (max-width: 780px)': {
      padding: '3px 20px',
    },

    '&:hover': {
      border: `2px solid ${theme.palette.secondary.contrastText}`,
      color: theme.palette.primary.main,
      transition: '0.3s',
    },
  },
});

function getRandomIndex(): number {
  return Math.floor(Math.random() * 12) + 1;
}

const Index = () => {
  const information = useStaticQuery(graphql`
    query($locale: String) {
      markdownRemark(frontmatter: { language: { eq: $locale } }) {
        frontmatter {
          fullName
          birthDate(formatString: "YYYY")
          deathDate(formatString: "YYYY")
          image
        }
      }
    }
  `);

  const data = information.markdownRemark.frontmatter;

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Layout tabIndex={tabs.index}>
        <h1 className={classes.title}>Писатели Беларуси</h1>
        <div className={classes.container}>
          <div className={classes.columnWrapper}>
            <Typography className={classes.paragraph}>
              test for navbar Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab commodi deleniti dolorem facilis inventore
              iste nisi numquam quam soluta voluptas. Delectus dolorem dolores
              eaque excepturi magni minima molestiae possimus provident quae
              ratione sunt temporibus unde, ut. A aut blanditiis commodi
              consequatur dignissimos libero neque omnis, perferendis quis
              repellat, similique tenetur. Adipisci aperiam aspernatur
              consequatur, cum delectus doloremque fuga fugit ipsum porro
              tempora? Accusantium, adipisci alias eaque est officiis repellat
              saepe! Beatae corporis dicta dolores error ex excepturi expedita
              ipsum, molestiae perspiciatis praesentium qui quisquam rerum saepe
              voluptatibus voluptatum. Ab ad blanditiis consequuntur dignissimos
              dolorem earum eos facere harum id incidunt ipsa minus natus
              nesciunt nihil numquam porro quo, soluta suscipit tenetur totam? A
              debitis explicabo magnam maiores reiciendis, rem vel. Debitis
              earum eum iusto, odio quibusdam quos tempora tenetur! Animi beatae
              cumque eaque facere incidunt quod, rem. A ab aliquam at deleniti
              dolores esse ipsum nobis, odit perferendis reiciendis repellendus
              saepe temporibus vel! Accusamus, alias dignissimos. Asperiores
              consequatur doloribus et fuga illo laudantium modi quas, qui
              ratione repudiandae rerum veniam? Adipisci at beatae culpa illum,
              quam tenetur! Alias, aliquam aliquid aspernatur at delectus
              deserunt dolore eius incidunt iure labore laudantium libero
              mollitia nostrum, provident quae quis sunt velit veritatis. Ab,
              dolore, enim. Adipisci at debitis dolor eaque fugiat magnam quidem
              velit vero voluptates! At debitis eaque excepturi impedit maiores
              quis sed suscipit ut voluptatum. Ad adipisci alias aspernatur
              atque corporis delectus earum eius excepturi fuga illo incidunt
              ipsam labore minus modi necessitatibus, nobis numquam officiis
              optio porro possimus quasi rerum saepe sapiente sequi sunt tenetur
              vel voluptatibus! Consequuntur dicta esse ipsa libero maxime modi,
              molestiae numquam quia voluptate? Ad, at consequatur corporis
              deleniti, distinctio doloribus ea facilis ipsum itaque iusto nemo
              quaerat sed sunt tenetur voluptatibus. Debitis enim explicabo
              facere, itaque iure minima nostrum, optio qui quidem sint ut
              voluptate. Конец 19-го и особенно начало 20-го века ознаменовали
              развитие белорусской литературы как совершенно отдельного
              субъекта, в котором использовалась современная версия белорусского
              языка. Многие известные работы в совершенно ином свете, а также
              демонстрируют уникальные ценности, которые белорусская литература
              того времени может предложить читателю из свободного мира.
            </Typography>
            <Typography className={classes.paragraph}>
              Современная литературная жизнь сосредоточена в Минске.
              Издательский дом, который возник в 2014 году как частная
              инициатива некоторых белорусских издателей и авторов, направлен на
              популяризацию белорусской литературы и ее широкое распространение.
            </Typography>
          </div>
          <div className={classes.columnWrapper}>
            <div>
              <img
                className={classes.image}
                src={data.image}
                alt={data.fullName}
              />
            </div>
            <div className={classes.descriptionWrapper}>
              <Typography className={classes.author}>
                {data.fullName}
              </Typography>
              <Typography className={classes.data}>
                {`${data.birthDate} - ${data.deathDate}`}
              </Typography>
              <Button className={classes.btn}>Read more</Button>
            </div>
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  );
};

export default Index;
