"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from '@/data/music_testimonial'
import { div } from "motion/react-client";
import { cn } from "@/utils/lib/utils";

interface Testimonial{
    name:string,
    title:string,
    quote:string
}
const Music_School_Testimonial = () => {
  return (
    <>
    <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:35px_35px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      >
     <h1 className="text-neutral-200 text-4xl text-center pt-16">Hear Our Harmony: Voices of Success</h1>
    <div className="h-[28rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  </div>
  </div>
  </>
  )
}

export default Music_School_Testimonial