import './App.css';
import React, { useState } from 'react';
import data from './data';
import List from './list';

function App() {

	// initialize array of friends
	const [people, setPeople] = useState(data);
	// const toDateFormat = moment(new Date(date)).format(dateFormat);
	const Today = `${
		new Date().getMonth() + 1
	}/${new Date().getDate()}/${new Date().getFullYear()}`;
	// function check
  const Reminder = (people) => {
    let bDayBoy = people.filter(
				(person) =>
					person.bday ===
					`${new Date().getMonth() + 1}/${new Date().getDate()}`,
			)
		if (
			bDayBoy.length > 0
		) {
			return `Wish ${bDayBoy[0].name} Happy Birthday!!!`;
		} else {
			return `It is no one's birthday today. Check back another time!`;
		}
	};
	return (
		<main className='bg-red-400	p-6 min-h-screen'>
			<section className='flex flex-col items-center'>
				<h1 className='text-6xl text-center flex-1 p-1 mb-3'>
					Birthday Reminders
				</h1>
				<h3 className='text-base flex-1 text-2xl text-semibold'>
					Since you and I can never remember birthdays.
				</h3>
				<h1 className='font-bold text-2xl'>Today is {Today}</h1>
				<div className='bg-white flex flex-col p-2 mt-6 px-20 py-6 rounded-3xl'>
					<h3 className='text-center font-semibold text-2xl mb-6'>
						{Reminder(people)}
					</h3>
					<List people={people}></List>
					<button
						className='bg-red-400 animate-bounce p-0 inline rounded-lg	mt-2'
						onClick={() => {
              if (people === data) {
                setPeople([])
              } else {
                setPeople(data)
              }; 
						}}>
						Clear/Restore
					</button>
				</div>
			</section>
		</main>
	);
}

export default App;
