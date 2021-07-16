function isIn(ob, arr) {
	let position = -1;
	let i = 0;
	while (i < arr.length && position < 0) {
		if (ob == arr[i]) {
			position = i
		}
		i += 1;
	}
	return position;
}


export default function(achievements) {
	let courseList = []
	for (let i = 0; i < achievements.length; i++) {
		courseList.concat(achievements[i])
	};
	let courseNames = [];
	let courseNumbers = [];
	for (let j = 0; j < courseList.length; j++) {
		let check = isIn(courseList[j], courseNames)
		if (check == -1) {
			courseNames.push(courseList[j])
			courseNumbers.push(1)
		}
		else {
			courseNumbers[check] += 1
		}
	}
	let max = 0;
	let suggestion = "";
	for ( let k = 0; k < courseNumbers.length; k++) {
		if (courseNumbers[k] >= max) {
		max = courseNumbers[k]
		suggestion = courseNames[k]
		}
	}

	return suggestion
}
