import { useState } from "react"

export default function Dropdown({options, onChange, selectedValue}) {

    const [value, setValue] = useState("");

    const onOptionSelect = (option) => {
        onChange(option, value) 
        setValue(option);
    }

    return (
        <select onChange={(e) => onOptionSelect(e.target.value)}>
            <option value="" {...(selectedValue === "" && { selected: true })}>Select option</option>
            {options.map(option => (
                <option value={option} {...(selectedValue === option && { selected: true })}>{option}</option>
            ))}
        </select>
    )
}