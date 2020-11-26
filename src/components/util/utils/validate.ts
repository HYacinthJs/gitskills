// @ts-ignore
import AsyncValidator from 'async-validator'
import * as utils from "@/components/util/utils";
/**
 * 数据校验
 * @param obj
 */
export function validator (obj:{ callback: any,system_id:string}) {
  let callback=obj.callback
  let system_id=obj.system_id
  let edit = utils.getPage().getComponents({system_id:system_id})
  let data =edit.getEditValue()
  let rules = edit.getRulesValue()
  validatorBase({ callback: callback,system_id:system_id,data:data,rules:rules})
}
/**
 * 数据校验--子方法
 * @param obj
 */
function validatorBase (obj:{ callback: any,system_id:string,data:{},rules:{}}) {
  let callback=obj.callback
  let system_id=obj.system_id
  let data = obj.data
  let rules = obj.rules

  //判断是否有校验没有校验直接执行回调
  let noV = true;
  for(let key in rules){
    if(utils.isNotNull(rules[key])){
      noV=false;
    }
  }
  if(noV){
    callback();
    return
  }
  //进行校验
  function validateData() {
    let validateRuler = new Promise(function (resolve, reject) {
      let validator = new AsyncValidator(rules)
      validator.validate(data,(errors:any, fields:any) => {
        resolve(errors)
      })
    })
    return validateRuler
  }
  validateData().then(function (errors) {
    let edit = utils.getPage().getComponents({system_id:system_id})
    if(utils.isNull(errors)){
      callback()
      return
    }
    edit.setValidateString(errors)
  })
}

/**
 * 自定义校验---必须上传文件
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_required_upload (rule:any, value:any, callback:any,vm:any)  {
  let list = JSON.parse(value)
  if(utils.isNull(list)){
    callback(new Error('请上传'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---必须输入
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_required (rule:any, value:any, callback:any,vm:any)  {
  console.log(rule.message2)
  if(utils.isNull(value) && utils.getStore().language == "en2"){
    callback(new Error(rule.message2));
  } else if(utils.isNull(value)){
    callback(new Error('请输入'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---多选框必须选择(或其他list类型数据)
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_required_array (rule:any, value:any, callback:any,vm:any)  {
  let list = JSON.parse(value)
  if(utils.isNull(list)){
    callback(new Error('请输入'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---整数
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_integer (rule:any, value:any, callback:any,vm:any)  {
  var reg= /^-?\d+$/
  if(!reg.test(value)) {
    callback(new Error('请输入整数'));
  }else{
    callback();
  }
}

/**
 * 自定义校验---正整数
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_number (rule:any, value:any, callback:any,vm:any)  {
  var reg= /^\d+$/
  if(!reg.test(value)) {
    callback(new Error('请输入数字'));
  }else{
    callback();
  }
}
/**
 * 自定义校验---数字
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_float_unsigned (rule:any, value:any, callback:any,vm:any)  {
  var reg=  /^(\d+)(\.\d+)?$/
  if(!reg.test(value)) {
    callback(new Error('请输入数字'));
  }else{
    callback();
  }
}
/**
 * 自定义校验---数字
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function my_float (rule:any, value:any, callback:any,vm:any)  {
  var reg=  /^(-?\d+)(\.\d+)?$/
  if(!reg.test(value)) {
    callback(new Error('请输入数字'));
  }else{
    callback();
  }
}

/**
 * 自定义校验---密码
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function validatePass (rule:any, value:any, callback:any,vm:any) {
  if (!utils.isNotNull(value)) {
    callback(new Error('请输入密码'));
  } else if (value != vm.ui_password2 ) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---确认密码
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function validatePass2 (rule:any, value:any, callback:any,vm:any)  {
  if (!utils.isNotNull(value)) {
    callback(new Error('请输入确认密码'));
  } else if (value != vm.ui_password ) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---密码有强度验证
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function validateComplexPass (rule:any, value:any, callback:any,vm:any) {
  if (!utils.isNotNull(value)) {
    callback(new Error('请输入密码'));
  } else if (value != vm.ui_password2 ) {
    callback(new Error('两次输入密码不一致!'));
  } else if (checkPassWord(value)<2||value.length<8) {
    callback(new Error('密码强度低'));
  } else {
    callback();
  }
}
/**
 * 自定义校验---确认密码有强度验证
 * @param rule
 * @param value
 * @param callback
 * @param vm
 */
export function validateComplexPass2 (rule:any, value:any, callback:any,vm:any)  {
  if (!utils.isNotNull(value)) {
    callback(new Error('请输入确认密码'));
  } else if (value != vm.ui_password ) {
    callback(new Error('两次输入密码不一致!'));
  } else if (checkPassWord(value)<2||value.length<8) {
    callback(new Error('密码强度低'));
  } else {
    callback();
  }
}
/**
 * 校验密码强度
 * @param value
 */
function checkPassWord(value:any){
  // 0： 表示第一个级别 1：表示第二个级别 2：表示第三个级别
  // 3： 表示第四个级别 4：表示第五个级别
  var modes = 0;
  if(value.length < 6){//最初级别
    return modes;
  }
  if(/\d/.test(value)){//如果用户输入的密码 包含了数字
    modes++;
  }
  if(/[a-z]/.test(value)){//如果用户输入的密码 包含了小写的a到z
    modes++;
  }
  if(/[A-Z]/.test(value)){//如果用户输入的密码 包含了大写的A到Z
    modes++;
  }
  if(/\W/.test(value)){//如果是非数字 字母 下划线
    modes++;
  }
  switch(modes){
    case 1 :
      return 1;
    case 2 :
      return 2;
    case 3 :
      return 3;
    case 4 :
      return 4;
  }
  return 0;
}