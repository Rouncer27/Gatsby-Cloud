const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        posts: allWordpressPost {
          edges {
            node {
              slug
              wordpress_id
            }
          }
        }
      }
    `)

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/news/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          slug: node.slug,
          prev: index === 0 ? null : posts[index - 1].node.slug,
          next: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
