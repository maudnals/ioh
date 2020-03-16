import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>No man's land</h1>
    <p>Looks like this page doesn't exist.</p>
  </Layout>
)

export default NotFoundPage
