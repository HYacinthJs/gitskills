/**
 * JSON.stringify
 * @param json
 * @constructor
 */
export function JSONstringify (json:any) {
  let cache = [];
  let jsonString =JSON.stringify(json, function(key, val) {
    if (typeof val === 'function') {
      return val + "" ;
    }
    if (typeof val == 'object') {
      return ""
    /*  if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);*/
    }
    return val;
  },4);
  return jsonString
}
/**
 * JSON.parse
 * @param json
 * @constructor
 */
export function JSONparse (json:any) {
  let jsonObj = JSON.parse(json);
/*
  let jsonObj = JSON.parse(json,function(k,v){
    if(v.indexOf&&v.indexOf('function')>-1){
      return eval("(function(){return "+v+" })()")
    }
    return v;
  });
*/
  return jsonObj
}
