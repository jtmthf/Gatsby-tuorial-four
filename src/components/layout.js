import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'react-emotion';
import { graphql, Link, StaticQuery } from 'gatsby';

import { rhythm } from '../utils/typography';

import 'typeface-fira-sans';
import 'typeface-playfair-display';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet
          defaultTitle="Pandas Eating Lots"
          titleTemplate="%s | Pandas Eating Lots"
        >
          <html lang="en" />
        </Helmet>
        <Link to="/">
          <h3
            className={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to="/about/"
          className={css`
            float: right;
          `}
        >
          About
        </Link>
        {children}
      </div>
    )}
  />
);
