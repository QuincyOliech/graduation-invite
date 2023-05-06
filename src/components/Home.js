import React from "react";
// import { useState } from "react";
import RSVPForm from "./RSVPForm";
import Location from "./Location";
import graduation from "../images/graduation.jpg";

const Home = () => {
  // const [activeTab, setActiveTab] = useState("location");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-900 min-h-screen">
      <div className=" mx-auto flex flex-col md:flex-row items-center py-8">
        <div className="md:w-1/2 relative -mt-10">
          <img
            src={graduation}
            alt="Graduation"
            className="w-96 h-4/5 rounded-t-full relative z-10 ml-10"
          />
          <div
            className="rounded-lg absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-yellow-500 dark:bg-yellow-600 rounded-t-full w-96 h-4/5 mt-24"
            ml-8
          />
        </div>

        <div className="md:w-2/3 py-8 md:py-0 m-4">
          <div className="flex flex-col justify-center h-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl md:text-6xl sm:text-center text-center font-bold text-yellow-500 dark:text-yellow-600 sm:mt-8 mx-auto">
                Quincy's Graduation Invite
              </h1>
            </div>
            <div>
              <p className="text-lg mb-6 dark:text-white">
                This event marks a significant milestone in my life, and I would
                be honored if you could join me in celebrating this achievement
                on 13TH May.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl mx-auto text-center font-bold mb-4 text-red-700 dark:text-red-700">
                  Details of Graduation Party
                </h2>
                <p className="text-lg mb-4">
                  I will be hosting an informal graduation party at Pablo's
                  Pizza Mexican Eatery Mexobar, starting at 1.00 pm.
                </p>
                <p className="text-lg mb-4">
                  Please note that everyone is expected to pay for their own
                  meal and drink.
                </p>
                <p className="text-lg mb-4">
                  To help with planning, I kindly request that you RSVP by 10TH
                  May. Your response will allow me to make adequate arrangements
                  for the event.
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              {/* <button
                className={`mr-4 py-2 px-4 rounded-lg ${
                  activeTab === "location"
                    ? "bg-yellow-500 text-white dark:text-black"
                    : "bg-yellow-300 text-black dark:text-white"
                }`}
                onClick={() => handleTabClick("location")}
              >
                Location
              </button> */}
              <Location />
              {/* <button
                className={`mr-4 py-2 px-4 rounded-lg ${
                  activeTab === "rsvp"
                    ? "bg-purple-700 text-white dark:text-black"
                    : "bg-gray-400 text-black dark:text-black"
                }`}
                onClick={() => handleTabClick("rsvp")}
              >
                RSVP
              </button> */}
              <RSVPForm />
            </div>
            {/* {activeTab === "location" && (
              <div className="text-center">
               
                <Location />
              </div>
            )} */}
            {/* {activeTab === "rsvp" && (
              <div className="text-center">
                <p className="text-lg mb-4 dark:text-white">
                  Please fill out the form below to RSVP to the event.
                </p>
                <RSVPForm />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
