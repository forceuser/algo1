import test from "tape";
import sinon from "sinon";
import sqnc from "sqnc";
import algo, {find} from "../src/index.mjs";


test("test find", t => {
	const data = sqnc(0, 20);
	const fullData = data.toArray();
	data.toArray(20).forEach(i => {
		t.equal(find(fullData, i), i + 1);
	});
	t.end();
});

test("test algo", t => {
	const testdata = [
		{
			src: [2, 6, 4, 5, 9, 1, 12, 11],
			res: [2, 4, 5, 9, 12],
		},
	];

	testdata.forEach(({src, res}) => t.deepEqual(algo(src), res));
	t.end();
});

test("test algo nodata", t => {
	t.equal(algo(), undefined);
	t.equal(algo([]), undefined);
	t.end();
});
