const IsSelectedPageFromNavigationMenu = (ScreenName,activeParameter) => {
   if(ScreenName == activeParameter){
         return `active`;
   }
   return ``;
}

const NavigationSidebar = (activeParameter) => {
    return(`
    <div class="list-group">
    <div class="list-group-item fw-bolder">
    <i class="fa-brands fa-twitter"></i>
        </div>
    <a href="/public/tuiter/HomeScreen/index.html"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu('Home', activeParameter)}">
       <i class="fa fa-home" aria-hidden="true"></i>
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Home</div> 
    </a>
    <a href="/public/tuiter/ExploreScreen/index.html"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu('Explore', activeParameter)}">
       <i class="fa fa-hashtag"></i> 
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Explore</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('Notifications', activeParameter)}">
       <i class="fa fa-bell"></i> 
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Notifications</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('Messages', activeParameter)}">
       <i class="fa fa-envelope" aria-hidden="true"></i>
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Messages</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('Bookmarks', activeParameter)}">
       <i class="fa fa-bookmark"></i> 
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Bookmarks</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('Lists', activeParameter)}">
       <i class="fa fa-list"></i> 
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Lists</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('Profile', activeParameter)}">
       <i class="fa fa-user"></i> 
       <div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline ">Profile</div> 
    </a>
    <a href="#"
       class="list-group-item list-group-item-action ${IsSelectedPageFromNavigationMenu
         ('More', activeParameter)}">
       <span class="ps-2px d-inline fa-stack fa-1x">
        <i class="fas fa-circle fa-stack-1x"></i>
        <i class="ps-1 fas fa-ellipsis fa-stack-1x fa-inverse text-dark" style="font-size: 0.6em"></i>
        </span>
        <span class="ps-4"><div class = "d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline "> More </div></span>
    </a>
</div>
<button class="btn btn-primary w-100 mt-1 rounded-pill">
    Tuit
</button>

    `);
   }
   export default NavigationSidebar;
   
   