import DropdownButton from 'react-bootstrap/DropdownButton'

export default function Dropdown({options, onChange}) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {options.map(option => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}