import React from "react";
//props are Attributes of the JSX compnent functions we either pass props to the function and use its attributes
// or directly destructure them and use them in the component. 
// it is basically just like the way we use res and req in API
export default function Card(props,
    {
    description="Is a picture"
    // if nothing is passed this is used
    }
) {
  return (
    
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={props.imageUrl} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base">
    {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

  );
}
