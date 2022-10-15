import exploreItems from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  let postList = '';
  exploreItems.forEach(item => postList += PostSummaryItem(item))
  return (`
    <div class="list-group">
      ${postList}
     </div>
  `)
}

export default PostSummaryList

$('#wd-post-summary-list').append(PostSummaryList());