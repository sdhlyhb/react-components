// TODO
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((item) =>
    <GroceryListItem item = {item}/>
    )}
  </ul>

);





class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    //hover state
    this.state = {
    hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }



  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'

    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );

  };
}

// var GroceryListItem = () => (
//   <div>
//     <h2>My Grocery List Items</h2>
//     <GroceryList groceryItems={['kale', 'cucumber', 'milk']} />;

//   </div>

// );

ReactDOM.render(<GroceryList groceryItems={['kale', 'cucumber', 'milk']}  />, document.getElementById("app"));