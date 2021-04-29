let findAge = (year) => {
	let age = new Date().getFullYear() - new Date(year).getFullYear();
	let m = new Date().getMonth() - new Date(year).getMonth();
	if (m < 0 || (m === 0 && new Date().getDate() < new Date(year).getDate())) {
		age--;
	}
	return age;
};
const data = [
	{
		id: 1,
		name: 'Calvyn Siong',
		age: `${findAge('3/6/2002')}`,
		img:
			'https://media-exp1.licdn.com/dms/image/C4E03AQFdQpEIlJ4z3A/profile-displayphoto-shrink_400_400/0/1598295418015?e=1625097600&v=beta&t=0NIY58SpGsFJLEbmpDPYY3MSCkl7cTnu_UsSLEl9jBQ',
		bday: '3/6',
		year: '2002',
	},
	{
		id: 2,
		name: 'Samer Rafidi',
		age: `${findAge('12/7/2002')}`,
		img:
			'https://i.imgur.com/nHljuVw.png',
		bday: '12/7',
		year: '2002',
	},
	{
		id: 3,
		name: 'Tamer Rafidi',
		age: `${findAge('12/7/2002')}`,
		img:
			'https://i.imgur.com/4ZreeHh.png',
		bday: '12/7',
		year: '2002',
	},
	{
		id: 4,
		name: 'Anthony Turco',
		age: `${findAge('10/31/2002')}`,
		img:
			'https://cdn.discordapp.com/attachments/727617360680452219/837369288905719895/image0.png',
		bday: '10/31',
		year: '2002',
	},
	{
		id: 5,
		name: "Kyle D'Souza",
		age: `${findAge('11/17/2002')}`,
		img: 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png',
		bday: '11/17',
		year: '2002',
	},
	{
		id: 6,
		name: 'Aidan Mathew',
		age: `${findAge('3/29/2002')}`,
		img:
			'https://i.imgur.com/d14Bzoa.png',
		bday: '3/29',
		year: '2002',
	},
	{
		id: 7,
		name: 'Mitchell Hynes',
		age: `${findAge('4/3/2002')}`,
		img: 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png',
		bday: '4/3',
		year: '2002',
	},
	{
		id: 8,
		name: 'Lucas Picard',
		age: `${findAge('7/17/2002')}`,
		img:
			'https://cdn.discordapp.com/attachments/727617360680452219/837357833279504414/image0.jpg',
		bday: '7/17',
		year: '2002',
	},
];
export default data;
