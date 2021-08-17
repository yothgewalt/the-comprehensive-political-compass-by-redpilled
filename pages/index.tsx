import Head from 'next/head'
import Major from '../components/major_cpc'

export default function Home() {
    return (
        <div className="antialiased font-display font-normal text-base text-black bg-white min-h-screen">
            <Head>
                <meta charSet="utf-8" />
                <title>Comprehensive Political Compass</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            </Head>
            <Major />
        </div>
    )
}
