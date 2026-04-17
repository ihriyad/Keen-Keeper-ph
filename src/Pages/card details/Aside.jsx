import React from "react";

const Aside = ({ newFriend }) => {
  const { connected, goal, next_due_date } = newFriend;

  return (
    <div className="space-y-6">
      
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <h3 className="text-xl font-semibold text-[#244d3fFF]">
            {connected}
          </h3>
          <p className="text-sm text-gray-500">Days Since Contact</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <h3 className="text-xl font-semibold text-[#244d3fFF]">
            {goal}
          </h3>
          <p className="text-sm text-gray-500">Goal (Days)</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <h3 className="text-sm font-semibold text-[#244d3fFF]">
            {next_due_date}
          </h3>
          <p className="text-sm text-gray-500">Next Due</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">
            Relationship Goal
          </h3>
          <button className="text-sm px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">
            Edit
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          Contact every <span className="font-semibold">{goal} days</span>
        </p>
      </div>
    </div>
  );
};

export default Aside;