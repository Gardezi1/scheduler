export default function Dropdown({options, onChange}) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="">Select option</option>
            {options.map(option => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}