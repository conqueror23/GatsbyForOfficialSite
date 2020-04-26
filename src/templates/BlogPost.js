import React from "react"
import { Link, graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <script type="text/javascript">
        console.log('you have reach the blog post page here')
      </script>
      {console.log('you are in blogPost tempatlte')}
      <Link to="/blog"> Blog List</Link>
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
