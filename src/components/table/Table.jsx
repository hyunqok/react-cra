export default function Table({ children, addClass }) {
	return <div className={`table-container ${addClass}`}>{children}</div>;
}
