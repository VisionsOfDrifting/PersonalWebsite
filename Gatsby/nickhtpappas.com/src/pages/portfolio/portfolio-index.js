import React from 'react'
import Link from 'gatsby-link'
import '../../style/portfolio-index.css'

const Portfolio = () => (
  <div>
    <h2>Portfolio</h2>
    <p>
      These are some of my completed projects that I've hosted on this server
      with live demos. Feel free to try them out and look at the source code.
    </p>
    Other projects I've completed, but haven't hosted are on my github as well.
    <p />
    <h4>(CSS Grid with projects here)</h4>
    <h1>Basic Grid</h1>
    <div className="Grid Grid--full u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of1" />
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-2 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of2" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of2" />
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-3 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of3" />
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-4 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of4" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of4" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of4" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of4" />
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-6 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of6" />
      </div>
    </div>
    <div className="Grid Grid--gutters Grid--cols-12 u-textCenter">
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
      <div className="Grid-cell">
        <div className="Demo content-1of12" />
      </div>
    </div>
    <hr />
  </div>
)

export default Portfolio
