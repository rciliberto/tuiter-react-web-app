const PostSummaryItem = (post) => {
  return (`
    <div class="list-group-item">
      <div class="row">
        <div class="col-10">
          <span class="text-secondary">${post.topic}</span><br/>
          <span class="fw-bold">${post.userName} </span><i class="fa fa-check-circle"></i>
          <span class="text-secondary"> • ${post.time}</span><br/>
          <span>
            ${post.title}
          </span><br/>
        </div>
        
        <div class="col-2">
          <img class="img-fluid rounded" src="${post.image}" alt="Tuit image">
        </div>
      </div>
    </div>
  `)
}

export default PostSummaryItem

$('#wd-post-summary-item').append(PostSummaryItem({
  "topic": "Web Development",
  "userName": "ReactJS",
  "time": "2h",
  "image": "../../images/reactjs-logo.png",
  "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
}));
