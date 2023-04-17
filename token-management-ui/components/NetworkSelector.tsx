'use client'
import { useState } from 'react';
const NetworkSelector = ({leftHandSide, rightHandSide} : {leftHandSide:string, rightHandSide:string}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <main className="flex flex-col justify-between p-2">
    <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
        <input id="Toggle3" type="checkbox" className="hidden peer" />
        <span className="px-4 py-2 rounded-l-md dark:bg-orange-400 peer-checked:dark:bg-gray-300 font-semibold">{leftHandSide}</span>
        <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-orange-400 font-semibold">{rightHandSide}</span>
    </label>
    </main>
  )
}

export default NetworkSelector;