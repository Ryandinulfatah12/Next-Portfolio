import React from 'react'

export default function CardProject(props) {
  return (
    <>
      <a
        key={props.project.id}
        className="my-3 mx-3 block rounded-xl duration-500 ease-in-out hover:scale-105 hover:cursor-default hover:shadow-xl dark:bg-gray-200"
        href="#"
      >
        <img
          className="h-56 w-full rounded-xl object-cover shadow-xl "
          src={props.project.img}
          alt={props.project.name}
        />

        <div className="p-4">
          <p className="text-uppercase text-xs text-slate-800">
            {props.project.type}
          </p>
          {props.project.stack.split(',').map((item) => (
            <span className="my-3 mr-2 inline-flex items-center justify-center rounded-full bg-slate-700 px-2 py-1 text-xs font-bold leading-none text-white">
              {item}
            </span>
          ))}
          <h5 className="text-xl font-bold text-slate-900">
            {props.project.name}
          </h5>
          <p className="mt-2 text-gray-500">{props.project.desc}</p>
          <div className="my-4"></div>
          <a
            href={props.project.url}
            className="mt-4 h-5 rounded-md bg-slate-500 py-2  px-3 font-semibold text-white hover:bg-slate-800"
          >
            👉 See Live / Documentation
          </a>
        </div>
      </a>
    </>
  )
}
