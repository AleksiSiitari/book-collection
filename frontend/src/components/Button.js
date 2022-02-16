import './Button.scss'

export default function Button(props) {
    const { label, onClick, disabled, className } = props;

    return (
        <button type="button" onClick={onClick} className={`button ${className || ''}`} disabled={disabled}>
            {label}
        </button>
    );
};