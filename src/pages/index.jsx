import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
<<<<<<< HEAD
// import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Venue } from '@/components/Venue'
=======
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
>>>>>>> ff53dfe (Migrate to nextjs)

export default function Home() {
  return (
    <>
      <Head>
        <title>.NET Conf 2022 - Thailand</title>
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
<<<<<<< HEAD
        <Venue />
        <Sponsors />
        {/* <Newsletter /> */}
=======
        <Sponsors />
        <Newsletter />
>>>>>>> ff53dfe (Migrate to nextjs)
      </main>
      <Footer />
    </>
  )
}
