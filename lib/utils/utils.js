/** @namespace JS基础 */
/** @namespace WebAPI */
/** @namespace JS高级 */
/** @namespace VUE */


/** 
 求指定范围随机整数的方法
 * @function
 * @memberof JS基础
 * @name randomInt 
 * @param {number} min - 随机区间的最小值
 * @param {number} max - 随机区间的最大值
 * @returns {number} 随机整数
 * */
function randomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 获取随机rgb颜色的方法
 * @function
 * @memberof JS基础 
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
 * @memberof JS基础 
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
 * @memberof JS基础 
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