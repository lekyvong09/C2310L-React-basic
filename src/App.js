import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import Navigation from './components/Navigation/Navigation';

const initialExpenses = [
  {id: 1, title: 'Petrol Gas', amount: 5, date: new Date(2022, 4, 27), category: 'Essential'}, /// expense[0]
  {id: 2, title: 'Cinema', amount: 5, date: new Date(2023, 4, 30), category: 'Entertainment'}, /// expense[1]
  {id: 3, title: 'Coffee', amount: 5, date: new Date(2024, 4, 20), category: 'Entertainment'}, /// expense[2]
  {id: 4, title: 'Dinner', amount: 20, date: new Date(2024, 4, 10), category: 'Essential'}, /// expense[3]
];

function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (data) => {
    // setExpenses([...expenses, data]);
    setExpenses(previousState => {
      return [data, ...previousState];
    });
  }

  return (
    <div>
      <Navigation />
      <NewExpense onAddExpenseHandler={addExpenseHandler}></NewExpense>
      <Expense bien1={expenses} ></Expense>
    </div>
  );
}

export default App;
