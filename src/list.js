import React from 'react';

function List({ people }) {

	return (
		<article>
			{people.map((person) => {
                const { id, name, age, img, bday,year } = person;
                return <article key={id} className="flex items-center space-x-32" >
                    <img src={img} alt={name} className="w-28 h-28 my-6 rounded-full " />
                    <div className="flex flex-col ml-20 justify-startitems-center space-y-3> * + *">
                        <h4 className="text-lg">Name: <span className="font-semibold">{name}</span></h4>
                        <p className="text-lg">Age: <span className="font-semibold">{age}</span> </p> 
                        <p className="text-lg" >Birthday: <span className="font-semibold">{bday}/{year}</span> </p> 
                    </div>
                </article>
			})}
		</article>
	);
}

export default List;
