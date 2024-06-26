import localFont from 'next/font/local'
import Image from 'next/image'
import MassGroup1 from '../../public/img/MassGroup1.png'
import './globals.css'
import MasteriLogo2 from '../../public/img/MasteriLogo2.png'
import About from './About/page';
import Residences from './Residences/page';
import Location from './Location/page';
import Gallery from './Gallery/page';
import Contact from './Contact/page';

import Link from 'next/link'






const Degular = localFont({
  src:[
    {
      path: "../../public/font/Degular-Medium.otf",
      weight :"",
    },
  ] ,
})


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='frame7'>
        <header>
          <Image className="headerimg" src={MassGroup1} alt={''}></Image>


          <p className={Degular.className}>Find a home that suits your lifestyle</p>
          <div className={Degular.className}>
            <p className='superior'>SUPERIOR</p>
          </div>
          <h1 className={Degular.className}>Masteri</h1>
          <div className="line-1"></div>
          <div className='menu-container'>
            <main className={Degular.className}>
            <span className=''><Link href='/About'>About</Link></span>
            <span className=''><Link href='/Residences'>Residences</Link></span>
            <span className=''><Link href='/Location'>Location</Link></span>
            <span className=''><Link href='/Gallery'>Gallery</Link></span>
            <span className=''><Link href='/Contact'>Contact</Link></span>
            </main>

          </div>
          <div className='intro'>
            <p className={Degular.className}>Built on centuries of tradition and dedicated to innovating the luxury real estate industry, Masteri Centre Point offers transformative experiences through a global network of exceptional and outstanding agents.</p>
          </div>
          <div className="circle"></div>
          <div className='discover'><a className={Degular.className}>Discover Design</a></div>
          <Residences></Residences>

        </header>
        {/* {children} */}
        
        
        </body>
    </html>
  )
}
