import React from "react"
import { Feature } from "../components"
import { Layout } from "../layouts/Layout"

export default props => {
  const {
    name,
    year,
    image,
    locale,
    certificationLevel,
    description,
    summary,
  } = props.pageContext.item

  return (
    <Layout >
      <article className="max-h-80vh md:max-h-90vh overflow-auto">
        <div className="container py-8">
          <h1 className="text-2xl lg:text-3xl text-blue-500 font-bold leading-tight">
            {name}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 font-medium mb-4">
            {summary}
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <img src={image?.url} alt=""/>
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
            <Feature label="Certification Level" value={certificationLevel} />
              <Feature label="Certified Since" value={String(year)} />
              <Feature label="locale" value={locale} />
              <p className="mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}