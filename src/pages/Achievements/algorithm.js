function isIn(ob, arr) {
	position = -1;
	i = 0;
	while (i < arr.length && position < 0) {
		if (ob == arr[i]) {
			position = i
		}
		i += 1;
	}
	return inside;
}


export async function calculateCourse(achievements) {
	courseList = []
	for (let i = 0; i < achievements.length; i++) {
		courseList.concat(achievements[i]
	};
	courseNames = [];
	courseNumbers = [];
	for (let j = 0; j < courseList.length; j++) {
		check = isIn(courseList[i], courseNames)
		if (check == -1) {
			courseNames.push(courseList[i])
			courseNumbers.push(1)
		}
		else {
			courseNumbers[check] += 1
		}
	}
	max = 0;
	suggestion = "";
	for ( let k = 0; k < courseNumbers.length; k++) {
		if (courseNumbers[k] >= max) {
		max = courseNumbers[k]
		suggestion = courseNames[k]
		}
	}
	return suggestion
}
