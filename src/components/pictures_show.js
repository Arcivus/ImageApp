import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPicture, deletePicture, fetchPictures } from '../actions/index';
import { Link } from 'react-router';

class PicturesShow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedPage: this.props.location.pathname
		};
	}

	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		if(this.props.all.length === 0) {
			this.props.fetchPictures();
		}	
		this.props.fetchPicture(this.props.params.id)
		.then((res) => {
			if(res.payload.data === "Post not found!"){
				this.context.router.push('/');
			}
		});
	}

	componentDidUpdate() {
		const currentPath = this.props.location.pathname;

		if(currentPath !== this.state.selectedPage){ // Prevents event from triggering ALL the time
			this.props.fetchPicture(this.props.params.id);
			this.setState({selectedPage: currentPath});	
		}
	} // will listen to URL change and update page

	onDeleteClick() {
		this.props.deletePicture(this.props.params.id)
		.then(() => {this.context.router.push('/')});
	}

	getNextIndex() {
		const {picture, all} = this.props;
		const ending = all.length - 1;
		var index;

		if(all.length === 0){
			return false;
		}

		if( picture.post_id == all[ending].post_id ){
			return all[0].post_id;
		} 
		all.forEach((data, i) => {
			if( picture.post_id === data.post_id ) {
				index = all[i+1].post_id;
			}
		});

		return index;
	}

	render() {
		const data = this.props.picture;
		
		if(!data) {
			return <div>Loading...</div>
		}
		return (
			<div className="showPage">
			<Link to={"/pictures/" + this.getNextIndex()} >
				<img src={data.imgURL}/>
			</Link>
				<h3>{data.title}</h3>
				<p>{data.description}</p>
				<Link to="/">Return</Link>
				<button className="btn btn-danger pull-xs-right"
				onClick={this.onDeleteClick.bind(this)}>
					Delete Photo
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {

	return { picture: state.pictures.picture, all: state.pictures.all};
}

export default connect(mapStateToProps, {fetchPicture, deletePicture, fetchPictures})(PicturesShow);