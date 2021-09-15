import dynamic from "next/dynamic"

// See https://nextjs.org/docs/advanced-features/dynamic-import for more details on how to use custom loading and NOT use server-side rendering (SSR)
const MapDetail = dynamic(() => import("./MapDetail"), {
  // eslint-disable-next-line react/display-name
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default MapDetail
