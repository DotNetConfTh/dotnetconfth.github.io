import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Venue } from '@/components/Venue'
// import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>.NET Conf 2024 - Thailand</title>
        <meta name="description"
          content=".NET Conf Thailand - Learn about DevOps, Cloud and .NET" />
        <meta name="keywords" content="dotnet, .NET, conference, Thailand" />
        <meta name="author" content=".NET Conf Thailand" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Venue />
        <Sponsors />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
