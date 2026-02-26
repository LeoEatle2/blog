/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","b15131887a3a8e77a0f4c4c29f40b2a8"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","8740063e627d30bb195a4938d6572ccb"],["/2016/09/02/The-inherit-in-javascript/index.html","a85d9c16cce0fac7404497e5a58ae587"],["/2016/09/20/令人伤心的博客碎片/index.html","6b120179812ecf6d4042e4338b3de257"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","cb4e0272c320642c7b471cdb0a289b8e"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","6013f7979525b6009b99deabd162b0d3"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","6aaecc57f8bf078fdaa4f7f9ae4eb210"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","b0d354b60a0c57fa1d6723f30430754a"],["/2016/11/14/爬虫的意义在哪里？/index.html","6b75ac207c791c47881fdcd4ee9dd2f0"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","26b4ea86a30ca4f6aa7fbbc43398f3cf"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","e96916a2ad42186bc6a0edc6ceb46437"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","7347792b50743544555194e75176d62b"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","a3ff3f18a7594f2bb5b93b19d20dc605"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","500b67a441de730d64f1119cb83747d0"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","e2b2a6ffb2e971ac458c7f27419d88a3"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","4c003245973b43e77c74c38a16dd03cc"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","2ce8fab6e782559d60f4dbd9ad38d291"],["/2016/11/28/SegmentFault开发文档笔记/index.html","b9555d0349f0fdb4f49a4531e69b8741"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","903eec2bdbb11b7cda9fd5c1fcc44949"],["/2016/11/29/Twig模板引擎学习笔记/index.html","4528798fc2e5a716d1508363613ba452"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","8965d59f04902eedebd760f960b06eab"],["/2016/11/30/compositionstart事件/index.html","348e26467dab71edf9c73075c7f4048a"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","b40aa71ee33dbb3319ab23e8ac4c74bd"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","c10773ed86a938178dfa8c66e9a0688d"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","c5ab30098c52337cbe1980c631e70727"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","0433f26a5dc95785354f6368060cd3fb"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","86f8eae8bf406bebcd1bf94fcbe9f0c0"],["/2016/12/10/SFDC笔记/index.html","6b5d39f435d7304f8f1d9499a6eb38bb"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","883af7b73b6126eeccea525feb4a6f31"],["/2016/12/13/深入浅出node-js-笔记/index.html","789af08fa8814d49cc3b0647902bd496"],["/2016/12/17/LeetCode-274-H-index/index.html","32305e6c07b83fb84febfb0ba1369123"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","9281236f17b8555d755a329139754cfd"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","f2aa5f4cbc6ad5dd00a6f0750b521850"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","8a778f5e8e490eaa2421e36193cb92b3"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","f0dc901cdb663409edeaff9dbe84eddd"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","7260ae1e93e952cb08407ad4a2aad13f"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","122b5d53117e2bdd78868dece5e3526d"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","c086b78b055790636df8b181cfc9aa6b"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","258c7c1e63f7d8973da79c1b395ab1c1"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","92b1a48daf1f80954e10b40f716cf625"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","ce641037942b828eef399328be7c27a8"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","3fab65d37168cccaadf040f55cc2a751"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","14a5559f4c49714c4d33e37dad11e9ff"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","d32b2a1e48c73935b03fb009ae5ae7e5"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","ce1c9142278a1fa9ad8bcd4e790bc0e2"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","19ee2ceac8406ef2dd171342680fdf4c"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","0e3ac4ac95bf9bc9d2a1994f42e585fa"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","ea00ea8b8345f7a13f52084e67419b7b"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","3645db34d4597a585445e92dbef5078c"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","ddc06ea241f4be596fd2347ab845646c"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","c74363b652061e7ebfc4f9757cbca451"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","c7d7880b5aa09addff880e016363cce4"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","b6ffd19063697bc6989c241a492a86fa"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","075c6f36533ef9cadb35357afbc6e164"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","7e4d5228a514a3559d7fa9e961a415ec"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","a9efd14d2c6576930744585a7b64402c"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","9f509dd851c60746bd1e5885023730d7"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","19322965ae813cbace5d43778d861e45"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","8dbdf3963339ede85bc80a1b2f408c9c"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","d7c8220c76fe2aa6dfd0a9675351a539"],["/2017/03/03/Google-Android-System-learning/index.html","03f0e6dde825899080ecaf2798b7e427"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","e02911333f807ffb2740420bfd4c570a"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","26aeed6ebbe476982e04d581ae23b530"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","e88164b3e6e07ec975472139b88155dc"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","bf0ac30deebe2f2c578420f8a0c2eba3"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","6f7707b764995c73d34fa9a78ab1f0a2"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","c6e2be7dc91ada0a66a32d6a3f25f9c0"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","a2dc6405ea37b60b46455922836bb466"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","32b2b2209a067adc8f900d7cf565702d"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","cedffc44f078a985b1422586faa40b78"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","74bf19f9b06091a7041077353132718b"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","b1ec71f613ba80b86b25cc5734b0f94e"],["/2017/09/08/编写Webpack插件笔记/index.html","b292a48e2683592e8cc05ba69a327eec"],["/2017/11/30/Mobx学习笔记/index.html","39dec1fff3babd02b9904be5169af721"],["/2017/11/30/Test-travis-ci/index.html","265765ba43329d5713faa02580595163"],["/2017/12/01/Use-flow-type-in-React-project/index.html","6dfa32ab689558a1088ca8b42a42b600"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","5c2ef21e2bbdf2ebbce1e5fe5af39fd3"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","480a9ca3728305c59317671006ffe6e6"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","d2a8104358336010d980f74b8ae1f101"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","580cfdbc182f3c34554d4ccb6a0315ad"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","49d83d165254f57a66c95a4ff7aa882e"],["/2018/07/31/SDT自我决定理论/index.html","6124ade2de3c0874affc349dec4617c9"],["/2018/08/04/React16源码解析-As-required-order/index.html","89e2d3a9d9f800c420a4b300d12e6ac8"],["/2018/08/05/React16源码解析（Fiber）/index.html","a5a2c4f42e8f7f27d445b17b7a2fe3de"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","496ed94123a4652cb997758b21501412"],["/2018/08/27/释放webpack的真正潜力/index.html","28e59805b8acda20ac8fef1fa374d46f"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","ac5923a25995d511fedcb50072e4251b"],["/2018/09/17/升级到Babel-7的经验/index.html","3c8d75ecd978d18759d22423b2f44de6"],["/2018/10/16/React-tip组件的设计/index.html","0742bbad6e8c96d00693b821565b3d84"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","3178f1bb11636ec8cec72ba191a7b246"],["/2018/12/08/jenkins问题定位/index.html","5395157e82bdce9fbbb19c0044a6da7d"],["/2018/12/21/React-SSR实践-压测/index.html","d183895c9e6f4f568372a36bdf4c60b7"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","d03af32989530117e661cdb2fac4aa33"],["/2019/01/21/item2-profile-config/index.html","0f6f3b7f6d26be0cac8a66d272ac9176"],["/2019/01/22/i18n-about-Access-Language/index.html","db0c625e7a86ffd6ccfc2e4f15230fb2"],["/2019/02/27/Node-C-addon-学习笔记/index.html","9c73a1cb0fd14e576b46073c122186e5"],["/2019/05/16/Modern-Crusaders/index.html","7686630f707263c954e68d31e24cf525"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","9d6f115a71ae6fd88dfcb27fb96876f3"],["/2019/08/28/关于docker使用的一些记录/index.html","38149640cf837e86a17594abc3cef761"],["/2019/08/30/全干工程师的基本素养/index.html","6693ad9bb1cc9a653bcb49098aaee566"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","675b94fa005332d12661b26faad4fe63"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","bbf5f1519f0b73475e5c6b76728961c4"],["/2019/12/02/One-example-of-Typescript-generics/index.html","6bf26634e869df5e61590f0967269f79"],["/2019/12/04/有趣的上网冲浪之旅/index.html","9ba658658c28e4cafbe4ea193356375c"],["/2020/04/17/企业微信国际化方案总结/index.html","35a4602859c97aae312ef488d72a3bd1"],["/2020/04/27/come-on-sweet-death/index.html","7d35a58e487ebefea8c3571373bf085b"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","789af45528a3ed85fbb7ba0300504517"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","190182025df3185fc145d1c353168cef"],["/2020/05/28/525-Contiguous-Array/index.html","ce463f1c2d6d1e145fd74e1009e5a210"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","94cebdccb897645679b5538dd22f015a"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","bd1223f113d30fe61a997574d56b2fe1"],["/2020/07/21/Node-js-与-epoll/index.html","117db03374d71233bc40981738f9f917"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","ac95e0c993d1a1a7346f9b3b645bba2d"],["/2021/03/02/总结一些测试vue组件的经验/index.html","5e37e7bc29050f71542e9fcf6e0e808a"],["/2021/03/15/Purpose/index.html","a864023e154cef37c23db4d7849b869b"],["/2021/03/16/和安全团队的斗智斗勇/index.html","2dc9abfbd3a231088ba3e3182f6c2384"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","f7f42bc9f4b7969c6a030682474d2af8"],["/2022/08/10/关于图片处理的一些事情/index.html","a53e744812566c57c5f433b87c212363"],["/404.html","27fbfeb488e03357d68463fdb245b4a3"],["/about/index.html","e9ed520a8bfd973ab15abeb4ab7a6a34"],["/archive/index.html","72094be9e81f82e0c16aa9dac6d870ab"],["/archives/2016/07/index.html","1e07650791c23c7b0d905851dad44254"],["/archives/2016/08/index.html","8b116dd78b3105b276c5bb79445642f2"],["/archives/2016/09/index.html","c6b502c3598d8364d3f568d9a6733b9e"],["/archives/2016/11/index.html","ceeba6881844917a13145676f8dac496"],["/archives/2016/11/page/2/index.html","d351024325a606bebc263a02f4105175"],["/archives/2016/12/index.html","b2d57b526ddab9eff4bd6bce65b0b2e2"],["/archives/2016/12/page/2/index.html","914d43dcbdd8b5335e9b697f95c153fe"],["/archives/2016/index.html","1d2e5878bb8be4170badcfa0b58449f2"],["/archives/2016/page/2/index.html","c096e8843686f9a760f503288e7e8716"],["/archives/2016/page/3/index.html","344b7fb99eb20b601a6836ceb9f2de10"],["/archives/2016/page/4/index.html","5e81ef7eae64bee6a23d57b6bb501049"],["/archives/2017/01/index.html","c148e661f1d9c6688b52f0485966c5da"],["/archives/2017/01/page/2/index.html","d3ce1b8b6cefd855e85ffbb3e755f094"],["/archives/2017/02/index.html","3420adc5362690a2607c74e46f81b243"],["/archives/2017/03/index.html","854ec97b1d6c8a6a8cbefc6fc2fd26dd"],["/archives/2017/04/index.html","ab5e5676eac69cc1734fe06ca642082b"],["/archives/2017/06/index.html","7d0caadf618c0af694a91c5630bdc34d"],["/archives/2017/09/index.html","ba89153b716bcff9e1bf1d36cd3d5aac"],["/archives/2017/11/index.html","b6bdc1e13a63493890da49c9e04d12b1"],["/archives/2017/12/index.html","0ef95309bf377f762d165c017c978788"],["/archives/2017/index.html","79434166e902e309b7e4d1cf10dc313c"],["/archives/2017/page/2/index.html","0764537780dfed9eab320ce3615790e7"],["/archives/2017/page/3/index.html","6a9118c07ad41612ff710e5f4b1da3c3"],["/archives/2017/page/4/index.html","71f173537f58381f4282fa6759a78e61"],["/archives/2018/06/index.html","44b65c13f9e52d256e13f83652cb056c"],["/archives/2018/07/index.html","cc6cec79c742482b080703011d53fa0c"],["/archives/2018/08/index.html","c9ff6df7146ebf6f6271cf5f8c76016c"],["/archives/2018/09/index.html","0ff78bd9816a4fd73bf4cd6840723f4e"],["/archives/2018/10/index.html","053847bce22095b73ff601c072dff300"],["/archives/2018/11/index.html","69191ac4490294e456c10c3417f67ee5"],["/archives/2018/12/index.html","f44c97501adbb97b4fc7e7e40f6b04f3"],["/archives/2018/index.html","ee232ab87e50df9777837bc1435b2830"],["/archives/2018/page/2/index.html","9b5e735b3dbd45669e92fd4c7797359a"],["/archives/2019/01/index.html","83170acb0520f473ba9bc86c83a51c85"],["/archives/2019/02/index.html","657c49854d67d72630e48fc6cb8e841f"],["/archives/2019/05/index.html","75f4503be7d91d9491b1600a1a7abec1"],["/archives/2019/08/index.html","770fa6f7b3344fea855d8a55f89ab251"],["/archives/2019/10/index.html","ec51929becf3bcba94ccc63da49b5e89"],["/archives/2019/11/index.html","35a1ae031be852fc7c32eabfb5987020"],["/archives/2019/12/index.html","8899652080d1f5c7fbde6506c99be9b6"],["/archives/2019/index.html","898d808e92ea0896804fc02d6acce468"],["/archives/2019/page/2/index.html","1ee74a192947e6498e53bbd2e80cedc7"],["/archives/2020/04/index.html","641f8c9bb74cd55d75db36c4372d959e"],["/archives/2020/05/index.html","12a3cc1e9983763a05cf02b5b838e69e"],["/archives/2020/06/index.html","d54ae8175721930b0a87794b4c9ed123"],["/archives/2020/07/index.html","63ecbc365ac6501d669da504ed009526"],["/archives/2020/index.html","12717b6ac525a2212f66fcaca8f5c749"],["/archives/2021/01/index.html","ba7e4afcb41e3b226574fff363b69137"],["/archives/2021/03/index.html","de6d518a3c2bdc4f0ec8904f0e95afd5"],["/archives/2021/10/index.html","1d5abf5b9a4dd15a60520bffe13afb2a"],["/archives/2021/index.html","ac2abf7140ed305e63c8a4a02dc6e35e"],["/archives/2022/08/index.html","8faf02af74092ef5abb2f706a8795702"],["/archives/2022/index.html","2876580efd2250ddb6488340312f5c00"],["/archives/index.html","5d9373544bfb24a17a35d3bd2b36c874"],["/archives/page/10/index.html","91a004b99679ab67a46942bb9fb9edd3"],["/archives/page/11/index.html","6618f2c8ab0734a8e1ab56508d9e40f9"],["/archives/page/12/index.html","9589a8607206a56dc130869f71ad4373"],["/archives/page/2/index.html","75858bb334760f66e90c5a169895f507"],["/archives/page/3/index.html","0cf0d210d18462ee29e4b80cf7f30921"],["/archives/page/4/index.html","9d7f4908594a51ed4ea1aaf5746bce39"],["/archives/page/5/index.html","ee0ee9511386b02af559c36dab3f4692"],["/archives/page/6/index.html","dc264cb5a6ac356c1254ab63c72a3623"],["/archives/page/7/index.html","2d74021b5ba2d98c6f1e6cc6080a3f18"],["/archives/page/8/index.html","70a65700c7e7ce7ff4355a5a112a41e5"],["/archives/page/9/index.html","293d89ae83d2c6c8eb549d53b900cc6f"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","bdf044100b38fde85f2307756fe59c48"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","541a6d523914a0d516b1b2eb2bd7173d"],["/page/10/index.html","26ab1cb1161436895481c40c89191bb3"],["/page/11/index.html","8519686f132fe116d8d61766accc2642"],["/page/12/index.html","de04c949fe8f8004d1c64cdbce11cfdb"],["/page/2/index.html","d2b144d25af2a1b90be85a1f92761ed7"],["/page/3/index.html","816a096fc40e7a2907311a4d671e1d30"],["/page/4/index.html","7a5746bf622fcdba210c98a8e3e459bc"],["/page/5/index.html","f86fefafe9a11c1d0954f27d9ed4690c"],["/page/6/index.html","01ec8a654152da0bfd512d7e268f3c3f"],["/page/7/index.html","1d1fc1cf20fd076c3eb63d902ce3e075"],["/page/8/index.html","3911823baa37dddb4d887dd1800db91b"],["/page/9/index.html","9d6c31e58e5580b93bf4cd8d97c851b8"],["/sw-register.js","29566269036c99de56c9112ca98f7ddb"],["/tags/Android/index.html","a7e580a611ebbfde0c045af89a039118"],["/tags/Angular2/index.html","12afd580bd9963a45ba2daa1c72ce34e"],["/tags/Babel/index.html","c4469dbb62115004aab7fc4b9e243cec"],["/tags/C/index.html","972ad796d8ddd7085dac19ab2f8ee09c"],["/tags/CSS/index.html","40450ad0112fda169f1d765794bd9850"],["/tags/Coffeescript/index.html","fc4fba5d4d6428b92d4aa41fe560ad07"],["/tags/Compiler/index.html","73260c051b12444f118a6c7f4e0e7403"],["/tags/Component/index.html","b298e7ff6835d4b403f7966777d825ee"],["/tags/Design-Pattern/index.html","45d84e163549838d2f45f764872ac333"],["/tags/Docker/index.html","04dce8b0c4cfcf7d4f2e922c4fd1b252"],["/tags/ES6/index.html","9a2be89cb134980f30086ab9bb8e2724"],["/tags/Game/index.html","f1c2b947798f2c7d3d2ef4a209821b1e"],["/tags/Gulp/index.html","6eb2d5da29e2683d7e88cec7ef551763"],["/tags/Hybird/index.html","690796d2175afc04913a2e9556d87938"],["/tags/JIT/index.html","31350c86361c56dc729d7bfd9f2d1e01"],["/tags/Javascirpt/index.html","b592b6a9c386ea9a05ffb4d9de477212"],["/tags/Javascript/index.html","d27c176ab63bfce014648a84a363a8f9"],["/tags/Jest/index.html","3eae43bd27f8ba5318870b6c6f2fce7d"],["/tags/LeetCode/index.html","ac85c7e6a340c3f0660a85e5d9ee30c0"],["/tags/LeetCode/page/2/index.html","15e731b58a755e923a9e6c95d3f44616"],["/tags/LeetCode/page/3/index.html","d3f9632a47148b2f34ae234a04f170df"],["/tags/Leetcode/index.html","5aa5d03359eaee5acb52d90da057a283"],["/tags/Linux/index.html","abd00477b5b71dee0d3d97dfa7e00a40"],["/tags/Lyrics/index.html","644423fb6c3c41d6411e520d8e6b5108"],["/tags/Mobx/index.html","f901cebb74cf0a4690459150f63be8ae"],["/tags/Mocha/index.html","a64b2f67e6636307c13c6ebdbc0c5c02"],["/tags/Module/index.html","607aee027f0cacbcfee46442c5dbd0cc"],["/tags/Node-js/index.html","51cb0814fd3ebd02dd414af4339b8dab"],["/tags/Node/index.html","db3ea5efda0c3997d8aac613f460621b"],["/tags/Note/index.html","6f75ff407ad67daf7b20646d30722e57"],["/tags/Object-C/index.html","5603de776e6cd3a25b854e1ded7e6e0f"],["/tags/Objective-C/index.html","4064432ed834e67fe7ff8f9e04cd6f63"],["/tags/PHP/index.html","1db6acc6d2c9a901d316f402f121f9af"],["/tags/Python/index.html","5c7440a9b93ad2218fac057f0e4e66df"],["/tags/Python/page/2/index.html","92feafe28f3faa73cd579f53599c7e3e"],["/tags/Python/page/3/index.html","3e56e88a848fc5ae7ba8cb5db3dd1e13"],["/tags/React-js/index.html","b9fed3a6946b05a9da549d199803bc64"],["/tags/React/index.html","f1a7f4f8104bbe8116e2a069f3f51d92"],["/tags/Redux/index.html","fdc010bfea81afdcdcbda71f90943d52"],["/tags/Require-js/index.html","60be24303e19a07144cefb952d7b2549"],["/tags/SSR/index.html","5e48f4828d6cbe6f519a623a066cffbe"],["/tags/SegmentFault/index.html","4c33581bcf6a938e1fce127ac0302295"],["/tags/Swift/index.html","096b914285bbd16c5d1c73a10edfd474"],["/tags/Template-Engine/index.html","e26b103c0bc85228a0510836eea5e6c7"],["/tags/Test/index.html","eebdc8b9d8349a8ededf44fcebecf3d9"],["/tags/Twig/index.html","7e8357380f3b3621315d23e85afe3d21"],["/tags/Typescript/index.html","6be5a355a0a3cab4f866f3caa4565f12"],["/tags/V8/index.html","483706cf3b1481fcdfd741842455ef5f"],["/tags/WebAPI/index.html","ee1e019e99b29626476caadcb114f8da"],["/tags/Webpack/index.html","1c53a882cc67402c6e908dff167722dc"],["/tags/Webview/index.html","5c25feafe157431e30e293c0dac32025"],["/tags/Windows/index.html","3a7692b1f448e16a84d5979d4ce95411"],["/tags/babel/index.html","bbd144cc86a33f09b7f9feac14a38980"],["/tags/base64/index.html","6da3e9319a20c405f1e7178c22e75596"],["/tags/bootstrap/index.html","830bb116e835091eb6fadad9dff22e69"],["/tags/ci/index.html","3c2c91f50c30b8f9331cbd28ac1e3d55"],["/tags/codepen/index.html","8ff02c7b9323c728a5d8cea58cb478fe"],["/tags/compact/index.html","3eec58b7eb8087955d3fedca0432b15f"],["/tags/css/index.html","7c0e65d6744b23d608418410da632dec"],["/tags/database/index.html","3fe431541ba9925d92ae6249df42898b"],["/tags/docker/index.html","8906de467064b8e8d1684ee62b068fd5"],["/tags/event/index.html","c14c5b6cf5e40cef5d93f924bb25eeed"],["/tags/facebook/index.html","611cc1d1a9160c37e4a6f65a57e34bd6"],["/tags/flask/index.html","19d5b2724092d2ce9f07d7770a7aeea4"],["/tags/flow/index.html","955d6932a4622c3980cf6710ac2e0e9a"],["/tags/i18n/index.html","06cbbe287b771bf40e50970790248d46"],["/tags/iOS/index.html","c80d89289dd2626ae969f1a845c3be8d"],["/tags/iOS/page/2/index.html","9a1842c080fdb8ca805912e6dd0aa49b"],["/tags/index.html","9c8ab1d0e8f31437f04f62e82406791c"],["/tags/javascirpt/index.html","07739c5e3b33ee30804af16bf77b4145"],["/tags/jest/index.html","980a915c2f3e98f5e65b94d54a26a30d"],["/tags/jquery/index.html","dd793f613c1d4898de250b1539e7c02b"],["/tags/life/index.html","fc94c19ac70406a07b04f81dbad39baa"],["/tags/lyrics/index.html","5a8b25d081fee488f821adff8dd6a769"],["/tags/node/index.html","ce7e58ce6cec65385fefa31389a02c65"],["/tags/npm/index.html","4f56ef8b8b5579eb298ace193e520bc8"],["/tags/pwn/index.html","adc3e8cb4efd642fc6b6a1792dd7219b"],["/tags/python/index.html","7e8178e05367b18b479fd6fd94723809"],["/tags/reactive/index.html","ff92cd233ef38d1defa776d4ec454ecd"],["/tags/shell/index.html","e69e52b5bd6115a26ea145d568963f8b"],["/tags/ssh/index.html","b7ccac7e7dbd57f1a593b7fe6ff77860"],["/tags/svg/index.html","40056316776439fa876131c30c971214"],["/tags/translate/index.html","1e1653c9afc50dd8dd45114243d55e44"],["/tags/translation/index.html","6e866dc8741aa19602f2ea3a3145ec2b"],["/tags/typescript/index.html","aae7c6c286118df84ff0c7b2d108aa16"],["/tags/underscore/index.html","29b38b72c4b02316fd69941c431aaae6"],["/tags/video-js/index.html","13ab11796cc81d009a74489117031dc4"],["/tags/webpack/index.html","dd06017de397a6510f31374953a4aaf5"],["/tags/web安全/index.html","31f7ea6cb494cca14d31cc3a99b17829"],["/tags/函数式编程/index.html","6a51323b8d1f1aff7bb1ff48b6f750b8"],["/tags/各种开发者大会/index.html","c922e89db349f03eec22381f29e3a800"],["/tags/文档/index.html","f2bf16380025aef2ae57e87e619477f0"],["/tags/构建工具/index.html","9ab574881b3abf9e913088c1967833ff"],["/tags/测试/index.html","a3b0efed01cfd12e22ac339e7fc89f72"],["/tags/生活/index.html","484f69f2f337c3d486f42d596e5b9bce"],["/tags/笔记/index.html","3926d2fad6f279d640e0df33f32442e9"],["/tags/读书笔记/index.html","502c2d98f8d483abc57d5ea7366d7894"],["/tags/逆向/index.html","79e6c2154b9291013445b23e7242bbf8"],["/tags/随笔/index.html","8561cd6efebae843763b3979901d87f6"],["/tags/－-Test-Karma/index.html","a6ce5f4a73ef903556ee794d429aee2a"],["/tags/－-杂谈/index.html","c702e026dde1968a523cc976b547f12e"],["/tags/－生活/index.html","1e1b829bc64a41682a92a2364f0b949d"]];
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
