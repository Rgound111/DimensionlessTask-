import React from 'react'
import Logo from './logo007.webp'

const RightSection = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-5 h-[35vh] w-full border border-black rounded-md p-1'>
                <div className='text-center font-semibold'>Average Score</div>
                <div className='flex justify-start items-center'>
                    <div><img className='w-52' src={Logo} alt="" /></div>
                    <div className='flex flex-col text-xs gap-2'>
                        <span>75 %</span>
                        <span className='text-gray-400'>About Graph</span>
                        <span className='font-medium text-blue-400'>See Details</span>
                    </div>
                </div>
            </div>
            <div className='border border-black rounded-md p-1'>
                <span className='font-semibold'>Top 10 Focus Topics</span>
                <div className='flex flex-col gap-[2px] p-1'>

                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>1. Focus Topic 1 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>2. Focus Topic 2 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>3. Focus Topic 3 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>4. Focus Topic 4 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>5. Focus Topic 5 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>6. Focus Topic 6 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>7. Focus Topic 7 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>8. Focus Topic 8 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>9. Focus Topic 9 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div className='text-gray-400'>10. Focus Topic 10 </div>
                        <div className='bg-blue-400 rounded-lg px-0.5'>Score 1</div>
                    </div>
                </div>
                <span className='text-blue-500 text-sm '>See all</span>
            </div>
        </div>
    )
}

export default RightSection