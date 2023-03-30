export default function Dropdown({options, onChange, selectedValue}) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="" {...(selectedValue === "" && { selected: true })}>Select option</option>
            {options.map(option => (
                <option value={option} {...(selectedValue === option && { selected: true })}>{option}</option>
            ))}
        </select>
    )
}