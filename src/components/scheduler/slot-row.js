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

    const users =  useSelector(state => state.users.present);
    const staffMembers = Object.keys(users);

    /**
     * Get the selected user for a specfic day shift
     * @param {string} day 
     * @returns 
     */
    const getSelectedUser = (day) => {
        let selectedValue = "";
        const staffMember = staffMembers.find(staffMember => users[staffMember].includes(`${day}-${shift}-${slot}`))
        if (staffMember !== undefined) {
            selectedValue = staffMember;
        }
        return selectedValue;
    }

    return (
        <tr>
            <td>
                {
                    `${capitalizeEachWordInString(shift)} ${capitalizeEachWordInString(`${slot}`.split("_").join(" "))}`
                }
            </td>
            {days.map(day => (
                <td>
                    <Dropdown 
                        options={staffMembers} 
                        selectedValue={getSelectedUser(day)} 
                        onChange={(user, previousUser) => onClick(user, previousUser, day)}
                    />
                </td>
            ))}
        </tr>
    )

}