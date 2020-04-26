import React from 'react'
import { Link, graphql } from 'gatsby'

export default function PostPost ({ data }) {
    const post = data.markdownRemark
    return (
        <div>
            <script type="text/javascript">console.log('you have reach the  post post page here')</script>
            {console.log('you are in PostPost page')}
            <hr></hr>
            <Link to="/post">Post List</Link>
            <h1>{post.frontmatter.title}</h1>

        </div>
    )
}

export const postPageQuery = graphql`
        query PostPost($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`