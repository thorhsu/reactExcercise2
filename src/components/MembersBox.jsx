var MemberList = require('MemberList');

var MembersBox = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      rowDatas: []
    };
  },
  componentDidMount: function(){
    $.get(this.props.url, this.setData, 'json');
  },
  setData: function(data){
    this.setState({data: data.results});
    var datas = [];
    var rowData = [];
    for(var i = 0 ; i < this.state.data.length; i++){
       var column = i % 4;
       if(column === 0){
          if(i !== 0){
             datas.push(rowData);
             rowData = [];
          }
       }
       rowData.push(this.state.data[i]);
    }
    datas.push(rowData);
    this.setState({rowDatas: datas});
  },
  render:function(){
    return (
      <div>
          <h1>{this.props.title}</h1>
          {
            this.state.rowDatas.map(function(row){
               return (
                  <MemberList data={row} />
               );
            })
          }

      </div>
    );
  }
});
module.exports = MembersBox;
