import { useSelector } from 'react-redux';

import { capitalizeEachWordInString } from '../../utils/string'
import Dropdown from '../dropdown';

/**
 * Component responsible for showing each slot row
 * @param {string} shift
 * @param {string} slot
 * @param {array} day
 * @param {callback} onClick
 * @returns 
 */
export default function SlotRow ({shift, slot, days, onClick}) {

    const users =  useSelector(state => state.users);
    const staffMembers = Object.keys(users);

    return (
        <tr>
            <td>
                {
                    `${capitalizeEachWordInString(shift)} ${capitalizeEachWordInString(`${slot}`.split("_").join(" "))}`
                }
            </td>
            {days.map(day => (
                <td>
                    <Dropdown options={staffMembers} onChange={onClick}/>
                </td>
            ))}
        </tr>
    )

}