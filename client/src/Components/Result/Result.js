import ClipboardJS from "clipboard";

import "./Result.css";

new ClipboardJS(".button");

const Result = ({ images }) => {
	return (
		<>
			<div className="success">
				<span className="material-icons">done</span>
			</div>
			<h1>Uploaded Successfully!</h1>
			<img src={images[0].data_url} alt={images[0].file.name} />
			<section className="copy">
				<input
					id="input"
					placeholder={images[0].data_url}
					value={images[0].file.name}
					readOnly
				/>
				<button
					className="button file-btn drop"
					data-clipboard-action="copy"
					data-clipboard-target="#input">
					Copy Link
				</button>
			</section>
		</>
	);
};

export default Result;
