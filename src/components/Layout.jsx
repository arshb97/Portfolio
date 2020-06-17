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
            // const canonicalUrl = `https://ArshBhullar.com${props.canonicalUrl}`;

            // const title = props.title || seo.title;
            const title = "ArshdeepBhullar"
            const description = "Developer, designer and a tech enthusiast from Vancouver.";
            // const image = props.image || seo.image;

            // const metas = [
            //     { name: 'description', content: description },
            //     { name: 'og:url', content: props.path || '/' },
            //     { name: 'og:title', content: title },
            //     { name: 'og:description', content: description },
            //     { name: 'og:image', content: '/img/logo.jpg' }
            // ];

            return (
                <React.Fragment>
                    <Helmet>
                        {/* {metas.map(({ name, content }) => (
                            <meta key={name} name={name} content={content} />
                        ))} */}

                        <title>{title}</title>

                        {/* {typeof props.canonicalUrl !== 'undefined' && (
                            <link rel="canonical" href={canonicalUrl} />
                        )} */}
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
    // path: PropTypes.string,
    // canonicalUrl: PropTypes.string,
    // children: PropTypes.node.isRequired,
    // className: PropTypes.string
};

Layout.defaultProps = {
    className: 'cross-site'
};

export default Layout;
