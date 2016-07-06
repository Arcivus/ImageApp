import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPicture } from '../actions/index';

class PicturesNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPicture(props)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const { fields: { imgURL, title, description }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Picture</h3>
				<div className={`form-group ${imgURL.touched && imgURL.invalid ? 'has-danger' : '' }`} >
					<label>Image Source</label>
					<input type="text" className="form-control" {...imgURL}/>
					<div className="text-help">
						{imgURL.touched ? imgURL.error : ''}
					</div>
				</div>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`} >
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div>
					<label>Description (optional)</label>
					<textarea type="text" className="form-control" {...description}/>
				</div>
				
				<button className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if(!values.imgURL) {
		errors.imgURL = "Please provide image URL";
	}
	if(!values.title) {
		errors.title = "Please enter a title"
	}

	return errors;
}

export default reduxForm({
	form: 'PicturesNewForm',
	fields: ['imgURL', 'title', 'description'],
	validate
}, null, { createPicture })(PicturesNew);