import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
// import PostList from "./PostList";
import PostSummaryList from "./post-summary-list";
import ProfileComponent from "./profile/ProfileComponent";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./edit-profile/EditProfile";

import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import tuitslist from "./tuits/tuits-list-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, tuitslist: tuitslist, profile: profileReducer}});




function Tuiter() {
 return (
  <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
       <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="edit-profile" element={<EditProfile/>}/>
       </Routes>
     </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
     <Routes>
         <Route path="home"    element={<PostSummaryList/>}/>
         <Route path="explore" element={ <WhoToFollowList/>}/>
         <Route path="profile" element={<WhoToFollowList/>}/>
         <Route path="edit-profile" element={<WhoToFollowList/>}/>
       </Routes>
     </div>
   </div>
   </Provider>
 );
}

export default Tuiter

