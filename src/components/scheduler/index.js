import Table from 'react-bootstrap/Table';

import SlotRow from './slot-row';

import { capitalize } from '../../utils/string'
import { DAYS } from '../../utils/constants';

const SHIFTS = {
    'morning': ['up_stairs', 'down_stairs', 'parking_lot'],
    'lunch': ['a', 'b', 'c', 'd'],
    'afternoon': ['up_stairs', 'down_stairs', 'parking_lot']
}


export default function Scheduler() {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th></th>
                    {DAYS.map((day, index) => (
                        <th key={index}>{capitalize(day)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    Object.key(SHIFTS).map(shift => SHIFTS[shift].map(slot => (
                        <SlotRow shift={shift} slot={slot} days={DAYS} onClick={() => alert('clicked')} />
                    )))
                }
            </tbody>
        </Table>
    )   
};