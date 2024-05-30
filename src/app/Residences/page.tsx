import './page.css'
import localFont from 'next/font/local'
import Rectaangle5 from './../../../public/img/Rectangle5.png'
import Rectaangle4 from './../../../public/img/Rectangle4.png'
import bathtub1 from './../../../public/img/bathtub1.png'
import bedroom1 from './../../../public/img/bedroom1.png'
import Image from 'next/image'


const Degular = localFont({
    src:[
      {
        path: "../../../public/font/Degular-Medium.otf",
        weight :"",
      },
    ] ,
  })

export default function Residences(){
    return(
        <div className="wrapper">
            <h1>Residences</h1>
            <div className='intro2'>
                <div className={Degular.className}>
                <div className='text1'>For those who seek an exceptional home and life, there is only Masteri Centre Point</div>
                <div className='text2'>Masteri Centre Point</div>
                </div>
            </div>
            <div className='rec4-wrapper'>
             <Image className="rec4" src={Rectaangle4} alt=''></Image>
            </div>
            <div className='circle1'>
              <div className='drag'><a className={Degular.className}>Drag</a></div>
            </div>
            <div className='num1'><a className={Degular.className}>01</a></div>
            <div className='text3'><a className={Degular.className}>Superior Apartment with City View & Balcony</a></div>
            <div className='num2'><a className={Degular.className}>02</a></div>
            <div className='text4'><a className={Degular.className}>Deluxe Apartment with Garden/River View & Balcony</a></div>
            <div className='icon1'>
              <Image src={bedroom1} alt=''></Image>
            </div>
            <div className='icon2'>
              <Image src={bathtub1} alt=''></Image>
            </div>
            <div className='icon3'>
              <Image src={bedroom1} alt=''></Image>
            </div>
            <div className='icon4'>
              <Image src={bathtub1} alt=''></Image>
            </div>
            <div className='text5'><a className={Degular.className}>3</a></div>
            <div className='text6'><a className={Degular.className}>4</a></div>
            <div className='text7'><a className={Degular.className}>2</a></div>
            <div className='text8'><a className={Degular.className}>3</a></div>
            <div className='rec5-wrapper'>
              <Image className="rec5" src={Rectaangle5} alt=''></Image>
            </div>
            <div className='intro3'><a className={Degular.className}>The spectacular 15 into 13 room corner residence is perfectly positioned on Fifth Avenue to enjoy the absolutely dazzling views of Central Park and the fabulous sun-lit Southern exposures grace the apartment with amazing light throughout the day.</a></div>
        </div>
        
    )
}