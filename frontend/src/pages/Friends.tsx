import React, { useEffect, useState } from "react";
import axios from 'axios';
import apiUrl from '../constants/constant.ts'
import { IoPersonAddOutline } from "react-icons/io5";

interface IfriendData {
  name:String;
  phone:String;
}

const FriendSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [friends, setFriends] = useState<IfriendData[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl + "/get-friends");
        setFriends(response.data);
      } catch (error){
        console.error("Error fetching details");
      } finally{
        setLoading(false);
      }
    }

    fetchFriends();
  }, []);


  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md flex items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search friends by phone number"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="flex items-center justify-center ml-3 pb-4 space-x-1"><p>Add</p>
<IoPersonAddOutline /></button>
     

     {loading ? <div className="text-center">Loadng...</div> :(  <ul className="space-y-2"> 
          {friends.map((friend, index) => (
            <li
              key={index}
              className="p-2 border border-gray-300 rounded-md bg-white shadow-sm"
            >
              <div className="text-gray-900 font-medium">{friend.name}</div>
              <div className="text-gray-500 text-sm">{friend.phone}</div>
            </li>
          ))}
        </ul>)}
      </div>
    </div>
  );
};

export default FriendSearch;
