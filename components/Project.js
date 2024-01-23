import React, { useState } from 'react'
import userData from '../constants/data'

import CardProject from './micro/CardProject'
export default function Project() {
  //   console.log(userData.project)
  const [item, setItem] = useState(userData.project)

  const [selectedStack, setSelectedStack] = useState('All'); // Default selection

  const handleStackChange = (event) => {
    setSelectedStack(event.target.value);
  };

  const allProjects = Object.values(item);

  const uniqueStacks = allProjects.reduce((stacks, i) => {
    i.stack.split(',').forEach(stack => {
      const trimmedStack = stack.trim();
      if (!stacks.includes(trimmedStack)) {
        stacks.push(trimmedStack);
      }
    });
    return stacks;
  }, []);

    const dropdownOptions = uniqueStacks.map((stack, index) => (
      <option key={index} value={stack}>{stack}</option>
    ));


    const filteredProjects = selectedStack === 'All'
    ? item
    : item.filter(project => project.stack.includes(selectedStack));
  return (
    <>
      <div>
        <div id="work">
          <h1 className="text-center text-4xl font-extrabold text-slate-800 dark:text-white lg:ml-1">
            I am happy to present digitalization that helps many people, it's my fuel&#128640;
          </h1>

          {/* Filter */}
          <div className='text-right my-5 mx-3'>
            <label htmlFor="stackFilter" className="block font-semibold text-slate-800">Filter by Stack:</label>
            <select
              id="stackFilter"
              onChange={handleStackChange}
              value={selectedStack}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
            >
              <option value="All">All</option>
              {dropdownOptions}
            </select>
          </div>

          {/* New Card */}
          <div className="xs:grid-cols-1 grid items-center justify-center gap-4 py-2 px-2 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <CardProject project={project} />
            ))}
          </div>
          {/* End */}
        </div>
      </div>
    </>
  )
}
