import Table from 'react-bootstrap/Table';

import SlotRow from './slot-row';

import { capitalizeEachWordInString } from '../../utils/string'
import { DAYS } from '../../utils/constants';

const SHIFTS = {
    'morning': ['up_stairs', 'down_stairs', 'parking_lot'],
    'lunch': ['a', 'b', 'c', 'd'],
    'afternoon': ['up_stairs', 'down_stairs', 'parking_lot']
}

/**
 * Component responsible for rendering the scheduler table
 * @returns 
 */
export default function Scheduler() {

    const onUserSelect = (user, shift, slot) => {
        debugger
        console.log("The e is: ", user)
    }

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th></th>
                    {DAYS.map((day, index) => (
                        <th key={index}>{capitalizeEachWordInString(day)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(SHIFTS).map(shift => SHIFTS[shift].map(slot => 
                        <SlotRow shift={shift} slot={slot} days={DAYS} onClick={(user) => onUserSelect(user, shift, slot)} />
                    ))
                }
            </tbody>
        </Table>
    )   
};