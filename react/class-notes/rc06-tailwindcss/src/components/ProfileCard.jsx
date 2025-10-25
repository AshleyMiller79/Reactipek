import React from "react";

const ProfileCard = () => {
  return (
    <div className="user-card m-auto  ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className=" flex flex-col items-center pb-1">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 ">
          Visual Designer
        </span>
        <div className="flex mt-4 md:mt-6">
          <a href="#" className="btn-primary">
            Add friend
          </a>
          <a href="#" className="btn-secondary">
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
