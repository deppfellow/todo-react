import { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, setIsOpen, addProjectUnit }) {
	const [newProject, setNewProject] = useState('');

	if (!isOpen) return null;

	function addProjectHandler(e) {
		e.preventDefault();
		addProjectUnit(newProject);
		setIsOpen(false);
	}

	return ReactDOM.createPortal(
		<>
			<div
				onClick={() => setIsOpen(false)}
				className="modal-darkbg"
			></div>
			<div className="modal-centered">
				<div className="modal">
					<h2>Enter Your Project Title</h2>
					<form onSubmit={addProjectHandler} className="modal-form">
						<input
							onChange={(e) => setNewProject(e.target.value)}
							className="modal-form-input"
							type="text"
							id="project-title"
							value={newProject}
							autoComplete="off"
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
