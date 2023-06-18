import "../StyleModules/PrimaryButton.css";

export default function PrimaryButton({ onClick, children, customStyle }) {
  return (
    <button className="primary-button" style={customStyle} onClick={onClick}>
      {children}
    </button>
  );
}
