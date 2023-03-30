import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import Table from 'react-bootstrap/Table';

import SlotRow from './slot-row';

import { userSlice }  from "../../redux/user-slice"
import UndoRedo from '../undo-redo'

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

    const {actions: {addUserShift, removeUserShift}} = userSlice; 
    const dispatch = useDispatch()
    const usersState = useSelector(state => state.users);

    console.log("The user state is : ", usersState.present)
    const users = usersState.present;

    /**
     * check if the user has been assigned two shifts in a day 
     * @param {string} user 
     */
    const isAssignedTwoShiftInADay = (user, day) => {
        return users[user].filter(
            shiftSlot => shiftSlot.indexOf(day) >=0 && shiftSlot.indexOf(`${day}-lunch`) === -1
        ).length === 2
    }

    /**
     * check if the user has already been assigned a slot in that shift
     * @param {*} user 
     * @param {*} day 
     * @param {*} shift 
     * @returns 
     */
    const checkShiftAssignment = (user, day, shift) => {
        debugger
        return users[user].filter(
            shiftSlot => shiftSlot.indexOf(`${day}-${shift}`) !== -1
        ).length === 1
    }

    /**
     * Check if a user is assigned 7 shifts in a week 
     * @param {string} user 
     */
    const isAssignedSevenShiftInAWeek = (user) => {
        return users[user].filter(
            shiftSlot => shiftSlot.indexOf(`lunch`) === -1
        ).length === 7
    }

    /**
     * Check if the user is already assigned a lunch slot
     * @param {string} user 
     * @param {string} day 
     * @param {string} lunchSlot 
     * @returns 
     */
    const isAlreadyAssignedALunchSlot = (user, day, lunchSlot) => {
        return users[user].filter(shiftSlot => shiftSlot.indexOf(`${day}-lunch`) !== -1).length === 2
    }

    const onUserSelect = (user, day, shift, slot) => {
        if (user === "") {
            dispatch(UndoActionCreators.undo()) 
        } else if (checkShiftAssignment(user, day, shift)) {
            alert("Two slots cannot be assigned in a single shift");
        } else if (isAssignedTwoShiftInADay(user, day)) {
            alert("You cannot assign more then 2 shift in a single day")
        } else if (isAssignedSevenShiftInAWeek(user)) {
            alert("You cannot assign more then 7 shift in a single week")
        } else {
            dispatch(addUserShift({user, day, shift, slot}))
        }   
    }

    return (
        <>
            <UndoRedo 
                canUndo={usersState.past.length > 0} 
                canRedo={usersState.future.length > 0 }
                onUndo={() => dispatch(UndoActionCreators.undo())}
                onRedo= {() => dispatch(UndoActionCreators.redo())}
            />
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
                            <SlotRow shift={shift} slot={slot} days={DAYS} onClick={(user, day) => onUserSelect(user, day, shift, slot)} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    )   
};