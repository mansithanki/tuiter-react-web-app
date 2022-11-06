import React from "react";
import {Link} from "react-router-dom";
const ProfileItem = (
    {
        profile = {
            firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
            profilePicture: '/tuiter/images/nasa.png', bannerPicture: 'coldplay.jpeg',
            bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
            website: 'youtube.com/webdevtv',
                location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
            followingCount: 340,	followersCount: 223, tuits: "6,117"
        }
    }
) => {
    return(
            <div className="row">
                <div className="col-1">
                    <button class="border-0 wd-button-color"><i className="fa-solid fa-arrow-left-long fa-2x"></i></button>
                </div>
                <div className="col-10">
                    <div class={"wd-name-font"}>
                        <span class="fw-bold ">{profile.firstName} </span>
                        <span class="fw-bold">{profile.lastName}</span> <br/>
                    </div>
                    <div class="wd-tuit-font ms-1">
                        <span>{profile.tuits} </span>
                        <span>Tuits</span>
                    </div>
                </div>
                <div className="parent">
                    <img className="wd-banner-image wd-banner-picture border-0" src={`/tuiter/images/${profile.bannerPicture}`} alt={"banner"}/>
                    <img className="rounded-circle wd-profile-picture border-0" src={`/tuiter/images/${profile.profilePicture}`} alt={"banner"}/>
                </div>
                <div class={"mt-2"}>

                    <Link to="/tuiter/edit-profile" className="float-end btn btn-outline-dark rounded-pill fw-bold">Edit profile</Link>

                </div>
                <div>
                    <div className={"wd-name-font mt-5"}>
                        <span className="fw-bold ">{profile.firstName} </span>
                        <span className="fw-bold">{profile.lastName}</span>
                    </div>
                    <div className="wd-tuit-font wd-color ms-1">
                        <span>{profile.handle} </span>
                    </div>
                    <div class={"mt-3 wd-color"}>
                        <p>{profile.bio}</p>
                    </div>
                    <div class="row wd-color">
                        <div class="col-3 ">
                            <span><i className="bi bi-geo-alt me-2"></i></span>
                            <span>{profile.location}</span>
                        </div>
                        <div className="col-4">
                            <span><i className="bi bi-balloon me-2"></i></span>
                            <span>Born {profile.dateOfBirth}</span>
                        </div>
                        <div className="col-3 ">
                            <span><i className="bi bi-calendar3 me-2"></i></span>
                            <span>Joined {profile.dateOfBirth}</span>
                        </div>
                    </div>
                    <div class="wd-color mt-3">
                        <span class={"fw-bold wd-color-black me-1"}>{profile.followingCount}</span>
                        <span class={"me-4"}>Following</span>
                        <span class={"fw-bold wd-color-black me-1"}>{profile.followersCount}</span>
                        <span className={"me-4"}>Followers</span>
                    </div>
                </div>
            </div>
    );
};

export default ProfileItem;