import React from 'react';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import './Table.css';

export const Table = ({ rows, deleteRow, editRow }) => {
	return (
		<div className="table-wrapper">
			<table className="table">
				<thead>
					<tr>
						<th>Page</th>
						<th className="expand">Description</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{rows.map((row) => {
						return (
							<tr key={row.id}>
								<td>{row.page}</td>
								<td className="expand">{row.description}</td>
								<td>
									<span
										className={`label label-${row.status.toLowerCase()}`}
									>
										{row.status}
									</span>
								</td>
								<td>
									<span className="actions">
										<BsFillTrashFill
											onClick={() => {
												deleteRow(row.id);
											}}
											className="delete-btn"
										/>
										<BsFillPencilFill
											onClick={() => editRow(row.id)}
										/>
									</span>
								</td>
							</tr>
						);
					})}
					{/* <tr>
						<td>Home</td>
						<td>This is the main page</td>
						<td>
							<span className="label label-live">Live</span>
						</td>
						<td>
							<span className="actions">
								<BsFillTrashFill className="delete-btn" />
								<BsFillPencilFill />
							</span>
						</td>
					</tr>

					<tr>
						<td>About</td>
						<td>This is the about page</td>
						<td>
							<span className="label label-draft">Draft</span>
						</td>
						<td>
							<span className="actions">
								<BsFillTrashFill className="delete-btn" />
								<BsFillPencilFill />
							</span>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};
