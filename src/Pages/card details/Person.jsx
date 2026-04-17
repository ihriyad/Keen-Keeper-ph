import React from "react";
import { MdOutlineArchive } from "react-icons/md";
import { RiNotificationSnoozeLine, RiDeleteBin6Fill } from "react-icons/ri";

const Person = ({ newFriend }) => {
  const { picture, name, status, connected, tags, email, bio } = newFriend;

  const statusColor =
    status === "overdue"
      ? "bg-red-100 text-red-600"
      : status === "almost due"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-green-100 text-green-600";

  return (
    <div className="space-y-6">
      <div className="bg-gray-50  rounded-xl p-6 flex flex-col items-center text-center">
        <img
          src={picture}
          alt=""
          className="w-24 h-24 rounded-full object-cover mb-3"
        />

        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        <p className="text-sm text-gray-500">{connected} days ago</p>

        <span className={`mt-2 px-3 py-1 text-xs rounded-full ${statusColor}`}>
          {status}
        </span>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">{bio}</p>

        <p className="text-xs text-gray-400 mt-1">{email}</p>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-400/20 rounded-lg py-2 hover:bg-gray-50 transition">
          <RiNotificationSnoozeLine /> Snooze
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-green-400/20 rounded-lg py-2 hover:bg-green-500/20 transition">
          <MdOutlineArchive /> Archive
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-red-400/20 rounded-lg py-2 text-red-600 hover:bg-red-600/20 transition">
          <RiDeleteBin6Fill /> Delete
        </button>
      </div>
    </div>
  );
};

export default Person;
