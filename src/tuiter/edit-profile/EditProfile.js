import "./index.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditProfile = () => {
    const profileInformation = useSelector(state => state.profile);
    let [profile, setProfile]  = useState(profileInformation);
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        dispatch(updateProfile({
            ...profile,
            firstName: profile.firstName,
            lastName:profile.lastName,
            bio: profile.bio,
            location: profile.location,
            website: profile.website,
            dateOfBirth: profile.dateOfBirth}));
    }
    return(

        <div className="row">
            <div>
           
                <Link to={"/tuiter/profile"}><button className="btn btn-dark">X</button></Link>
                <span class=" ms-5 wd-title-size fw-bold">Edit Profile</span>
                <span>
                    <Link to={"/tuiter/profile"} 
                        className="rounded-pill btn btn-dark float-end  mb-1 ps-3 pe-3 fw-bold"
                        onClick={editProfileClickHandler}>Save
                    </Link>
                </span>
            </div>
            <div >
                <img className="wd-banner-image wd-banner-picture" src={`/tuiter/images/${profile.bannerPicture}`} alt={"banner"}/>
                <img className="rounded-circle wd-profile-picture border-1" src={`/tuiter/images/${profile.profilePicture}`} alt={"banner"}/>
            </div>

            <div class="border mt-5 wd-color">
                <span  className="text-secondary">First Name</span> <br/>
                <input value={profile.firstName}
                        className="text-dark form-control border-0"
                        onChange={(event) => setProfile({...profile,firstName:event.target.value})}/>
            </div>
            <div className="border mt-1 wd-color">
                <span  className="text-secondary">
                    Last Name
                </span> 
                <br/>
                <input value={profile.lastName}
                        className="text-dark form-control border-0"
                        onChange={(event) => setProfile({...profile, lastName: event.target.value})}/>
            </div>
                <div className="border mt-1">
                    <span className="text-secondary">
                        Bio
                    </span> 
                    <br/>
                    <textarea value={profile.bio}
                        className="text-dark form-control border-0"
                        onChange={(event) => setProfile({...profile, bio: event.target.value})}/>
                </div>
            <div className="border mt-1">
                <span  className="text-secondary">Location</span> <br/>
                <input value={profile.location}
                    onChange={(event) => setProfile({...profile, location: event.target.value})}
                    className="text-dark form-control border-0"
                    />
            </div>
            <div className="border mt-1">
                <span  className="text-secondary">Website</span> <br/>
                <input value={profile.website}
                    onChange={(event) => setProfile({...profile, website: event.target.value})}
                    className="text-dark form-control border-0"
                    />
            </div>
            <div className="border mt-1">
                <span className="text-secondary">Birth Date</span> <br/>
                <input value={profile.dateOfBirth}
                    onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}
                    className="text-dark form-control border-0"
                       />
            </div>
            <div className={"mt-4"}>
                <span>Switch to professional <span><FontAwesomeIcon icon="fas fa-greater-than" /></span></span>
                
            </div>
        </div>

    );
};

export default EditProfile;