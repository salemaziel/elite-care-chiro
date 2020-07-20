/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://d35xd5ovpwtfyi.cloudfront.net/loader/loader.min.js?v=1440696613"
      src="https://d35xd5ovpwtfyi.cloudfront.net/loader/loader.min.js?v=1440696613"
      defer={true}
    />,
    <script
    key="https://apps.elfsight.com/p/platform.js"
    src="https://apps.elfsight.com/p/platform.js"
    defer={true}
  />,
  ])
}