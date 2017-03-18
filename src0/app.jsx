/*code here...*/
var CommentBox = require('CommentBox');
var data = [
  {id:1, author:'某甲', text:'我有一支筆'},
  {id:2, author:'某乙', text:'我有一顆鳳梨'},
];
ReactDOM.render(
  /*code here...*/
  <CommentBox title="React 留言板" url="https://comment-server-scars377.c9users.io" />,
  document.getElementById('content')
);
