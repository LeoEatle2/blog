/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","d722c0866aa7ce27d11feb09b645e938"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","8a80af0205fed00a7f4ceb021d5fc031"],["/2016/09/02/The-inherit-in-javascript/index.html","d18219d082c1152c85c742959d4ba460"],["/2016/09/20/令人伤心的博客碎片/index.html","1b7851ad95841026c341bdbdfd26d6ea"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","3af6844f3940a68f8ade499f6cabfa3d"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","c5fece237f257f1291f3af6998d4e8e5"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","6fb5165f8cb79f626ad31664a5d5503d"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","0304a57bf992bcc6dc703410acb12f1f"],["/2016/11/14/爬虫的意义在哪里？/index.html","cf8d598e0dda865ee7eff59265123ed0"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","cb0198c3700a06efd0e200646e8eb20f"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","b2a950127370883f67aba1cd284546d9"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","0be3a5f9dcac3a287c225b2591d80d81"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","d37063ef0a03cc55844c8532e243d835"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","2af3d086af48f99a5c4641991f34a117"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","c08b9ce2272256ef6c24f0f02217a4ef"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","8884d43c24c992897e11d19e02464e11"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","5eba106901f04b75ea36ff792bed9908"],["/2016/11/28/SegmentFault开发文档笔记/index.html","8431673fa9c37ffba38cd296d68c5a19"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","f03cd5499fedc7006ce83b7846653315"],["/2016/11/29/Twig模板引擎学习笔记/index.html","16288f11d11fc0de0f7fe8ec8d8696a4"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","89ad95ffcc41a644e3eab0eed763e499"],["/2016/11/30/compositionstart事件/index.html","77b782fb0b0d7d4fadbc3646e237bc24"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","5818d6f414fc96300ed38ce3d349cf06"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","3487201846739c9b7223950ae992a0b2"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","184ea90c053e699f8306f5e2102eee1f"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","4457fc91ff3fd08dbd220f58aaba3a7b"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","4c43ffca3046affda30927429baa1441"],["/2016/12/10/SFDC笔记/index.html","5658ea90413f20f96441668cdf179ec9"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","56be37f3e0b57c62605837578f4a47a3"],["/2016/12/13/深入浅出node-js-笔记/index.html","63ef79e7678c35aeca2230f80d230083"],["/2016/12/17/LeetCode-274-H-index/index.html","f56034b1ad643d39cd1d964080de92f5"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","e831c4284174306b9630195811cc820b"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","8b221268bafaeeeef4fe2cb6770bd93c"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","c4a61b32995547f74c384b9d0c39f345"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","990fb1d03c23b3bd2d2158da62050bab"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","e469cefe3308b92548f6fed00b8eaa7b"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","ae5e60aa99d0b5c26146977030d2a301"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","f71ecd1f511868c082faf8c6bb82b24b"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","5673e5a02d5981b75a452cd3a917ffa8"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","0885a8b06e7b199fd0e8d16c8aa57c62"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","e5b7fb613582921711348e1635d98ce6"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","02916f0f1e2c7f5f894f22a39ce5b872"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","27045747ce19a670b900b1a4d67ced23"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","6ec630de5a4b2da665445f80c080a6e9"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","6a6879200ca572047943d13bb2f15f86"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","84248b681d7690c04c7e010bbf7b666b"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","e3cf397c2cced3f41476a39a329d3314"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","5748c7f9b11939740f949ecd0457e9f0"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","e07027d72f990d31da60b173d301bc87"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","9aee880c721f9cd86b0dd12c56408386"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","837a1231fb5e9b75511c78a6507c8449"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","6c77d1752ffd9deef17c134b66bbb8e0"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","a8f33292c30746b5cc8a24a27bd9039b"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","3bd6a6bb45b34987e7f4cb3da7bb7dd9"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","d9c38a0dbc8e0e9c38e7d39bd5565e9c"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","a3c1ebb0fdabd847ec524678fe7165a5"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","20966cad17f99bc106664f3f20145190"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","f710f671de69a3c5bf6d64d2e3135bc3"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","668b992bd21171a839ca2fc866783fd1"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","0d96356165fc46cb7b6cda47f461736f"],["/2017/03/03/Google-Android-System-learning/index.html","3ea957ba54308856b5ffd0ce4d7c4e79"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","4275a207156fe6ef730ccdea526dee34"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","fb42a8edb3995c4d729862c338aa69c4"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","24048c2b2687e7260a7468842448bfc9"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","c31c7b7e32efbc6041aabe9017d23a68"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","5ac5e3e6dcd452111e2a7f462f8edce3"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","d2b3fc28a54f34bc3918cc98c7f68dc6"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","f7a72b6c5a1713f4e7cdde32493d58a6"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","e0ac2e94c30994ba5984f38fecbf51f4"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","b1bd742f1ec5e168def40f0a9ea11696"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","697eb5925cb6ac1d70826e2f8293aaaf"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","dc2b45095c3d9d6b9516890ddce08f1c"],["/2017/09/08/编写Webpack插件笔记/index.html","7b1463e92d85f7bdfa69c8c6a7d761f0"],["/2017/11/30/Mobx学习笔记/index.html","5b47322c2a3574e9ff9d088fda4f42a1"],["/2017/11/30/Test-travis-ci/index.html","1f3d9d4129d7e28b1a8ea914f4b50924"],["/2017/12/01/Use-flow-type-in-React-project/index.html","76457ee076bda85dc6c5d06b3cb2e43e"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","571eb03b815edfebee2dbe7f5aa90929"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","63cdad86904381f06f6a9b11cdfdfd71"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","2ccfe178d70f96f419f228fe951ff433"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","f3880b08331dcf7ae02e48b6c2c5dd5f"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","0a478a5eb4ed6f6fd1f4982ffd0ecc39"],["/2018/07/31/SDT自我决定理论/index.html","90ea3195196abf4235f6620cd99bdb94"],["/2018/08/04/React16源码解析-As-required-order/index.html","4b7ee8e85a1d88066f64e6a7ea9e1553"],["/2018/08/05/React16源码解析（Fiber）/index.html","9b474c96a635f2428e93473be8de2c6a"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","004663d48197108f5646cb9799ea6a8f"],["/2018/08/27/释放webpack的真正潜力/index.html","225b5d6a9910196cad5b0aa1cb21eae1"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","f23dde9587425ad8c81c3a511ffc8619"],["/2018/09/17/升级到Babel-7的经验/index.html","3175fa00013bcfdd382eb8c87a506bc0"],["/2018/10/16/React-tip组件的设计/index.html","13224536d6e82467d85136b62ecd97dc"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","ba7d8b6fdf26ea58439867d1444f9349"],["/2018/12/08/jenkins问题定位/index.html","e939ea3ec811ccc1165568f80894ed36"],["/2018/12/21/React-SSR实践-压测/index.html","f6b12f4494877e3ce140801f22041651"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","57de21b227b03bf438897df5f2219543"],["/2019/01/21/item2-profile-config/index.html","fcf27ba960d02371abd49ef63ff1b6dc"],["/2019/01/22/i18n-about-Access-Language/index.html","1884a8afeed5b4f482b9554c2c3701b6"],["/2019/02/27/Node-C-addon-学习笔记/index.html","b386670ea70a52f05ba93fb3e8abdb35"],["/2019/05/16/Modern-Crusaders/index.html","d72a3111621a6aad92e4d1d1fd5986e0"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","315eea1f49872aae10f1b5c1e45056a1"],["/2019/08/28/关于docker使用的一些记录/index.html","21d68ba8623d64659c40ffa4974ef0e0"],["/2019/08/30/全干工程师的基本素养/index.html","53c5821a21daf4e2674edebb538daaf8"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","0387d2fcb2d4904206387e3d83582cba"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","a06f11ca724583e3de3669699baaf295"],["/2019/12/02/One-example-of-Typescript-generics/index.html","78076774c4f7784d66d18238c879ce20"],["/2019/12/04/有趣的上网冲浪之旅/index.html","46fba87a601d6778a197d3ffdbf83d9d"],["/2020/04/17/企业微信国际化方案总结/index.html","878dd879f90c2bc674c432dc76eb78e2"],["/2020/04/27/come-on-sweet-death/index.html","4e75971858bd33077a39c22d16287247"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","e0ac327b2923281d9673fdce76010e98"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","561f50ee728484f5a3fa099d77b9df2f"],["/2020/05/28/525-Contiguous-Array/index.html","5ad1366d394e7faf19dc567d761ae3cc"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","03f4d98b30666753652018ff584828ee"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","9c98d0d9b6a66219b58b6f9cb340a28e"],["/2020/07/21/Node-js-与-epoll/index.html","7d9fdd1fc1f06d62dc01db3f61236a3f"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","830bf095f4f80cf1a6d1a8befc3986ac"],["/2021/03/02/总结一些测试vue组件的经验/index.html","db3da2db4604e9ac1d5fdb2a6dc7ab93"],["/2021/03/15/Purpose/index.html","f7557936db16efc4be511bf975bdd5bc"],["/2021/03/16/和安全团队的斗智斗勇/index.html","5a8439ef0749b5cdccbdb3c7acca6688"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","1afe98ac1f48f665fd25d706dcbaf709"],["/2022/08/10/关于图片处理的一些事情/index.html","7620f34de211770bf230e81fffb24ba6"],["/404.html","84f750b543af8585a7857a2b25e1c4d2"],["/about/index.html","b4e1bf7f13ba21bff559e980b63bb8a9"],["/archive/index.html","681ac228da3684b341a17c301dd8dae3"],["/archives/2016/07/index.html","4c068fee4d206582521e43de5f1f7ea2"],["/archives/2016/08/index.html","aa1341c9768fdbfcdf6aaa7908b64a27"],["/archives/2016/09/index.html","281b3ce0af2ed5603911071f93ef75e8"],["/archives/2016/11/index.html","666efc93f43a0251ad59af0bb7220ff5"],["/archives/2016/11/page/2/index.html","3baf1716730358969473fc73cff9d34e"],["/archives/2016/12/index.html","4eb9adc8d7c0992b97e44e6ea9d2a7ce"],["/archives/2016/12/page/2/index.html","92fff32250c516e51e4dd384870773df"],["/archives/2016/index.html","dcd34729772c52de23ae7d9a86339491"],["/archives/2016/page/2/index.html","5cd2b98832e56d033640a5d532f7d993"],["/archives/2016/page/3/index.html","5fa70e35343066cdf10833618f9cad5d"],["/archives/2016/page/4/index.html","2ac14899547ff5ccba213c4d78426437"],["/archives/2017/01/index.html","224a49fea91a2febcf2efa533f35554b"],["/archives/2017/01/page/2/index.html","fa005fa88c6d615e0861b4b064b7946b"],["/archives/2017/02/index.html","ef0243449f545fa2188e7d629d2d78ad"],["/archives/2017/03/index.html","ab86cd9cd2ce8e7fc16213eb06cdc749"],["/archives/2017/04/index.html","cfb3b150781f16e8e741bf272d33d844"],["/archives/2017/06/index.html","69379597aeef56c49e73e820d279bc30"],["/archives/2017/09/index.html","d32700dc781e196a04a26f9e8faa13d4"],["/archives/2017/11/index.html","bd35c6ddd3be387222caf9703c84bc28"],["/archives/2017/12/index.html","410ce45a846631457ed5233dfd2cfe27"],["/archives/2017/index.html","a74a0cd21907d2abe1c4d35b3602a8fe"],["/archives/2017/page/2/index.html","b9df8869326d984bed81277d92f210ec"],["/archives/2017/page/3/index.html","79903d36eaebeb4bfef70715be1335f9"],["/archives/2017/page/4/index.html","a0c07851216092d02359cb103bd28f62"],["/archives/2018/06/index.html","f8b4b190290e5cf9bc66dfd1ffc30e60"],["/archives/2018/07/index.html","63914ec2c279e09fe140cd8a63db1dc6"],["/archives/2018/08/index.html","615f0bd905e6eb8e8c4f4ba71673d82d"],["/archives/2018/09/index.html","9c9140da704a0b5b59c4090ee70f3a69"],["/archives/2018/10/index.html","114c2ea05b035710166aba6bb85d06cb"],["/archives/2018/11/index.html","1ecd34874f66e0264bf919cd7af5b577"],["/archives/2018/12/index.html","f576afe53324c9526b40760d617508a9"],["/archives/2018/index.html","7fc09bf8e6e4d6588a69660b55927659"],["/archives/2018/page/2/index.html","07a12538f6add46ddb86d080265819cc"],["/archives/2019/01/index.html","92470b745e09ade805ca338190d4f6ff"],["/archives/2019/02/index.html","561a2fd55a4e0ea5d751f32ce16d7df0"],["/archives/2019/05/index.html","17d5bd75906a32cb318f48673518d2e7"],["/archives/2019/08/index.html","f06d152d92ec2c01ff83eb21a21efe6b"],["/archives/2019/10/index.html","461b524f41810fa3f055802732c2a1f4"],["/archives/2019/11/index.html","9f16e0758335792f55e9287e7b50d7d6"],["/archives/2019/12/index.html","120118b77dfe232c35a68755c94fd440"],["/archives/2019/index.html","1daf7673acf09337cfc19b8621b4836a"],["/archives/2019/page/2/index.html","570ff542bb2a9f450e16470ec51c0da3"],["/archives/2020/04/index.html","1fd5d48432ed21c01a3300567d4766b2"],["/archives/2020/05/index.html","87551ce9dba0c55a2676446561472d4c"],["/archives/2020/06/index.html","b8918819b0ba2c677f4b230a501c94ce"],["/archives/2020/07/index.html","4fb623218ffa16b66e72f58488127d5d"],["/archives/2020/index.html","96be92f7917ccc944500599fc621a5e2"],["/archives/2021/01/index.html","9aadffdfb4db426568e80eea7ba6add2"],["/archives/2021/03/index.html","40b45c5f9733c54c8e3ec7902f6648aa"],["/archives/2021/10/index.html","0dad32e15fbe5fa2c57edfa998376878"],["/archives/2021/index.html","3083636f19a177a76a450917b7239f19"],["/archives/2022/08/index.html","ff68483e44ac8807ae5dc1787c67e1e7"],["/archives/2022/index.html","8fe98ad3be2b42f4981653b6b411b81e"],["/archives/index.html","68a7bb2d6547b845a02fbda02dab5288"],["/archives/page/10/index.html","953b29c878ba92b6ebaa7df913741aa1"],["/archives/page/11/index.html","e1d867e799c67296fe2771714541bd45"],["/archives/page/12/index.html","6e10467ecbdcaaf414abf78c08a5ac4e"],["/archives/page/2/index.html","076274be9eada1011588fe72a9475f84"],["/archives/page/3/index.html","a676b4f75b8c4c5b6356d6b946b322cf"],["/archives/page/4/index.html","480740e2c42a7e527384dc55932236f1"],["/archives/page/5/index.html","7987aee75ddff7023b9137f1f3083991"],["/archives/page/6/index.html","ecac45bd79fe9d67492b85058bb6a0bf"],["/archives/page/7/index.html","8de52046590bfa65054e91e2794eca82"],["/archives/page/8/index.html","f5da10acf7e6c36d00521418cec92618"],["/archives/page/9/index.html","76ac970906277a4007e4a6ff31c0d3ce"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","24e11f39c185215ca35ceececc22b39f"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","3e4d96fdcb179b772bfd2aa58629404a"],["/page/10/index.html","3245ca288c3c86ad61afb2ab5e186824"],["/page/11/index.html","423e94adba5535355c66b1721b8b55af"],["/page/12/index.html","2f7060a273400249e4eaadbea318d05c"],["/page/2/index.html","05053e380c59cc1406782e476c1b294c"],["/page/3/index.html","b6148a3c7d6edb3e5273d6171dd65ced"],["/page/4/index.html","90f35e549187acc6dbd0217ad6d201bc"],["/page/5/index.html","6e3513fe7352de25b3a6982f8bc00194"],["/page/6/index.html","5278eb4c02bd28497dc672f9874d0c93"],["/page/7/index.html","36633a8a5333ba5a258b307e844d7df5"],["/page/8/index.html","d61df4bd285ae9fb9a497c3ccd58a741"],["/page/9/index.html","40b756182a2c916511780774acf7404d"],["/sw-register.js","866e259a7434940aa0a7e11d68ccc726"],["/tags/Android/index.html","42474fd07f99b80989f6ef629d0e29b8"],["/tags/Angular2/index.html","e918aece4c1a8acbd5e09d89506242f2"],["/tags/Babel/index.html","e0bc1b6801209be84afc64b0bb65c431"],["/tags/C/index.html","bf023ecbf26f9965cf60dd87b04c1ab4"],["/tags/CSS/index.html","83c9535c6aeb7b8f37cedc7d61508b34"],["/tags/Coffeescript/index.html","0d4bdeb5adf00256a56cc66c3765b4b3"],["/tags/Compiler/index.html","50a4172b9847d382c4e4bd98a9606564"],["/tags/Component/index.html","7831cfbe77fd27d5c20cf00ed8229977"],["/tags/Design-Pattern/index.html","51aa496269186804e84fd924658a569d"],["/tags/Docker/index.html","b680f050b37ad19fa88d9b9d9da0b752"],["/tags/ES6/index.html","790a3b37c5af248ef6d6fb0480412e7f"],["/tags/Game/index.html","51ff9a7fd5702d370d85f328dc3bc760"],["/tags/Gulp/index.html","f9ef7caf64647de6cc26d2ade3703446"],["/tags/Hybird/index.html","024333be481f82b6d6a4f0de32ca0764"],["/tags/JIT/index.html","e8d1e69e9ce2f4619fcaf0e26fb7ce17"],["/tags/Javascirpt/index.html","c957cb6d61f2d204e28ab8efb24aed3d"],["/tags/Javascript/index.html","aa5786aac33024f8ceceac6b5a06b4ae"],["/tags/Jest/index.html","6f196e243c6132cdc8fe98e8381d443d"],["/tags/LeetCode/index.html","f84e94e828e3a30296f1a725eb96d709"],["/tags/LeetCode/page/2/index.html","72031f998690c4246222d18fcc440781"],["/tags/LeetCode/page/3/index.html","46d2afc79c7444863164e58e581f0374"],["/tags/Leetcode/index.html","b1aa0d36f6981e98db7015eb631a0a32"],["/tags/Linux/index.html","6eb02446d87501003eeb71316db3ed9c"],["/tags/Lyrics/index.html","50ffacaa5e3bea262e405823779b98d4"],["/tags/Mobx/index.html","5db695910ce76e8be535837165a3d1e0"],["/tags/Mocha/index.html","184b2a078343f6e051bb1db8fb9fcdda"],["/tags/Module/index.html","579e08168263cd88e633f2ff2eac614b"],["/tags/Node-js/index.html","332a2340e1065f6958ac2fea2948444f"],["/tags/Node/index.html","903a998206b7fd9c1aef9344a891be31"],["/tags/Note/index.html","74231a8f380ac0db7300b20414faa1f2"],["/tags/Object-C/index.html","51a33f5cffdea972e8e9a5fee2e17f9c"],["/tags/Objective-C/index.html","2bfafbc9047c852a533905aa8bb837d1"],["/tags/PHP/index.html","73ba4bf1206e80c87f28d929255bfd63"],["/tags/Python/index.html","526792be66b46c74a99c17d5ce8cc25c"],["/tags/Python/page/2/index.html","4267fafcfc1cb918aecd35a26dcbfb9d"],["/tags/Python/page/3/index.html","c90f0010e6e805f51c557d20bc0631b9"],["/tags/React-js/index.html","fa8a887fb6749eca99d697ac4f91294d"],["/tags/React/index.html","3ee870f95a1acee5e5d8ba6859d2efc9"],["/tags/Redux/index.html","fda756a82a3c0d3e45e756a624f2041e"],["/tags/Require-js/index.html","b21604519f4fc4bd1e753934cadcd91d"],["/tags/SSR/index.html","7b9bd087e2fa1c8a6f2c56e56fdffbd1"],["/tags/SegmentFault/index.html","ef460f5c1e51016d9d2b42a9f78f8246"],["/tags/Swift/index.html","4c19519345e81d2ec6f1f43d552d158c"],["/tags/Template-Engine/index.html","c7c62963570698ce8952290c17cc201c"],["/tags/Test/index.html","1b827fb80f78617039c5825888822ab4"],["/tags/Twig/index.html","7106f73d87285155d358a1714c1cd3ea"],["/tags/Typescript/index.html","81957e1fb132cba01ffaab57c73a443f"],["/tags/V8/index.html","be93e84531f22756165c1eeef890a18b"],["/tags/WebAPI/index.html","2f61b47149ca8b36029f17a7339fb877"],["/tags/Webpack/index.html","71ba1e27a278f572f80d051ae93be65e"],["/tags/Webview/index.html","5eeb502848ffa30f31de85324306123a"],["/tags/Windows/index.html","0af8ca72161ec025567162c444dad23b"],["/tags/babel/index.html","5cc30d6940fd7268f0d2b31a7a2a29d5"],["/tags/base64/index.html","bc916de32379ff55e1912876e25d7fd6"],["/tags/bootstrap/index.html","603f1e5a392212a4f427d31b6108ba51"],["/tags/ci/index.html","13c586fd8f1b19dadba05e04b086ff2d"],["/tags/codepen/index.html","40716b0a1cc872cd733b1e0f9c76ee3d"],["/tags/compact/index.html","dcf9cb2b49261204fe98c570d632cbe6"],["/tags/css/index.html","7783310be3dcce277e679227dd801cc3"],["/tags/database/index.html","ff82022b74d7bf2f42eaccf422ab62fd"],["/tags/docker/index.html","1496875db0a7715d5a07a6296b7bb9aa"],["/tags/event/index.html","6ad7f3aa7f78a5438fbb0ea02f63c111"],["/tags/facebook/index.html","950df327aaacd30e828005089070d986"],["/tags/flask/index.html","dbf74cf752e2faf7ba8dfa77d0a45797"],["/tags/flow/index.html","3623eb223e1e4ff97d0ccb0406502256"],["/tags/i18n/index.html","37244739b9fad22409134db4ee46d57a"],["/tags/iOS/index.html","0d8e66e5976da0cf1e9192ec2a39bd6e"],["/tags/iOS/page/2/index.html","30e8af3a7040741ddea4da17bc045808"],["/tags/index.html","ddf4f8a8de402e3997a3b0f0b76c759f"],["/tags/javascirpt/index.html","54780e16587e02b3be1343926e74d4b0"],["/tags/jest/index.html","eb156bb4b43ecf1b2a6dd74c524cafbb"],["/tags/jquery/index.html","6090680a1ab4474b3121444c5602e406"],["/tags/life/index.html","d35372c88fd2f62bc984ba7fb977222f"],["/tags/lyrics/index.html","89d56c0bfc6639ee7d62e1e330a06e95"],["/tags/node/index.html","f5c05fe0a1df6bcbaebf8db853f16a7d"],["/tags/npm/index.html","a5a65e49d5a5ae033f62dfc053763d5b"],["/tags/pwn/index.html","62dc875adc88794ce79ef7873692594a"],["/tags/python/index.html","8ed0f2bbe655957906d4db1d8ffdd9e5"],["/tags/reactive/index.html","585b41873946da04dc70d3a173bc9615"],["/tags/shell/index.html","bc635b95ba1cdb31e99024c91ff3cf36"],["/tags/ssh/index.html","b251d77111cb739a1cfeabc59142c0cf"],["/tags/svg/index.html","df507b57b5bd020c2dc02aa2f51aeb4c"],["/tags/translate/index.html","d40186cb79a636d7db26619106a36b1e"],["/tags/translation/index.html","5cea7a550108080ccca9471b3340cda5"],["/tags/typescript/index.html","58b0e26137d68983a9bd344db6ae061d"],["/tags/underscore/index.html","429b368cc97a54263a33499b60e7dcd9"],["/tags/video-js/index.html","1e392836aca05f26ea1d73720e4614dd"],["/tags/webpack/index.html","9ec423fb4160b02745c1c7ce7d5027f2"],["/tags/web安全/index.html","c68e3fdb7967104fa23b7936be8868fa"],["/tags/函数式编程/index.html","673f25c47a5656209cc3cc2dead694f9"],["/tags/各种开发者大会/index.html","f5fbc97b756bb6c247f046b3a6eedbfd"],["/tags/文档/index.html","ee0c709338a0457ea67188100b254923"],["/tags/构建工具/index.html","c6d4cfc57895198c8dc49c81719b68ad"],["/tags/测试/index.html","47158be3e7a59275212d3089e8e9e2ea"],["/tags/生活/index.html","03f9fca63b645fcf2c13e6b18c248747"],["/tags/笔记/index.html","e65fbf798c0a0c0acc0052b5c3d438ec"],["/tags/读书笔记/index.html","ac9d5cc9a2965ff1c7fc8d803f12ea5a"],["/tags/逆向/index.html","eb33361f861a91ef35497cee1cf33d5b"],["/tags/随笔/index.html","6ead9c9dfc70eb8d2ff783601c933e0a"],["/tags/－-Test-Karma/index.html","90f31f9f27266ab88f63148950d10c83"],["/tags/－-杂谈/index.html","8dd63cdc5623b07b5d66a338c367572b"],["/tags/－生活/index.html","7183d9fbefb41c90ce19121bd4786135"]];
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
