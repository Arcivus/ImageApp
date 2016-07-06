import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPictures } from '../actions/index';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';


	var masonryOptions = {
		transitionDuration: 0
	}

class PicturesIndex extends Component {


	componentWillMount() {
		this.props.fetchPictures();
	}

	renderPictures() {
		return this.props.pictures.map((picture) => {
			return(
				<div className="image-element-class" key={picture.post_id}>
					<Link to={"pictures/" + picture.post_id}>
						<img src={picture.imgURL} />
					</Link>
				</div>
			);
		});
	}
 
	render() {
		return(
			<div>
				<div className="text-xs-center">
					<Link to="/pictures/new" className="add-button btn">
						Add a Picture
					</Link>
				</div>
				<Masonry
					className={"my-gallery-class"}
					elementType={"ul"}
					options={masonryOptions}
				>
					{this.renderPictures()}
				</Masonry>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { pictures: state.pictures.all };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { fetchPictures }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(PicturesIndex);