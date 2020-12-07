import { Link } from "gatsby-plugin-modal-routing"
import React from "react"
import { Feature } from "."

export const Card = props => {
  const {
    name,
    navigation,
    slug,
    summary,
    certificationLevel,
    image
  } = props

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={`/${slug}`} state={{ navigation }}>
        <div className="bg-blue-300">
          <img src={image?.url} alt=""/>
        </div>
        <div className="p-5 pb-1">
          <h1 className="text-2xl text-blue-500 font-bold leading-snug">
            {name}
          </h1>
          <p className="text-base text-blue-900 mb-5 font-medium">{summary}</p>

          <Feature label="Certification Level" value={certificationLevel} />
        </div>
      </Link>
    </div>
  )
}

Card.defaultProps = {
  navigation: {},
}
