import { useState } from 'react';
import { Table } from './components/Table';
import { Modal } from './components/Modal';
import './App.css';

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const [rowToEdit, setRowToEdit] = useState(null);
	const [rows, setRows] = useState([
		{
			id: crypto.randomUUID(),
			page: 'Home',
			description: 'This is the home page.',
			status: 'Live',
		},
		{
			id: crypto.randomUUID(),
			page: 'About',
			description: 'This is the about page.',
			status: 'Draft',
		},
	]);

	const handleAddRow = (page, description, status) => {
		rowToEdit === null
			? setRows(() => {
					return [
						...rows,
						{
							id: crypto.randomUUID(),
							page: page,
							description: description,
							status: status,
						},
					];
				})
			: setRows(
					rows.map((row) => {
						if (row.id !== rowToEdit) return row;
						return {
							id: row.id,
							page,
							description,
							status,
						};
					})
				);
	};

	const handleDeleteRow = (targetId) => {
		setRows((currentRows) => {
			return currentRows.filter((row) => {
				if (row.id !== targetId) return row;
			});
		});
	};

	const handleEditRow = (targetId) => {
		setRowToEdit(targetId);
		setModalOpen(true);
	};

	return (
		<div className="App">
			<h1>Say, Hello!</h1>
			<Table
				rows={rows}
				deleteRow={handleDeleteRow}
				editRow={handleEditRow}
			/>
			<button onClick={() => setModalOpen(true)} className="btn">
				Add
			</button>
			{modalOpen && (
				<Modal
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					addRow={handleAddRow}
					defaultValue={
						rowToEdit !== null &&
						rows.filter((row) => {
							return row.id === rowToEdit;
						})
					}
				/>
			)}
		</div>
	);
}

export default App;
