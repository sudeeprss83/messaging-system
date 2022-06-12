import React from "react";
import ListUser from "./chat-list-user";
import Search from "./search";

const users = [
  {
    profileImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
    name: "Vincent Porter",
    status: "Online",
  },
  {
    profileImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg",
    name: "Jason Miachel",
    status: "Offline",
  },
  {
    profileImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg",
    name: "Robert Phillips",
    status: "Online",
  },
  {
    profileImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg",
    name: "Brandon Hart",
    status: "Online",
  },
];

function ChatList(props) {
  const handleUserData = (data) => {
    console.log(data);
    props.onUserSelected(data);
  };
  return (
    <div className="people-list" id="people-list">
      <Search />
      <ul className="list">
        {users.map((user, index) => {
          return (
            <ListUser key={index} data={user} onUserClicked={handleUserData} />
          );
        })}
      </ul>
    </div>
  );
}

export default ChatList;
