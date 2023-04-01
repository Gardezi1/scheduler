import { useState } from "react"

/**
 * Dropdown component 
 * @param {array} options 
 * @param {callback} onChange
 * @param {string} selectedValue 
 * @returns 
 */
export default function Dropdown({options, selectedValue, onChange}) {

    const [value, setValue] = useState("");

    /**
     * On option change save it to state and trigger the callback
     * @param {*} option 
     */
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