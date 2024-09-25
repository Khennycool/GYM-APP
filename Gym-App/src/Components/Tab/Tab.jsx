import React, { useState } from 'react'
import { ProductsData } from '../mockData/data'
import {motion} from 'framer-motion'

const Tab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards = activeTab == "All" ? ProductsData : ProductsData.filter((card) => card.category == activeTab);
  return (
    <>
     <div className="containe my-12 md:my-16">
      <div className='flex space-x-4 mb-4 p-6'>
         {
          tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
            className={`py-3 px-5 rounded ${activeTab == tab ? "bg-primary text-white" : "bg-gray-300 text-gray-700"}`}>
             {tab}
            </button>
          )
          )
         }
      </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
              filteredCards.map((card) =>(
               <div className=' p-4 border border-primary rounded shodow-sm space-y-2'>
                <img src={card.image} alt="" />
                <p>{card.tittle}</p>
                <p>{card.category}</p>
               </div>
              ))
            }
          </div>

     </div>
    </>
  )
}

export default Tab;