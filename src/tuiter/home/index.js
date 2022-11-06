import React from "react";
import PostItem from "../PostList/PostItem"
import PostList from "../PostList";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
 return(
   <>
   {/* <PostList/> */}
   <h4>Home</h4>
   <WhatsHappening/>

   <TuitsList/>
   
   </>
 );
};
export default HomeComponent;

