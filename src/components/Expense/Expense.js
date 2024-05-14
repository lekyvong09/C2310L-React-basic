import { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";


function Expense(props) { /// Expense[]
    const [filterYear, setFilterYear] = useState('');

    const getYearFilter = (year) => {
        // console.log(year);
        setFilterYear(year);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onGetYearFilter={getYearFilter}></ExpenseFilter>
            {/* if (filterYear === '') then  */}
            {filterYear === ''
                ? props.bien1.map(item => (
                    <ExpenseItem
                        key={item.id}
                        expense={item}
                    ></ExpenseItem>))
                : props.bien1.filter(e => e.date.getFullYear() === filterYear).map(item => (
                    <ExpenseItem
                        key={item.id}
                        expense={item}
                    ></ExpenseItem>
                ))
            }

        </Card>
    );
}

export default Expense;