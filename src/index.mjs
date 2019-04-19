export function find (group, i) {
	let s = 0;
	let e = group.length - 1;
	while (e - s > 1) {
		const h = Math.floor(s + ((e - s) / 2));
		if (group[h] > i) {
			e = h;
		}
		else {
			s = h;
		}
	}
	return e;
}

export default function (data) {
	if (!data || !data.length) {
		return;
	}
	const groups = [];
	let maxlength = 0;
	let maxlengthidx;

	for (const i of data) {
		let added = false;
		const l = groups.length;
		for (let idx = 0; idx < l; idx++) {
			const group = groups[idx];
			let length = group.length;
			if (group[length - 1] < i) {
				group.push(i);
				added = true;
				length++;
			}
			else if (group[0] < i) {
				const newgroup = group.slice(0, find(group, i));
				newgroup.push(i);
				added = true;
				length = newgroup.length;
				groups.push(newgroup);
			}

			if (length > maxlength) {
				maxlength = length;
				maxlengthidx = idx;
			}
		}
		if (!added) {
			groups.push([i]);
			if (maxlength === 0) {
				maxlength = 1;
				maxlengthidx = 0;
			}
		}
	}
	return groups[maxlengthidx];
}
