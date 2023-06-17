import "../StyleModules/PrimaryButton.css";

export default function PrimaryButton({ onClick, children }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
}
