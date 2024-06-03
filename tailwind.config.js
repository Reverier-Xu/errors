const fontFamily = [
	"JetBrains Mono",
	"Menlo",
	"-apple-system",
	'"Noto Sans"',
	'"Helvetica Neue"',
	"Helvetica",
	'"Nimbus Sans L"',
	"Arial",
	'"Liberation Sans"',
	'"PingFang SC"',
	'"Hiragino Sans GB"',
	'"Noto Sans CJK SC"',
	'"Source Han Sans SC"',
	'"Source Han Sans CN"',
	'"Microsoft YaHei"',
	"Consolas",
	"Courier",
	"monospace",
];

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			sans: fontFamily,
			mono: fontFamily,
			serif: fontFamily,
			display: fontFamily,
			body: fontFamily,
		},
		extend: {
			transitionProperty: {
				size: "width, height",
			},
		},
	},
	plugins: [],
};
