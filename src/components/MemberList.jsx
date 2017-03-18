var MemberItem = require('MemberItem');

var MemberList = React.createClass({
  render:function(){
    return (
      <div className="row voffset1">
        {
           this.props.data.map(
             function(item){
                return(
                    <MemberItem  data={item} />
                );
             })
        }

      </div>
    );
  }
});
module.exports = MemberList;
