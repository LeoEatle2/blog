/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","3a680d4ac416bd42240ec97a2b7ab911"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","339b965b5ac5d22a23ed69b5a44b0985"],["/2016/09/02/The-inherit-in-javascript/index.html","007fe7438beddeccd9f6757cb489c3cd"],["/2016/09/20/令人伤心的博客碎片/index.html","e266c5b15c5f62a99465d6640c99a32c"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","0ab133bdad0841ee08c56b5f2c0f75ba"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","e1e554aeb3ed2ea886815be74f5f3d02"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","3425439231c59c174a4c93eeb66801cf"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","bb5577651f2768a8b3c11e790dbb82d4"],["/2016/11/14/爬虫的意义在哪里？/index.html","3d2b41581703a66635cc4a1f1180e755"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","f01b527ee62791658beea666e8400ddc"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","5ba839aefa78c2a896d6ff1c90d58955"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","39ec2049d5832e0a62917cc477036ff8"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","6cf84bf6347d1e409403c7c880ac35c4"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","99d4ca89f3142fef5d63108f2dbad82d"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","cc0c0e0aea1e429508592760e9985801"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","016969453514d6b167de4fb96fc99ef1"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","3f9a12eb08b43abd47d7c3cbc7b918bf"],["/2016/11/28/SegmentFault开发文档笔记/index.html","9943a2718efb14b235ad9358c7bc8a7c"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","d26684f2cd7eec5fdc2121c31f5e8e3d"],["/2016/11/29/Twig模板引擎学习笔记/index.html","8392ba9ec436a061e2d423a7684550e7"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","d4e3795be6641d39362677dac79cccbf"],["/2016/11/30/compositionstart事件/index.html","50a6e605684e71639de1d54136aace8c"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","377769bf4e535a0c3039e2fe4a2a9e98"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","0843a3e5d14d2bf66aa6370c8e570fac"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","9e12f28c61321fec6b62eaed96e54df4"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","1cd77f45f589a50b0ac992debfb70e06"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","c5bb8f21727a8ac650f9f669a1ba1eaf"],["/2016/12/10/SFDC笔记/index.html","637478ff8b09c454f1352a50b301d88d"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","2b15f60ebe70f22d6fed265b57485a7c"],["/2016/12/13/深入浅出node-js-笔记/index.html","6ee5f3a2c8df543bbf961e3942626f09"],["/2016/12/17/LeetCode-274-H-index/index.html","e948179cc5fc0bebf5f6677148cbcce4"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","7eb55d4553a58720fcb0e3cca9b2875a"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","8c735024e33b18c09a19bc9c3f48b252"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","293023462964cf59f9407352e2b9eaf6"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","a91bd9ebc191238fc61624da023b8956"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","2037f95120a3820f814f069cb7069e01"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","5a6b1a3bf4a6eb0adc8f55a737424137"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","a36c4bf60c024319f8dfc71a4e23d901"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","46ca6d0171e3fe56aa568f4d7d6c16b0"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","d04cbc95c26aac632b099c8b9a1f4314"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","acac0b487a49abd3789dffd12783de6c"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","ac923c4b1ab2b19f8999ca69ed7170ee"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","877833cde5b7ecbb3b697c5a7b82778d"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","89e19639563e87c402f7f26aa9988884"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","736a9f0459e7bc4716c980e259bfec4a"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","0bc578c925f128d604664ea74c7b2dba"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","4f3ab55c40a989ce0a72d1ae17fbdda2"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","660418fe6ba008c0d86cbd9fdd4c7178"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","a331c3b53c6a3b5b62dd3b32823d644e"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","99c9ed22033f1fcb40b974bda1ee53d1"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","2c4b3f1bb08cbff54fc1180455c5b2e0"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","0d1903c5709f64a4c3c910635f5a76eb"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","9f3cb54380c9ad0f2816420178e992eb"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","2e8c0af51400b5d4c31d4960d33a8a42"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","610afe07f2f283db48663c0baa400646"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","f1a8cdbd6484b4d65511900c7214e1c9"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","e59e73da87a0fb0ea90296d2bb119fc9"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","8647f69a7f94351d327f1ee804d73d3d"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","dcd1fd63208aabead0e4db9c2767b663"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","232a6d202f1b1e3f76d4b3ae96f7f8f4"],["/2017/03/03/Google-Android-System-learning/index.html","520b65711a434cf6ce009c12aafeb395"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","04ba317453204cf327779214e254741e"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","dc953f5142eb13a5719b357c307f2d15"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","0028c4f44bed0b7cc41cd85941984841"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","22386b951a3298517648059dfcf4b6a0"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","de3080674bebc1a395cf10257b48a1d4"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","5ff75ba61b7635759203685c9c789595"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","31db2e7ef1514c7741c74a9848f50195"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","ac35c5a615287d23a2396d8698c18932"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","1bfb603bd23a6e9b7f855bd5a2598811"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","928e1c46c5c1769f5c92e1fec3cbbafc"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","ad4fdfddbd7c5af5158b46ffd2e2c6a0"],["/2017/09/08/编写Webpack插件笔记/index.html","cac6400b06b08aa9d33cf8f28359d475"],["/2017/11/30/Mobx学习笔记/index.html","6ed0b55fa3f61dc2713277ad4a6888d3"],["/2017/11/30/Test-travis-ci/index.html","b07828bcf810ee879f4bc01a09fafb4e"],["/2017/12/01/Use-flow-type-in-React-project/index.html","75d4aafa5db6b82eb8e2ff737c0217ad"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","6014f1daa51281acc68492fa24a96c48"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","fc6b833318807df93df51e134dd30401"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","5dd278d482bd91dcbfe49aeb4e0a57c9"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","1daa509811ddcf8699cb900c2e5d381d"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","bddcfee2cc1a976ee794e873a6e7d2f8"],["/2018/07/31/SDT自我决定理论/index.html","efd18ccf3b74800037acf5d7036003a4"],["/2018/08/04/React16源码解析-As-required-order/index.html","fafc2905ec5937c60b8d90484bc0f30b"],["/2018/08/05/React16源码解析（Fiber）/index.html","28f622ab8f7b21b29a45a6b12fcce36e"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","c35a10d3feabd1a9f637e3d47211a7db"],["/2018/08/27/释放webpack的真正潜力/index.html","af7cde14b2122bc4d393b81136047ecf"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","37f6fec5b04a866d58a4837003ada7ec"],["/2018/09/17/升级到Babel-7的经验/index.html","8107ec36c0a56f0214cbb45324774b1f"],["/2018/10/16/React-tip组件的设计/index.html","572655a9438df16fb2195f1539e0fc41"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","43b02e35814bade78ceb13cb818d8be4"],["/2018/12/08/jenkins问题定位/index.html","34d0dc6cc40abecee018df24bf25fbdd"],["/2018/12/21/React-SSR实践-压测/index.html","4f923175fced3c769c49924fa08a84b8"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","9a103bc3619c05619e7fd4afd50e10ad"],["/2019/01/21/item2-profile-config/index.html","3038b287ccbc4e6ee4ed772503fbf603"],["/2019/01/22/i18n-about-Access-Language/index.html","1879b31d275ae151fdd2459fc05039ad"],["/2019/02/27/Node-C-addon-学习笔记/index.html","105182a292ab5d77642915019e25e42d"],["/2019/05/16/Modern-Crusaders/index.html","04e1e1769c830795ddae6e8535a67456"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","096dd4fef0f4c19b4657dd1a1a2002cd"],["/2019/08/28/关于docker使用的一些记录/index.html","efacfe75a87e95145a383840ea04db5c"],["/2019/08/30/全干工程师的基本素养/index.html","a269130b7b33127bb55c602e5a8fefbe"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","fb5d23e32e0d9ea1d5cb865a855176d7"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","34cc3b37075f7ed9073fa81db251c087"],["/2019/12/02/One-example-of-Typescript-generics/index.html","d4449836e2f5b3e083a5a7dba1956b9e"],["/2019/12/04/有趣的上网冲浪之旅/index.html","598c764160fbc5c2a622096bb2e26c0b"],["/2020/04/17/企业微信国际化方案总结/index.html","aff3fec2bc1748991d2c3acbf26878d9"],["/2020/04/27/come-on-sweet-death/index.html","ccc6100c4470a4b2340e324cb91e6548"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","99292ae140c0f44983f8e35b656231ca"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","5af316ffa44bc6bd7575a1ecf9615d78"],["/2020/05/28/525-Contiguous-Array/index.html","449b2faee09c1e34a0796a4d7c524f49"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","8e50c798aa0293d3709b809da1d4ce14"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","f472400ccca3f60841c43aea92777a98"],["/2020/07/21/Node-js-与-epoll/index.html","b74bd0a194e531a7c35b50cb0b8ab7cd"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","989098a86751bab714c2f6195a82f5d7"],["/2021/03/02/总结一些测试vue组件的经验/index.html","b580ddf8d8f821027d026b127861c1e7"],["/2021/03/15/Purpose/index.html","a2ed1083af590b6837712022d3e87d32"],["/2021/03/16/和安全团队的斗智斗勇/index.html","d9d4dcd95c6fca10de2f783c1fb88788"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","045be19576168cf4a47502f6524ea97e"],["/2022/08/10/关于图片处理的一些事情/index.html","7624d8cb6f63f7973c7a542ef5344a6c"],["/404.html","8bd8ddac82c460049e5127e253a1a035"],["/about/index.html","5341f43c06c6efd86ffaded492d38562"],["/archive/index.html","d15235a78fb47be15486108460d5410b"],["/archives/2016/07/index.html","bfada74ecf101de4d0303ac2ac7a4d2b"],["/archives/2016/08/index.html","7525c6fce9c8dd70ad293fd5a6a30f3f"],["/archives/2016/09/index.html","d7985b64770defe84c70f4f4e615f2b4"],["/archives/2016/11/index.html","575be9102af9614533086b5c33b1e5d7"],["/archives/2016/11/page/2/index.html","e4b6a9c10a47c00f610ccac260ef06d2"],["/archives/2016/12/index.html","34645e74f444c3c8b193bc632fd384cc"],["/archives/2016/12/page/2/index.html","67c38df62a0862cf5578ef8a55b3fa3b"],["/archives/2016/index.html","cba0686f5d4ad42d3420309c658b2030"],["/archives/2016/page/2/index.html","c06cc974238bb02cb459cd0976ed887b"],["/archives/2016/page/3/index.html","396d641b91f2e612e57cd9599523ef3b"],["/archives/2016/page/4/index.html","dd92762bdfa9028a96d72952eb3d777e"],["/archives/2017/01/index.html","4efe7bf88d10994ac2a55046d242c4cb"],["/archives/2017/01/page/2/index.html","6b8a40238aefbe836308778a1564ff76"],["/archives/2017/02/index.html","6c7f2b1df11645994c45525389741a9d"],["/archives/2017/03/index.html","56783f9b95f741b3b2d47b78728e6866"],["/archives/2017/04/index.html","d4665bcec5ae3fa5c74650b8ec927108"],["/archives/2017/06/index.html","172f65b8e258df3ea3a76e7b45e866b8"],["/archives/2017/09/index.html","743f4afdbda516f149c7cd02c93e9797"],["/archives/2017/11/index.html","b5c442c9f89dccfb997f30e12af52a8c"],["/archives/2017/12/index.html","4df3f4927cd36ac8d0a502438427f344"],["/archives/2017/index.html","1297074117cdcb8b1c5e20030b46bfa7"],["/archives/2017/page/2/index.html","8923b2887204cd65b24195174b85c9d6"],["/archives/2017/page/3/index.html","d0af23ee3e26e31d9593c515ae9e6ef5"],["/archives/2017/page/4/index.html","74e2671e4eca7c58fb4408440552e3de"],["/archives/2018/06/index.html","5c241b1318164ed43b05207ded72d374"],["/archives/2018/07/index.html","10096e235932874634465d3e513c14cc"],["/archives/2018/08/index.html","ae4d8850ff0f820f94028f2cc3807b59"],["/archives/2018/09/index.html","81d6b1c13ca6ca9c82c80394bf8b87e0"],["/archives/2018/10/index.html","eb0a4aeaa177fa3be81f24598ff9af6c"],["/archives/2018/11/index.html","3d90b5c759224c8241f43969c879431e"],["/archives/2018/12/index.html","65248905227e53a6b06962d7288bea5c"],["/archives/2018/index.html","51214d21ae49b553962ce68674ab79a4"],["/archives/2018/page/2/index.html","46397983c65bd4a7948ed32dbc339f8a"],["/archives/2019/01/index.html","c587575a10666726e9a54c2086aaa05e"],["/archives/2019/02/index.html","d9f6e36ccc6ae014be63db6b24bf99fa"],["/archives/2019/05/index.html","fa51ba31d13082dd1ed3343e2368be40"],["/archives/2019/08/index.html","327b44136fe726d0d3800df16e1e4d8a"],["/archives/2019/10/index.html","59ab3b8dfac2647089666b82a4c36d94"],["/archives/2019/11/index.html","18c965a301d02597c448216a3d7561b6"],["/archives/2019/12/index.html","1b7081f273dd15f07f7c5665b3018f55"],["/archives/2019/index.html","679a9b7a3013cc60ba4da68523f9e959"],["/archives/2019/page/2/index.html","50cd39fbcbe962be6ae2b7d9fd3151d9"],["/archives/2020/04/index.html","557430f09c9fe2a3577bbd6f4b19e539"],["/archives/2020/05/index.html","9818e566bdd3f848592f61cfcb3491e2"],["/archives/2020/06/index.html","0aae8ac92a2bd422fcf032df6a232a8d"],["/archives/2020/07/index.html","6b6cf0e8514d3cf46660c661ad8aa490"],["/archives/2020/index.html","8c537236628b4f8a35ddf03619a35512"],["/archives/2021/01/index.html","03e18aeeae0047c78a6a562194826f99"],["/archives/2021/03/index.html","9f48fbdaf50a2f5c222aaf592dfa0d8f"],["/archives/2021/10/index.html","e6ff5cf74ce4af9d18bd1931dedd1dde"],["/archives/2021/index.html","c5cba6c013a0d5952ea0059176a1c645"],["/archives/2022/08/index.html","6083e413e010c5baa95b888fb72168fc"],["/archives/2022/index.html","8b0db3dd9b028a4f867c89e943be2aa6"],["/archives/index.html","f410a23af8446e7647b6e373341925db"],["/archives/page/10/index.html","90bd5c5357848fad363b1f5ec27ac95e"],["/archives/page/11/index.html","ef31e5b8757ec240db02b87e6cfc1869"],["/archives/page/12/index.html","1256a5173e4d4f5e1426438c18bfde1a"],["/archives/page/2/index.html","a61dd3c803c91873a349620a9f9d9657"],["/archives/page/3/index.html","e95b2d5e0851699dc90975b70b75c2d1"],["/archives/page/4/index.html","8acf640decd36ea5a4013eadfeee3241"],["/archives/page/5/index.html","c44b6156e67808c97c57c26e7633cae5"],["/archives/page/6/index.html","9232c462beb11fc9799a0b376ab2f706"],["/archives/page/7/index.html","cde359337064f4c7a00ce278db336cba"],["/archives/page/8/index.html","d7f2ad8abef61fda47f83ee86fd89a80"],["/archives/page/9/index.html","c6a3c0081720b61ddeac75b2ab96f2e1"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","64eca70a3a5db7e2287a7e6d9f92cdbe"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","b41edb41b915684a056f8b5f82892baf"],["/page/10/index.html","151e4db9416535548dc6bfdf1d82a961"],["/page/11/index.html","1cbb57f365bd75e7a693c5c7327ad278"],["/page/12/index.html","3b03a5b4c8dfdc52107f219b0f997fa2"],["/page/2/index.html","e1269ccd94fba09a642a85dd7d85c12a"],["/page/3/index.html","075d78e422104200cd0db700da62b5d8"],["/page/4/index.html","49d9a10eacf966fd858211121f7a4120"],["/page/5/index.html","cf1b4154c5a81b585e0b528caf244c3e"],["/page/6/index.html","1182b887a4dcf15dee855a4fb39bc5c2"],["/page/7/index.html","a78bd558f2c363457f40ec795c32fd23"],["/page/8/index.html","8a469608a802fb123af1400e42f5a270"],["/page/9/index.html","a83a400c347e363d29620da55372908c"],["/sw-register.js","dca3ad825607e12969b46ef7358ec78e"],["/tags/Android/index.html","46bf6bb40fb4b5b9cf514e1b5b964bba"],["/tags/Angular2/index.html","2b7dc3ab78efea5b86838f36967a9366"],["/tags/Babel/index.html","5d6bb6cf5a4f1ea7e186997940547ba8"],["/tags/C/index.html","d3fac25a3a9c3acbc66d5abaa0537d7f"],["/tags/CSS/index.html","09ddec0f04c4bcac1152ba6594cac3d4"],["/tags/Coffeescript/index.html","52dc0c87ae851cd153d72937939c4f1b"],["/tags/Compiler/index.html","9d787de21460d30b69683bb35f0be23d"],["/tags/Component/index.html","5d9df1cc8381468df1cb06eb9855bd49"],["/tags/Design-Pattern/index.html","2f0ffb5ba37acce1d724a436dbcfce69"],["/tags/Docker/index.html","ad9135c75b3bb9304549a4cdbf1af6b0"],["/tags/ES6/index.html","25f6985af688c078605bfcce69f0d330"],["/tags/Game/index.html","c3ba78e7ea15b575027abfbe2e26e2bc"],["/tags/Gulp/index.html","59749a577494048c173964994b4c7dff"],["/tags/Hybird/index.html","a5086d1b6fa3bdb39259aa657c3288e7"],["/tags/JIT/index.html","66fd645be56e1c4d2dd52e9695c59ec4"],["/tags/Javascirpt/index.html","0dc9e94592c57c601542c45b9413ac2f"],["/tags/Javascript/index.html","21be33a114a433da1d796f739604e428"],["/tags/Jest/index.html","cba5ccf0c01c8782bfe5a118c940f437"],["/tags/LeetCode/index.html","c185d4784cbf864a5422ca25bb5073d5"],["/tags/LeetCode/page/2/index.html","893c819174256ce39f30c46873c4610c"],["/tags/LeetCode/page/3/index.html","7a6b542d63e7c55c23dcef9352099d3d"],["/tags/Leetcode/index.html","bcab2e7bf8215a7fe7379284292efde8"],["/tags/Linux/index.html","7b54c24506c1faad71489f98c65b6451"],["/tags/Lyrics/index.html","bbc7df60ffdab9d5b873a96daccf69b0"],["/tags/Mobx/index.html","ecea061b21728d8da235f2fef931735c"],["/tags/Mocha/index.html","87760236cee469935f541e6bb64d1fd9"],["/tags/Module/index.html","b1125a07bbd42f486bb87c0551b8c1e3"],["/tags/Node-js/index.html","a7eee5be74e25db900b2610093c9b0f1"],["/tags/Node/index.html","d3785283c959d04b5d4a46cb6149438c"],["/tags/Note/index.html","1ddb8d1b380ddae3d7a4da11fd200024"],["/tags/Object-C/index.html","cde0ba3eebce7194a3a84edfedbb1d72"],["/tags/Objective-C/index.html","70b3cad051056c3b789647edee148a5c"],["/tags/PHP/index.html","d144324dc1960e7bf285b4f9ccc82af5"],["/tags/Python/index.html","fd269d1a83ce387879309c62e5acbfbe"],["/tags/Python/page/2/index.html","da1778b1a0c28fec29e45db6010df36d"],["/tags/Python/page/3/index.html","5a622d5d080353a30e3c8a3baa2f6df5"],["/tags/React-js/index.html","0c2130b63fb0884b5f81b102b9921126"],["/tags/React/index.html","2750483b6535e5a9540e17aa43ad76a1"],["/tags/Redux/index.html","aaf3d66afe26c6d1222d2d5a001430b3"],["/tags/Require-js/index.html","00cece213852f1ad6888ae8a6f6fcd29"],["/tags/SSR/index.html","2b5bd44e6ae6bf1eddc9285a33ed03f1"],["/tags/SegmentFault/index.html","68eee26ca69556090d868bf06281dc6a"],["/tags/Swift/index.html","3fef6ab0e915aa26096e633156510b0c"],["/tags/Template-Engine/index.html","ec108eb762d904a5e733b34fae5b3e02"],["/tags/Test/index.html","6916aadad9aafbe5e971471885bd21da"],["/tags/Twig/index.html","e11ae8e50c1de318f465a02fdf0e5a19"],["/tags/Typescript/index.html","c10378ac31d207f6c97a93b39eaa6e53"],["/tags/V8/index.html","e1a6dccec45a132b5c022129039a214e"],["/tags/WebAPI/index.html","7d90adf566ac0e20a414860fe29868a3"],["/tags/Webpack/index.html","5d3952afc76f5ab39e9087d2fd02fb57"],["/tags/Webview/index.html","1d29eb528719571c7732cd0ecb07aebb"],["/tags/Windows/index.html","b88a408cc48315e18784d71f64ff1ebe"],["/tags/babel/index.html","0d1f6c3f462d5d1a39958cf19ffc0aff"],["/tags/base64/index.html","47a987a502593e1f05f3411722232204"],["/tags/bootstrap/index.html","7c4d27f5a54427f32656484dcc293f30"],["/tags/ci/index.html","df3a062d2f54c15b92af4d1d2be5a986"],["/tags/codepen/index.html","e6a549afb160f5b692d9b5752ec76800"],["/tags/compact/index.html","0dda4547c93853d93886385cbe04bf9b"],["/tags/css/index.html","ff7aad50ccc4f3a8884f99b4184836c7"],["/tags/database/index.html","f6c29c2cdc214c0761ec0be2c2e2ac0e"],["/tags/docker/index.html","a86dec45ad54aaf006687594f2043dd2"],["/tags/event/index.html","912dc2c617923cd1531c572e2f942ac9"],["/tags/facebook/index.html","53eee410f32c9f6ea1bcc12150421f9b"],["/tags/flask/index.html","e5ae595ddc94021e9796b74bb2f9d01e"],["/tags/flow/index.html","207dcd92ce17d8ff9ff9b32923a60261"],["/tags/i18n/index.html","32fc314f23bb9221b45a55e7d2ede980"],["/tags/iOS/index.html","741f79bf3a62cf6ceb0aeeb93b4ef3fb"],["/tags/iOS/page/2/index.html","c736c49a20ad10c63450d5b07bfb4ba5"],["/tags/index.html","1d2a9bcccff102d3131b6da8ae6c25e9"],["/tags/javascirpt/index.html","03a34914177ea114146e2775454f360e"],["/tags/jest/index.html","790047d1b567ae9282822135d447541a"],["/tags/jquery/index.html","086635dcd18150f3552c1c4132aa9101"],["/tags/life/index.html","856fefb4ce5347e9aaa4d6d9143931df"],["/tags/lyrics/index.html","7d01e7954701fd08a5b72d9e646d3109"],["/tags/node/index.html","243ec604ef81f84754d12b9208bb7ba2"],["/tags/npm/index.html","d3ac3d5c7b3ef7632933c522fe264b4a"],["/tags/pwn/index.html","e6db4de7f002c301a71c58e3bafc6b99"],["/tags/python/index.html","d2038e401f36502f1d4e515e801eed23"],["/tags/reactive/index.html","f402d1fc42fe68a97b5558efb3fd5055"],["/tags/shell/index.html","5abcd30d28154dfedb6248dad5025a21"],["/tags/ssh/index.html","33b3391de18cfff958bd09a1c7186f61"],["/tags/svg/index.html","b9e11b7fbba3a2c8cfd687d2c658e20b"],["/tags/translate/index.html","578a861cb2f709537df90ea06d1f6a74"],["/tags/translation/index.html","eb6b4675c7faba95e0428c8ca24d657f"],["/tags/typescript/index.html","593e80942e4fd5e4b44f186ddb2c4dec"],["/tags/underscore/index.html","50d1412c198fb9420b57060795d1e154"],["/tags/video-js/index.html","31fc9f1453f7bfb3f6436e0e6c41c8fc"],["/tags/webpack/index.html","830f19d83500e221e977fe89c98e293f"],["/tags/web安全/index.html","1fda1ad61ae43a49a514edac71f94684"],["/tags/函数式编程/index.html","2dd22e0531fecc76d230ae6c44b0908b"],["/tags/各种开发者大会/index.html","5e8831b4eaa924449f4a26658e898096"],["/tags/文档/index.html","a185b034939cfc56f1b694c9a9ea2124"],["/tags/构建工具/index.html","9a8042cc04d9c2d77cf746ea53a83ab8"],["/tags/测试/index.html","5863c706716101b29fc687c8fe4682a4"],["/tags/生活/index.html","e2ed2aff18024b56bd899bb2b4e00454"],["/tags/笔记/index.html","cc23c56150e48d071e65526d76341ba1"],["/tags/读书笔记/index.html","e0a7671d9a67a20e8f33ac3dd2e62701"],["/tags/逆向/index.html","558e7f06761c05ba5bb90528dbf4df8b"],["/tags/随笔/index.html","ab4e263e230fd65369c1ff720950daf5"],["/tags/－-Test-Karma/index.html","0084e5c224546a7fd0ec27be4e2f8d49"],["/tags/－-杂谈/index.html","5533a6ace0ae358e713302f7993bffa5"],["/tags/－生活/index.html","7fa6a70b22cd0eed86a1c6a6ecdec42c"]];
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
