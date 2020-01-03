import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  const posts = props.data.posts.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link to={`/news/${post.node.slug}`}>{post.node.title}</Link>
          </div>
        )
      })}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query newPage {
    posts: allWordpressPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          slug
          wordpress_id
          excerpt
        }
      }
    }
  }
`

export default IndexPage
