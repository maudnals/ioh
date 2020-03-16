import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const heroVideo = require("../images/hero-x-distorted.webm")
const poster = require("../images/hero-x-distorted.jpg")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="wrapped">
      <h1>
        Technology is for us, <br />
        <span className="inverted">humans</span>.
      </h1>
    </div>
    <div>
      <video
        autoPlay
        muted
        allowFullScreen
        loop
        playbackRate="0.01"
        playbackspeed="0.01"
        playbackrate="0.01"
        playbackSpeed="0.01"
        preload
        poster={poster}
      >
        <source src={heroVideo} type="video/webm" />
      </video>
    </div>

    <div className="wrapped">
      <p>Digital citizens deserve to know what happens behind the scenes.</p>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `2rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
