// EXAMPLE PAGE OF MAP USAGE

import React from 'react';
import { graphql } from 'gatsby';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../static/themes/theme';
import tabs from '../constants/tabsName';

import Layout from '../components/Layout';
import Map from '../components/Map';
import { MapData } from '../types';

interface PropTypes {
  data: {
    markdownRemark: {
      frontmatter: {
        map: MapData[];
      };
    };
  };
}

const MapExample = ({ data }: PropTypes) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout tabIndex={tabs.list}>
        <Map data={data.markdownRemark.frontmatter.map[0]} />
      </Layout>
    </MuiThemeProvider>
  );
};

export default MapExample;

export const data = graphql`
  query {
    markdownRemark(frontmatter: { id: { eq: 1 }, language: { eq: "en" } }) {
      frontmatter {
        map {
          description
          lat
          lon
          title
        }
      }
    }
  }
`;
