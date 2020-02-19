import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import SEO from './Seo';

interface PropTypes {
  intl: any; // TODO find out type
}

const Redirect = ({ intl }: PropTypes) => {
  return <SEO title={`${intl.formatMessage({ id: 'title' })}`} />;
};

export default injectIntl(Redirect);
