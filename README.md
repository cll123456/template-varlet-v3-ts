
unocss 是什么，不清楚的可以看这边[ 重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh)，

# 整体的架构
1. vue3 + setup + ts， vw + rem等来搭建的移动端项目
2. tslint, prettier来控制代码的格式
3. simple-git-hook来控制代码提交的规范
4. deploy.sh 来实现自动部署
5. unocss 及其生态来实现css和icon图标的按需加载，不需要使用js就能引入图标
6. 记录滚动条位置，监听物理键返回，路由动画等都是hooks的形式存在

# 项目效果图
代码地址： [https://github.com/cll123456/template-varlet-v3-ts](https://github.com/cll123456/template-varlet-v3-ts)

演示环境： [https://cll123456.github.io/template-varlet-v3-ts](https://cll123456.github.io/template-varlet-v3-ts)

> 在断断续续的几天中，把项目实现了，做的效果还是让自己满意的。从开发体验来说是真的香，一直从js, css, icon图标等都遵从按需加载的原理。
## 外围效果

![total-pages.gif](https://img-blog.csdnimg.cn/img_convert/f3e3fbf948c22405c2b9eef91a2abedf.gif)

> 标配的移动端项目，移动端的适配也是做好了，vm + rem的形式来的。上中下的布局，黑暗模式等
## 第一个页面


![first-pages.gif](https://img-blog.csdnimg.cn/img_convert/24ea4ff185a73d5f11e0b55e73a22705.gif)
> 进入时候的动画是渐变，进入详情是右边切入动画，离开详情是左边切入的动画，看起来还挺好看的。🎈🎈🎈
## 第二个页面

![second-pages.gif](https://img-blog.csdnimg.cn/img_convert/b87b7de1aec89df5fdf1c599000c9456.gif)
> 第二个特点是实现移动端物理键的控制，换句话说是这里实现了监听物理按钮的返回来做一点你想要的事情。

## 第三个页面

![third-pages.gif](https://img-blog.csdnimg.cn/img_convert/24559109d3dd25cd7298f4e85276e385.gif)

> 由于varlet提供了无限滚动的组件，如果无限滚动的数据太多，那么dom数量达到一定的量级就会卡顿，所以我在此基础上加上了虚拟dom的形式来节约性能。注意看，每一个列表的高度可是不固定的哦！

## 第五个页面

![fifth-pages.gif](https://img-blog.csdnimg.cn/img_convert/4391ff754df71f2c96be9d14299445e5.gif)
> 在移动端上面，经常会有需要返回到滚动条指定的位置，也就是说记录滚动条的位置，这里也是实现了哦


# 🎈🎈彩蛋
想要这一系列文章吗？那就请督促我更新吧！😄😄😄让我看到大家的热情，请评论转发告诉我，最后能不能给个小星星呢😁
