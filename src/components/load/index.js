import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import SlotRow from './slot-row';

import { capitalize } from '../../utils/string'
import { DAYS } from '../../utils/constants';


export default function Load() {
    
    const users =  useSelector(state => state.users)

    
    return (
        <div>hello world </div>
    )   
};