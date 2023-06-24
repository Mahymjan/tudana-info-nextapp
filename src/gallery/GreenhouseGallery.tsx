import React from 'react' 
import Image from 'next/image'
import w1 from '../../public/assets/images/1.png'
import w2 from '../../public/assets/images/2.png'
import w3 from '../../public/assets/images/3.png'
import w4 from '../../public/assets/images/4.png'
import w5 from '../../public/assets/images/5.png'
import w6 from '../../public/assets/images/6.png'


const GreenhouseGallery = () => {

    return (
      <div className="flex flex-row justify-center flex-wrap">
        <div className='flex flex-row'>
            <div className='flex flex-col'> 
            <div className='p-1 md:p-2'>
              <Image src={w1} alt="" />
            </div>
            <div className='p-1 md:p-2'>
              <Image src={w2} alt="" />
            </div>
            </div>
            <div className='p-1 md:p-2'>
                <Image src={w3} alt=""/>
            </div>
        </div>
        <div className='grow lg:grow-0'>
            <div className='p-1 md:p-2 w-full'><Image src={w4} alt="" /></div> 
            <div className='flex flex-wrap'>
              <div className='p-1 md:p-2 w-3/5'>
                <Image src={w5} alt="" />
              </div>
              <div className='p-1 md:p-2 w-2/5'>
                <Image src={w6} alt="" />
              </div>
            </div>
        </div>
      </div> 
    )
}

export default GreenhouseGallery



      //   <Section>
      //   <div className='grid grid-cols-4 grid-rows-2 gap-2 grid-flow-row grid-flow-row-dense place-content-stretch gap-2'>
      //      <div className='col-span-1 place-self-center '><Image src={w1} alt="" /></div>
      //      <div className='row-span-2 place-self-center'><Image src={w3} alt="" /></div>
      //      <div className='col-span-2 place-self-center'><Image src={w4} alt="" /></div>
      //      <div className='place-self-center'><Image src={w2} alt="" /></div>
      //      <div className='col-span-1'><Image src={w5} alt="" /></div>
      //      <div className='place-self-center'><Image src={w6} alt="" /></div>
      //   </div>
      // </Section>