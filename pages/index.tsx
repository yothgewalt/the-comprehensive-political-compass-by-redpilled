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
                <meta name="description" content="Wokism Discourse" />
                <meta property="og:url" content="https://comprehensive-political-compass.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Comprehensive Political Compass" />
                <meta property="og:description" content="Political test that seeks to most accurately and thoroughly describe the overall political stance of a respondent and further divide it into distinct categories." />
                <meta 
                    property="og:image"
                    content={
                        "https://images.pexels.com/photos/3385615/pexels-photo-3385615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    }
                />
            </Head>
            <Major />
        </div>
    )
}
