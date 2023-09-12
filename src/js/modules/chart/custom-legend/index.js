import * as am4core from '@amcharts/amcharts4/core';

import { ChartMaps } from '../chart-color';
import { channelMap, polarityMap, youtubeMap } from '../../../constants';

import { comma, representKeyword } from '../../util/common';

/* interface IchartLegend {
	chart;
	id;
	chartType?: {
		type: 'pie' | 'line' | 'bar' | 'dubleAxis';
		pieSeries?;
	};
} */

const legendTemplate = (
	options = {
		id,
		disabled,
		color,
		label,
		labelEn,
		value,
	},
) => {
	return `
		<button type="button" class="vbtn no-interaction legend-item ${options.disabled}" id="${options.id}" data-id="${options.id}-${options.labelEn}">
			<span class="legend-marker" style="background-color: ${options.color}">
				<span class="icon mgc_check_line"></span>
				<span class="bar" style="background-color: ${options.color}"></span>
				<span class="circle" style="background-color: ${options.color}"></span>
			</span>
			${options.label}<span class="legend-value">${options.value}</span>
		</button>
	`;
};

export const customLegend = (options = { chart, chartType, id, iconType }) => {
	const { chart, chartType, id, iconType } = options;

	// console.log("🚀 ~ file: index.js:166 ~ chartType:", chart, chartType, id);


	// 레전드 노드 추가
	const chartDiv = document.querySelector(`#${id}`);
	const customLegendNode = document.createElement('div');

	customLegendNode.id = 'custom-legend-' + id;
	chartDiv.after(customLegendNode);

	const legend = document.querySelector('#custom-legend-' + id);

	if (legend) {
		let legendHtml = '';
		let legendCategory = [];
		let total = 0;

		legend.innerHTML = '';

		legendHtml += '<div class="chart-legend-container">';
		legendHtml += '<div class="chart-labelbox check-marker">';			

		if (chartType?.type === 'pie') {
			for (let i = 0; i < chartType.pieSeries.dataItems.length; i++) {
				const itemName = chartType.pieSeries.dataItems.values[i].category;
				const legendName = representKeyword(itemName);
				const value = chartType.pieSeries.dataItems.values[i].values.value.percent;
				const polarityType = chart.data[i].polarity;
				const hidden = chartType.pieSeries.dataItems.values[i].hidden;
				const color = chart.colors.getIndex(i);

				if (polarityMap[itemName]) {
					legendCategory.push(polarityMap[itemName]);
					// color = am4core.color(ChartMaps.chartpolaritycolor[itemName]);
				} else if (channelMap[itemName]) {
					legendCategory.push(channelMap[itemName]);
					// color = am4core.color(ChartMaps.chartchannelcolor[itemName]);
				} else if (polarityMap[polarityType]) {
					legendCategory.push(legendName);
					// color = am4core.color(ChartMaps.chartpolaritycolormap[polarityType][i]);
				} else {
					legendCategory.push(legendName);
					// color = chart.colors.getIndex(i);
				}

				total = (value * 100) / 100;

				legendHtml += legendTemplate({
					disabled: hidden ? 'disabled' : '',
					id: `legend-item-${id}-${i}`,
					color: color,
					label: legendCategory[i],
					value: `${total.toFixed(2)} %`,
				});
			}
		} else {
			for (let i = 0; i < chart.series.values.length; i++) {
				const valueY = chart.series.values[i].dataFields.valueY;
				const legendName = representKeyword(valueY);
				const polarityType = chart.data[i]?.polarity;
				const hidden = chart.series.values[i].hidden;
				const color = chart.colors.getIndex(i);

				if (channelMap[valueY]) {
					legendCategory.push(channelMap[valueY]);
					// color = am4core.color(ChartMaps.chartchannelcolor[valueY]);
				} else if (polarityMap[valueY]) {
					legendCategory.push(polarityMap[valueY]);
					// color = am4core.color(ChartMaps.chartpolaritycolor[valueY]);
				} else if (chartType?.type === 'dubleAxis') {
					legendCategory.push(youtubeMap[valueY]);
					// color = chart.colors.getIndex(i);
				} else if (polarityMap[polarityType]) {
					legendCategory.push(legendName);
					// color = am4core.color(ChartMaps.chartpolaritycolormap[polarityType][i]);
				} else {
					legendCategory.push(legendName);
					// color = chart.colors.getIndex(i);
				}

				total = chart.data.reduce((a, b) => ({
					[valueY]: a[valueY] + b[valueY],
				}))[valueY];

				legendHtml += legendTemplate({
					disabled: hidden ? 'disabled' : '',
					id: `legend-item-${id}-${i}`,
					color: color,
					label: legendCategory[i],
					labelEn: valueY,
					value: `${comma(total)} 건`,
				});
			}
		}

		legendHtml += '</div>';
		legendHtml += '</div>';

		legend.innerHTML = legendHtml;

		if (chartType?.type === 'pie') {
			for (let i = 0; i < chartType.pieSeries.dataItems.length; i++) {
				let buttons = document.querySelector(`#legend-item-${id}-${i}`);

				if (buttons) {
					buttons.addEventListener('click', e => {
						togglePieChartValue(chartType.pieSeries, `#legend-item-${id}-${i}`, i);
					});
				}
			}
		} else {
			for (let i = 0; i < chart.series.values.length; i++) {
				let buttons = document.querySelector(`#legend-item-${id}-${i}`);

				if (buttons) {
					buttons.addEventListener('click', e => {
						const tooltipItemId = `${e.currentTarget.dataset.id}`;
						toggleChartValue(chart, `#legend-item-${id}-${i}`, i, tooltipItemId);
					});
				}
			}
		}
	}
};



export const toggleChartValue = (chartObj, buttonId, idx, seriesName) => {
	const series = chartObj.series.getIndex(idx);
	const legendItem = document.querySelector(buttonId);

	// sessionStorage.removeItem('legendItem');

	if (series) {
		if (legendItem) {
			if (series.isHiding || series.isHidden || series.hidden) {
				series.show();
				legendItem.classList.remove('disable');

			} else {
				series.hide();
				legendItem.classList.add('disable');
			}
		}

	}
};

export const togglePieChartValue = (pieSeries, buttonId, idx) => {
	const slice = pieSeries.dataItems.getIndex(idx);
	const legendItem = document.querySelector(buttonId);

	if (slice) {
		if (legendItem) {
			if (slice.visible) {
				slice.hide();
				legendItem.classList.add('disable');
			} else {
				slice.hidden = false;
				slice.show();
				legendItem.classList.remove('disable');
			}
		}
	}
};