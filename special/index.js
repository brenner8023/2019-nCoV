// 获取新型肺炎疫情实时播报信息
// 获取来源：https://news.ifeng.com/c/special/7tPlDSzDgVk

// let reg1 = /timeline_date-[a-z0-9]{8}/i,
// 	reg2 = /tiemline_text-[a-z0-9]{8}/i,
// 	str = document.querySelector('html').innerHTML,
// 	timelineDate = str.match(reg1),
// 	timelineText = str.match(reg2),
// 	listOfDate, listOfText,
// 	result = [];

// if(timelineDate != null && timelineDate.length > 0) {
// 	listOfDate = Array.prototype.map.call(document.querySelectorAll(`.${timelineDate[0]}`), (item) => {
// 		return item.innerText;
// 	});
// }

// if(timelineText != null && timelineText.length > 0) {
// 	listOfText = Array.prototype.map.call(document.querySelectorAll(`.${timelineText[0]} span`), (item) => {
// 		return item.innerText;
// 	});
// }

// listOfDate.forEach((item, idx) => {
// 	result.push({date: item, text: listOfText[idx]});
// });

// console.log(JSON.stringify(result));

/********************* 分界线 ****************************************************/

// 疫情信息静态化

let fs = require('fs'),
	listOfData = [],
	result = '# 疫情信息离线版本\n\n![](./active.jpg)\n\n';

fs.readFile('./info.json', (err, data) => {
	if(!err) {
		listOfData = JSON.parse(data.toString());
		listOfData.forEach(item => {
			result += `**${item.date}**\n> ${item.text}\n\n`;
		});
		fs.writeFile('./README.md', result, (err) => { console.log(err); });
	}
});