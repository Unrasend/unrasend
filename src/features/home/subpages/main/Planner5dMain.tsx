
import React from 'react';

export const Planner5dMain = () => (
  <div className="flex flex-wrap">
    <h3 className="w-[50%]">Planner 5D - Home Design Tool.</h3>
    <a className="flex w-[50%] items-center justify-end text-lg" href="http://planner5.com" target="_blank">Website</a>

    <p className="flex-1 block">Advanced 2D/3D home design tool used by ~65.5M of users.</p>

    <iframe
      className="w-full h-[550px] aspect-video mt-4"
      src="https://www.youtube.com/embed/7kjqn_WcpKA"
      title="Planner 5D Demo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
