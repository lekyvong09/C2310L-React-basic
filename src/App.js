import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {id: 1, title: 'Petrol Gas', amount: 5, date: new Date(2024, 4, 27)}, /// expense[0]
    {id: 2, title: 'Cinema', amount: 5, date: new Date(2024, 4, 30)}, /// expense[1]
    {id: 3, title: 'Coffee', amount: 5, date: new Date(2024, 4, 20)}, /// expense[2]
    {id: 4, title: 'Dinner', amount: 20, date: new Date(2024, 4, 10)}, /// expense[3]
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expense bien1={expenses} ></Expense>
    </div>
  );
}

export default App;
