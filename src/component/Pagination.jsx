import React from 'react'

export default function Pagination() {
  return (
    <div class="flex items-center space-x-2 mt-3">
    <button class="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 rounded bg-gray-200 transition-all duration-300">
      &laquo;
    </button>

    <button class="w-8 h-8 border border-[#2148c0] text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      1
    </button>
    <button class="w-8 h-8 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      2
    </button>
    <button class="w-8 h-8 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      3
    </button>
    <button class="w-8 h-8 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      4
    </button>
    <button class="w-8 h-8 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      5
    </button>

    <button class="flex items-center justify-center w-8 h-8 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition-all duration-300">
      &raquo;
    </button>
    <div class="w-32">
    <select id="selectBox" class="block w-full py-[6px] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <span className='ml-2 text-[#535556] mb-[2px]'>/ Page</span>
  </div>
  )
}
