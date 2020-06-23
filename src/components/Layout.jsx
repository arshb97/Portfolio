import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../css/icons.css';
import '../css/global.css';

const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
                image    
            }
        }
    }
`;

const Layout = props => (
    <StaticQuery
        query={pageQuery}
        render={({ site: { siteMetadata: seo } }) => {
            return (
                <React.Fragment>
                    <Helmet>
                        <title>{seo.title}</title>
                        <meta name="description" content={seo.description}></meta>
                        <meta name="author" content={seo.author}></meta>
                    </Helmet>
                    <div className={props.className}>{props.children}</div>
                </React.Fragment>
            );
        }}
    />
);

Layout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};

Layout.defaultProps = {
    className: 'cross-site'
};

export default Layout;
