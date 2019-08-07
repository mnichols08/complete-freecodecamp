(function(){

function calcTime(courseLength, hoursPerDay, daysPerWeek){
	const allHours = courseLength;
	console.log(allHours);
	this.time = (allHours / hoursPerDay) + ((allHours / hoursPerDay) / daysPerWeek);
	this.date = new Date(new Date().setDate(new Date().getDate() + this.time));
	document.querySelector('h1').innerText = `You should finish by ${this.date}`;
// 	console.log({'actual days to complete': this.time, 'hours of study': courseLength, 'days per week': daysPerWeek, 'hours for interview prep': interviewPrep});

};

const getTime = e => {
e.preventDefault();
    let courses = document.querySelector('select').value,
        hours = courses * 300,
        htCommit = document.querySelector('form input[name="hoursPerDay"]').value,
        dtCommit = document.querySelector('form input[name="daysPerWeek"]').value,
        interview = document.querySelector('form input[name="interviewPrep"]').value;
        calcTime(parseInt(hours + interview), htCommit, dtCommit);
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
  <option value="3">3</option>
  <option value="2">2</option>
  <option value="1">1</option>
  </select>
  
  <h3>How many hours can you commit per day?</h3>
  <input type="range" name="hoursPerDay" min="1" max="24" value="18">

  <h3>How many days can you commit per week?</h3>
  <input type="range" name="daysPerWeek" min="1" max="7" value="7">

  <h3>How many hours of interviews practice do you want to calculate?</h3>
  <input type="range" name="interviewPrep" min="0" max="100" value="0">

  <button type="submit">Calculate</button>
`;

document.querySelector('form button').addEventListener('click', getTime);
document.querySelector('form select').addEventListener('input', getTime);
document.querySelectorAll('form input').forEach(e => e.addEventListener('input', getTime));

})()
