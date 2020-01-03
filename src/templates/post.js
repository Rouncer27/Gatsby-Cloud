import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const post = props => {
  const post = props.data.post
  return (
    <Layout>
      <SEO />
      <h1>{post.title}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    post: wordpressPost(slug: { eq: $slug }) {
      date(formatString: "MMMM D, Y")
      title
      slug
      wordpress_id
      content
    }
  }
`

export default post
