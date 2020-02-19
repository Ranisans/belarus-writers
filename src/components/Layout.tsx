import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

interface PropsType {
  children: React.ReactNode;
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh' 
    },

  content: {
    flexGrow: '1'
  },
  
  main: {
    maxWidth: '960px',
    margin: '0 auto', 
  }
}))

const TemplateWrapper = ({ children }: PropsType) => {
  const { title, description } = useSiteMetadata();
  const classes = useStyles();
  return (
    <div >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Navbar />
          <main className={classes.main}>{children}</main>
        </div>     
        <Footer />
      </div>
    </div>
  );
};

export default TemplateWrapper;
