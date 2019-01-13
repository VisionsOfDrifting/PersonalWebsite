import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Dump from '../components/dump'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Dump data={data} />
    {data.gcms.projects.map(item => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    ))}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    gcms {
      projects {
        id
        status
        title
        description
      }
    }
  }
`
