import React from "react";
import ImageUploading from "react-images-uploading";
import "./Image.css";

import logo from "./image.svg";

const Image = () => {
	const [images, setImages] = React.useState([]);
	const maxNumber = 69;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<>
			{images.length < 1 ? (
				<>
					<h1>Upload your image</h1>
					<p>Files shoul be Jpeg, PNG ...</p>
					<ImageUploading
						multiple
						value={images}
						onChange={onChange}
						maxNumber={maxNumber}
						dataURLKey="data_url">
						{({ onImageUpload, isDragging, dragProps }) => (
							// write your building UI
							<>
								<div className="upload__image-wrapper">
									<img
										style={isDragging ? { color: "red" } : undefined}
										onClick={onImageUpload}
										{...dragProps}
										src={logo}
										alt="Mountain Landscape"
									/>
									<p className="action-text">Drag & Drop your image here</p>
								</div>
								<p className="action-text">Or</p>
								<button
									onClick={onImageUpload}
									{...dragProps}
									className="file-btn drop">
									Choose a file
								</button>
							</>
						)}
					</ImageUploading>
				</>
			) : (
				<h1>loading...</h1>
			)}
		</>
	);
};

export default Image;
