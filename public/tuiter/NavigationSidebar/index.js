const NavigationSidebar = () => {
  return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-home"></i>
          <span class="d-none d-xxl-inline d-xl-inline">Home</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-hashtag"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Explore</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Notifications</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Messages</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bookmark"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Bookmarks</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Lists</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-user"></i>
       <span class="d-none d-xxl-inline d-xl-inline">Profile</span></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-ellipsis"></i>
       <span class="d-none d-xxl-inline d-xl-inline">More</span></a>
     
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

$('#wd-navigation-sidebar').append(NavigationSidebar())

