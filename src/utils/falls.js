// 用ul 创建瀑布流

const FallsFn = {
  el:'',
  // element 传入 元素
  fallEl(element,srcArr) {
    FallsFn.el = document.getElementsByClassName(element)
    FallsFn.fallList(srcArr)
  },
  fallList(srcArr) {
    for(var i = 0; i < srcArr.length;i++) {
      var img = document.createElement('img')
      var p = document.createElement('p')
      var span = document.createElement('span')
      span.innerText = srcArr[i].title
      p.appendChild(span)
      img.src = srcArr[i].src
      img.style.width = 100 + '%'
      var li = document.createElement('li')
      li.classList.add('waterfall-list')
      li.appendChild(img)
      li.appendChild(p)

      li.style.width = 98 +'%'
      li.style.position = 'relative'
      li.style.float = 'left'
      li.style.padding = '0px 2px'
      li.style.overflow = 'hidden'

      p.style.position ='absolute'
      p.style.bottom ='6px'
      p.style.left ='2px'
      p.style.lineHeight ='36px'
      p.style.background ='rgba(255,255,255,0.4)'
      
      span.style.display = 'block'
      span.style.width = '180px'
      span.style.height = '36px'
      span.style.overflow = 'hidden'
      span.style.whiteSpace = 'nowrap'
      span.style.textOverflow = 'ellipsis'
      span.style.color = 'red'
      span.style.paddingLeft = '4px'

      var minHeight = FallsFn.el[0]
      for(var j = 0; j < FallsFn.el.length; j++) {
        if(minHeight.offsetHeight > FallsFn.el[j].offsetHeight) {
          minHeight = FallsFn.el[j]
        }
      }
        minHeight.appendChild(li)
    }
  }
}

export default FallsFn