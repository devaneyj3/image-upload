import ImageUploading from "react-images-uploading";
import logo from "../Image/image.svg";

const ChooseImage = ({ onChange, images }) => {
	return (
		<>
			<h1>Upload your image</h1>
			<p>Files shoul be Jpeg, PNG ...</p>
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
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
	);
};

export default ChooseImage;
