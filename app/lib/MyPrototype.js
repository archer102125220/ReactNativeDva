/*

自定義的原形鏈，套用框架的情況下不可更動OBJ，否則會影響框架的運行

*/
String.prototype.LastSearch = function (reg) { //由左向右的正規表達式搜尋
  var i = 1;
  while (i < this.length - 1 && this.substring(this.length - i, this.length).search(reg) < 0) i++;
  return (this.substring(this.length - i, this.length).search(reg) === 0 ? this.length - i : -1);
};
String.prototype.CountSearch = function (reg) { //透過正規表達式去計算字串出現次數的搜尋
  var i = 0,
    count = 0,
    value = this;
  while (value.length > 0 && i < value.length) {
    var index = value.substring(i, value.length).search(reg);
    if (index > -1) {
      count++;
      value = value.substring(index, value.length);
    }
    i++;
  }
  return count;
};
Array.prototype.RemoveBykey = function (removeKey) {
  return this.filter((val, key) => key !== removeKey);
};
Array.prototype.RemoveByValue = function (removeValue) {
  return this.filter(val => val !== removeValue);
};
Array.prototype.ArrayComparison = function (searchArray) {
  return (this.length === 0 || searchArray.length === 0) ?
    this.length === searchArray.length
    :
    this.every(val =>
      searchArray.some(searchVal =>
        val === searchVal
      )
    );
};
Array.prototype.toFormatString = function (symbol = '\'') {
  const temp = this.toString();
  return symbol + temp.replace(/,/g, `${symbol},${symbol}`) + symbol;
};
Math.RoundDecimal = function (value, amount) { //使 Math.round() 可依照 amount 的數值做進位
  var carry = 10;
  for (var i = 1; i < amount; i++) carry *= 10;
  value = Math.round(value * carry);
  value = value / carry;
  return value;
};
Math.FloorDecimal = function (value, amount) {//使 Math.floor() 可依照 amount 的數值做進位
  var carry = 10;
  for (var i = 1; i < amount; i++) carry *= 10;
  value = Math.floor(value * carry);
  value = value / carry;
  return value;
};
Math.CeilDecimal = function (value, amount) {//使 Math.ceil() 可依照 amount 的數值做進位
  var carry = 10;
  for (var i = 1; i < amount; i++) carry *= 10;
  value = Math.ceil(value * carry);
  value = value / carry;
  return value;
};
Object.FilterByValue = function (obj, search) {//Object的 Array.filter() ，由於寫在prototype會造成react執行錯誤，故需以 Object.filter(物件,比對值) 呼叫
  let retArr = [];
  for (var key in obj) {
    if (obj[key] === search) retArr.push(obj[key]);
  }
  return retArr;
};
Object.FilterByName = function (obj, search) {//Object的 Array.filter() ，由於寫在prototype會造成react執行錯誤，故需以 Object.filter(物件,比對值) 呼叫
  let retArr = [];
  for (var key in obj) {
    if (obj[key] === search) retArr.push(key);
  }
  return retArr;
};

// Object.KeyReplace = function (obj, rep = [[]]) {
//     let retObjStr = '{', objKeys = Object.keys(obj), objValues = Object.values(obj);
//     objKeys.forEach((val, key) => {
//         rep.forEach((repVal, repKey) => {
//             if (val === repVal[0]) {
//                 objKeys[key] = repVal[1];
//             }
//         });
//     });
//     retObjStr += '}';

//     return retObjStr;
// }
// export function HTMLObjToReactObj(HTMLObj, ReactObj = {}) {
//     let styleToObj = {};
//     HTMLObj.style.cssText
//         .split(';')
//         .map(item => item.split(':'))
//         .filter(item => Array.isArray(item) && item[0] !== '')
//         .forEach(item => styleToObj[item[0]] = item[1])
//     return (
//         <div id={HTMLObj.id} className={HTMLObj.classList} name={HTMLObj.name} style={styleToObj}>
//             {HTMLObj.innerHTML}
//         </div>
//     );
// }

export function FormatChange(jsonObj, returnFormat = '', recursively = false) {
  let retObj;
  if (Array.isArray(jsonObj)) {
    retObj = [];
    jsonObj.forEach((val, /*key*/) => {
      let format = returnFormat;
      for (const valKey in val) {
        if (Array.isArray(val[valKey])) {
          format = format.replace(valKey + '_value', val[valKey].toFormatString('"'));
        } else if (typeof val[valKey] === 'object') {
          format = FormatChange(val[valKey], format, true);
        } else {
          format = format.replace(valKey + '_value', val[valKey]);
        }
      }
      if (!recursively) {
        retObj.push(JSON.parse(format));
      } else {
        return format;
      }
    });
  } else {
    retObj = {};
    let format = returnFormat;
    for (const key in jsonObj) {
      if (Array.isArray(jsonObj[key])) {
        format = format.replace(key + '_value', jsonObj[key].toFormatString('"'));
      } else if (typeof jsonObj[key] === 'object') {
        format = FormatChange(jsonObj[key], format, true);
      } else {
        format = format.replace(key + '_value', jsonObj[key]);
      }
    }
    if (!recursively) {
      retObj = JSON.parse(format);
    } else {
      return format;
    }
  }

  // if (!recursively) retObj = Arrange(retObj);
  if (recursively) {
    return returnFormat;
  } else {
    return retObj;
  }
}

// export function Arrange(obj, comparison = []) {
//     if (Array.isArray(obj)) {
//         obj.forEach((val, key) => {
//             for (const valKey in val) {
//                 if (Array.isArray(val[valKey])) {
//                     // val[valKey] = Arrange(val[valKey], comparison);
//                 }else{

//                 }
//             }
//         });
//     } else {
//         for (const key in obj) {

//         }
//     }
//     return obj;
// }

// const data = {
//     type: 'product_type',
//     items: [
//         {
//             name: 'product_name',
//             items: [
//                 {
//                     ingredient: 'product_ingredient',//class
//                     taste: ['product_tastes'],
//                     specification: ['product_specification'],
//                     sauce: ['product_sauce'],
//                 }, {
//                     ingredient: 'product_ingredient',//class
//                     specification: ['product_specification'],
//                     sauce: ['product_sauce'],
//                 }
//             ],
//         },
//     ]
// };