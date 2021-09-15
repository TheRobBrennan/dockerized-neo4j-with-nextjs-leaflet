import Head from "next/head"
import Image from "next/image"

import styles from "../styles/Home.module.css"

import Map from "../components/Map"

const PAGE_TITLE = `DEMO: Next.js and Leaflet`
const DEFAULT_CENTER = [38.907132, -77.036546] // Brevet Lieutenant-General Winfield Scott Statue, Washington, DC

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{PAGE_TITLE}</h1>

        {/* REVISIT: We need to address a known bug in Safari.
            Safari behavior when clicking a pop-up using the latest release of Leaflet (1.7.1) only works if there is a long press.

            See https://github.com/Leaflet/Leaflet/issues/7331 for more information
        */}
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
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
