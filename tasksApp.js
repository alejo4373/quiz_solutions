//  importing the readline module
var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

var tasks = []

function createTask(title) {
	return { title: title, completed: false }
}

function forEachTask(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i], i)
	}
}

function prettyFormat(task, index) {
	console.log (index + ". " + task.title +". Completed: "+ task.completed)
}

function listUncompleted(task, index) {
	if(!task.completed) { prettyFormat(task, index) }
}

function listCompleted(task, index) {
	if(task.completed) { prettyFormat(task, index) }
}

function toggle(index) {
	tasks[index].completed = true
}

rl.on('line', function(input){
	var inputArr = input.split(' ')
	var command = inputArr.shift()
	var title = inputArr.join(' ')

	if (command === 'ADD') {
		tasks.push(createTask(title))
		forEachTask(tasks, prettyFormat)
	}else if (command === 'toggle') {
		toggle(inputArr[0])	// Because the inputArr got its element[0] removed when .shift
	}else if(command === 'show'){
		switch(inputArr[0]) {
			case "all":
				forEachTask(tasks, prettyFormat)
				break;
			case "active":
				forEachTask(tasks,listUncompleted)
				break;
			case "completed":
				forEachTask(tasks,listCompleted)
				break;
		}
	} else { console.log("[-WARNING-] Unknown command") }
	console.log("----------------------------------------------------------\nEnter a command <ADD, toggle or show [all, active, completed]>")
}
)
console.log("Enter a command <ADD, toggle or show [all, active, completed]>")

