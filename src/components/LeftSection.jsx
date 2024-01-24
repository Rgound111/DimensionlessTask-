import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Table } from '@mui/material';
import TableData from './Table'

const LeftSection = () => {
  return (
    <div className='flex flex-col gap-3 '>
      <div className='flex flex-col gap-4 p-2 h-[35vh] w-full border border-black rounded-md '>
        <div className='flex  justify-between'>
          <span className='font-semibold'>News &  Data Flow</span>
          <div className='flex gap-2 h-min'>
            <div className='text-sm flex gap-1 border border-black px-1'>
              <span>5M</span>
              <span>15M</span>
              <span>30M</span>
              <span>1H</span>
              <span>2H</span>
              <span>3H</span>
              <span>4H</span>
              <span>All</span>
            </div>
            <span className='bg-blue-600 px-1 text-white'>Filter <ArrowDropDownIcon /></span>
          </div>
        </div>
        <div className='h-[25vh] bg-slate-300'></div>
      </div>
      <div className='border border-black rounded-md p-2'>
        <div><TableData/></div>        
      </div>
    </div>
  )
}

export default LeftSection