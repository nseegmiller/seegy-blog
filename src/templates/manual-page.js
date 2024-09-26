import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import profilePic from '../img/scotland-2024.jpg'
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ManualPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="content container">
      <div>
        <title>Manual of Nick</title>
        <link rel="icon" href="/favicon.ico" />
      </div>

      <main>
        <div class="header-container">
          <img src={profilePic} alt="Picture of Nick in Scotland in 2024" style={{ width: "200px" }} className="profile-pic" />
          <div className="left-spacing">
            <h1>Nick Seegmiller (he/him)</h1>
            My last name is pronounced "segg-mill-er" (first syllabal rhymes with egg), and my nickname is pronounced "seggy."
          </div>
        </div>
        <PageContent className="content" content={content} />
      </main>
    </div>
  );
};

ManualPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ManualPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ManualPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ManualPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ManualPage;

export const manualPageQuery = graphql`
  query ManualPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
