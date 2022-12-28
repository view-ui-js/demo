---
title: View UI
---

# View UI

轻量级的跨端、响应式微应用开发平台，通过在所有终端设备中统一使用移动端的交互逻辑，实现多端一致的设计、开发和使用体验。

以目前主流的传统竖屏手机作为适配基础，通过窗口层叠、平铺、伸缩等排版方式，实现对折叠屏、Pad、PC、头显等多种终端设备的广泛适配；

> 该项目处于早期实验、探索阶段，部分功能尚未稳定和完善，仅用作预览，暂不开放源码。

## 特性

- 支持多应用分屏显示，通过在窗口中建立虚拟分区，同时显示多个应用，可充分发挥宽屏的显示优势；

- 宽屏模式下，应用窗口支持弹性伸缩和手势切换，最大化利用宽屏中的空闲可视区域；

- 支持逻辑分层显示，应用可以在主应用层（固定全屏）、子应用层（浮动、弹性分屏）和遮罩层之间自由挂载；

- 使用可继承的动态应用注册表，继承可实现配置项复用，动态注册表可避免每次修改配置后都需要重新编译；

- 支持直接访问未注册的应用，无需预设路由，即可通过文件路径动态加载应用；

- 支持同构或异构加载模式，可针对不同的终端环境，灵活使用差异化渲染；

- 支持鼠标手势操作，保持多终端一致的用户操作体验，避免产生不必要的学习和适应成本；

- 支持跨 IFrame 手势操作，保持整体交互行为的一致性（跨域无效）；

- 基于事件的跨应用数据总线，实现多应用间的数据流转，降低系统耦合度（主要针对独立打包的应用）；

- 可搭配常规布局的应用或网站使用，在不破坏原项目主体布局的基础上，扩展新的交互界面。

- 支持 React、Solid 等框架开发子应用（仅提供用于自定义挂载的 DOM 节点）；

- 基于 Vite 构建，主应用使用 Vue 3 开发，子应用默认为 Vue 组件；

- 支持页面局部响应式布局，作为 CSS @container 特性广泛兼容前的过渡方案；

- 平台整体由应用基座、微应用和公共依赖三部分构成，三者均可独立构建和发布；

- 不同子应用之间公共组件、路由相互隔离，每个子应用均拥有独立的 Router、Navigator 实例；

- 内置简单、轻量级的子应用隔离方案， 支持 ES Component、Shadow DOM、IFrame 三种方案可选；

- 集成 PWA 离线缓存，可安装至桌面；

## 预览

<p><img src="./screenshot/2022-12-28 21-34-58.png" alt="Screenshot" width="100%"></p>

<p><img src="./screenshot/2022-12-28 21-53-43.png" alt="Screenshot" width="100%"></p>

## 传统的多端响应式布局存在什么问题？

在基于 CSS @media screen 的传统多端响应式布局中，通常会选择将 PC 或移动端中的一个作为主要适配目标，其它次要终端往往会选择折中处理，技术上很难做到真正的多端兼顾。

虽然传统响应式布局也能实现高度差异化的交互效果，但是这往往也伴随着代码的强耦合，以及大量的冗余代码，出现多端代码互相纠缠不清的局面，随着系统差异化和复杂度的持续增加，最终会产生难以维护的代码。

在实际应用案例中，传统响应式布局主要还是应用于一些相对简单的跨平台差异化布局和交互场景中，面对复杂场景时依然存在明显的局限性。

## View UI 如何解决多端适配的问题？

目前一套代码适配多端，主要面临的问题是如何实现对各种不同屏幕尺寸的差异化兼容，View UI 尝试解决以上问题的思路是为多端环境制定具有统一标准的通用虚拟窗口（使用具有相同最小尺寸和交互逻辑的虚拟屏），不用或少用差异化代码，来保持应用行为的整体一致性和可靠性，在简少应用层代码量的同时也降低了系统复杂度。

其次，是要统一不同输入设备间存在的交互行为差异。一致的屏幕尺寸需要匹配一致的输入行为，才能产生跨端一致的使用体验，View UI 提供 Pointer 模块作为统一的输入事件代理层，用于抹平鼠标、触屏等不同类型指针设备的行为差异。

该项目虽然是基于 WEB 平台开发，但是多端适配的思路并不局限于 WEB 环境，因此，对于其它应用平台的开发者也同样适用。

## 公共依赖库

> 所有 api 均以 npm 模块的方式导入，可按需扩展。

### vue

vue 的原始 npm 模块

### components

公共基础组件资源库

### helper

公共工具函数

### network

网络服务，基于 axios 封装

### state

全局响应式状态管理

### navigator

全局导航相关属性、方法

## 路由

View UI 使用定制的轻量级、扁平化、动态路由方案（由于 Vue 官方路由与该项目中的诸多应用场景和需求不匹配，因此定制路由是更合理的选择）。

### 动态参数处理
