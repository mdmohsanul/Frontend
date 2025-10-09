import React from 'react'

const CinemaSeatBooking = ({
  layout={
    rows:8,
    seatsPerRow:12,
    aislePosition:5
  },
  seatTypes={
    regular:{name:"Regular",price:150, rows:[0,1,2]},
    premium:{name:"Premium",price:250, rows: [3,4,5]},
    vip:{name:"VIP",price:450, rows:[6,7]}
  },
  bookedSeats= [],
  currency="₹",
  onBookingComplete = () => {},
  title="Cinema Hall Booking",
  subTitle="Select Your prefered seats"
}) => {
  return (
    <div className='w-full min-h-screen bg-gray-50' >
     <div className='max-w-6xl mx-auto py-4'>
      <h1 className='text-2xl md:text-3xl text-gray-800 text-center font-semibold pb-4'>{title}</h1>
      <p className=' text-gray-800 text-center font-semibold pb-6'>{subTitle}</p>
       <div className='w-full rounded-4xl h-4 bg-gradient-to-r from-gray-200 to-gray-400'/>
      <div className='text-center my-6'>Screen</div>
     </div>
    
    
    
    </div>
  )
}

export default CinemaSeatBooking