    export default function SlotRow (shift, slot, days, onClick) {
    return (
        <tr>
            <td>
                {`${capitalize(shift)} ${capitalize(slot.split("_").join(" "))}`}
            </td>
            {days.map(day => (
                <td onClick={onClick}>{day}</td>
            ))}
        </tr>
    )

}