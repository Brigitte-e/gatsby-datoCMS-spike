exports.createPages = async ({ graphql, actions: { createPage } }) => {
  return graphql(`
      {  
        allDatoCmsContentItem {
            edges {
              node {
                id
                lastName
                certificationLevel
                description
                summary
                email
                firstName
                locale
                name
                year
                slug
                image {
                  url
                }
              }
            }
          }
      }`).then(res => {
          res.data.allDatoCmsContentItem.edges.forEach(({ node }) => {
              createPage({
                  path: `/${node.slug}`,
                  component: require.resolve("./src/templates/single-item.jsx"),
                  context: { item: node },
              })
          })
      })
  }