import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div> 
         <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
         </div>
         <div className='my-10 flex flex-col md:flex-row gap-16' >
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 ma:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque sed iure neque tempora esse expedita velit placeat ad, quos aspernatur quo, nobis, dicta numquam? Quae odit reprehenderit numquam nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam nisi quibusdam, autem aliquam aspernatur cum in ad iure sint praesentium optio dignissimos incidunt perferendis consequuntur earum maxime nulla quidem.</p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur autem velit soluta placeat accusantium accusamus optio aspernatur, deserunt quis ratione doloremque ipsum beatae blanditiis assumenda magni. Nobis assumenda vero fugit.</p>
          </div>
          </div>
          <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
           </div>
           <div className="flex flex-col md:flex-row gap-6 text-sm mb-20">
  {/* Box 1 */}
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Quality Assurance</b>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </p>
  </div>

  {/* Box 2 */}
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Convenience</b>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </p>
  </div>

  {/* Box 3 */}
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Exceptional Customer Service</b>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </p>
  </div>
</div>

<NewsletterBox/>

         </div>
    
  )
}

export default About