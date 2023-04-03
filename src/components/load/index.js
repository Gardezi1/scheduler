import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { capitalizeEachWordInString } from '../../utils/string'
import { DAYS } from '../../utils/constants';

import './index.css';

/**
 * Component responsible for rendering the Load table
 * @returns 
 */
export default function Load() {
    
    const users =  useSelector(state => state.users.present);
    const staffMembers = Object.keys(users);

    /**
     * Get total number of shift for a staff member on a single day
     * @param {string} staffMember 
     * @param {string} day 
     * @returns 
     */
    const getNumberOfShifts = (staffMember, day) => {
        return users[staffMember].filter(value => value.indexOf(day) !== -1).length
    }

    /**
     * Get a staff memeber total shifts
     * @param {string} staffMember 
     * @returns 
     */
    const getTotalShifts = (staffMember) => {
        return users[staffMember].filter(value => value.indexOf('lunch') === -1).length
    }
    
    return (
        <div className="table-container">
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Staff Member</th>
                        {DAYS.map((day, index) => (
                            <th key={index}>{capitalizeEachWordInString(day)}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffMembers.map(staffMember => (
                            <tr>
                                <td>{staffMember}</td>
                                {DAYS.map(day => <td>{getNumberOfShifts(staffMember, day)}</td>)}
                                <td>{getTotalShifts(staffMember)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )   
};