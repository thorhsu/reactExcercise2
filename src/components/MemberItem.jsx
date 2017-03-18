var MemberDescription = require('MemberDescription');

var MemberItem = React.createClass({
  getInitialState: function() {
    return {
      data: {},
      description: false,
      closeDetail: false
    };
  },
  openDetail: function(){
    if(!this.state.closeDetail){
       var data = this.props.data;
       this.setState({
         data: data,
         description: true
       })
    }
  },
  close: function(){
    this.state.closeDetail = true;
    this.setState({
      data: {},
      description: false
    })
  },
  componentWillUpdate: function(nextProps, nextStates){
    console.log(nextStates.data);
  },
  componentDidUpdate: function(prevProps, prevStates){
    this.state.closeDetail = false;
  },
  render:function(){
    var showDes = "";
    if(this.state.description){
       showDes = <MemberDescription data={this.state.data} close={this.close}/>;
    }
    return (
     <div  className="col-sm-3" style={{"cursor": "pointer"}} onClick={this.openDetail}>
       <div className="row">
           <div className="col-sm-4">
               <img src={this.props.data.picture.medium} />
           </div>
           <div className="col-sm-8 text-left">
               <strong>First Name</strong>: {this.props.data.name.first}
               <br />
               <strong>Last Name</strong>: {this.props.data.name.last}
               <br />
               <strong>Gender</strong>: {this.props.data.gender}
           </div>

           {showDes}
       </div>
     </div>
    );
  }
});
module.exports = MemberItem;
