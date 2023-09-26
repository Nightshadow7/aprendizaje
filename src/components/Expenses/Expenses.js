import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from './../UI/Card.js';

const Expenses = (props) => {
  return(
    <Card className='expenses'>
      <ExpenseItem
          title={props.cards[0].title}
          amount={props.cards[0].amount}
          date={props.cards[0].date}
        />
        <ExpenseItem
          title={props.cards[1].title}
          amount={props.cards[1].amount}
          date={props.cards[1].date}
        />
        <ExpenseItem
          title={props.cards[2].title}
          amount={props.cards[2].amount}
          date={props.cards[2].date}
        />
        <ExpenseItem
          title={props.cards[3].title}
          amount={props.cards[3].amount}
          date={props.cards[3].date}
        />
    </Card>
  );
};

export default Expenses;