import DropdownButton from 'react-bootstrap/DropdownButton'

export default function Dropdown({options, onChange}) {
    return (
        <select name="cars" id="cars" onChange={onChange}>
            {options.map(option => (
                <option value={option.id}>{option.text}</option>
            ))}
        </select>
    )
}