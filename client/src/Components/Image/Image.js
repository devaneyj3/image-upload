import React from "react";

import Uploading from "../Uploading/Uploading";
import Result from "../Result/Result";
import Card from "../Card/Card";

import "./Image.css";
import ChooseImage from "../ChooseImage/ChooseImage";

const Image = () => {
	const [images, setImages] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const onChange = (imageList) => {
		// data for submit
		setImages(imageList);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	let component;
	if (images.length < 1) {
		component = (
			<Card>
				<ChooseImage images={images} onChange={onChange} />
			</Card>
		);
	} else if (loading === false) {
		component = (
			<Card>
				<Result images={images} />
			</Card>
		);
	} else {
		component = (
			<Card>
				<Uploading />
			</Card>
		);
	}

	return <>{component}</>;
};

export default Image;
