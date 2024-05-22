import ReactDOM from 'react-dom';

function Modal({ isOpen, setIsOpen }) {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<>
			<div
				onClick={() => setIsOpen(false)}
				className="modal-darkbg"
			></div>
			<div className="modal-centered">
				<div className="modal">
					<h2>Enter Your Project Title</h2>
					<form className="modal-form">
						<input
							type="text"
							id="project-title"
							className="modal-form-input"
							required
						/>
						<button type="submit" className="modal-form-btn">
							Add
						</button>
					</form>
				</div>
			</div>
		</>,
		document.getElementById('modal-portal')
	);
}

export default Modal;
