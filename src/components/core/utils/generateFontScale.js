export default function generateFontScale(base, scale, unit) {
	const result = {};
	const levels = {
		"minor-xs": -2,
		"minor-sm": -1,
		"minor-base": 0,
		"minor-lg": 1,
		"minor-xl": 2,
		"minor-2xl": 3,
		"minor-3xl": 4,
		"minor-4xl": 5,
		"minor-5xl": 6,
		"minor-6xl": 7,
		"minor-7xl": 8,
		"minor-8xl": 9,
		"minor-9xl": 10
	};

	for(let level in levels) result[level] = `${base * Math.pow(scale, levels[level])}${unit}`

	return result;

}