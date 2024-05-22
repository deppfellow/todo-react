function Header({ isOpen, setIsOpen }) {
	return (
		<div className="header">
			<button
				onClick={() => setIsOpen(true)}
				className="btn-big btn-project"
				role="button"
			>
				Add Project
			</button>
			<a href="#" className="logo-text">
				TODO.DEV
			</a>
		</div>
	);
}

export default Header;
