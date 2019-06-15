/** @namespace JS Base */
/** @namespace WebAPI */
/** @namespace JS Advanced */
/** @namespace Vue */

// -------------------------------------------------------------------------------------------- JS Base

/** 
 求指定范围随机整数的方法
 * @function
 * @memberof JS Base
 * @name randomInt 
 * @param {number} min - 随机区间的最小值
 * @param {number} max - 随机区间的最大值
 * @returns {number} 随机整数
 * */
export function randomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 获取随机rgb颜色的方法
 * @function
 * @memberof JS Base 
 * @name randomRGBColor 
 * @returns {string} rgb随机颜色
 */

function randomRGBColor(){
  var r = randomInt(0,255);
  var g = randomInt(0,255);
  var b = randomInt(0,255);
  return 'rgb('+ r +','+ g +','+ b +')';
}

/**
  获取随机十六进制颜色字符串的方法
 * @function
 * @memberof JS Base 
 * @name randomHexColor 
 * @returns {string} 十六进制颜色字符串
 */
function randomHexColor(){
  var hexColorChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  var color = ['#'];
  for(var i =0; i < 6; i++){
    var index = Math.floor(Math.random() * hexColorChars.length);
    color.push(hexColorChars[index]);
  }
  return color.join('');
}

/**
  获取当前日期的格式化字符串 
 * @function
 * @memberof JS Base 
 * @name formatDate 
 * @returns {string} 当前系统日志的 'yyyy-MM-dd hh:mm:ss' 格式
 */
function formatDate(){
  var date = new Date();
  var y = date.getFullYear();
  var M = date.getMonth();
  M = M < 10 ? '0'+M : M;
  var d = date.getDate();
  d = d < 10 ? '0'+d : d;
  var h = date.getHours();
  h = h < 10 ? '0' + h : h;
  var m = date.getMinutes();
  m = m < 10 ? '0' + m : m;
  var s = date.getSeconds();
  s = s < 10 ? '0' + s : s;
  return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}

// ---------------------------------------------------------------------------------------   WebAPI               

/**
 从localStorage里面根据指定的键获取一个数组
 * @function
 * @memberof WebAPI
 * @name getLocalDataArray 
 * @param {string} key - 存储在localStorage里面数据对应的键
 * @returns {Array} 将JSON字符串反序列化后的数组
 */
function getLocalDataArray(key){
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  if(!arr){
    arr = [];
  }
  return arr;
}

/**
 将一个数组以指定的键存储到localStorage里面
 * @function
 * @memberof WebAPI
 * @name saveLocalDataArray 
 * @param {string} key - 存储到localStorage中的数据的键
 * @param {Array} arr - 要存储到localStorage里面的数组
 */
function saveLocalDataArray(key,arr){
  var json = JSON.stringify(arr);
  localStorage.setItem(key,json);
}

/**
 向localStorage里面的数组数据前插入一个数据对象
 * @function
 * @memberof WebAPI
 * @name prependDataIntoArray
 * @param {string} key - 在localStorage中的数组对应的键
 * @param {object} data - 要追加到数组中的数组
 */
function prependDataIntoArray(key,data){
  var arr = this.getLocalDataArray(key);
  arr.unshift(data);
  this.saveLocalDataArray(key,arr);
}

/**
 根据对应的id从localStorage中的数组中删除一条数据
 * @function
 * @memberof WebAPI
 * @name deleteLocalDataById
 * @param {string} key - 存储在localStorage中的数组的键
 * @param {number} id - 指定的数据的id
 * @returns {boolean} 是否删除成功
 */
function deleteLocalDataById(key,id){
  var arr = this.getLocalDataArray(key);
  var data = null;
  arr.forEach(function(e,i){
    if(e.id == id){
      data = e;
      arr.splice(i,1);
    }
  })
  this.saveLocalDataArray(key,arr);
  return !!data;
}

/**
 根据id修改localStorage里面的数据
 * @function
 * @memberof WebAPI
 * @name modifyLocalDataById
 * @param {string} key - 对应数组的键
 * @param {number} id - 对应数据的id
 * @param {object} data - 要把数据修改成什么样的对象
 * @returns {boolean} 是否成功
 */
function modifyLocalDataById(key,id,data){
  var arr = this.getLocalDataArray(key);
  var obj = null;
  arr.forEach(function(e,i){
    if(e.id == id){
      for(var key in data){
        if(key == 'id'){
          continue;
        }
        e[key] = data[key];
      }
      obj = e;
    }
  })
  return !!obj;
}


// ---------------------------------------------------------------------------------------   JS Advanced

/**
 清除字符串全部空白字符
 * @function
 * @memberof JS Advanced
 * @name stringTrimAll
 * @param  {String} string 
 * @returns {string} 字符串
 */
function stringTrimAll (string) {
  return string.replace(/\s/g, "");
}

/**
 反转字符串
 * @function
 * @memberof JS Advanced
 * @name stringReverse
 * @param  {String} string 
 * @returns {string} 反转字符串
 */
function stringReverse(string){
  return string.split("").reverse().join("");
}

/**
 生成指定范围[min, max]的随机数
 * @function
 * @memberof JS Advanced
 * @name getRandomNumer
 * @param  {Number} min 
 * @param  {Number} max 
 * @returns {Number} 
 */
function getRandomNumer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 随机生成颜色
 * @function
 * @memberof JS Advanced
 * @name getRandomColor
 * @returns {String} 
 */
function getRandomColor() {
  return "rgb(" + this.getRandomNumer(0, 255) + "," + this.getRandomNumer(0, 255) + "," + this.getRandomNumer(0, 255) + ")";
}

/**
 判断两个数组是否相等
 * @function
 * @memberof JS Advanced
 * @name arrayEqual
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Boolean} 
 */
function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/**
 数组浅克隆
 * @function
 * @memberof JS Advanced
 * @name arrayClone
 * @param  {Array} array
 * @returns {Array} 
 */
function arrayClone(array) {
  return array.slice(0);
}

/**
 数组去重
 * @function
 * @memberof JS Advanced
 * @name arrayUnique
 * @param  {Array} array
 * @returns {Array} 
 */
function arrayUnique(array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
      if (tempArray.indexOf(array[i]) == -1) {
          tempArray.push(array[i]);
      }
  }
  return tempArray;
}

/**
 基本对象克隆
 * @function
 * @memberof JS Advanced
 * @name objectClone
 * @param  {Object} object
 * @returns {Object} 
 */
function objectClone(object) {
  return JSON.parse(JSON.stringify(object));
}

/**
 获取url值
 * @function
 * @memberof JS Advanced
 * @name getUrlParam
 * @param  {string} name
 * @returns {string} 
 */
function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
      p = window.location.href.split("?")[1];
  if (p) {
      let r = p.match(reg);
      if (r) {
          return decodeURIComponent(r[2]);
      }
  }
  return null;
}

/**
 判断是否为手机号
 * @function
 * @memberof JS Advanced
 * @name isMobile
 * @param  {string} 
 * @returns {Boolean} 
 */
function isMobile(string) {
  return /^1[3-9]{10}$/.test(string);
}

/**
 判断是否为身份证号
 * @function
 * @memberof JS Advanced
 * @name isIdCard
 * @param  {string} 
 * @returns {Boolean} 
 */
function isIdCard(string) {
  return /^[1-9]\d{16}[\dXx]$/.test(string);
}

/**
 获取操作系统类型
 * @function
 * @memberof JS Advanced
 * @name getDevice
 * @returns {String} 
 */
function getDevice() {
  let ua = navigator.userAgent.toLowerCase();
  let isAndroid = ua.indexOf('android') > -1; //android终端
  let isiOS = ua.indexOf('iphone') > -1; //ios终端
  if (isAndroid) {
      return 'android';
  } else if (isiOS) {
      return 'iphone';
  } else {
      return 'others';
  }
}

/**
 获取日期时间 格式 "yyyy-mm-dd HH:MM:SS"
 * @function
 * @memberof JS Advanced
 * @name formatNowTime
 * @param  {Date} dateObj - 可选 指定时间
 * @returns {String} 
 */
 function formatNowTime(dateObj) {
  dateObj = dateObj || new Date();
  let year = dateObj.getFullYear(),
      month = dateObj.getMonth() + 1,
      date = dateObj.getDate(),
      hours = dateObj.getHours(),
      minutes = dateObj.getMinutes(),
      seconds = dateObj.getSeconds();
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}

/**
 格式化${startTime}距现在的已过时间
 * @function
 * @memberof JS Advanced
 * @name formatPassTime
 * @param  {Date} startTime - 开始时间
 * @returns {String} 
 */
 function formatPassTime(startTime) {
  let currentTime = new Date(),
      time = currentTime - startTime,
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  else return '刚刚'
}

/**
 格式化现在距${endTime}的剩余时间
 * @function
 * @memberof JS Advanced
 * @name formatRemainTime
 * @param  {Date} endTime - 结束时间
 * @returns {String} 
 */
 function formatRemainTime(endTime) {
  let startDate = new Date(); //开始时间
  let endDate = new Date(endTime); //结束时间
  let t = endDate.getTime() - startDate.getTime(); //时间差
  let d = 0,
      h = 0,
      m = 0,
      s = 0;
  if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor(t / 1000 / 60 / 60 % 24);
      m = Math.floor(t / 1000 / 60 % 60);
      s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 是否为闰年
 * @function
 * @memberof JS Advanced
 * @name isLeapYear
 * @param  {Number} 年份
 * @returns {Boolean} 
 */
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

// ------------------------------------------------------------------------------------------VUE
/**
 判断是否是对象
 * @function
 * @memberof Vue
 * @name isObject
 * @param  {Object} 需要判断的对象
 * @returns {Boolean}  true是对象，false不是对象
 */
function isObject(obj){
  return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 判断是否是对象，node核心模块实现了序列化 https://nodejs.org/dist/latest-v10.x/docs/api/querystring.html
 * @function
 * @memberof Vue
 * @name urlSerial
 * @param  {Object} params - 需要序列化的对象
 * @returns {String}  url参数
 */
function urlSerial(params = {}){
  const value = Object.entries(params);

  const newValue = value.map(v => {
      return v.join("=");
  })

  return newValue.join("&");
}

/**
 异步请求函数方法，参考axios
 * @function
 * @memberof Vue
 * @name request
 * @param  {Object} config - 请求的配置
 * @example
 * {
 * url: 请求地址
 * method: 请求方法默认get
 * data:   请求参数
 * }
 * @returns {Promise}  promise对象
 */
function request(config){
  if(!utils.isObject(config)){
      throw new Error("传入的参数不是一个对象");
  }

  let {baseURL, method} = arguments.callee.defaults;
  let {url, data, ...reset} = config;

  url = baseURL ? `${baseURL}${url}`: url;
  
  // 合并config
  config = {
      method,
      ...reset,
  }
  method = method.toLocaleUpperCase();
  
  // fetch的get请求和post请求参数不一样
  if(data){
      if(method === "GET"){
          url = url + "?" + utils.urlSerial(data);
      }

      if(method === "POST"){
          config.body = JSON.stringify(data);
      }
  }

  return fetch(url, config).then(res => {
      return res.json();
  }).then(res => {
      Promise.resolve(res);
  })
}

request.defaults = {
  baseURL: "",
  method: "GET"
}
 