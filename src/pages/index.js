import * as React from "react"

const AsyncComponent = React.lazy(() => import('../components/AsyncComponent.js'));

const IndexPage = () => {
  return (
    <main>
      <React.Suspense fallback="Loading..">
        <p>Home page</p>
        <AsyncComponent />
      </React.Suspense>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
