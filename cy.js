// const fetch = require('node-fetch');
function printf(text) {
    console.log('\u001b[3m' + text + '\u001b[0m' + (text.includes('热') ? '!' : ''));
    console.log();
}
async function cy(zz, url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const match = html.match(zz);
        console.log(url);if (match) {
            const result = match[1].replace(/\s+/, '').replace(/[ -~]+/g, '-');
            printf(result);
        }
    } catch (error) {
        console.log('\u001b[42m' + url + '\u001b[0m');
    }
}

async function cyu(zz, url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const match = JSON.stringify(json).match(zz);
        console.log(url);if (match) {
            const result = match[1].replace(/[ -~]+/g, '-');
            printf(result);
        }
    } catch (error) {
        console.log('\u001b[42m' + url + '\u001b[0m');
    }
}

async function cypost(zz, url) {
    try {
        const cityId = '284767';
        const body = JSON.stringify({ cityId });
        const response = await fetch(url, { method: 'POST', body });
        const html = await response.text();
        const match = html.match(zz);
        console.log(url);if (match) {
            const result = match[1].replace(/[ -~]+/g, '-');
            printf(result);
        }
    } catch (error) {
        console.log('\u001b[42m' + url + '\u001b[0m');
    }
}

const url3 = 'http://api.help.bj.cn/apis/life29/?id=101050101';
const url11 = 'http://nanning.welife100.com/PIndex/getnnIndexdata?areaid=101050115';
const url13 = 'https://api.msn.cn/weather/overview?apikey=j5i4gDqHL6nGYwx5wi5kRhXjtf2c5qgFX9fzfk0TOo&cuthour=true&feature=lifeday&lifeModes=50&days=1&locale=zh-cn&lat=45.760101318359375&lon=126.66900634765625';
const url17 = 'https://v.api.aa1.cn/api/tianqi-zs/index.php?id=101050101';
const url21 = 'https://yiketianqi.com/api?version=v1&city=%E5%8D%97%E5%B2%97&appid=85841439&appsecret=EKCDLT4I';
const url22 = 'https://api.seniverse.com/v3/life/suggestion.json?key=SCYrvkytJze9qyzOh&location=haerbin';
const url24 = 'https://h5ctywhr.api.moji.com/indexMoreDetail';

const cyhrb = [
    cy('衣指数","type":"(.*?)"}', url3),
    cy('sin.*?ary":"(.*?)"', url13),
    cyu('02","i3":"","i4":"(.*?)","i6', url11),
    cy('衣指数","type":"(.*?)"}', url17),
    cypost('([^ -~]*.{37}[^ -~]*).{15}穿', url24),
    cyu('衣指数\\",\\"level\\":\\"(.*?)\\"}', url21),
    cy('sing":{"brief":"(.*?)"', url22)
];

(async function () {
    for (const task of cyhrb) {
        await task;
    }
})();
