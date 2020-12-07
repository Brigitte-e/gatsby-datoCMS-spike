import { graphql, Link } from "gatsby"
import React from "react"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-white py-6">
        <div className="container text-center">
          <Link to="/" className="inline-block">
            <img alt="Logo" src="logo.svg" />
          </Link>
        </div>
      </header>
      {children}
    </>
  )
}


export const query = graphql`
  fragment LogoImageFragment on File {
    url: publicURL
    childImageSharp {
      mobile: fixed(width: 468, height: 120, quality: 80, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed_withWebp
      }
      desktop: fixed(width: 768, height: 170, quality: 85, cropFocus: SOUTH) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`
