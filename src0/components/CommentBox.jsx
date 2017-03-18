var CommentInput = require('CommentInput');
var CommentList = require('CommentList');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function(){
    $.get(this.props.url, this.setData, 'json');
  },
  addComment: function(comment){
    $.post(this.props.url, comment, this.setData, 'json');
    /*
     comment.id = this.state.data.length + 1;
     var data = this.state.data.concat(comment);
     this.setState({data: data});
     */
  },
  setData: function(data){
    this.setData({data: data});
  },
  render:function(){
    return (
      /*
        code here...
      */
      <div className='comment-box'>
          <h1>{this.props.title}</h1>
          <CommentList data={this.props.data} data={this.state.data}/>
          <CommentInput addComment={this.addComment}/>
      </div>
    );
  }
});
module.exports = CommentBox;
