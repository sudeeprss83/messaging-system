import React from "react";

function ListUser(props) {
  const { profileImage, name, status } = props.data;
  return (
    <li className="clearfix">
      <img src={profileImage} alt="avatar" />
      <div className="about">
        <div className="name">{name}</div>
        <div className="status">
          {status === "Online" ? (
           ( <i className="fa fa-circle online"></i>)
          ) : (
            <i className="fa fa-circle offline"></i>
          )} {status}
        </div>
      </div>
    </li>
  );
}

export default ListUser;
