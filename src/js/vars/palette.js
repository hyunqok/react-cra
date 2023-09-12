const PRIMARY = {
	800: '#12043F',
	700: '#280887',
	600: '#410FD3',
	500: '#533DFF',
	400: '#654BFF',
	300: '#875FFE',
	200: '#DEDAFE',
	100: '#EFEDFF',
	50: '#F9F9FF',
};

const SUCCESS = {
	500: '#3ABA6F',
	400: '#47D080',
	300: '#6CD999',
	200: '#98E4B8',
	100: '#C1EFD4',
	50: '#DAF5E5',
};

const WARNING = {
	500: '#FFC700',
	400: '#FFD233',
	300: '#FFDF70',
	200: '#FFE99B',
	100: '#FFF2C3',
	50: '#FFF8E1',
};

const ERROR = {
	500: '#FF3B30',
	400: '#FF6565',
	300: '#FF9393',
	200: '#FFB3B3',
	100: '#FFD5D5',
	50: '#FFEAEA',
};

const ORANGE = {
	500: '#FFAB00',
	400: '#FFC859',
	300: '#FFDA8C',
	200: '#FFEABF',
	100: '#FFF2DD',
	50: '#FFFBF2',
};

const LIME = {
	500: '#64DD16',
	400: '#9AE969',
	300: '#B9EF97',
	200: '#D8F5C5',
	100: '#E9FAD8',
	50: '#F7FDF3',
};

const TEAL = {
	500: '#01C0A6',
	400: '#2FD7BF',
	300: '#7CDED0',
	200: '#A3E8DE',
	100: '#C8F1EB',
	50: '#E3F8F5',
};

const BLUE = {
	500: '#2879FE',
	400: '#74A8FE',
	300: '#9EC2FF',
	200: '#C9DDFE',
	100: '#DEEBFF',
	50: '#F4F9FF',
};

const SKY = {
	500: '#3AE9E6',
	400: '#59D2E3',
	300: '#8DE1EB',
	200: '#BFEEF4',
	100: '#DCF4F8',
	50: '#F2FCFE',
};

const GREY = {
	primary: '#606060',
	secondary: '#7C889B',
	tertiary: '#9CA3AF',
	quatinary: '#DCDCDD',
	disabled: '#EAEAEB',
};

const BASE = {
	white: '#fff',
	black: '#18181C',
	background: '#F7F8FA',
	backgroundDark: '#F6F6F6',
	backgroundDark2: '#E6E6E6',
};

const CHART = {
	0: '#C4C9FA',
	1: '#B8ABEE',
	2: '#8D75F0',
	3: '#5D2BF4',
	4: '#260882',
	5: '#875FFE',
	6: '#3F07EF',
	7: '#3953FE',
	8: '#4093FF',
	9: '#48E3FF',
	10: '#44D2CD',
};

const CATEGORY = {
	dataRed: '#FA8F8C', // 카테고리 시간 		//매력도
	dataOrange: '#F9A96F', // 카테고리 장소	//차별성
	dataYellow: '#F5C66A', // 카테고리 상황	//관심도
	dataOlive: '#B1DA92', // 카테고리 인물	//호감도
	dataGreen: '#88D2A9', // 카테고리 단체	//전문성
	dataSky: '#7AD7E1', // 카테고리 상품		//친밀성
	dataBlue: '#82C2EE', // 카테고리 브랜드	//신뢰성
	dataNavy: '#95B2F3', // 카테고리 시사/경제	//선망도
	dataPurple: '#A79FF2', // 카테고리 문화/여가
	dataPink: '#CBA3F3', // 카테고리 자연/환경
	dataAurora: '#F39DE2', // 카테고리 일상/생활
	dataBrown: '#FF9BB7', // 카테고리 속성
	dataGreyLight: '#CCDAEC', // Express
	dataBlackLight: '#A8A8B4', // 카테고리 미등록 키워드
};

const BORDERS = {
	default: '#E6E6E6',
	dark: '#DBDBDB',
};

const COMMON = {
	base: BASE,
	primary: PRIMARY,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	orange: ORANGE,
	lime: LIME,
	teal: TEAL,
	blue: BLUE,
	sky: SKY,
	grey: GREY,
	chart: CHART,
	category: CATEGORY,
	borders: BORDERS,
	total: GREY['disabled'],
	action: {
		disabled: GREY['disabled'],
	},
	text: {
		primary: BASE['black'],
	},
};

export function palette() {
	return {
		...COMMON,
	};
}
