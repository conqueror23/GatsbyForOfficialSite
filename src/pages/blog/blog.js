import React from "react"
import { graphql, Link } from "gatsby"

export default function blog({ data }) {
  return (
    <div>
      <h1>Latest Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map(record => (
          <div key={record.node.id}>
            <h3>{record.node.frontmatter.title}</h3>
            <img src={record.node.frontmatter.thumbnail}/>
            <div dangerouslySetInnerHTML={{__html:record.node.html}}></div>
            <div>
              created by {record.node.frontmatter.author} On{" "}
              {record.node.frontmatter.date}
            </div>
        <Link to={record.node.frontmatter.path}>Knows More About {record.node.frontmatter.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
            author
            thumbnail
          }
        }
      }
    }
  }
`
