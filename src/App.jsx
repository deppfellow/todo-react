import Header from './components/Header';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className="content-container">
				<ul className="project-list">
					<li className="project-unit">
						<span>PROJECT 1</span>
						<button className="btn btn-add">Add</button>
						<button className="btn btn-warning btn-edit">
							Edit
						</button>
						<button className="btn btn-danger btn-delete">
							Delete
						</button>

						<ul className="todo-list">
							<li className="todo-unit">
								<label>
									<input type="checkbox" />
									<span>Todo unit 1</span>
								</label>
								<button className="btn btn-warning btn-edit">
									Edit
								</button>
								<button className="btn btn-danger btn-delete">
									Delete
								</button>
							</li>
							{/* Another <li /> for any additional todo unit */}
						</ul>
					</li>

					{/* Another <li /> for another projects */}
					<li className="project-unit">
						<span>PROJECT 2</span>
						<button className="btn btn-add">Add</button>
						<button className="btn btn-warning btn-edit">
							Edit
						</button>
						<button className="btn btn-danger btn-delete">
							Delete
						</button>

						<ul className="todo-list">
							<li className="todo-unit">
								<label>
									<input type="checkbox" />
									<span>Todo unit 1</span>
								</label>
								<button className="btn btn-warning btn-edit">
									Edit
								</button>
								<button className="btn btn-danger btn-delete">
									Delete
								</button>
							</li>

							{/* Another <li /> for any additional todo unit */}
							<li className="todo-unit">
								<label>
									<input type="checkbox" />
									<span>Todo unit 2</span>
								</label>
								<button className="btn btn-warning btn-edit">
									Edit
								</button>
								<button className="btn btn-danger btn-delete">
									Delete
								</button>
							</li>
						</ul>
					</li>
				</ul>
			</main>
		</>
	);
}

export default App;
