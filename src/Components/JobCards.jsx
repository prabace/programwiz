import React from 'react'

const JobCards = (props) => {
  return (
    <div className='h-full mt-10 '>
        <div className=''>
           <div className='px-10 border-2 rounded-2xl mx-60 shadow-2xl'>
        
            <div className='grid grid-cols-2 items-center'>
                <div className='flex flex-row gap-x-10 py-4'>
                   <img className='object-fit w-[100px] rounded-full h-[100px]' src={props.logo}/>

                    <div className='flex flex-col gap-y-2 '>
                    <div className='flex flex-row gap-x-4'>
                         <div className='text-[#B3B5B4] font-semibold'>{props.company}</div>
                         <div className='bg-[#5EA4A3] font-semibold text-white px-3 rounded-2xl'>new!</div>
                         <div className='bg-[#313938] font-semibold text-white px-3 rounded-2xl'>featured</div>
                    </div>
                    
                    <div className='text-lg text-[#313938] font-bold'> 
                    {props.position}
                    </div>
                    
                    <div className=' text-[#B3B5B4] flex flex-row gap-x-4'>
                         <div>{props.date}</div>
                         <div>.</div>
                         <div>{props.timing}</div>
                         <div>.</div>
                         <div>{props.location}</div>
                    </div>
                </div>
                </div>

                

                <div className='flex flex-row gap-x-4 items-end justify-end'>
                    <div className='border-2 px-3 rounded-2xl bg-[#F0FAF7] font-semibold text-[#80A8A5]'>{props.keywords[0]}</div>
                    <div className='border-2 px-3 rounded-2xl bg-[#F0FAF7] font-semibold text-[#80A8A5]'>{props.keywords[1]}</div>
                    <div className='border-2 px-3 rounded-2xl bg-[#F0FAF7] font-semibold text-[#80A8A5]'>{props.keywords[2]}</div>
                </div>
            </div>
            </div>
            
           </div>
        </div>
    
  )
}

export default JobCards