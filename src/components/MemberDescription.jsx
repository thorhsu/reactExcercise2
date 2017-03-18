var MemberDescription = React.createClass({
  close: function(e){
    e.preventDefault();
    this.props.close();
  },
  render:function(){
    return (

      <div id="tooltip" >
         <button type="button" id="tt_close" className="close" data-aria-label="Close" onClick={this.close}>
            <span data-aria-hidden="true">&times;</span>
         </button>
         <table width="100%">
            <th>
              <th colspan="2"><p className="text-center">Personal Profile</p></th>
              <th></th>
            </th>
            <tr>
               <td rowSpan="9" ><img src={this.props.data.picture.large} /></td>
               <td><b>Title:</b></td><td>{this.props.data.name.title}</td>
            </tr>
            <tr>
              <td><b>Name:</b></td>
              <td>{this.props.data.name.first + " " + this.props.data.name.first}</td>
            </tr>
            <tr>
              <td><b>Cell:</b></td>
              <td>{this.props.data.cell }</td>
            </tr>
            <tr>
              <td><b>Phone:</b></td>
              <td>{this.props.data.phone }</td>
            </tr>
            <tr>
              <td><b>State:</b></td>
              <td>{this.props.data.location.state }</td>
            </tr>
            <tr>
              <td><b>City:</b></td>
              <td>{this.props.data.location.city }</td>
            </tr>
            <tr>
              <td><b>Street:</b></td>
              <td>{this.props.data.location.street }</td>
            </tr>
         </table>

      </div>
    );
  }
});
module.exports = MemberDescription;
