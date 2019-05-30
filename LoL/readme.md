- 小程序开发工具，初始化了一个项目框架
    小程序是架构在微信（原生APP），使用前端技术和思想，来快速开发，一份代码，到处运行。

    不用下载 不用写两次 快速高效
- 
html =>wxml   weixin wxml? xml 为了它的性能优化以及新功能，有些新的标签 view = div
css => wxss
javascript=> javascript
bindtap => onclick
page = wxml + css + js

小程序就是一个个page组成，每个page又由着三个部分组成
app.json是项目描述文件 添加的Page要在app.json里声明


wx.navigateTo({
    url:'../lengends/legends'
})  相当于 网页的 <a href="">


- MVVM
只要你有了数据，Model 
    page({
        data:{

        }
    })

    view 视图层 WXML等待数据编译输出的html模板 {{}}
    指令，wx:for