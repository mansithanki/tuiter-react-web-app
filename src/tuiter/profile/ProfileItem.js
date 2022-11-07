import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProfileItem = (
    {
        profile = {
            firstName: 'Jose', 
            lastName: 'Annunziato', 
            handle: '@jannunzi',
            profilePicture: '/tuiter/images/NASA.png', 
            bannerPicture: 'NASA.png',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',	
            dateOfBirth: '7/7/1968',	
            dateJoined: '4/2009',
            followingCount: 340,	
            followersCount: 223, 
            tuits: "6,117"
        }
    }
) => {
    return(
            <div className="row">
                <div className="col-1">
                    <button class="border-0 bg-white"><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></button>
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold ">{profile.firstName} </span>
                        <span className="fw-bold">{profile.lastName}</span> <br/>
                    </div>
                    <div class="ms-1">
                        <span>{profile.tuits} </span>
                        <span>Tuits</span>
                    </div>
                </div>
                <div className="parent">
                    <img className="border-0 wd-banner-image wd-banner-picture" src={`/tuiter/images/${profile.bannerPicture}`} alt={"banner"}/>
                    <img className="border-0 rounded-circle wd-profile-picture" src={`/tuiter/images/${profile.profilePicture}`} alt={"banner"}/>
                </div>
                <div class={"mt-2"}>

                    <Link to="/tuiter/edit-profile" className="float-end btn btn-outline-dark rounded-pill fw-bold">Edit profile</Link>

                </div>
                <div>
                    <div className={"mt-2"}>
                        <span className="fw-bold text-dark">{profile.firstName} </span>
                        <span className="fw-bold text-dark">{profile.lastName}</span>
                        
                        <div className="ms-1">
                            <span className="text-secondary">
                                {profile.handle} 
                            </span>
                        </div>
                    </div>
                    <div className={"mt-3"}>
                        <p>
                            {profile.bio}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-3 ">
                            <span>
                                <i className="bi me-1 bi-geo-alt"></i>
                            </span>
                            <span>
                                {profile.location}
                                </span>
                        </div>
                        <div className="col-4">
                            <span><i className="bi me-1 bi-balloon"></i></span>
                            <span>Born {profile.dateOfBirth}</span>
                        </div>
                        <div className="col-3 display-inline">
                            <span><i className="bi me-1 bi-calendar3"></i></span>
                            <span>Joined {profile.dateOfBirth}</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="fw-bold text-dark me-1 display-inline">{profile.followingCount}</span>
                        <span className="me-4">Following</span>
                        <span className="fw-bold text-dark me-1">{profile.followersCount}</span>
                        <span className="me-4">Followers</span>
                    </div>
                </div>
            </div>
    );
};

export default ProfileItem;