import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";

const ProfileComponent = () => {
    const profile = useSelector(
        (state) => state.profile);
    return(
          <ProfileItem key={profile._id} profile={profile}/>
    );
};
export default ProfileComponent;