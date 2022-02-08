# 赋诗斋-先行版
## 说明
此版本为**赋诗斋**先行版本，主要对后续正式版本中用到的个别`React-Native`关键技术点进行探索，并不代表赋诗斋的核心理念。
赋诗斋是孟郎诗词创作模块的衍生作品，如对其他部分感兴趣，欢迎访问孟郎诗词网官网：[http://www.menglangpoem.cn/](http://www.menglangpoem.cn/)
## 问题总结：
- 使用`antd-rn`时启动会报错缺东西，不但按照提示添加对应的包即可
- `antd`的`Toast`不显示是因为需要在外面包一层`Provider`(从antd导入)标签，仔细看官网示例代码
- `react-native-view-shot`中对横向的`ScrollView`截屏时，需要将截屏目标指定为`ScrollView`的唯一子标签(用一个`View`包裹)，否则会截屏不全
```html
<ScrollView horizontal={true}>
    <!-- 包裹其子标签，而不是ScrollView -->
    <ViewShot ref={shot}>
        <View style={styles.overTest} >
            
            <View><Text style={styles.overText}>一岁一枯荣开始</Text></View>
            <View><Text style={styles.overText}>一岁一枯荣</Text></View>
            ...
        </View>
    </ViewShot>
    
</ScrollView> 
```
- Android 10以上的文件操作权限问题(申请了且通过了但是依旧无法存储文件)
[https://blog.csdn.net/xiaodongvtion/article/details/110951754](https://blog.csdn.net/xiaodongvtion/article/details/110951754)

> 需要在`AndroidManifest.xml`文件的application 标签下 加一条属性 `android:requestLegacyExternalStorage="true"`就可以解决了。

- Android 9.0 以上系统默认不允许使用http请求，只能使用https请求，解决方案：
[https://cloud.tencent.com/developer/article/1414675](https://cloud.tencent.com/developer/article/1414675)
[https://blog.csdn.net/qq_35761934/article/details/108293920](https://blog.csdn.net/qq_35761934/article/details/108293920)

> 推荐使用直接修改`AndroidManifest.xml`的`application`的方法

- 安卓底部导航被软键盘顶上去的解决方案
[https://www.jianshu.com/p/1161ac2a71ef](https://www.jianshu.com/p/1161ac2a71ef)

> 修改`android:windowSoftInputMode`即可

- 安卓修改App名称
[https://blog.csdn.net/y505772146/article/details/79245296](https://blog.csdn.net/y505772146/article/details/79245296)

- 一键生成各种尺寸的图标工具(图标工厂)
[https://icon.wuruihong.com/](https://icon.wuruihong.com/)

- 生成圆角图片
[https://www.butterpig.top/radius](https://www.butterpig.top/radius)

- 修改图标：
[https://blog.csdn.net/weixin_41534645/article/details/81119474](https://blog.csdn.net/weixin_41534645/article/details/81119474)

> 现在每一个尺寸的图标默认都需要提供两个，一个普通，一个圆角，如果没有圆角启动会报错(图标工厂默认只生成一个)，如果不需要圆角则修改`AndroidManifest.xml`，删除`android:roundIcon="@mipmap/ic_launcher_round"`即可

- 启动图：做一张就行，Android会自动进行适配，`show()`方法的第二个参数代表是否全屏(隐藏状态栏)