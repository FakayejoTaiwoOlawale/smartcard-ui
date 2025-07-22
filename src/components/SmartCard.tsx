// import type React from "react";

import { useState } from "react";

// interface SmartCardProp{
//     title:String;
//     description:String;
//     imageUrl?:String;
// }

// const SmartCard=()React.Fc(SmartCardProp)=>{

//     <div className="w-sm-full w-full shadow-ml">

//     </div>
// }

// export default SmartCard;

// import React, { Children } from "react";

//this is like setting a rule
interface SmartCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  //this is like one thing that enables us to make childre and make it optional
  children?: React.ReactNode;
}



//this is like the oldway of specifying the what the crowd
// const SmartCard: React.FC<SmartCardProps> = ({ title, description, imageUrl }) => {
const SmartCard = ({
  title,
  description,
  imageUrl,
  children,
}: SmartCardProps) => {

  //this is for storing values..
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm w-full ">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-xl mb-4 w-full h-40 object-cover"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>

      {/* this is the button that makes the modal to show */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View
      </button>
      <div className="mt-2">{children}</div>

      {showModal && (

        //this is like the background and the modal on the background
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-700">{description}</p>
            <img src={imageUrl} alt={title} className="mt-4 rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartCard;
