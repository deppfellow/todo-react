import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import './App.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}

			<main className="content-container">
				<ul className="project-list">
					<li className="project-unit">
						<h3>Project 1</h3>
						<button className="btn-small btn-add">Add</button>
						<button className="btn-small btn-edit warning">
							Edit
						</button>
						<button className="btn-small btn-delete danger">
							Delete
						</button>

						{/* Todo list unit */}
						<ul className="todo-list">
							<li className="todo-unit">
								<label>
									<input type="checkbox" />
									<span>Todo unit 1</span>
								</label>
								<button className="btn-small btn-edit warning">
									Edit
								</button>
								<button className="btn-small btn-delete danger">
									Delete
								</button>
							</li>
							{/* Another <li /> for any additional todo unit */}
						</ul>
					</li>

					{/* Another <li /> for another projects */}
				</ul>
			</main>
		</>
	);
}

export default App;
