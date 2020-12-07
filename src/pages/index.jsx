import React from "react"
import { graphql } from "gatsby"
import { Cards } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <Cards nodes={data.items.edges} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    items: allDatoCmsContentItem {
      edges {
        node {
          id
          certificationLevel
          summary
          lastName
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
  }
`
