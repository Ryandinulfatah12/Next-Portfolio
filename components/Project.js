import React, { useState } from 'react'
import userData from '../constants/data'

import CardProject from './micro/cardProject'
export default function Project() {
  //   console.log(userData.project)
  const [item, setItem] = useState(userData.project)
  return (
    <>
      <React.Fragment>
        <div className="">
          <div id="work">
            <h1 className="text-center text-4xl font-extrabold text-slate-800 dark:text-white lg:ml-1">
              Here you can see my work&#128640;
            </h1>
            {/* New Card */}
            <div className="xs:grid-cols-1 grid items-center justify-center gap-4 py-2 px-2 md:grid-cols-2">
              {item.map((project) => (
                <CardProject key={project.id} project={project} />
              ))}
            </div>
            {/* End */}
          </div>
        </div>
      </React.Fragment>
    </>
  )
}
