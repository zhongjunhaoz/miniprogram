- wxml 是模板， {{}} => 是要被编译的
看到的view不是wxml,是wxml被js,data填充编译后的页面 看到的是page 不是 wxml 是wxml + js +wxss合体

- setData({
    相应数据时
}) 触发重新compile


- 我们会在wxml里 把所以的逻辑及对数据的渴求都表达出来，在某一刻页面只会显示当前状态的页面状态 跟数据相关
    状态 由数据决定 改变数组 setData 界面自动变，数据驱动的界面 MVVM 
    数据要和界面状态一一对应


- todos
    健身 
    表单
    js dom 加 todos [] appendChild
    data:{
        todos: []
    }
    form submit this.setData()

- {{js 运行区域 任何js都可以}}
- 如何把输入的数据添加到数组中 
# backgroung-size="cover"
让图片和他的尺寸契合

