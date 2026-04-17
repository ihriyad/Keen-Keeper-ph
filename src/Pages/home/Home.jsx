import React from "react";
import useFriends from "../../hooks/useFriends";
import FriendsCard from "../../components/cards/FriendsCard";
import Banner from "../../components/banner/Banner";

const Home = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="max-w-7xl w-11/12 mx-auto py-10">
      <div>
        <Banner></Banner>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Connections
        </h1>

        <p className="text-sm text-gray-500">
          Available Friends {friends.length} 
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
