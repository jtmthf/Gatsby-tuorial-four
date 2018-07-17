import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Helmet from 'react-helmet';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta
          name="Description"
          content={`
          Published ${post.frontmatter.date},
          Excerpt ${post.excerpt}
        `}
        />
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
    }
  }
`;
