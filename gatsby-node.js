/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplates = path.resolve('src/templates/BlogPost.js');
  const postTemplates = path.resolve('src/templates/PostPost.js');
  return graphql(`
    {
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
            }
          }
        }
      }
    }
  `).then(res=>{
      if(res.errors){
          return Promise.reject(res.errors)
      }
      res.data.allMarkdownRemark.edges.forEach(({node})=>{
        console.log('what is node',node.frontmatter.path);
        const path = node.frontmatter.path
        if(path.includes('blog')){
          createPage({
              path: node.frontmatter.path,
              component: blogTemplates,
          })
        }else{
          console.log('are we in post path',path);
          createPage({
            path: node.frontmatter.path,
            component: postTemplates,
        }) 
        }
      })
  })

}
