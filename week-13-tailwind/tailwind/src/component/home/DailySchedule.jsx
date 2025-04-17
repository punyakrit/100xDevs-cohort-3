import React from 'react'
import CardHolder from './CardHolder'
import { Calendar, MoveLeft, MoveRight, Plus } from 'lucide-react'

const getFormattedDate = () => {
    const date = new Date();
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    };
    return date.toLocaleDateString('en-US', options);
  };

function DailySchedule() {
  const webinars = [
    {
      time: "11:30 AM",
      title: "UX Webinar",
      status: "Live"
    },
    {
      time: "11:30 AM",
      title: "My first Webinar",
      status: "Upcoming"
    },
    {
      time: "11:30 AM",
      title: "Important Webinar",
      status: "Upcoming"
    },
    {
      time: "11:30 AM",
      title: "Webinar 1",
      status: "Upcoming"
    }
  ];

  return (
    <div className='ml-2 w-full'>
      <div className='grid grid-cols-7 gap-6'>
        <div className='col-span-4'>
          <CardHolder>
            <div className='bg-[#F4F7F7] px-4 py-3 rounded-xl flex justify-between w-full'>
              <div className='flex items-center space-x-4'>
                <Calendar size={20} />
                <div className='flex items-center font-medium'>
                  <span>Thursday, 17 April 2025</span>
                  <span className='ml-2'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className='flex space-x-4'>
                <MoveLeft size={20} className='cursor-pointer' />
                <MoveRight size={20} className='cursor-pointer' />
              </div>
            </div>
            
            <div className='divide-y divide-gray-200'>
              {webinars.map((webinar, index) => (
                <div key={index} className='py-3 px-1 flex'>
                  <div className='flex w-48 space-x-0'>
                    <div className='w-24 text-gray-700'>{webinar.time}</div>
                    <div className='w-24 text-gray-700'>{webinar.time}</div>
                  </div>
                  <div className='flex flex-col'>
                    <div className={`text-xs ${webinar.status === 'Live' ? 'text-red-500' : 'text-blue-500'} mb-1 flex items-center`}>
                      {webinar.status} 
                      {webinar.status === 'Live' && 
                        <span className='inline-block ml-1 w-2 h-2 rounded-full bg-red-500'></span>
                      }
                    </div>
                    <div className='font-medium'>{webinar.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardHolder>
        </div>
        
        <div className='col-span-3'>
          <CardHolder>
            <div className='flex justify-around py-6'>
              <div className='flex flex-col items-center'>
                <div className='bg-teal-200 p-3 rounded-lg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="16" rx="2" stroke="#0A303A" strokeWidth="2"/>
                    <path d="M8 3V7" stroke="#0A303A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 3V7" stroke="#0A303A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='mt-2 text-center text-sm'>Schedule<br/>a Webinar</div>
              </div>
              
              <div className='flex flex-col items-center'>
                <div className='bg-teal-200 p-3 rounded-lg'>
                  <Plus size={24} color="#0A303A" />
                </div>
                <div className='mt-2 text-center text-sm'>Join a<br/>Webinar</div>
              </div>
              
              <div className='flex flex-col items-center'>
                <div className='bg-teal-200 p-3 rounded-lg'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="14" rx="2" stroke="#0A303A" strokeWidth="2"/>
                    <path d="M8 12H16" stroke="#0A303A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='mt-2 text-center text-sm'>Open<br/>Recordings</div>
              </div>
            </div>
          </CardHolder>
        </div>
      </div>
    </div>
  )
}

export default DailySchedule
