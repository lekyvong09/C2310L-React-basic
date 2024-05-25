import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';

const initialExpenses = [
  {id: 1, title: 'Petrol Gas', amount: 5, date: new Date(2022, 4, 27), category: 'Essential'}, /// expense[0]
  {id: 2, title: 'Cinema', amount: 5, date: new Date(2023, 4, 30), category: 'Entertainment'}, /// expense[1]
  {id: 3, title: 'Coffee', amount: 5, date: new Date(2024, 4, 20), category: 'Entertainment'}, /// expense[2]
  {id: 4, title: 'Dinner', amount: 20, date: new Date(2024, 4, 10), category: 'Essential'}, /// expense[3]
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (username, password) => {
    ///// if (username === 'dffs' && password === 'dddd')
      setIsLoggedIn(true);
  }
  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  const addExpenseHandler = (data) => {
    // setExpenses([...expenses, data]);
    setExpenses(previousState => {
      return [data, ...previousState];
    });
  }

  return (
    <Navigation>
      <Login onLoginHandler={loginHandler}></Login>
      <NewExpense onAddExpenseHandler={addExpenseHandler}></NewExpense>
      <Expense bien1={expenses} ></Expense>
    </Navigation>
  );
}

export default App;
