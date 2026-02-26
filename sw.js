/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2015/09/22/js-version/javascript-java.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","d41d8cd98f00b204e9800998ecf8427e"],["/2015/09/22/js-version/post-bg-js-version.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/bangong.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/dalou.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/kaifa.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/louti.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/nan.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/shitang.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/yejing.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/07/28/Hello-Hexo/zonbu.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/08/08/A-intresting-js/1.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/08/08/A-intresting-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/09/02/The-inherit-in-javascript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/09/20/令人伤心的博客碎片/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/14/爬虫的意义在哪里？/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/Docker学习笔记/container-layers.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/Docker学习笔记/image-layers.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/Docker学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/28/SegmentFault开发文档笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/29/Twig模板引擎学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/11/30/compositionstart事件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/10/SFDC笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/13/深入浅出node-js-笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/17/LeetCode-274-H-index/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","d41d8cd98f00b204e9800998ecf8427e"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/03/Google-Android-System-learning/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d41d8cd98f00b204e9800998ecf8427e"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/09/08/编写Webpack插件笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/11/30/Mobx学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/11/30/Test-travis-ci/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/12/01/Use-flow-type-in-React-project/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/31/SDT自我决定理论/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/04/React16源码解析-As-required-order/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/05/React16源码解析（Fiber）/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/27/释放webpack的真正潜力/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","d41d8cd98f00b204e9800998ecf8427e"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/17/升级到Babel-7的经验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/16/React-tip组件的设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/12/08/jenkins问题定位/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/12/21/React-SSR实践-压测/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/21/item2-profile-config/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/22/i18n-about-Access-Language/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/27/Node-C-addon-学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/05/16/Modern-Crusaders/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/08/28/关于docker使用的一些记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/08/30/全干工程师的基本素养/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/12/02/One-example-of-Typescript-generics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/12/04/有趣的上网冲浪之旅/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/04/17/企业微信国际化方案总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/04/27/come-on-sweet-death/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/05/28/525-Contiguous-Array/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/07/21/Node-js-与-epoll/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/02/总结一些测试vue组件的经验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/15/Purpose/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/03/16/和安全团队的斗智斗勇/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2022/08/10/关于图片处理的一些事情/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/11/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/12/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2016/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/01/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2017/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2019/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2022/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/bootstrap.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/bootstrap.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/hux-blog.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/hux-blog.min.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/syntax.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/glyphicons-halflings-regular.eot","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/glyphicons-halflings-regular.svg","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/glyphicons-halflings-regular.ttf","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/glyphicons-halflings-regular.woff","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/glyphicons-halflings-regular.woff2","d41d8cd98f00b204e9800998ecf8427e"],["/img/404-bg.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/about-bg.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/contact-bg.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/home-bg-o.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/home-bg.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-144x144.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-192x192.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-36x36.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-48x48.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-72x72.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/android-icon-96x96.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-114x114.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-120x120.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-144x144.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-152x152.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-180x180.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-57x57.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-60x60.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-72x72.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-76x76.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon-precomposed.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/apple-icon.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/favicon-16x16.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/favicon-32x32.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/favicon-96x96.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-128x128.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-144x144.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-152x152.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-192x192.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-384x384.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-512x512.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-72x72.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/icon-96x96.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/ms-icon-144x144.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/ms-icon-150x150.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/ms-icon-310x310.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/icon/ms-icon-70x70.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/tag-bg.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/bootstrap.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/bootstrap.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/hux-blog.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/hux-blog.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/jquery.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/jquery.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/jquery.nav.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/jquery.tagcloud.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/motto.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scrollreveal.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/leetcode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","18f328d86bffa15fc7b9c4e62d65380d"],["/tags/Android/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Angular2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Babel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/CSS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Coffeescript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Compiler/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Component/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Design-Pattern/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ES6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Game/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Gulp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Hybird/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/JIT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Javascirpt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Javascript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Jest/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/LeetCode/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Leetcode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Lyrics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Mobx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Mocha/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Module/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Node-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Note/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Object-C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Objective-C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/PHP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Python/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Python/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Python/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/React-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/React/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Redux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Require-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SSR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SegmentFault/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Swift/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Template-Engine/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Test/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Twig/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Typescript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/V8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/WebAPI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Webpack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Webview/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Windows/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/babel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/base64/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/bootstrap/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ci/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/codepen/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/compact/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/css/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/database/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/event/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/facebook/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/flask/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/flow/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/i18n/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/iOS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/iOS/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/javascirpt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/jest/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/jquery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/life/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/lyrics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/pwn/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/python/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/reactive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/shell/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ssh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/svg/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/translate/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/translation/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/typescript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/underscore/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/video-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/webpack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/web安全/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/函数式编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/各种开发者大会/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/文档/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/构建工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/读书笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/逆向/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/随笔/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/－-Test-Karma/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/－-杂谈/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/－生活/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
