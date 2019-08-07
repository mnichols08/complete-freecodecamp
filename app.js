(function(){

const calcTime = (courseLength, hoursPerDay, daysPerWeek, interviewPrep) => {
	const calcHours = parseInt(interviewPrep) + courseLength,
		  calcTime = calcHours / hoursPerDay + (calcHours / hoursPerDay) / daysPerWeek,
		  calcDate = new Date(new Date().setDate(new Date().getDate() + calcTime));
	h1.innerText = `You should finish by ${calcDate.toString().slice(0,15)}`;
	;
	p.innerText = `
Each unit in freeCodeCamp is approximately 300 hours. 
If you signed up for ${courseLength / 300 > 1 ? `${courseLength / 300} units` : `${courseLength / 300} unit`} and you devote at least 
${interviewPrep > 1 ? `${interviewPrep} hours` : `${interviewPrep} hour`} to your interview prep, it will take you a total of ${calcHours} hours. 
Assuming that you were to spend ${hoursPerDay > 1 ? `${hoursPerDay} hours` : `${hoursPerDay} hour`} per day for ${daysPerWeek > 1 ? `${daysPerWeek} days` : `${daysPerWeek} day`} each week,
You would be finished in as soon as ${calcTime > 1 ? `${calcTime.toFixed()} days` : `${calcTime.toFixed()} day`}! 
Guess what?! That is ${calcTime > 365 ? `only ${(calcTime / 365).toFixed()} years from now!` : `less than ${(calcTime / 365 * 12).toFixed()} months from now!`}
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

	document.querySelectorAll('span value')[0].innerText = `${htCommit > 1 ? `${htCommit} hours` : `${htCommit} hour`}.`;
	document.querySelectorAll('span value')[1].innerText = `${dtCommit > 1 ? `${dtCommit} days` : `${dtCommit} day`}.`;
	document.querySelectorAll('span value')[2].innerText = `${interview > 1 ? `${interview} hours` : `${interview} hour`}.`;
}

document.querySelector('style').innerHTML += `
body {
        font-family: 'Open Sans', sans-serif;
        background: linear-gradient(45deg, hsl(0, 5%, 10%), hsl(0, 13%, 11%));
        color: #eee;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
}
div {
        position:  absolute;
        top: 50%;
        left: 50%;
        transform:  translate(-50%,-50%);
        padding: 2.5%;
        margin: 2.5%;
        background: linear-gradient(-45deg, hsla(280, 69%, 14%, 0.62), hsla(150, 69%, 8%, 0.75));
        border-radius: 6pt;
        box-shadow: 0 0 5pt 0 hsla(0, 0%, 0%, 0.57);
}
`;

const render = ele => div.prepend(ele);

const div = document.createElement('div');
const p = document.createElement('p');
const form = document.createElement('form');
const h1 = document.createElement('h1');

document.body.prepend(div);
render(form);
render(p);
render(h1);

h1.innerText = `Calculate Time to Complete Free Code Camp`;
form.innerHTML = `
  <h3>Number of Units To Complete</h3>
  <select>
  <option value="6">6</option>
  <option value="5">5</option>
  <option value="4">4</option>
  <option value="3" selected='selected'>3</option>
  <option value="2">2</option>
  <option value="1">1</option>
  </select>
  
  <h3>How many hours can you commit per day?</h3>
  <span><input type="range" name="hoursPerDay" min="1" max="18" value="6"><value>6 hours.</value></span>
  <h3>How many days can you commit per week?</h3>
  <span><input type="range" name="daysPerWeek" min="1" max="7" value="5"><value>1 day.</value></span>
  <h3>How many hours of interview practice do you want to calculate?</h3>
  <span><input type="range" name="interviewPrep" min="1" max="3500" value="900"><value>900 hours.</value></span>
  <button type="submit">Calculate</button>
`;

document.querySelector('form button').addEventListener('click', getTime);
document.querySelector('form select').addEventListener('input', getTime);
document.querySelectorAll('form input').forEach(e => e.addEventListener('input', getTime));

})()
