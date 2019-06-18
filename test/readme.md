- {{}}
{{xx}}  小程序中，两个大括号括起来的内容可以看做变量，比如我在wxml文件中定义<text>{{zjh}}</text>,接着在js文件里面的data{}数组里面写数据，
zjh:"钟俊浩大帅比" ，那么在页面中会直接显示出"钟俊浩大帅比"

- 模块化
    就是当很多页面要用到相同的样式风格时，比如头部 尾部 ，我们可以先写出一个标准的样式，放到一个文件下，接着在把它引入进来即可。
1. 第一种方法(include)：比如 <view > 我来组成头部 </view> ，这是要用到的模板，然后再在其他页面引入：<include src="../moban/header" />。 include 相当于把源代码复制到其中来。

2. 第二种方法(import)，在一个文件中写入样式，
<template  name="foot1">
  这是尾部
</template>

<template  name="foot2">
  这是尾部2
</template>


接着在要引入的位置：
<import src="../moban/footer" /> //表示引入文件的位置
在然后：
<template is="foot1" />
<template is="foot2" />


#事件
    事件的分类： -点击事件 tap
                - 长按事件 longtap
                - 触摸事件 touchstart touchend touchmove  touchcancle(即触摸事件被打断，比如来电话时)
                - 其他 submit input ....


    此外，还有事件的冒泡和非冒泡：
                冒泡事件：点击事件，长按事件，触摸事件
                非冒泡事件：除了上面三种事件以外都是

    冒泡事件指，比如  view1>view2>view3 三个盒子包裹，分别嵌入点击事件，当我点击了最里层的view3时，view1 view2的事件也被触发了。


#事件的绑定

1. bind绑定  事件绑定不会阻止冒泡事件向上冒泡
2. catch绑定  事件绑定可以阻止冒泡事件向上冒泡，冒泡无效。



