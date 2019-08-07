(function(){

const calcTime = (courseLength, hoursPerDay, daysPerWeek, interviewPrep) => {
	const calcHours = parseInt(interviewPrep) + courseLength,
		  calcTime = calcHours / hoursPerDay + (calcHours / hoursPerDay) / daysPerWeek,
		  calcDate = new Date(new Date().setDate(new Date().getDate() + calcTime));
	h1.innerText = `You should finish by ${calcDate.toString().slice(0,15)}`;
	p.innerHTML = `
Each unit in freeCodeCamp is approximately 300 hours. 
<br /> If you signed up for ${courseLength / 300 > 1 ? `${courseLength / 300} units` : `${courseLength / 300} unit`} and you devote at least 
<br /> ${interviewPrep > 1 ? `${interviewPrep} hours` : `${interviewPrep} hour`} to your interview prep, it will take you a total of ${calcHours} hours. 
<br /> Assuming that you were to spend ${hoursPerDay > 1 ? `${hoursPerDay} hours` : `${hoursPerDay} hour`} per day for ${daysPerWeek > 1 ? `${daysPerWeek} days` : `${daysPerWeek} day`} each week,
<br /> You would be finished in as soon as ${calcTime > 1 ? `${calcTime.toFixed()} days` : `${calcTime.toFixed()} day`}! 
<br /> Guess what?! That is ${calcTime > 365 ? `only ${(calcTime / 365).toFixed()} years from now!` : `less than ${(calcTime / 365 * 12).toFixed()} months from now!`}
`;
};

const getTime = e => {
e.preventDefault();
    let courses = document.querySelector('select').value,
        hours = courses * 300,
        htCommit = document.querySelector('form input[name="hoursPerDay"]').value,
        dtCommit = document.querySelector('form input[name="daysPerWeek"]').value,
        interview = document.querySelector('form input[name="interviewPrep"]').value;
        calcTime(hours, htCommit, dtCommit, interview);
}

const body = ele => document.body.append(ele);

const h1 = document.createElement('h1');
const p = document.createElement('p');
const form = document.createElement('form');

body(h1);
body(p);
body(form);

h1.innerText = `Calculate Time to Complete Free Code Camp`;
form.innerHTML = `
  <h3>Number of Courses To Complete</h3>
  <select>
  <option value="6">6</option>
  <option value="5">5</option>
  <option value="4">4</option>
  <option value="3" selected='selected'>3</option>
  <option value="2">2</option>
  <option value="1">1</option>
  </select>
  
  <h3>How many hours can you commit per day?</h3>
  <input type="range" name="hoursPerDay" min="1" max="18" value="6">

  <h3>How many days can you commit per week?</h3>
  <input type="range" name="daysPerWeek" min="1" max="7" value="5">

  <h3>How many hours of interview practice do you want to calculate?</h3>
  <input type="range" name="interviewPrep" min="1" max="3500" value="900">

  <button type="submit">Calculate</button>
`;

document.querySelector('form button').addEventListener('click', getTime);
document.querySelector('form select').addEventListener('input', getTime);
document.querySelectorAll('form input').forEach(e => e.addEventListener('input', getTime));

})()
