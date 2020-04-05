import React from "react"
import { Link, graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Link to="/blog"> Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}
export const postQuery = graphql`
  query SingleBlog($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
