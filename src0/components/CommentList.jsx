var CommentItem = require('CommentItem');

var CommentList = React.createClass({
  render:function(){
    return (
      /*
        code here...
      */
      <div className="comment-list">
         {this.props.data.map(
           function(item){
             return(
               <CommentItem key={item.id} author={item.author}>
                 {item.text}
               </CommentItem>
             );
         })}
      </div>
    );
  }
});
module.exports = CommentList;
