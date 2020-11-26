/* eslint-disable no-new,camelcase */
// @ts-ignore
import Vue from "vue"
import * as utils from "../utils"

function VueTouch (el:any, binding:any, type:any, preventDefault:any) {
  // @ts-ignore
  let that:any = this
  that.obj = el
  that.binding = binding
  that.touchType = type
  that.vueTouches = {x: 0, y: 0}
  that.vueMoves = true
  that.vueLeave = true
  that.longTouch = true
  that.vueCallBack = typeof (binding.value) === "object" ? binding.value.fn : binding.value
  that.obj.addEventListener("touchstart", function (e:any) {
    that.start(e)
    if (preventDefault) {
  //    e.preventDefault();
    }
  }, false)
  that.obj.addEventListener("touchend", function (e:any) {
    that.end(e)
  }, false)
  that.obj.addEventListener("touchmove", function (e:any) {
    that.move(e)
  }, false)
}
VueTouch.prototype = {
  start: function (e:any) {
    this.vueMoves = true
    this.vueLeave = true
    this.longTouch = true
    this.vueTouches = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY}
    let that = this
    this.time = setTimeout(function () {
      if (that.vueLeave && that.vueMoves) {
        that.touchType === "longtap" && that.vueCallBack(that.binding.value, e)
        that.longTouch = false
      }
    }.bind(this), 1000)
  },
  end: function (e:any) {
    var disX = e.changedTouches[0].pageX - this.vueTouches.x
    var disY = e.changedTouches[0].pageY - this.vueTouches.y
    clearTimeout(this.time)
    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
      this.touchType === "swipe" && this.vueCallBack(this.binding.value, e)
      if (Math.abs(disX) > Math.abs(disY)) {
        if (disX > 10) {
          this.touchType === "swiperight" && this.vueCallBack(this.binding.value, e)
        }
        if (disX < -10) {
          this.touchType === "swipeleft" && this.vueCallBack(this.binding.value, e)
        }
      } else {
        if (disY > 10) {
          this.touchType === "swipedown" && this.vueCallBack(this.binding.value, e)
        }
        if (disY < -10) {
          this.touchType === "swipeup" && this.vueCallBack(this.binding.value, e)
        }
      }
    } else {
      if (this.longTouch && this.vueMoves) {
        this.touchType === "tap" && this.vueCallBack(this.binding.value, e)
        this.vueLeave = false
      }
    }
  },
  move: function (e:any) {
    this.vueMoves = false
  }
}
// 自定义指令--单击
Vue.directive("tap", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "tap", false)
  }
})
// 自定义指令--单击
Vue.directive("swipe", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "swipe", false)
  }
})
// 自定义指令--单击
Vue.directive("swipeleft", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "swipeleft", true)
  }
})
// 自定义指令--单击
Vue.directive("swiperight", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "swiperight", true)
  }
})
// 自定义指令--单击
Vue.directive("swipedown", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "swipedown", false)
  }
})
// 自定义指令--单击
Vue.directive("swipeup", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "swipeup", false)
  }
})
// 自定义指令--单击
Vue.directive("longtap", {
  bind: function (el, binding) {
    // @ts-ignore
    new VueTouch(el, binding, "longtap", true)
  }
})
// 自定义指令--设置选中事件
Vue.directive("focus", {
  inserted: function (el) {
    el.focus()
  }
})
// 自定义指令--标题
Vue.directive("documentTitle", {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})
// 自定义指令--重复请求
Vue.directive('preventReClick', {
  inserted: function (el, binding) {
    el.addEventListener('click', () => {
      if (!(el as any).disabled) {
        (el as any).disabled = true
        setTimeout(() => {
          (el as any).disabled = false
        }, binding.value || 3000)
      }
    })
  }
});
// 拖动
Vue.directive("drag",
  {bind: function (el, binding) {
    el.onmousedown = function (e) {
      var $obj = utils.$(el)
      let left_min = 0
      let left_max = $obj.parent().width()
      let top_min = 0
      let top_max = $obj.parent().height()
      if (utils.isNotNull(binding.value)) {
        if (utils.isNotNull(binding.value.left_min)) {
          left_min = binding.value.left_min
        }
        if (utils.isNotNull(binding.value.left_max)) {
          left_max = binding.value.left_max
        }
        if (utils.isNotNull(binding.value.top_min)) {
          top_min = binding.value.top_min
        }
        if (utils.isNotNull(binding.value.top_max)) {
          top_max = binding.value.top_max
        }
      }
      let disX = e.clientX - el.offsetLeft
      let disY = e.clientY - el.offsetTop
      document.onmousemove = function (e) {
        let left = e.clientX - disX
        let top = e.clientY - disY
        if (left < left_min) {
          left = left_min
        }
        if (left > left_max) {
          left = left_max
        }
        if (top < top_min) {
          top = top_min
        }
        if (top > top_max) {
          top = top_max
        }
        el.style.left = left + "px"
        el.style.top = top + "px"
        binding.value.drag.left = left
        binding.value.drag.top = top
        if (utils.isNotNull(binding.value.save)) {
          binding.value.save({left, top})
        }
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
  }
)

