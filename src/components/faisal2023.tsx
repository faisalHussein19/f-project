
// import Selector from '@/app/engineoil/page'
// import React from 'react'

import Selector from "./EngineOilSelector"

const engineoil = () => {
  return (
    <section className='min-h-screen px-3 grid place-items-center selection:text-white selection:bg-teal-500 bg-gradient-to-r
     from-teal-500'>app
     <div>
        <h2 className=' text-2xl font-bold text-teal-900'>
            Hello , helo , Hello
        </h2>
        <br />
        <div className='flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8'>
            <>
             <Selector/>
            </>
        </div>
     </div>
     </section>
  )
}

export default engineoil
