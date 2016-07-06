import axios from 'axios';

export const FETCH_PICTURES = 'FETCH_PICTURES';
export const FETCH_PICTURE = 'FETCH_PICTURE';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const CREATE_PICTURE = 'CREATE_PICTURE';

const ROOT_URL = 'http://secret-spire-27125.herokuapp.com/api/posts';

export function fetchPictures() {
	const request = axios.get(ROOT_URL);

	return {
		type: FETCH_PICTURES,
		payload: request
	};
}

export function fetchPicture(id) {
	const request = axios.get(`${ROOT_URL}/${id}`);

	return {
		type: FETCH_PICTURE,
		payload: request
	};
}

export function createPicture(props) {
	const request = axios.post(ROOT_URL, props);

	return {
		type: CREATE_PICTURE,
		payload: request
	}
}

export function deletePicture(id) {
	const request = axios.delete(`${ROOT_URL}/${id}`);

	return {
		type: DELETE_PICTURE,
		payload: request
	}
}
