import React, { useState } from 'react';
import './Modal.css';

export const Modal = ({ closeModal, addRow, defaultValue }) => {
	const [errors, setErrors] = useState('');
	const [formState, setFormState] = useState(
		defaultValue[0] || {
			page: '',
			description: '',
			status: 'Live',
		}
	);

	const handleRowSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		addRow(formState.page, formState.description, formState.status);
		closeModal();
	};

	const handleRowChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		if (formState.page && formState.description && formState.status) {
			setErrors('');
			return true;
		}

		let errorField = [];
		for (const [key, val] of Object.entries(formState)) {
			if (!val) errorField.push(key);
		}
		setErrors(errorField.join(', '));
		return false;
	};

	return (
		<div
			onClick={(e) => {
				if (e.target.className === 'modal-container') closeModal();
			}}
			className="modal-container"
		>
			<div className="modal">
				<form onSubmit={handleRowSubmit}>
					<div className="form-group">
						<label htmlFor="page">Page</label>
						<input
							onChange={handleRowChange}
							type="text"
							name="page"
							value={formState.page}
							autoComplete="off"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea
							onChange={handleRowChange}
							type="text"
							name="description"
							value={formState.description}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="status">Status</label>
						<select
							onChange={handleRowChange}
							name="status"
							id="status"
							value={formState.status}
						>
							<option value="live">Live</option>
							<option value="draft">Draft</option>
							<option value="error">Error</option>
						</select>
					</div>

					{errors && (
						<div className="error">{`${errors} cannot blank`}</div>
					)}
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
