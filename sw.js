/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/blog/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/blog/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/blog/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/blog/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/blog/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/blog/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/blog/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/blog/2016/07/28/Hello-Hexo/index.html","6e0ca7de22f3cb880b67aa9667b2705b"],["/blog/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/blog/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/blog/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/blog/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/blog/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/blog/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/blog/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/blog/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/blog/2016/08/08/A-intresting-js/index.html","44c3194a0f349fea9068ffa1443385cc"],["/blog/2016/09/02/The-inherit-in-javascript/index.html","80534980895da19d260d0bebfa73e8e6"],["/blog/2016/09/20/令人伤心的博客碎片/index.html","e8d47484b0cda9e87064d50531937f0d"],["/blog/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","5e9296133c6438ba779971cb13513ce3"],["/blog/2016/11/13/LeetCode-112-Path-Sum/index.html","3b6a9d5f118336ddec730454fd250a03"],["/blog/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","dc49ca9e1ae18d59abefb4d2d37d5fcb"],["/blog/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","d6ebcf33baeaf46e15e65396763995c2"],["/blog/2016/11/14/爬虫的意义在哪里？/index.html","cd15c32d0f5f9f7eb8e2fd306c9c7228"],["/blog/2016/11/15/LeetCode-202-Happy-Number/index.html","30d0aad72aea0c85219f518bcbba47f6"],["/blog/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","69e92e502c6b53bfdabed8fe5112e9d3"],["/blog/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","de0298b62a278814d8f83cdea99ef0ac"],["/blog/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","11d9ff90d169d67354fdd22160fa1f52"],["/blog/2016/11/23/LeetCode-455-Assign-Cookies/index.html","c45de609da4d4cf1d8621606987ae882"],["/blog/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","d02db006914d710b52c71558a72cc2b8"],["/blog/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/blog/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/blog/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/blog/2016/11/28/Docker学习笔记/index.html","0fa58c3c7b36032a907669d287dda093"],["/blog/2016/11/28/LeetCode-190-Reversed-Bits/index.html","145821259c3f91c3e1eae2748080da36"],["/blog/2016/11/28/SegmentFault开发文档笔记/index.html","8c604c35ad30d54599537368b200d67e"],["/blog/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","78c9ec69a84f4217019c83a58bdf1a2f"],["/blog/2016/11/29/Twig模板引擎学习笔记/index.html","5bfb90b8f255bfcfc567c3c6ef48e975"],["/blog/2016/11/30/Angular2-Typescript入门笔记/index.html","877d6b009cd87eb634728486a0ee5fd5"],["/blog/2016/11/30/compositionstart事件/index.html","e03e52596b9a08f6069758e4d3a39019"],["/blog/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","3c3ea5f0ff2aebefb03e13de99290dca"],["/blog/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/blog/2016/12/07/Javascript各种模块引入机制比较/index.html","0ffc5638378893d34cdd983ee563b669"],["/blog/2016/12/07/LeetCode-415-Add-Strings/index.html","e27438f65a3e9039c15d555cf1bdba35"],["/blog/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","8a405889829d8070b62603a70021d259"],["/blog/2016/12/08/SegmentFault-gulp配置笔记/index.html","5adf28f86d27d8322f3b7f9a48e57efa"],["/blog/2016/12/10/SFDC笔记/index.html","816693e1ce25a3ee1c669e901db94f02"],["/blog/2016/12/13/LeetCode-396-Rotate-Function/index.html","363e47887ba27f65077438f6f34c0126"],["/blog/2016/12/13/深入浅出node-js-笔记/index.html","913bd2b522880d9685f54a25d7ef245f"],["/blog/2016/12/17/LeetCode-274-H-index/index.html","67c91c6aba3bb83e01ce630ee484251c"],["/blog/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","340dd864d98f3d08a9cba22b6a4c4d1c"],["/blog/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","fba667217b8cc8a11439ed4caa112a37"],["/blog/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","049086a61e2ccc13ede079b70654e678"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/index.html","94479a6471d25050ef64697ae1319ae3"],["/blog/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","895e302312c518e71b575696f2d4bd90"],["/blog/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","9f75690a9ed636bcec6a631f653d3e39"],["/blog/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","35aa324c8b8df3c6db751ca2b3d58e52"],["/blog/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","a6d5a0ab52997139c5f53f759568b80d"],["/blog/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","bd80d1a2514c068eac1d2a2220d83996"],["/blog/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","f265aeee5d0275a4d4d34b4740c6aada"],["/blog/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","58ee2673c636744db1302300d79e8eb2"],["/blog/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","ad7542c2d016aebc5964fa17b8452e80"],["/blog/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","a2b116db054cd62e9f348de44c4dab1f"],["/blog/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","ade86b46459428840e2df67bbc0a7a03"],["/blog/2017/01/09/LeetCode-397-Integer-Replacement/index.html","66410f0a2cef82fbb985551427a1e984"],["/blog/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","343dac2da01f5b28694290079b355351"],["/blog/2017/01/10/Ng-Angular1-x复习笔记/index.html","2d33796731ef6f0fd539e76e63867f64"],["/blog/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","04526577e3d668c8a4757aa7c295cd9a"],["/blog/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","4af6f623e770707451feddc3ed7b6dc4"],["/blog/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","d9b522ed778ba3712624ebf801da8f1a"],["/blog/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","84c7ea8a729a751bcb9fa9b236023fc6"],["/blog/2017/01/22/Javascript忍者秘籍-读后感/index.html","5f5e6dec612b514e2326882464282193"],["/blog/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","b69a0ca7c6eb185624b520fffe3a339e"],["/blog/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/blog/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","d72dd4acd8c04ce2ea814e9604124311"],["/blog/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","7d3ce5b1f7f918d906eb3ba48369a657"],["/blog/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","da632335b8e33572c4aa789ddc076841"],["/blog/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","7431722346647baab688a35a187a1d7e"],["/blog/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","f713011c6c418bac755e43175d66ac78"],["/blog/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","6c39187b323f5b146c39dbf24ded4099"],["/blog/2017/03/03/Google-Android-System-learning/index.html","253e8f713d2710fea2c0ca3c70ab31f8"],["/blog/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","7e0f386ef7cdb38332930987a8cdf6cb"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","253cff23b33ff93f5fb6ae07c9046466"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/blog/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","6efb4b3583ae42f07bfdfba62b3643f2"],["/blog/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","aa7bfa83aec9d532cb0c8b6c6221f8fe"],["/blog/2017/03/30/鹅厂打工日记-Mocha/index.html","15dc09f0cdaad602c1bca8f3ddc73048"],["/blog/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","c42b7fd80d5b5b5864a4d45962ed48ac"],["/blog/2017/04/14/鹅厂打工日记-Webpack原理/index.html","7d7c67295c8d3f873b6f908ff9bf38c8"],["/blog/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","64608d57294e9ed7a84e0750de52fd81"],["/blog/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","a78cbbd487a5079a0c7fcea38228b793"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/index.html","535ba19c38593d0bcec7c7142e8b1529"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/blog/2017/06/22/Hybird的关键：WebView相关-1/index.html","dc2a065bc7f8b14bf4c7080d5a045370"],["/blog/2017/09/08/编写Webpack插件笔记/index.html","8321220422f7ec5551f18a2daf4d00f2"],["/blog/2017/11/30/Mobx学习笔记/index.html","bc1e329afa006b77bff3bc30c0d34c3e"],["/blog/2017/11/30/Test-travis-ci/index.html","1169db39702e751663d078d218ef42fb"],["/blog/2017/12/01/Use-flow-type-in-React-project/index.html","c1b67a2e40b7c059104b6e11e0fd3c40"],["/blog/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","2f5ee264f3b826101e765ce0a1a1e171"],["/blog/2018/06/26/flex-end-make-scrollbar-disappear/index.html","97e00ce5cb42cfc0f096fee3685c55bf"],["/blog/2018/06/26/redux-state-change-but-react-not-render/index.html","51c2e5e19cdbc9591bc206f8617e1a0f"],["/blog/2018/07/02/阅读代码和英文文章小技巧/index.html","4cd66ffcfbb6c30bcddabc53ee446b78"],["/blog/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","32fb08ac5b01123f06fb6bfc14753840"],["/blog/2018/07/31/SDT自我决定理论/index.html","f3c7b7d140952e2cefe00664e30b2aa7"],["/blog/2018/08/04/React16源码解析-As-required-order/index.html","831f36d8935d59b703a1aa617c9d7552"],["/blog/2018/08/05/React16源码解析（Fiber）/index.html","ebe0b2ddffb8fc5f4400f97267016f1a"],["/blog/2018/08/05/React16源码解析（ReactDOM）/index.html","663e31b49c99c83c2b07e4518b9418ef"],["/blog/2018/08/27/释放webpack的真正潜力/index.html","59ecac18ab95d4c5f63ca7e3f8637679"],["/blog/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/blog/2018/08/30/iOS-webview-scrolling-issue/index.html","46ae8c23902245e6911c61dabac6d4c3"],["/blog/2018/09/17/升级到Babel-7的经验/index.html","389102f6280d44796b838ea7f667cea4"],["/blog/2018/10/16/React-tip组件的设计/index.html","e8620a0c1d397d84c28bf016ae2b8a07"],["/blog/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","6776a3f9b78c931e0dc90b5ab3b6b776"],["/blog/2018/12/08/jenkins问题定位/index.html","c2b91e216568205f54e00ca71899bf67"],["/blog/2018/12/21/React-SSR实践-压测/index.html","435cb0a1a5a26a881d56d1388e02807a"],["/blog/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","c17b7f1330ed5bf1ab9ed17b237f8d13"],["/blog/2019/01/21/item2-profile-config/index.html","38948ce1948e31c80b1bf69549ba9c19"],["/blog/2019/01/22/i18n-about-Access-Language/index.html","20d56055e978650502bda722bfea714e"],["/blog/2019/02/27/Node-C-addon-学习笔记/index.html","ed224f94844c43d7bea65b796fb69b38"],["/blog/2019/05/16/Modern-Crusaders/index.html","8b691909cde6fd43ddcac82ee6992056"],["/blog/2019/05/22/使用docker构建老旧的前端项目/index.html","895f4d586d934aaf556e6d2e5b598157"],["/blog/2019/08/28/关于docker使用的一些记录/index.html","a72e71ef4da7eff98c9597b1e2a129cd"],["/blog/2019/08/30/全干工程师的基本素养/index.html","95f5ffea3a08ecea04bcaa44f4038052"],["/blog/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","7d7d437e1594ce3825f057beabc6601a"],["/blog/2019/11/05/Node中的C-与Javascript如何连接/index.html","d02bfa9837bfe510dd832b48039fa21a"],["/blog/2019/12/02/One-example-of-Typescript-generics/index.html","a60280d6db64d91911f830afbf6e2645"],["/blog/2019/12/04/有趣的上网冲浪之旅/index.html","e2e82e4a8dd8b1d0a6ba4fd46391d037"],["/blog/2020/04/17/企业微信国际化方案总结/index.html","143b1cbfd0a01dce27402337189f9561"],["/blog/2020/04/27/come-on-sweet-death/index.html","98a1f2e0fe05b916de8e266b6d0fb502"],["/blog/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","0b2c929ec7761e1387f6bfad55ef6a44"],["/blog/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","161aaf3ad66e00b9ce44150ab18ac80f"],["/blog/2020/05/28/525-Contiguous-Array/index.html","b676d3d77ee421e91b1de99e59a3405d"],["/blog/2020/06/01/LeetCode-207-Course-Schedule/index.html","fdbc0b62c2cad8b20c871c9b8bf2d34e"],["/blog/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","1a45a1fe5674d62bbee38c16ecd11077"],["/blog/2020/07/21/Node-js-与-epoll/index.html","a441b26978cd025bb1fa46514f500e8e"],["/blog/2021/01/14/记录一个babel编译typescript代码的坑/index.html","2e8d451c16d70a871ecfca3b8e7b350b"],["/blog/2021/03/02/总结一些测试vue组件的经验/index.html","fabd9a434ab5d443734e13291d8a0077"],["/blog/2021/03/15/Purpose/index.html","c272a9cb01dd2bff5a10815b337f50f3"],["/blog/2021/03/16/和安全团队的斗智斗勇/index.html","73f6d1d42bc6a190b27e2eae11d054cc"],["/blog/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","f4fc3fb5f387684d95e0db5002ec691d"],["/blog/2022/08/10/关于图片处理的一些事情/index.html","18ee29ed83fe000175116572e87a289a"],["/blog/404.html","3ca81638972205c17567a2c6320b0244"],["/blog/about/index.html","5155641fc8d85e162eb1e40b054b9bf7"],["/blog/archive/index.html","471960077c6c19de19b6febf00cb090b"],["/blog/archives/2016/07/index.html","74b4aa6cb5cdc375c094091afe663642"],["/blog/archives/2016/08/index.html","aad723dcf0033ffd237e7c6cf5c26b10"],["/blog/archives/2016/09/index.html","e3724655734520ca5c4de960f244d7f0"],["/blog/archives/2016/11/index.html","0ee1d352520e1e6cf6600f0b638c5025"],["/blog/archives/2016/11/page/2/index.html","0db2de47747bf4e87696c50d413d7369"],["/blog/archives/2016/12/index.html","e072e2c7002f1424b71760e93eb27d52"],["/blog/archives/2016/12/page/2/index.html","1d271b9a115c5888ef3480466a0b4da0"],["/blog/archives/2016/index.html","766a8a8ff22fa22efda71c55e95351dc"],["/blog/archives/2016/page/2/index.html","83665576aac0d24e557c4e4cd0e72451"],["/blog/archives/2016/page/3/index.html","5ecb17137b30dd4c32296c797812e2c0"],["/blog/archives/2016/page/4/index.html","850cc093143d0cdd0a68a9d11cc01321"],["/blog/archives/2017/01/index.html","b0548ce83d4d16b1b04ce3d6479f3c71"],["/blog/archives/2017/01/page/2/index.html","6cb79b036d5f71f25a003c8a0d771856"],["/blog/archives/2017/02/index.html","3091119d0b30aece5f8e68630e26123c"],["/blog/archives/2017/03/index.html","385d6c9320b18df764ba8612b4ba38ef"],["/blog/archives/2017/04/index.html","978ad73202ddb526a34bba0e58978715"],["/blog/archives/2017/06/index.html","e8603ecc0e3d4520c5dea9cac3cb7f62"],["/blog/archives/2017/09/index.html","2b264908b2512a096bd367c19a75de05"],["/blog/archives/2017/11/index.html","837952b4e2cd8bf995729b9cefa9aaf6"],["/blog/archives/2017/12/index.html","c016880f712077e5669354d0cdf1796e"],["/blog/archives/2017/index.html","ed4866fd778766abd042fdd69d039ef0"],["/blog/archives/2017/page/2/index.html","a94865c09f4503109f17c2f195a3b1fc"],["/blog/archives/2017/page/3/index.html","e824b26096f8f817ed9180baf034f776"],["/blog/archives/2017/page/4/index.html","4fdbcc76f3b4eea5ab21039b3e53a36f"],["/blog/archives/2018/06/index.html","1fed5ca08b4fded48d58b60e32e62b61"],["/blog/archives/2018/07/index.html","c39c1eb912a280b14eb5ce152ebb62fd"],["/blog/archives/2018/08/index.html","7ae69b80d57dee7b8c93e0fede0d2e39"],["/blog/archives/2018/09/index.html","d571e7e0739c9ac1491f936c84d090e3"],["/blog/archives/2018/10/index.html","4d55779cc32e04ca1147ef08c5b87237"],["/blog/archives/2018/11/index.html","531f0966e88d72bcddac659801900e39"],["/blog/archives/2018/12/index.html","9cd4947704ec64ac112968ee74da8a76"],["/blog/archives/2018/index.html","3a1ba4e2443e977b2eacfb5c7b4c6b47"],["/blog/archives/2018/page/2/index.html","c5c17aee4cb887b46f3f1fddadba5359"],["/blog/archives/2019/01/index.html","6da94775bfb711aa0ea3c08542ff815a"],["/blog/archives/2019/02/index.html","8b1d5e6619f6ec7887278b0fe264514e"],["/blog/archives/2019/05/index.html","a9faf22bad89f948651c7759666ef38d"],["/blog/archives/2019/08/index.html","b67f5f6d37e8c6d0b0a9504aa0b941c3"],["/blog/archives/2019/10/index.html","1d2d1d751e4c3edfb8e6617ee196c359"],["/blog/archives/2019/11/index.html","8f65ce5616779fd88225bd749ab558c6"],["/blog/archives/2019/12/index.html","0bc085deda02d19684e0683f33cc02da"],["/blog/archives/2019/index.html","af43d656366193f7ed2c732399094128"],["/blog/archives/2019/page/2/index.html","ca14c6898f021b63c734e2852d5cc34f"],["/blog/archives/2020/04/index.html","cba8f219e2e213da2f0c98ce29d553ca"],["/blog/archives/2020/05/index.html","52a4ce4e74c748809dd8879fb2fdb464"],["/blog/archives/2020/06/index.html","a6a8ba2b5209ae7efe043cf9cc60005e"],["/blog/archives/2020/07/index.html","590396ef57a5eba73f40a5f2aa3a6e7f"],["/blog/archives/2020/index.html","8376abbb2d990056a1c243cb4f4dc2bc"],["/blog/archives/2021/01/index.html","6eff6ae5d6a18305c5ca6284d8f11934"],["/blog/archives/2021/03/index.html","f78c533bf8658a793a0fdcfa2f21b91a"],["/blog/archives/2021/10/index.html","9eb6a85857b24c0bf7250f376a905325"],["/blog/archives/2021/index.html","12f808d76fa3dede049c6a3f04812539"],["/blog/archives/2022/08/index.html","834bd63b04dc7cc517b240664ac64021"],["/blog/archives/2022/index.html","0f592df23aea9313c2167413c19e3cb7"],["/blog/archives/index.html","b0de01b59a49f4a5e4ca834734219205"],["/blog/archives/page/10/index.html","3529b1e13da874d3a5e6208d3de18edd"],["/blog/archives/page/11/index.html","d0563b23704c73ba68f8ef0c6063f2b1"],["/blog/archives/page/12/index.html","dd25102be718890932f0ddf8f0698bf5"],["/blog/archives/page/2/index.html","f9aabfc0f568728c4b32dbb31fcf1832"],["/blog/archives/page/3/index.html","3b5f360b51624b38ed7f5bbadff17742"],["/blog/archives/page/4/index.html","13397586d43bb25e981ab1a433cd22bb"],["/blog/archives/page/5/index.html","8fabdb2b3b49091f639966de85938727"],["/blog/archives/page/6/index.html","88329b0165a7bdbe6f4484117bb20dc9"],["/blog/archives/page/7/index.html","67fcb04914d194986780356ebbf45cd2"],["/blog/archives/page/8/index.html","cd4ca0804729fad596b414e63446ea1c"],["/blog/archives/page/9/index.html","767eb21658f6f36cbcce22107f0f482e"],["/blog/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/blog/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/blog/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/blog/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/blog/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/blog/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/blog/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/blog/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/blog/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/blog/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/blog/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/blog/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/blog/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/blog/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/blog/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/blog/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/blog/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/blog/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/blog/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/blog/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/blog/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/blog/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/blog/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/blog/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/blog/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/blog/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/blog/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/blog/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/blog/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/blog/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/blog/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/blog/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/blog/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/blog/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/blog/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/blog/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/blog/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/blog/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/blog/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/blog/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/blog/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/blog/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/blog/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/blog/index.html","05c2e274322e67804cf9efdf6849560c"],["/blog/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/blog/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/blog/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/blog/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/blog/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/blog/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/blog/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/blog/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/blog/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/blog/leetcode/index.html","e8e747e38352bad4cb13a1575a65b124"],["/blog/page/10/index.html","bd707cd32b15e85c79c4122f66285224"],["/blog/page/11/index.html","a01e3e2b8f312d559e63822a250af85f"],["/blog/page/12/index.html","73f2fcee54e2bdc1117b117a33c2e664"],["/blog/page/2/index.html","dd54b53d145509ebacf4bdfca137e40a"],["/blog/page/3/index.html","36eeda216bffe426179e6c79a89c018d"],["/blog/page/4/index.html","86171bfa4ced132a7155417dda71bed1"],["/blog/page/5/index.html","bf2a97175f6d81ff15a855ae0ef40c78"],["/blog/page/6/index.html","0ef386c2cab4f04c46864dce4317eca9"],["/blog/page/7/index.html","c458fd9b594e085cc78f7ed5c367f333"],["/blog/page/8/index.html","31cc56f61f6bf237f06f22d4ba4e036f"],["/blog/page/9/index.html","a48848777826ef2bb55dc94d54bc1c7f"],["/blog/sw-register.js","75aea7857bdcc7ccf0e937626f56aa14"],["/blog/tags/Android/index.html","90a39e7a76e090bba8b589589427abe4"],["/blog/tags/Angular2/index.html","29a762cd46e23c727d57a80246a28152"],["/blog/tags/Babel/index.html","0701d988d5840c666a7149e78c21b8a6"],["/blog/tags/C/index.html","177035f55f1dc4fca1f60b6e281560e3"],["/blog/tags/CSS/index.html","9718d1124a5990825ca8acd818d91b92"],["/blog/tags/Coffeescript/index.html","78b10cea18d9d6b7aae59d1da37823c9"],["/blog/tags/Compiler/index.html","2a163c681be6297decc9904758011875"],["/blog/tags/Component/index.html","5864b7c98399798003dae085fdd5e146"],["/blog/tags/Design-Pattern/index.html","fc22089fc55026513c1bc691d3fa11ed"],["/blog/tags/Docker/index.html","c54b9922b2f3411483bbf3003c76cc60"],["/blog/tags/ES6/index.html","0ec9953c2d9767ba298b6bab4854b477"],["/blog/tags/Game/index.html","5788b1caf8ef97b5a60a2f94090149dd"],["/blog/tags/Gulp/index.html","75ff03745122a3fb2b58bea1585709af"],["/blog/tags/Hybird/index.html","3ee8eb86f6d1ec64d050142e7c9eb77e"],["/blog/tags/JIT/index.html","f8787176dcb8e207ece7610196139ecd"],["/blog/tags/Javascirpt/index.html","56c7bf3677e0c65d53ee54cc14857128"],["/blog/tags/Javascript/index.html","47ba6c6b2686fc581875678577e0bbc5"],["/blog/tags/Jest/index.html","95a28b64274cb4b13999ac0aa10582c9"],["/blog/tags/LeetCode/index.html","4245bd90996d2d1f89dd976e3a65278f"],["/blog/tags/LeetCode/page/2/index.html","a646f7d91cc7fdde9065816c5703a063"],["/blog/tags/LeetCode/page/3/index.html","9908badcb1b1d6603533e9c7520ff088"],["/blog/tags/Leetcode/index.html","10ddc585fc8fe4457039e6e649a81cc8"],["/blog/tags/Linux/index.html","7fa205df67817a0c7272d959983457f5"],["/blog/tags/Lyrics/index.html","b6515005e464644ac238ce3d4ce3e0b4"],["/blog/tags/Mobx/index.html","574581ec8ebe046ff8e914fc37094d68"],["/blog/tags/Mocha/index.html","4acbe078e0974710f944c4f6a136117e"],["/blog/tags/Module/index.html","4e0483a337d43fc7401e22e9d8a0a393"],["/blog/tags/Node-js/index.html","c0d333ea7b2c8c0a41dfeb8ec7207340"],["/blog/tags/Node/index.html","6a50bac841effad10b9ab2338b426b9f"],["/blog/tags/Note/index.html","bab8efef93761450749fb7f5612a0e99"],["/blog/tags/Object-C/index.html","53b5638864975eda4c8d10ddc28e90e3"],["/blog/tags/Objective-C/index.html","eb30993beca5b728076386a2ee3802e9"],["/blog/tags/PHP/index.html","490e1613af2127ca935b8a4f09835ca3"],["/blog/tags/Python/index.html","5caa86276f639cd97871ff1c3405ce1d"],["/blog/tags/Python/page/2/index.html","34ca51a9c9b971deaf1f32f80286fd4c"],["/blog/tags/Python/page/3/index.html","9c9db7257eb7acf51b6d1626b181b302"],["/blog/tags/React-js/index.html","301c6fa7aa665256f7abacf566a1c3bc"],["/blog/tags/React/index.html","206ad44dc1df1aad452ef88ce149df68"],["/blog/tags/Redux/index.html","7985a35eadb81e0c41f7b50da1059c18"],["/blog/tags/Require-js/index.html","e2231e3a9ac325792ff8e80cc547067b"],["/blog/tags/SSR/index.html","81f22205531705986602010450de2529"],["/blog/tags/SegmentFault/index.html","869614b48ab0a0dadf326e94b8b8a8b5"],["/blog/tags/Swift/index.html","5bdab10e02b131f028cfd1d067c25a7b"],["/blog/tags/Template-Engine/index.html","e777af807ce9a0c40c6c63b5e6a31c50"],["/blog/tags/Test/index.html","8f309d8fb2d9909e853f4c0dab8043f6"],["/blog/tags/Twig/index.html","aa0b71aea4d89388b1e41e53f7cd4304"],["/blog/tags/Typescript/index.html","9dc7f3dafd18a59d336dd36add2493cd"],["/blog/tags/V8/index.html","d4fefa9f1c30e7a2a61d350f30624e61"],["/blog/tags/WebAPI/index.html","ed90a6ef1cf58f460cba2e634fed26d3"],["/blog/tags/Webpack/index.html","f1279618de8ac9a0aa806eda1ec8bbc8"],["/blog/tags/Webview/index.html","1a0249fd4e22dc01855f6ff8f3352ba2"],["/blog/tags/Windows/index.html","5c67b0ffa118196dc2a6478a3b71ba94"],["/blog/tags/babel/index.html","eae0dc9be46355ea401a9a3b0c8ca061"],["/blog/tags/base64/index.html","06722cec46cd340c2235191e5429fa0c"],["/blog/tags/bootstrap/index.html","cabe16b034119355b8e9016f6b5af846"],["/blog/tags/ci/index.html","17c743442ee6b6d3bf64b2724dacc4e5"],["/blog/tags/codepen/index.html","44522f7390da62856d04b4f1f37dc06e"],["/blog/tags/compact/index.html","897a2d61d799adaceebeef87a9052d53"],["/blog/tags/css/index.html","5b0625a02d789327bf42d21feddc99ee"],["/blog/tags/database/index.html","1ca8d4a7e525fab6f8aadc3aabd8d87d"],["/blog/tags/docker/index.html","eeec06ec330beb3ab8624bcbd2cc67f4"],["/blog/tags/event/index.html","29c82deb9456da9e2278db25a7756ea1"],["/blog/tags/facebook/index.html","02c647434e53653f56b30fc8b2460afa"],["/blog/tags/flask/index.html","9755429258b278041e1321f761e99485"],["/blog/tags/flow/index.html","af7cb058b7fe2dd11b7dffd69d603457"],["/blog/tags/i18n/index.html","9a9599151e85eb24981530a4c0fb3f61"],["/blog/tags/iOS/index.html","9e37074fd8570a889c422c82dd414b4d"],["/blog/tags/iOS/page/2/index.html","2e987360142df02e85ee7a7ede7d124d"],["/blog/tags/index.html","08f2b81a890cf42e9556b1653f1b0686"],["/blog/tags/javascirpt/index.html","71b9b919d414ff9f6d8fd7498c218e0a"],["/blog/tags/jest/index.html","25d4adbc6f283948d937330f04d034cf"],["/blog/tags/jquery/index.html","2e8b1917072a06af17e87d1e6e2d367a"],["/blog/tags/life/index.html","b9a58f2a85950ab3ea9322d56f254990"],["/blog/tags/lyrics/index.html","7e6c1f7a9fe7c6a5fdbc443790d920cd"],["/blog/tags/node/index.html","74376bfdb3229349fe99f325c76cdcdd"],["/blog/tags/npm/index.html","2dc67ac81bccdbde52ec6ec3768ef20d"],["/blog/tags/pwn/index.html","799bcfd6f60191fb45ee0556100eca54"],["/blog/tags/python/index.html","920b033eb1822ed57f14479c2ebb0671"],["/blog/tags/reactive/index.html","54ec28ce70ac931aeaa71bb4b08f0de7"],["/blog/tags/shell/index.html","770e549f64382452dd612b46826df24e"],["/blog/tags/ssh/index.html","448db3b69c9c71a812cfdc18cc4cfc62"],["/blog/tags/svg/index.html","72a75587e23da64cf2c4e555f33cf015"],["/blog/tags/translate/index.html","24139f8c1e208cac3ae4bb1967b3314b"],["/blog/tags/translation/index.html","a01e13815cf9a08a781b85d0e1e9905a"],["/blog/tags/typescript/index.html","8dc8174f27db0c2228d8ef47109aea58"],["/blog/tags/underscore/index.html","ecfe04205c07df8379bc216a1bc5d962"],["/blog/tags/video-js/index.html","8083524a79c108bec1bd2f0abfdbff8c"],["/blog/tags/webpack/index.html","d58daeff2307d8d3429e17c654f54675"],["/blog/tags/web安全/index.html","2692651fc90928c7fd50d708f10d9442"],["/blog/tags/函数式编程/index.html","9e79397c0a1494172c572e33be824b93"],["/blog/tags/各种开发者大会/index.html","ae48cf648ceac9522ca2bc0ec6e32de2"],["/blog/tags/文档/index.html","a9ba49719b9b81a56c51869be6cf2c76"],["/blog/tags/构建工具/index.html","909b6aaf2d0a7f89cb6b3d24cfa7097d"],["/blog/tags/测试/index.html","2189abac8b0ca26f36077137ce003268"],["/blog/tags/生活/index.html","30c17969b53c58423a8c101d5ff18550"],["/blog/tags/笔记/index.html","661c2dfe4e301967d39548d5e87413b3"],["/blog/tags/读书笔记/index.html","837fcd0d140c5e1bd326ba9343fe1dbf"],["/blog/tags/逆向/index.html","4d3136bbeb4d9469b819706276f4a5e0"],["/blog/tags/随笔/index.html","b38fe8e1030c8d27a994b403d09b3ca9"],["/blog/tags/－-Test-Karma/index.html","b211ea781704479797a822c5b687a413"],["/blog/tags/－-杂谈/index.html","2355d441c2397d788a0cb188cc7fd94a"],["/blog/tags/－生活/index.html","fda3e745e8f7144cef485a12bbe4808d"]];
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
