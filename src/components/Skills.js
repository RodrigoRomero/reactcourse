import SkillsItem from './SkillsItem.js';

function Skills(){

	const skills =[
		{item:"Scrum Master", rating:"5"},
		{item:"Agile Metodologies", rating:"4"},
		{item:"PHP", rating:"3"},
		{item:"JavasScript", rating:"2"},
		{item:"React", rating:"1"},
	];

	return(
		<div>
			<ul>
				<SkillsItem skills={skills[0]} />
				<SkillsItem skills={skills[1]} />
				<SkillsItem skills={skills[2]} />
				<SkillsItem skills={skills[3]} />
				<SkillsItem skills={skills[4]} />
			</ul>
		</div>
		);
}

export default Skills;