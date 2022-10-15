import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
    <div class="row mb-2">

      <div class="col-10 col-md-11">
        <div class="input-group">
          <span class="input-group-text bg-white rounded-pill rounded-end border-end-0">
            <i class="text-black fa fa-search"></i>
          </span>
          <input type="text" class="form-control input-group-append rounded-pill rounded-start border-start-0">
        </div>
      </div>

      <div class="col-2 col-md-1 d-flex flex-wrap align-items-center p-0">
        <a class="link-primary"><i class="fa fa-cog fa-2x"></i></a>
      </div>

    </div>
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link active" href="#">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block d-sm-none">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    
    <div class="mb-2">
      <img class="img-fluid position-relative" src="../../images/Starship-Mk1-Day.jpg" alt="Image">
      <h3 style="margin: -60px 0 0 15px" class="position-absolute">SpaceX Starship</h3>
    </div>
      
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;

$('#wd-explore-component').append(ExploreComponent())