import Head from "next/head"
import Image from "next/image"

import styles from "../styles/Home.module.css"

import Map from "../components/Map"

const PAGE_TITLE = `DEMO: Next.js and Leaflet`

// An arbitrary collection of known latitude and longitude values
const ALKI_BEACH = [47.5801188, -122.4151038] // Alki Beach, Seattle, WA 98116
const LUMEN_FIELD = [47.5952, -122.3316] // Lumen Field, 800 Occidental Ave S, Seattle, WA 98134
const SPACE_NEEDLE = [47.6205099, -122.3514661] // Space Needle, 400 Broad St, Seattle, WA 98109
const WEST_SEATTLE_BRIDGE = [47.5709934, -122.3552123] // West Seattle Bridge, Seattle, WA 98134
const WESTWOOD_VILLAGE = [47.5227302, -122.369149] // Westwood Village, 2600 SW Barton St, Seattle, WA 98126
const positions = [
  WEST_SEATTLE_BRIDGE,
  LUMEN_FIELD,
  WESTWOOD_VILLAGE,
  SPACE_NEEDLE,
  ALKI_BEACH,
  WEST_SEATTLE_BRIDGE,
]

// NOTE: Specific map details such as the central point and an array of positions should be defined elsewhere. They are defined here for the purposes of a quick and dirty example only.
const DEFAULT_CENTER = WEST_SEATTLE_BRIDGE
const DEFAULT_ZOOM = 12

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{PAGE_TITLE}</h1>

        {/* TODO: We need to address a known bug in Safari.
            Safari behavior when clicking a pop-up using the latest release of Leaflet (1.7.1) only works if there is a long press.

            See https://github.com/Leaflet/Leaflet/issues/7331 for more information
        */}
        <Map
          className={styles.homeMap}
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          positions={positions}
        />
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
