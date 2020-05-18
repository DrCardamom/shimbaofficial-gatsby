import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../sass/mystyles.scss"
import "./growthLogTemplate.module.css"

export default function GrowthLog({ data }) {
  const post = data.markdownRemark
  console.log("html", post.html);
  
  return (
    <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <section className="section">
          <div className="container">
            <article>
              <h1 className="title is-size-3-desktop is-size-4-touch">
                { post.frontmatter.title } 
              </h1>
              <h2 className="subtitle is-size-5-desktop is-size-5-touch">
                { post.frontmatter.date } &nbsp; {post.timeToRead} min read
              </h2>
              <span className="is-size-5-desktop is-size-6-touch">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.html}} 
                />
              </span>
            </article>
          </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: {eq: $slug }}) {
        html
        frontmatter {
          date
          title
        }
        timeToRead

      }  
  }
`