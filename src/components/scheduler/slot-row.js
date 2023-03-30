import { capitalizeEachWordInString } from '../../utils/string'

/**
 * Component responsible for showing each slot row
 * @param {string} shift
 * @param {string} slot
 * @param {array} day
 * @param {callback} onClick
 * @returns 
 */
export default function SlotRow ({shift, slot, days, onClick}) {
    return (
        <tr>
            <td>
                {
                    `${capitalizeEachWordInString(shift)} ${capitalizeEachWordInString(`${slot}`.split("_").join(" "))}`
                }
            </td>
            {days.map(day => (
                <td onClick={onClick}>{day}</td>
            ))}
        </tr>
    )

}