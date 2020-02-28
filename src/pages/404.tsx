import React from 'react';

import Layout from '../components/Layout';
import tabs from '../data/tabsName';

const NotFoundPage = () => (
  <Layout tabIndex={tabs.index}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
