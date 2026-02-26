/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/blog/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/blog/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/blog/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/blog/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/blog/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/blog/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/blog/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/blog/2016/07/28/Hello-Hexo/index.html","cff316399eb4df916a0e046ba310c059"],["/blog/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/blog/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/blog/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/blog/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/blog/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/blog/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/blog/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/blog/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/blog/2016/08/08/A-intresting-js/index.html","64f8d5d330c75eb849f602c739227880"],["/blog/2016/09/02/The-inherit-in-javascript/index.html","2e1e71f0b5abd6532e38490fbf10e6bd"],["/blog/2016/09/20/令人伤心的博客碎片/index.html","ec8529b25e2cc110149adcb0f0bb5e3d"],["/blog/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","71e88f058200227bac2992ca57a0159e"],["/blog/2016/11/13/LeetCode-112-Path-Sum/index.html","f37ce452968fd7777ae94f60974a45b3"],["/blog/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","a14d9ab8eca2ca9d2e147550983c9abb"],["/blog/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","08570a681aedfc2986a38cf5ad0a13f9"],["/blog/2016/11/14/爬虫的意义在哪里？/index.html","40d74c2b2d2b29791bcbb5a3f22ad50d"],["/blog/2016/11/15/LeetCode-202-Happy-Number/index.html","e338ba19446a452e049e19c8709f3cea"],["/blog/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","fc8deab57447c839cf916f7d52bbbcf6"],["/blog/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","d12c7774cdd1db586f8182686a94d04c"],["/blog/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","5098d7a0b62ab6dfa9465b8e8a0323dc"],["/blog/2016/11/23/LeetCode-455-Assign-Cookies/index.html","fca4240963b25c55c3289cc4f4563cd1"],["/blog/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","dc3d25031f52b91bc4bcdda53658c3e9"],["/blog/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/blog/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/blog/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/blog/2016/11/28/Docker学习笔记/index.html","72a68a203e3615dc9962ea96bacf0fe0"],["/blog/2016/11/28/LeetCode-190-Reversed-Bits/index.html","3d0db0fc4869ea5175ab3caaf46d14b2"],["/blog/2016/11/28/SegmentFault开发文档笔记/index.html","ae86140aec7c5a38d2a53ede785ba5ca"],["/blog/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","206c88d2e843b62599a54af8768ad6d9"],["/blog/2016/11/29/Twig模板引擎学习笔记/index.html","f658598c89b75d1262e211877e136909"],["/blog/2016/11/30/Angular2-Typescript入门笔记/index.html","ae3ad5c14867a427b29e569bd9988825"],["/blog/2016/11/30/compositionstart事件/index.html","0b479ab43780c7fa69a8e7d1e5432597"],["/blog/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","a253675f08188e07b20ee3109d52bb5e"],["/blog/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/blog/2016/12/07/Javascript各种模块引入机制比较/index.html","3360f8678bce8a0e3cc867b4b299d3c3"],["/blog/2016/12/07/LeetCode-415-Add-Strings/index.html","b37fd6a9d7a12950a3f7dfcbb530db8e"],["/blog/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","c96d3feca244ae6099bfc4bdff13a06b"],["/blog/2016/12/08/SegmentFault-gulp配置笔记/index.html","888396c799c827e049a0133cf09854d1"],["/blog/2016/12/10/SFDC笔记/index.html","913839953a17fe78e5daeec8ef2e5851"],["/blog/2016/12/13/LeetCode-396-Rotate-Function/index.html","f68fc39fb194ff0f5cb075098460e0f9"],["/blog/2016/12/13/深入浅出node-js-笔记/index.html","18497c39504830d6824f64ff8fee562f"],["/blog/2016/12/17/LeetCode-274-H-index/index.html","2a857d1a9519be3842e2dd8850e98b6e"],["/blog/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","13ee215617ede1ac016e98e2f2b7f230"],["/blog/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","3f32e37a9397b0ec60d9dd5a53b3bc05"],["/blog/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","190b679f56281cf0899dc50dce9e9550"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/blog/2016/12/25/iOS-iOS-Apprentice-note/index.html","1d78d5a4ebfba1a041758021d45620f8"],["/blog/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","2ae9912e58081afaa304791735d6ccca"],["/blog/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","b1fc3b938ced3b0001ffe86469b98d29"],["/blog/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","9d026e6e378c146f4b1e5b8312f449de"],["/blog/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","4889746a2d4db311ff23fbe7ce0975fa"],["/blog/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","d0d50bc616ea5f32d3687a07e782cf82"],["/blog/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","f824781cfb8a8450c7f99d7aa9a8c7b5"],["/blog/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","376c15521d34dfb75d38a385b859f454"],["/blog/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","3e95aa64859e50f9d3c4d63ad6bdca61"],["/blog/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","75e5b0ca0ea22a3af65ad084e74f1dff"],["/blog/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","bd9e83a4a0095cb1a517b952b64189e8"],["/blog/2017/01/09/LeetCode-397-Integer-Replacement/index.html","01d80d0502472ffc37f3baedb7165599"],["/blog/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","d0ed6b1bd3ae2ca138b10e69ab05220e"],["/blog/2017/01/10/Ng-Angular1-x复习笔记/index.html","e495e6b5a25e9359c2da145f6f243bc0"],["/blog/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","40fb8a487bb24507505923a10f040317"],["/blog/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","d15a36ac25ed256c05c8939c37d7190c"],["/blog/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","e2933a07b93d27c23d2f3d3b6b8b1227"],["/blog/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","91ea86fa219c2ba53d3265f440bc4469"],["/blog/2017/01/22/Javascript忍者秘籍-读后感/index.html","a92222e039faf567dca106f62360dcc2"],["/blog/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","14b8abe1bba2da1636d9d1f6f4c9ce28"],["/blog/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/blog/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","6bab611dc10e8401dbf11ff0afb1ac79"],["/blog/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","31cecab852b2c3a1da9fe330ca4c01d1"],["/blog/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","a13512885ba7167a88cb532402da1d82"],["/blog/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","f2d5a8129eae5230e88c557da9eabb68"],["/blog/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","23336c5a772985f5f634b474d1cf963e"],["/blog/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","21464d19dab420280c316203b654fa0b"],["/blog/2017/03/03/Google-Android-System-learning/index.html","7489585269a6fc602ffe314fd62b8b07"],["/blog/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","376b130985f60853eff964731210e632"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","b3029fc6d5119a96358eb4eecc5d8e69"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/blog/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/blog/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","58bfa9ea4a99e91e513d97a66c69a3a3"],["/blog/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","e10020727ff1637831f7c0bc1e3cea88"],["/blog/2017/03/30/鹅厂打工日记-Mocha/index.html","f8edcec1d347d1ae3d6049a76c9ce21b"],["/blog/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","bca7f4533cb7cacfa4fc760de4c41775"],["/blog/2017/04/14/鹅厂打工日记-Webpack原理/index.html","41d1f7a0767d7344cfd882e14929cded"],["/blog/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","c952fa323672610540d5b60e1eb3089b"],["/blog/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","955eb1fd06238810ffd4fe2027faf8a3"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/index.html","8e394f9adb81366c72f9b65a0106c398"],["/blog/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/blog/2017/06/22/Hybird的关键：WebView相关-1/index.html","3072c025e5d00bc7efb83af151c69e08"],["/blog/2017/09/08/编写Webpack插件笔记/index.html","f996f6b8974ca4e442ac34fc61b9be7a"],["/blog/2017/11/30/Mobx学习笔记/index.html","5303137516e3ce5c3009729dc562750e"],["/blog/2017/11/30/Test-travis-ci/index.html","6791c6c974bb87abea18f4e340403e36"],["/blog/2017/12/01/Use-flow-type-in-React-project/index.html","da535f9a08e1ab181bf78860284d4687"],["/blog/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","00ec16b8a076c6e28255e5786fd9714c"],["/blog/2018/06/26/flex-end-make-scrollbar-disappear/index.html","ebc633cbf00645a95be77a3fd6080228"],["/blog/2018/06/26/redux-state-change-but-react-not-render/index.html","418e637446edc50f025df97880a6b642"],["/blog/2018/07/02/阅读代码和英文文章小技巧/index.html","273fd741ba26d5d7967ef5f9b1c5b694"],["/blog/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","5c61c8e57edd93ba12965bdbf0fbdf9d"],["/blog/2018/07/31/SDT自我决定理论/index.html","90b92f9e3e1b4fdfbe002ec8202cc386"],["/blog/2018/08/04/React16源码解析-As-required-order/index.html","acf48c0bc1271f0c280bd9e8a9a02366"],["/blog/2018/08/05/React16源码解析（Fiber）/index.html","7019d7247163db8dffaf34544573a7f4"],["/blog/2018/08/05/React16源码解析（ReactDOM）/index.html","aff4fd679b1382639d1f2ddc50e37f01"],["/blog/2018/08/27/释放webpack的真正潜力/index.html","8c0b01c169b232a4014103b6fc6fc8f2"],["/blog/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/blog/2018/08/30/iOS-webview-scrolling-issue/index.html","cd5eab23af0a55c3cbda114c86b78387"],["/blog/2018/09/17/升级到Babel-7的经验/index.html","26655d1cdcb5a34bfa7794d616d346bb"],["/blog/2018/10/16/React-tip组件的设计/index.html","058b1ca54a4ceb961c0d8aff7edb99ed"],["/blog/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","ad2d29755745ffa5d0ffacee4ef9e12b"],["/blog/2018/12/08/jenkins问题定位/index.html","4331b3c9419f84497e2bcbce2261f451"],["/blog/2018/12/21/React-SSR实践-压测/index.html","073a9a4a908b9b66e30dff6bec9fa69b"],["/blog/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","aa64d76e6b80ec80a8cc77d91b3e45fe"],["/blog/2019/01/21/item2-profile-config/index.html","4c83487aae498def88bb6a64331d0122"],["/blog/2019/01/22/i18n-about-Access-Language/index.html","52a7cdbd9592492c0e5a762b2ae53465"],["/blog/2019/02/27/Node-C-addon-学习笔记/index.html","890ab2201f0b41ad7ec748ea71312cc0"],["/blog/2019/05/16/Modern-Crusaders/index.html","4b0244661226a3aea966086e47177794"],["/blog/2019/05/22/使用docker构建老旧的前端项目/index.html","b89956bda13d4683c20de6733c288b37"],["/blog/2019/08/28/关于docker使用的一些记录/index.html","6d75dcb1d3bd9e83d681c0572f3c6faa"],["/blog/2019/08/30/全干工程师的基本素养/index.html","40dc2bfe619b115b9505e0b166c555b0"],["/blog/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","ad7950cf77c6dbbe3090d59897c7fb60"],["/blog/2019/11/05/Node中的C-与Javascript如何连接/index.html","d7fd653be2695d77e9bbcdea46f5dc72"],["/blog/2019/12/02/One-example-of-Typescript-generics/index.html","f56ff93a8a197eac4aeb8e1d834476ad"],["/blog/2019/12/04/有趣的上网冲浪之旅/index.html","55441b8538bfb18dd4f9d5fa76173803"],["/blog/2020/04/17/企业微信国际化方案总结/index.html","128d1e828dfa492376c1d9182424ef6c"],["/blog/2020/04/27/come-on-sweet-death/index.html","6dfb43af0d0348c8dee97595cfdf3db2"],["/blog/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","a630277dae06b2b8b52992c82db25ab4"],["/blog/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","2f1681cbcfacb23d9eb403c0f737fc00"],["/blog/2020/05/28/525-Contiguous-Array/index.html","74afcc5d42195b03fd589be1ee0db4f2"],["/blog/2020/06/01/LeetCode-207-Course-Schedule/index.html","731e307cdb37c3dc8cd7bf181061e5cf"],["/blog/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","6626d3bf24236a9f464ec2427819a263"],["/blog/2020/07/21/Node-js-与-epoll/index.html","fdb375ab9046309ba6e260e5550c214e"],["/blog/2021/01/14/记录一个babel编译typescript代码的坑/index.html","e1278002ae1db567626236328fe083cc"],["/blog/2021/03/02/总结一些测试vue组件的经验/index.html","8339576d58544dfa6fd49b9fa17b05e9"],["/blog/2021/03/15/Purpose/index.html","10003f111e989e30be86cbe36012503c"],["/blog/2021/03/16/和安全团队的斗智斗勇/index.html","5e72a3f9c7e2493746bd02f508f12e37"],["/blog/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","f196f04fe6303c12651c5eca02d63244"],["/blog/2022/08/10/关于图片处理的一些事情/index.html","fb0516d75c93320d73e3521f8cac2dbe"],["/blog/404.html","140ccfdf78c0b6ba478885fce4666975"],["/blog/about/index.html","533d875b6aa7aeee0ede4fc5505d1edd"],["/blog/archive/index.html","d2425d64a3ca57222f9c3a2e2d3e17b2"],["/blog/archives/2016/07/index.html","3022c291482a1ee8921ebf0e88f45444"],["/blog/archives/2016/08/index.html","d5127b96cc09d393e07089f36f63642b"],["/blog/archives/2016/09/index.html","ad991a1bd4d1c5104192ac2ff9e8a1a1"],["/blog/archives/2016/11/index.html","56aabc977f72a221492cfdd180003624"],["/blog/archives/2016/11/page/2/index.html","9011b9ba87518ee1bc7a8e1fcac8a9db"],["/blog/archives/2016/12/index.html","d9d26a9f98a50a8a22d5ead2c68c2d0b"],["/blog/archives/2016/12/page/2/index.html","f7c352e3bed674621da115ad8bfc746b"],["/blog/archives/2016/index.html","283fda0a6b57e713a338afbd8a6d7fde"],["/blog/archives/2016/page/2/index.html","cde685d4e172b925a5e8f66e5dcf99bd"],["/blog/archives/2016/page/3/index.html","3c38c2bf0f9c4d38248e526cac93a948"],["/blog/archives/2016/page/4/index.html","b11975a1202046333fe4f9a6da5b8634"],["/blog/archives/2017/01/index.html","73ad03711e11be020e4e3a7b6a66b52f"],["/blog/archives/2017/01/page/2/index.html","3f41a632b14ed4c078f4d3b9807a1a0a"],["/blog/archives/2017/02/index.html","2e95722ccec989c2001969a895b876ab"],["/blog/archives/2017/03/index.html","435e01fc4b7a020f5a43df296c0d718b"],["/blog/archives/2017/04/index.html","4d4ce2f4ab1f9e55cb52ab929c2cc588"],["/blog/archives/2017/06/index.html","9fde44a3fbc10298cac71398e7f3f797"],["/blog/archives/2017/09/index.html","17a224146ad2c3be5ce9b7e3c25ec82d"],["/blog/archives/2017/11/index.html","b6cb305aa8b27427589383c1ea8bc94b"],["/blog/archives/2017/12/index.html","b25893ac6014a736281642c65a4985dc"],["/blog/archives/2017/index.html","6e42d42e79823067a000a02d2454fe7e"],["/blog/archives/2017/page/2/index.html","bf141dee813bd428b982613a736333ee"],["/blog/archives/2017/page/3/index.html","457e7e79a248174cff1b9d4d2ac6bc43"],["/blog/archives/2017/page/4/index.html","fcbaed786149ee26e8d246cb529bb700"],["/blog/archives/2018/06/index.html","39f90d53d51b7e12ffb73fd6ee280eca"],["/blog/archives/2018/07/index.html","8c10e7b78859851c672e10263365d9bf"],["/blog/archives/2018/08/index.html","48876ab86c6d7349c0faa1090e7e26a5"],["/blog/archives/2018/09/index.html","23590f286b308c61c68ae032e3dc25aa"],["/blog/archives/2018/10/index.html","41bcae95b5f6550f876c0f3873c94ade"],["/blog/archives/2018/11/index.html","c145b289f44107086b3796cb4738f3cc"],["/blog/archives/2018/12/index.html","c4a6eeee75620111829266ee7cbb89de"],["/blog/archives/2018/index.html","4ad4926f41528125bd4deffef559ef96"],["/blog/archives/2018/page/2/index.html","93c34c4b80fda5e48cb49e17c2ac8cd8"],["/blog/archives/2019/01/index.html","3fab3cfef4d06deebf1c9394ea68a89b"],["/blog/archives/2019/02/index.html","2f91f4692e57401c7f00231e8c6cd2aa"],["/blog/archives/2019/05/index.html","531ee6c5714544f682ef8a7610393a4f"],["/blog/archives/2019/08/index.html","83c240b1b8e08a77d0e9a5ce84441ffc"],["/blog/archives/2019/10/index.html","d96e7bc7edcff45b3c25d329204dd7f5"],["/blog/archives/2019/11/index.html","013444e6741fe4b6f2da34ba0ba5ff2e"],["/blog/archives/2019/12/index.html","fb0ccbf63f7418a32831f507acbe1854"],["/blog/archives/2019/index.html","5ef1e25cac77ea8e4ce9cc219e6f98d9"],["/blog/archives/2019/page/2/index.html","e43f709f98a54e73ef11a89d4d86bfd3"],["/blog/archives/2020/04/index.html","90ed2cf150a7a9b417be13c86d64947e"],["/blog/archives/2020/05/index.html","841a659bae0300b403a79e230efb1dad"],["/blog/archives/2020/06/index.html","e587c4f30b81782361226a17f55b82be"],["/blog/archives/2020/07/index.html","d594a1253566b2194d36832424d9e467"],["/blog/archives/2020/index.html","d44a7daf016d60ed27501bf83ccde105"],["/blog/archives/2021/01/index.html","5f453c158fe4acd42bf02e12b2747671"],["/blog/archives/2021/03/index.html","168236082988e7c2d3618b94ebda039c"],["/blog/archives/2021/10/index.html","429baa0565daab9e784464874dd5f9de"],["/blog/archives/2021/index.html","3fd3907569de0fd03c38cec6ad0e4ad2"],["/blog/archives/2022/08/index.html","08c3efcc1e4f12c08156949615c8a421"],["/blog/archives/2022/index.html","a688e5205d8d05f280bd5ff7a455dfc2"],["/blog/archives/index.html","11b9e0f033c2a4210d8ab7b9c2894598"],["/blog/archives/page/10/index.html","d1ccbadc311231fc7e4be1443fc6a790"],["/blog/archives/page/11/index.html","505c64042565c1c922542e97a7ab0060"],["/blog/archives/page/12/index.html","f5d62b793298b2a1b14ffcc0ae989988"],["/blog/archives/page/2/index.html","8e62b38a1b84ef5d47d66a63d0e2b375"],["/blog/archives/page/3/index.html","287661faa474adcaa4e77fcbb68bfd21"],["/blog/archives/page/4/index.html","8316953d3338310bedcb860e0261937b"],["/blog/archives/page/5/index.html","24020a910d9c8496f9c27c925a195433"],["/blog/archives/page/6/index.html","dc70b8cef0577912690d8cf95ed000d8"],["/blog/archives/page/7/index.html","83ea5cfb43ddfeeb18cd95142d8207f5"],["/blog/archives/page/8/index.html","5239dadfc1e2fe1417151f296037127c"],["/blog/archives/page/9/index.html","27a87be0088b2d31d0c9f64f2d1a92d3"],["/blog/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/blog/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/blog/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/blog/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/blog/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/blog/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/blog/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/blog/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/blog/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/blog/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/blog/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/blog/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/blog/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/blog/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/blog/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/blog/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/blog/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/blog/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/blog/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/blog/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/blog/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/blog/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/blog/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/blog/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/blog/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/blog/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/blog/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/blog/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/blog/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/blog/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/blog/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/blog/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/blog/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/blog/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/blog/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/blog/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/blog/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/blog/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/blog/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/blog/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/blog/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/blog/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/blog/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/blog/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/blog/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/blog/index.html","ee2d06c2aee19ef1efbc45b0c4457d41"],["/blog/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/blog/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/blog/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/blog/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/blog/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/blog/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/blog/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/blog/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/blog/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/blog/leetcode/index.html","56d50eebc9b654083439c2bf5f4d07ef"],["/blog/page/10/index.html","0798f047e6a3fe6f7e278fe84a073bd8"],["/blog/page/11/index.html","41ff5f42a5328c365d21b4729778d1b1"],["/blog/page/12/index.html","ee44217c1d73cc73edc12c0431ef7713"],["/blog/page/2/index.html","0e4daafb523f3b6124255b2802d73058"],["/blog/page/3/index.html","390c0362a6575af99d2b8b303aa77e56"],["/blog/page/4/index.html","6276d8de2b9f4a9b676d94f638378226"],["/blog/page/5/index.html","7f1dc62a8bb01bb2beee079b1e00e221"],["/blog/page/6/index.html","9b3cf4015e5bd88c55b06f7ed41cea44"],["/blog/page/7/index.html","b57b5a5db19fe984edb7726474d2cbdc"],["/blog/page/8/index.html","801282769ae260ccd6460b48e0da5e1e"],["/blog/page/9/index.html","05785525d9266f08a61eaf3e405d637f"],["/blog/sw-register.js","d4cbbcdae3ce64e1989df57de616d05b"],["/blog/tags/Android/index.html","235bf251828541fa11b9b2165d75a31f"],["/blog/tags/Angular2/index.html","e69c04aaa0618fb2031a4a020aa56944"],["/blog/tags/Babel/index.html","3bc28ec8dfb9e122ed08498a53cacb55"],["/blog/tags/C/index.html","aee28c272d3b46b6e4ce953f0fa54e51"],["/blog/tags/CSS/index.html","a4246fc597c5212b9fe81c577c2553d4"],["/blog/tags/Coffeescript/index.html","dc51f06cbe0117d0b87b028f95702fc4"],["/blog/tags/Compiler/index.html","38c408d8106441c494907e8561d70bb0"],["/blog/tags/Component/index.html","1ea06419bafb20ae6bca65e78329064f"],["/blog/tags/Design-Pattern/index.html","28c2a65e4e438f55a987f88824c849bb"],["/blog/tags/Docker/index.html","b807e1041318849be34a8be8d5910f79"],["/blog/tags/ES6/index.html","3ec65130b32bd431cf76ca69a4ae701d"],["/blog/tags/Game/index.html","493f41e6613dd935fa84ec46145bce58"],["/blog/tags/Gulp/index.html","4fc36580039c659e4292986c3a708542"],["/blog/tags/Hybird/index.html","a353b4e6c3c47cd97ec48218f0f6c806"],["/blog/tags/JIT/index.html","1ecade0c73f01ba6d77c15197823edc2"],["/blog/tags/Javascirpt/index.html","24b1dfe01c4e2f98252bdf868bb73964"],["/blog/tags/Javascript/index.html","eea32d1a9fb448df4af230fccd76c47a"],["/blog/tags/Jest/index.html","7bbb4b4a9423954ddd830055cb3bf094"],["/blog/tags/LeetCode/index.html","579956d5f4c43f1177568b16ffcbba03"],["/blog/tags/LeetCode/page/2/index.html","7232c40e504a6c13b0052f7825d06fac"],["/blog/tags/LeetCode/page/3/index.html","9c10db081ee974704c8eec860a89fb31"],["/blog/tags/Leetcode/index.html","a7e32ffeb0ab7189bacf6be46cbdeb85"],["/blog/tags/Linux/index.html","49488fa9673d0c617165b6cd3506e6aa"],["/blog/tags/Lyrics/index.html","528be46acde06a2c8a760a070c4828a6"],["/blog/tags/Mobx/index.html","0f4945c5c9d142f31cbe27dacab105a5"],["/blog/tags/Mocha/index.html","21e78ef62ed2f4841491f995f2aed212"],["/blog/tags/Module/index.html","1bae0ac5ae408218ef7691ed23b09cda"],["/blog/tags/Node-js/index.html","4f0b1ca22aa5a2369f85b628a1b0d7a5"],["/blog/tags/Node/index.html","b0e0d3465e505def5594340661c8d301"],["/blog/tags/Note/index.html","dd5809efde99c69cd8b4f52e8a95ddb8"],["/blog/tags/Object-C/index.html","ebad424e4707c8e72fef5a65dc8f6889"],["/blog/tags/Objective-C/index.html","697d8819dc9c16dcb4429be8232eaea8"],["/blog/tags/PHP/index.html","3ef0242192ae5ec0e5a5875fdef5e64f"],["/blog/tags/Python/index.html","72aee5b67e8c6edfd195abf9c3da3d28"],["/blog/tags/Python/page/2/index.html","db2a4c45ad866d66956922a7b8b7c4f5"],["/blog/tags/Python/page/3/index.html","38a08455a8123930b4396bdbe9e56b85"],["/blog/tags/React-js/index.html","c212cbff3d5d6e41d1e7880fc1ca2b91"],["/blog/tags/React/index.html","dc608fe22536e93df0d2c277450b6e13"],["/blog/tags/Redux/index.html","9f274a49b109e78864676b3b752a68a6"],["/blog/tags/Require-js/index.html","e774b4e11f215688d04be5adaa0dbfc4"],["/blog/tags/SSR/index.html","dc0d1b65bf7510cee1f087e6b753a655"],["/blog/tags/SegmentFault/index.html","4a398cad7cbe793fe8d50dbbffbfed0c"],["/blog/tags/Swift/index.html","6cc06ddfc04a5fcc436cae4889e00a7e"],["/blog/tags/Template-Engine/index.html","04f91cafd7d415ca25dbf4283b21ae50"],["/blog/tags/Test/index.html","781a8c5b2d24758af185a7217d5c1a16"],["/blog/tags/Twig/index.html","9c152f4a15114795d1fd0e7e4ff99122"],["/blog/tags/Typescript/index.html","a9839a2f4a93a40327ac00b87828e557"],["/blog/tags/V8/index.html","6ef451acd2bbf1d4e938ca90c6044e17"],["/blog/tags/WebAPI/index.html","b84da7411be8f258979cadc55173c9b5"],["/blog/tags/Webpack/index.html","23f24f4a10becd207c8783d78cb2e5f2"],["/blog/tags/Webview/index.html","7d6e0e70abdb7319db6acb0b21f9788c"],["/blog/tags/Windows/index.html","ac604c91d200658c650ea666a94c8dbe"],["/blog/tags/babel/index.html","6a8756484a36b1432178785b996076f5"],["/blog/tags/base64/index.html","c019839a7ef5d35ca9fd77518393d816"],["/blog/tags/bootstrap/index.html","b9ac59c0109818ccf19b142f48ff6079"],["/blog/tags/ci/index.html","ceeec4e615341354897586205598eadb"],["/blog/tags/codepen/index.html","9ada2ff566ba891dfc41be538ee00056"],["/blog/tags/compact/index.html","e090707ce2f03b6e2da9b91c7e3ac1e3"],["/blog/tags/css/index.html","b6d156ad7217cd1be2165718510870d4"],["/blog/tags/database/index.html","4f1962b2e65b4add3f06588bd6281838"],["/blog/tags/docker/index.html","dcc1781278d65ed16bce7799bede4929"],["/blog/tags/event/index.html","a299d1b2c39a9a90bc6f27c21e289d5b"],["/blog/tags/facebook/index.html","22c8d6599eadc43c5510d73d1861d4eb"],["/blog/tags/flask/index.html","f9608d7479990bca2e23028fcf056de3"],["/blog/tags/flow/index.html","2408ae3fd9fd7d8e5ffdf7076b16e9c1"],["/blog/tags/i18n/index.html","763708b97c647a03716ffe958c6c3867"],["/blog/tags/iOS/index.html","edaae49539589b7470c3e497d10bbba3"],["/blog/tags/iOS/page/2/index.html","c82bfa39f4491f790cea3f7a5042df2f"],["/blog/tags/index.html","a643fc75651c90a1fa63db8b5ddda412"],["/blog/tags/javascirpt/index.html","61e13df1c9b0a2ae88269f8038336a0e"],["/blog/tags/jest/index.html","cca7db0af5152083965d1648ac348942"],["/blog/tags/jquery/index.html","0084b4327f6af0964931fd06402b718a"],["/blog/tags/life/index.html","ad6df05edd5716ff4d9162364c58eb45"],["/blog/tags/lyrics/index.html","326d78cdda59baa74fb848689b3e0d74"],["/blog/tags/node/index.html","2f4a7f4d57d39b5d7acbad27b41fd867"],["/blog/tags/npm/index.html","99cdd435b98ce56176c285cbd749df64"],["/blog/tags/pwn/index.html","6631ed733945706aae1a6bbbf449089d"],["/blog/tags/python/index.html","c97b9dba59e4c9e3dad8e6cbb04f5456"],["/blog/tags/reactive/index.html","a3fdb32d3a4b58699a9e229e4ab4e0a5"],["/blog/tags/shell/index.html","ec5a3bb67f45ad396512b6fd102076cd"],["/blog/tags/ssh/index.html","90bd79c8d7e6356a0f13e3047da3a9c4"],["/blog/tags/svg/index.html","da64a0a34bf2f9c4b2eb20378e97fffa"],["/blog/tags/translate/index.html","54ba91868c1053541dee9af6becd21a1"],["/blog/tags/translation/index.html","6f3026d07ffb38107464bac8e5ee120a"],["/blog/tags/typescript/index.html","5b0ba37bc48c0b7030f3e09e4f83a1d9"],["/blog/tags/underscore/index.html","c6491c950a7627f2e750e8fa36f775ad"],["/blog/tags/video-js/index.html","82d3e8b199c8299f94cb504a3551399d"],["/blog/tags/webpack/index.html","9ea85810d21fedddb686bf6e3d1585fd"],["/blog/tags/web安全/index.html","d71aa5d4b787cc935b742359a1e07fc9"],["/blog/tags/函数式编程/index.html","42364043847692edd697e87d0d14ab29"],["/blog/tags/各种开发者大会/index.html","529752e7b10675cd6a960b05bd9445e1"],["/blog/tags/文档/index.html","d64acf0c21710d72c5455985160c8c42"],["/blog/tags/构建工具/index.html","9ee6b9ee771be298a0e85af69e922ad2"],["/blog/tags/测试/index.html","f6abfe88c0232db298399aef9f02a7cd"],["/blog/tags/生活/index.html","5c4034db9a3f67b2a514982edbc122dc"],["/blog/tags/笔记/index.html","fb454b1ad23031bd4844ea9941330ecd"],["/blog/tags/读书笔记/index.html","f6dbc698098bbe5d5f96ebf182b62a96"],["/blog/tags/逆向/index.html","c338c057cef76097faf27b450446cf03"],["/blog/tags/随笔/index.html","2bd19466fcc7f36767832b46150e4484"],["/blog/tags/－-Test-Karma/index.html","64a44d891515f40c7ea3ac34e4eb0ed1"],["/blog/tags/－-杂谈/index.html","5f558ff35b97ea5a25a42d017f65566d"],["/blog/tags/－生活/index.html","6b3dcf1b26ef0733501e574b3168bf5a"]];
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
