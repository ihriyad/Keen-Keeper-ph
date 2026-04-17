import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import Person from "./Person";
import Aside from "./Aside";
import CheckIn from "./CheckIn";

const CardDetails = () => {
  const { id } = useParams();

  const { friends, loading } = useFriends();

  const newFriend = friends.find((friend) => friend.id == id);

  return (
    <div className="max-w-277.5 w-11/12  mx-auto my-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 w-11/12 md:w-full items-center justify-center mx-auto">
          <div className=" mx-auto w-auto">
            <Person newFriend={newFriend}></Person>
          </div>
          <div className="w-11/12 md:w-auto mx-auto flex-1 ">
            <Aside newFriend={newFriend}></Aside>
            <div className="mt-8">
              <CheckIn newFriend={newFriend}></CheckIn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
