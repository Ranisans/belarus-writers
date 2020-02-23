const path = require('path');

module.exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  });
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const writerTemplates = path.resolve('./src/templates/writer.tsx');
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              page
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: writerTemplates,
      path: `/writer/${edge.node.frontmatter.page}`,
      context: {
        page: edge.node.frontmatter.page,
      },
    });
  });
};
