// import { colortype } from '@/@types';

import chartcolors from './chartcolors';

// 긍부정 컬러
const chartpolaritycolor = {
	positive: chartcolors['primary-500'], // 긍정
	negative: chartcolors['error-500'], // 부정
	neutral: chartcolors['orange-500'], // 중립
	etc: chartcolors['grey-primary'], // 중립
};

export default chartpolaritycolor;
