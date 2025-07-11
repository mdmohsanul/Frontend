'use client'
import React from 'react'
import CourseData from "../data/music_courses.json"
import Link from 'next/link'
import { p } from 'motion/react-client'
import { BackgroundGradient } from './ui/background-gradient'

interface Courses {

    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    

}

const Featured_Courses = () => {
  const featuredCard = CourseData.courses.filter((course:Courses) => course.isFeatured === true)
  return (
    <div className='py-12 bg-gray-900 dark:text-white'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Couses</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCard.map((course:Courses) => (
              <div key={course.id} className='flex justify-center'>
                <BackgroundGradient className='flex flex-col items-center bg-black  rounded-[22px] h-full max-w-sm cursor-pointer'>
                  <div className='p-4 sm:p-6 flex flex-col gap-4 items-center text-center flex-grow'>
                  <p className='text-lg sm:text-xl mt-4 text-neutral-200'>{course.title}</p>
                  <p className='text-sm flex-grow text-neutral-400'>{course.description}</p>
                   <Link href={"/courses/${course.slug}"} >Learn More</Link>
                  </div>
                 
                </BackgroundGradient>
              </div>
            ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
<Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
View All Courses
</Link>
        </div>
    </div>
  )
}

export default Featured_Courses