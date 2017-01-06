
class GroceryListItem extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			done:false
		};
	}


	onListItemClick(){
		this.setState({done: !this.state.done});
	}

	render() {
		var style = {
			textDecoration: this.state.done ? 'line-through': 'none'
		};

		return (


				<li style={style} onClick = {this.onListItemClick.bind(this)}>{this.props.grocery}</li>
				);

	}

}

class GroceryList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
			<h2> Grocery List </h2>
			<ul>
				{this.props.stuff.map((item) => <GroceryListItem grocery={item}/>)}
			</ul>
			</div>
		);
	}
}



ReactDOM.render(<GroceryList stuff={['kale', 'cucumber']}/>, document.getElementById("app"));


	// render(){
	// 	const items = this._groceryItems();
	// 	return (
	// 		<li style ={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
	// 		<div>
	// 			<h1> Grocery List </h1>
	// 			{}
	// 			<ul>{items}</ul>

	// 		</div>
	// 	)
	// }

	// 	_groceryItems(){
	// 	const groceryItems = ['cucumber', 'kale'];
	// 	return groceryItems.map((item) => <li>{item}</li>);

	// }