var CommentInput = React.createClass({
  getInitialState: function(){
    return {author: '', text: ''};
  },
  onSubmit: function(e){
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({text: ""});
  },
  setAutor:function(e){
    this.setState({author: e.target.value});
  },
  setText: function(e){
    this.setState({text: e.target.value});
  },
  render:function(){
    return (
      /*
        code here...
      */
      <form className="comment-input" onSubmit={this.onSubmit} >
        <input className="author" type="text" placeholder="名字"
           value={this.state.author} onChange={this.setAutor} />
        <input className="text" type="text" placeholder="留言"
           value={this.state.text} onChange={this.setText} />
        <input className="submit" type="submit" value="送出" />
      </form>
    );
  }
});
module.exports = CommentInput;
