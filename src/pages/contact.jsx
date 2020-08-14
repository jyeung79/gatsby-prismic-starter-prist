import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import GoogleMap from "../components/GoogleMaps";

const ContactTitle = styled("h1")`
    margin-bottom: 1em;
`

const ProfileImageContainer = styled("div")`
    background: ${colors.white};
    display: flex;
    justify-content: left;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
    padding-right: 2em;
    height: 300px;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 300px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 250px;
        max-height: 250px;
        border: 0.25em ${colors.white};
        border-radius: 20%;
        width: 100%;
        margin-right: 5em;
        background: #ffffff;
        box-shadow:  14px 14px 28px #ababab, 
                     -14px -14px 28px #ffffff;
        
        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 200px;
            max-height: 200px;
        }
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`

const SkillsList = styled("div")`
    h5 {
        font-size:18px;
    }
`

const Contact = ({ content, meta }) => (
    <>
        <Helmet
            title={`Contact | Prist, Gatsby & Prismic Starter`}
            titleTemplate={`%s | Contact | Prist, Gatsby & Prismic Starter`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Work | Prist, Gatsby & Prismic Starter`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout>
            <ContactTitle>
                About Me!
            </ContactTitle>
            <>
                <ProfileImageContainer >
                    <img src={content.contact_image.url} alt='Profile image' />
                    {RichText.render(content.contact_subtitle)}
                </ProfileImageContainer>
                <h2 >Skills & Experiences</h2>
                <SkillsList>
                    {RichText.render(content.skills)}
                </SkillsList>
                {RichText.render(content.interest)}
                {RichText.render(content.interest_subtitle)}
                {RichText.render(content.food_places)}
                {RichText.render(content.food_subtitle)}
            </>
            <div>
                <GoogleMap />
            </div>
        </Layout>
    </>
);

export default ({ data }) => {
    const content = data.prismic.allContacts.edges.slice(0, 1).pop();
    const meta = data.site.siteMetadata;
    
    if (!content) return null;

    return (
        <Contact content={content.node} meta={meta}/>
    )
}

Contact.propTypes = {
    content: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allContacts {
              edges {
                node {
                    contact_title
                    contact_image
                    contact_subtitle
                    skills
                    interest
                    interest_subtitle
                    food_places
                    food_subtitle
                }
              }
            }
          }
          site {
            siteMetadata {
              author
              description
              title
            }
          }
    }
`
