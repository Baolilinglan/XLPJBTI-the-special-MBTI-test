// ==========================================
// 狼BTI - 题库与结局配置文件
// ==========================================


const S_QD = { d1: 1, d2: 1, d3: 1, d4: 1, typeStr: "强度党" };
const S_LZ = { d1: 1, d2: 1, d3: -1, d4: 1, typeStr: "乐子人" };
const S_HD = { d1: 1, d2: -1, d3: 1, d4: 1, typeStr: "小红点厨" };
const S_LH = { d1: 1, d2: -1, d3: -1, d4: 1, typeStr: "狼黑" };
const S_JN = { d1: -1, d2: 1, d3: 1, d4: 1, typeStr: "军奴" };
const S_XM = { d1: -1, d2: 1, d3: -1, d4: 1, typeStr: "狼小妹单推" };
const S_LL = { d1: -1, d2: -1, d3: 1, d4: 1, typeStr: "龙狼关联" };
const S_MM = { d1: -1, d2: -1, d3: -1, d4: 1, typeStr: "萌萌人" };

const S_EC = { d1: 1, d2: 1, d3: 1, d4: -2, typeStr: "二创爱好者" };
const S_CZ = { d1: 1, d2: 1, d3: -1, d4: -2, typeStr: "串子" };
const S_LZL = { d1: 1, d2: -1, d3: 1, d4: -2, typeStr: "老资历" };
const S_LB = { d1: 1, d2: -1, d3: -1, d4: -2, typeStr: "老板" };
const S_FDJ = { d1: -1, d2: 1, d3: 1, d4: -2, typeStr: "复读机" };
const S_QSZ = { d1: -1, d2: 1, d3: -1, d4: -2, typeStr: "潜水者" };
const S_SZJL = { d1: -1, d2: -1, d3: 1, d4: -2, typeStr: "数值焦虑制造者" };
const S_KK = { d1: -1, d2: -1, d3: -1, d4: -2, typeStr: "口口爱好者" };

const S_NONE = { d1: 0, d2: 0, d3: 0, d4: 0, typeStr: "无动于衷" };

// 2. 题库列表 (包含所有题目和对应选项)
const rawQuestions = [
    { text: "推送一个相关视频时，你决定点击播放的潜意识诉求是：", options: [ { text: "收集最新的干员数值与机制测评", effect: S_QD }, { text: "寻找能够引发讨论的片段", effect: S_LZ }, { text: "关注直播状态和神态", effect: S_JN }, { text: "将其代入特定形象", effect: S_XM }, { text: "顺手点开看一眼", effect: S_NONE }, { text: "提取视频音频用于制作剪辑", effect: S_EC } ] },
    { text: "直播画面中突然出现进食环节，你的反应是：", options: [ { text: "关注食物种类及食量", effect: S_JN }, { text: "期待流程中断导致的弹幕讨论", effect: S_LZ }, { text: "截取画面准备在外部平台发布", effect: S_HD }, { text: "换台，不关注进食", effect: S_MM }, { text: "一边看一边进食", effect: S_NONE }, { text: "故意在弹幕使用其他阵营的术语进行干扰", effect: S_CZ } ] },
    { text: "看到其他主播在弹幕互动时，你的下意识举动是：", options: [ { text: "关注对话并构思关系关联", effect: S_LL }, { text: "寻找言语中的冲突点", effect: S_LH }, { text: "忽略无关人员ID", effect: S_MM }, { text: "发送带节奏弹幕起哄", effect: S_LZ }, { text: "认为互动正常", effect: S_NONE }, { text: "回忆并提及以前直播时的互动氛围", effect: S_LZL } ] },
    { text: "对于外部论坛的“小红点”提醒，你的感受是：", options: [ { text: "将其视为搬运言论后的反馈", effect: S_HD }, { text: "只关心帖子里是否有具体的数值信息", effect: S_QD }, { text: "对争论引发的相互攻击感到愉悦", effect: S_LZ }, { text: "不看消息提示", effect: S_MM }, { text: "点开查看回复", effect: S_NONE }, { text: "通过直接打赏要求主播阅读你的留言", effect: S_LB } ] },
    { text: "当看到有人在发掘过往历史时，你的倾向是：", options: [ { text: "收藏帖子作为辩论资本", effect: S_LH }, { text: "将经历加工成二次设定", effect: S_XM }, { text: "寻找不同主播产生交集的痕迹", effect: S_LL }, { text: "乐于看到社区环境变得混乱", effect: S_LZ }, { text: "划走不看", effect: S_NONE }, { text: "复制他人发送的内容并跟进刷屏", effect: S_FDJ } ] },
    { text: "讨论具体干员的输出环境时，你会：", options: [ { text: "参考环境适应性进行部署", effect: S_QD }, { text: "指出该干员存在上位替代", effect: S_HD }, { text: "不关注强度讨论", effect: S_MM }, { text: "发布引战言论", effect: S_LZ }, { text: "只看自己喜欢的角色", effect: S_NONE }, { text: "保持观看，不发送任何弹幕", effect: S_QSZ } ] },
    { text: "关于给出的具体数据解析，你通常会：", options: [ { text: "作为参考依据规划资源", effect: S_QD }, { text: "认为数据阻碍了节目效果", effect: S_JN }, { text: "不理解数据的具体获取渠道", effect: S_MM }, { text: "截取偏激数据面板引发争吵", effect: S_HD }, { text: "大致看懂即可", effect: S_NONE }, { text: "刻意强调某干员的劣势引发资源恐慌", effect: S_SZJL } ] },
    { text: "参与社区内的评级讨论时，你其实更在意：", options: [ { text: "评级标准是否客观反映环境强度", effect: S_QD }, { text: "利用评级结果去攻击不同意见者", effect: S_HD }, { text: "不关心评价体系", effect: S_MM }, { text: "利用争议系统激化对立", effect: S_LZ }, { text: "随大众标准进行抽取", effect: S_NONE }, { text: "提及另一款游戏的强度评判标准以转移话题", effect: S_KK } ] },
    { text: "若讨论的话题转向了主播的外貌或性格特征，你会：", options: [ { text: "观察外在表现", effect: S_JN }, { text: "将其与其他主播联系起来", effect: S_LL }, { text: "在心里将其转化为特定属性词条", effect: S_XM }, { text: "要求终止话题回到数据计算", effect: S_QD }, { text: "不参与讨论", effect: S_NONE }, { text: "录制该段落作为二次创作素材", effect: S_EC } ] },
    { text: "面对针对主播的攻击言论，你的处理方式是：", options: [ { text: "内心赞同", effect: S_LH }, { text: "截图保存并搬运扩散", effect: S_HD }, { text: "期待事情扩大寻找情绪刺激", effect: S_LZ }, { text: "选择无视或屏蔽", effect: S_MM }, { text: "划走不看", effect: S_NONE }, { text: "模仿对立群体的语调发言", effect: S_CZ } ] },
    { text: "直播进入干员列表展示环节，你会：", options: [ { text: "继续挂着听声音", effect: S_JN }, { text: "幻想他在进行私下解说", effect: S_LL }, { text: "退出页面", effect: S_MM }, { text: "在弹幕发引战言论打破气氛", effect: S_LZ }, { text: "去倒杯水", effect: S_NONE }, { text: "对比早期的干员列表和界面变化", effect: S_LZL } ] },
    { text: "面对自创的新术语，你的态度是：", options: [ { text: "试图解读出与他人的默契暗号", effect: S_LL }, { text: "不明白也不想明白", effect: S_MM }, { text: "在弹幕里复读和刷屏", effect: S_LZ }, { text: "带到外站使用同化社区群体", effect: S_HD }, { text: "明白大概意思能交流就行", effect: S_NONE }, { text: "赠送礼物让主播解释该词的含义", effect: S_LB } ] },
    { text: "面临对某一角色的拉踩环境，你的定位更像：", options: [ { text: "只拿客观论据说话", effect: S_QD }, { text: "乐于拱火的看客", effect: S_LZ }, { text: "把战火引向其他社群的搬运工", effect: S_HD }, { text: "抓住口误来反击的纠错员", effect: S_LH }, { text: "普通的路人玩家", effect: S_NONE }, { text: "直接复制热评词句进行跟进", effect: S_FDJ } ] },
    { text: "当出现未证实的游戏资讯时，你会：", options: [ { text: "推算可能的数据变化", effect: S_QD }, { text: "传播资讯并观察反应", effect: S_HD }, { text: "表示怀疑并寻找破绽", effect: S_LH }, { text: "等待确切消息", effect: S_MM }, { text: "只关注立绘", effect: S_NONE }, { text: "持续在线但不发表态度", effect: S_QSZ } ] },
    { text: "如果生活状态被公开，你最在乎的是：", options: [ { text: "是否符合我一直以来的想象", effect: S_JN }, { text: "失去了虚拟美感", effect: S_XM }, { text: "和我想象中的关联对象是否匹配", effect: S_LL }, { text: "不影响测出的数据和强度", effect: S_QD }, { text: "单纯满足好奇心", effect: S_NONE }, { text: "宣称他玩游戏的硬件影响了评测公正性", effect: S_SZJL } ] },
    { text: "社区对某次事件展开大规模声讨时，你的心态更接近：", options: [ { text: "只想验证当时给出的数据是否正确", effect: S_QD }, { text: "觉得审判充满娱乐性想加一把火", effect: S_LZ }, { text: "对审判内容漠不关心只关注他的状态", effect: S_JN }, { text: "关注是否有关系密切的人站出来发声", effect: S_LL }, { text: "等审判结束了告诉我结论就行", effect: S_NONE }, { text: "借机提及另一款游戏处理类似事件的方法", effect: S_KK } ] },
    { text: "看着攻略主播卷入社区漩涡，你会认为：", options: [ { text: "只要还能产出评测就行", effect: S_QD }, { text: "提供了极佳的话题素材", effect: S_HD }, { text: "激发了内心的保护欲", effect: S_JN }, { text: "猜测背后受到了特定人物的影响", effect: S_LL }, { text: "互联网现象很正常", effect: S_NONE }, { text: "利用该事件的文本进行混音或切片创作", effect: S_EC } ] },
    { text: "你判断一次视频“有价值”的标准是：", options: [ { text: "干员的客观强度得到了深度测定", effect: S_QD }, { text: "提供了大量可以搬运至外部的素材", effect: S_HD }, { text: "弹幕和评论区充满了攻击性对线", effect: S_LZ }, { text: "捕捉到了可以关联互动的暗示", effect: S_LL }, { text: "解答了我的游戏疑问", effect: S_NONE }, { text: "能够利用特定话术引来对立群体的谩骂", effect: S_CZ } ] },
    { text: "在审视社交圈子时，你的习惯是：", options: [ { text: "发掘连结他与某人的线索进行解读", effect: S_LL }, { text: "觉得主播的私交跟自己没关系", effect: S_MM }, { text: "只专注于他本人的行为", effect: S_JN }, { text: "故意截取片段引起反感", effect: S_LH }, { text: "顺其自然", effect: S_NONE }, { text: "回顾他与老玩家或早期创作者的关系", effect: S_LZL } ] },
    { text: "留下评论的主要动机，通常是：", options: [ { text: "探讨某个干员技能的具体数值与机制", effect: S_QD }, { text: "享受别人回复你的快感", effect: S_HD }, { text: "抒发反感，输出负面论断", effect: S_LH }, { text: "在不同意见之间催化摩擦", effect: S_LZ }, { text: "正常表达观点或提出疑问", effect: S_NONE }, { text: "通过高额留言让全直播间看到我的发言", effect: S_LB } ] },
    { text: "面对长时间未更新的内容，你会：", options: [ { text: "计算现有干员的保值期", effect: S_QD }, { text: "散布他即将停更的消息", effect: S_HD }, { text: "不关心", effect: S_MM }, { text: "在其他讨论区引战", effect: S_LZ }, { text: "玩其他游戏", effect: S_NONE }, { text: "不断发送相同的问号", effect: S_FDJ } ] },
    { text: "当遭遇其他内容创作者反驳时，你会：", options: [ { text: "理智评估双方给出的数据论据", effect: S_QD }, { text: "觉得戏码非常精彩到处搬运战况", effect: S_HD }, { text: "坚定地支持他", effect: S_JN }, { text: "幻想敌对阵营中存在旧识", effect: S_LL }, { text: "默默吃瓜", effect: S_NONE }, { text: "从头到尾观察交锋但不留下一条评论", effect: S_QSZ } ] },
    { text: "数据结论明显逆风的情况下依然坚称自己是对的，你的反应是：", options: [ { text: "复盘算法找出底层机制逻辑", effect: S_QD }, { text: "截图发到论坛供大家嘲笑", effect: S_HD }, { text: "被这种顶住压力的固执所吸引", effect: S_XM }, { text: "猜测是否在向某个人隔空置气", effect: S_LL }, { text: "等实战结果出来再下结论", effect: S_NONE }, { text: "散布该干员如果不抽将无法通关的言论", effect: S_SZJL } ] },
    { text: "当模组更新时，你的第一反应是：", options: [ { text: "分析机制变动对强度排行的影响", effect: S_QD }, { text: "把争议话题抛到论坛看别人吵架", effect: S_LZ }, { text: "不在乎更新了什么内容", effect: S_MM }, { text: "抱怨为什么要出这种东西", effect: S_LH }, { text: "看看立绘决定抽不抽", effect: S_NONE }, { text: "询问其他二游是否也有类似系统", effect: S_KK } ] },
    { text: "关于将主播形象进行捆绑的行为，你认为：", options: [ { text: "这是我关注的核心动力", effect: S_LL }, { text: "干扰了对客观数据的研究", effect: S_QD }, { text: "只要能产生大规模的争吵就行", effect: S_LZ }, { text: "毫不关心", effect: S_MM }, { text: "偶尔看看", effect: S_NONE }, { text: "将其制作为二创短视频配以特定音乐", effect: S_EC } ] },
    { text: "评价日常进行强度讨论的行为，你的真实反应是：", options: [ { text: "欣赏那种不怕得罪人的锐气", effect: S_JN }, { text: "以此来佐证自己对机制的理解", effect: S_QD }, { text: "截图宣扬其缺乏专业态度", effect: S_LH }, { text: "看过就忘了", effect: S_MM }, { text: "作为正常的参考资料", effect: S_NONE }, { text: "披着反对者的马甲去支持者的讨论区发言", effect: S_CZ } ] },
    { text: "对于给特定干员起极端绰号的现象，你：", options: [ { text: "乐意将其带到各大论坛", effect: S_HD }, { text: "热衷于去挑起激烈的对立", effect: S_LZ }, { text: "压根不在乎这些称谓", effect: S_MM }, { text: "试图分析与其他角色有没有关联", effect: S_LL }, { text: "觉得风气不太好，自己不用", effect: S_NONE }, { text: "认为以前玩家起的绰号更有水准", effect: S_LZL } ] },
    { text: "看到关于账号估值的讨论时，你会：", options: [ { text: "通过干员持有率计算价值", effect: S_QD }, { text: "截图去嘲讽低配玩家", effect: S_HD }, { text: "不关注账号交易", effect: S_MM }, { text: "认为账号价值在于厨力", effect: S_XM }, { text: "随大流看看", effect: S_NONE }, { text: "提供全图鉴账号让他帮忙代抽", effect: S_LB } ] },
    { text: "假设主播间决裂的戏码真实发生，你会：", options: [ { text: "只要还能出视频测干员就行", effect: S_QD }, { text: "收集两人决裂的蛛丝马迹四处散播", effect: S_HD }, { text: "体会他被割舍的孤独感", effect: S_JN }, { text: "反复咀嚼他们曾经的互动录像", effect: S_LL }, { text: "觉得分分合合很正常", effect: S_NONE }, { text: "只复制别人的弹幕：“闹掰了？”", effect: S_FDJ } ] },
    { text: "如果在直播中触及了敏感的禁忌话题，你会：", options: [ { text: "分析该话题背后的游戏机制", effect: S_QD }, { text: "开启录屏准备搬运大节奏", effect: S_HD }, { text: "希望他能赶紧转移话题", effect: S_JN }, { text: "脑补这是情绪化反叛之举", effect: S_XM }, { text: "提前退出直播间", effect: S_NONE }, { text: "不发弹幕提醒，静静观察事态发展", effect: S_QSZ } ] },
    { text: "观看直播的时间里，你绝大多数精力消耗在：", options: [ { text: "观察表情变化和语气停顿", effect: S_JN }, { text: "搜寻可能成为黑料的片段", effect: S_LH }, { text: "紧盯技能倍率和数值推演", effect: S_QD }, { text: "在脑海中替换为虚构形象", effect: S_XM }, { text: "听声音", effect: S_NONE }, { text: "不断散播“没有XX干员这游戏玩不下去”的言论", effect: S_SZJL } ] },
    { text: "面对具体数据论证，你内心的态度是：", options: [ { text: "认为这是比较有价值的参考依据", effect: S_QD }, { text: "觉得能引发社区里的争议讨论就好", effect: S_LZ }, { text: "注意力更多在讲解时的状态", effect: S_JN }, { text: "寻找他和其他UP主默契的影子", effect: S_LL }, { text: "参考一下", effect: S_NONE }, { text: "将这些数据与其他游戏的数值体系进行对比拉踩", effect: S_KK } ] },
    { text: "如果你认为镜头前的暴躁只是一层面具，关注动机是：", options: [ { text: "产出的强度结论依然有意义", effect: S_QD }, { text: "揭露他刻意制造矛盾以获取流量", effect: S_LH }, { text: "触碰他私下里可能存在的疲惫", effect: S_JN }, { text: "坚信只有特定的人才能看到他摘下面具", effect: S_LL }, { text: "不关心他私下是个怎样的人", effect: S_NONE }, { text: "将他的暴躁表现剪辑成鬼畜音频", effect: S_EC } ] },
    { text: "发现言论正在引导粉丝进行攻击时，你会：", options: [ { text: "自己去实战中测试以获取客观结论", effect: S_QD }, { text: "在不同的平台复制言论获取热度", effect: S_HD }, { text: "盲目但心甘情愿地给予支持", effect: S_JN }, { text: "想象幕后掌控者的隐秘博弈", effect: S_LL }, { text: "保持中立", effect: S_NONE }, { text: "使用对立群体的标志性表情包嘲讽防守方", effect: S_CZ } ] },
    { text: "面对外部针对他的长篇负面评价，你会：", options: [ { text: "看完并对比自己对机制的认知", effect: S_QD }, { text: "作为素材搬运到更多平台", effect: S_HD }, { text: "观察负面评价引发的社区动荡", effect: S_LZ }, { text: "根本不看这些帖子", effect: S_MM }, { text: "看完就滑走", effect: S_NONE }, { text: "指出这篇长文的逻辑还不如早年的贴吧论战", effect: S_LZL } ] },
    { text: "当被要求进行高难度关卡挑战时，你的关注点在于：", options: [ { text: "具体的操作轴和容错率", effect: S_QD }, { text: "记录失败的瞬间发到论坛", effect: S_HD }, { text: "不关注高难挑战", effect: S_MM }, { text: "希望看到情绪崩溃的表情", effect: S_LH }, { text: "看看能打到什么程度", effect: S_NONE }, { text: "赞助直播奖金要求他必须通关", effect: S_LB } ] },
    { text: "社区内爆发激烈的冲突时，你参与的方式是：", options: [ { text: "把水搅浑让两边打得更凶", effect: S_LZ }, { text: "复制暴论到各个角落", effect: S_HD }, { text: "抛出早年黑料主导负面走向", effect: S_LH }, { text: "关闭页面完全隔离", effect: S_MM }, { text: "回两句客观的话", effect: S_NONE }, { text: "复制楼上的骂战文本继续盖楼", effect: S_FDJ } ] },
    { text: "总结你持续关注的原因，你会选择：", options: [ { text: "能提供硬核的机制分析", effect: S_QD }, { text: "喜欢看一群人在网上争得面红耳赤", effect: S_LZ }, { text: "搬运信息能获得处于漩涡中心的充实感", effect: S_HD }, { text: "带着长期的负面审视无法否认执念", effect: S_LH }, { text: "当个电子盆栽随便看看", effect: S_NONE }, { text: "只是挂在后台，极少切入该页面", effect: S_QSZ } ] },
    { text: "新人玩家在弹幕提问基础机制，而当时正在对线，你会：", options: [ { text: "试图转移这个不合时宜的提问", effect: S_LL }, { text: "脑补出柔弱对抗强硬的戏码", effect: S_XM }, { text: "截图发到论坛嘲笑", effect: S_LH }, { text: "觉得对线中偶尔的回应很吸引人", effect: S_JN }, { text: "看心情回复解答", effect: S_NONE }, { text: "告诉新人这干员数值太低练了没用", effect: S_SZJL } ] },
    { text: "关闭网页时，你带走的是：", options: [ { text: "干员抽取优先级的规划", effect: S_QD }, { text: "足以让社区混乱的谈资", effect: S_LZ }, { text: "未读消息即将突破的期待", effect: S_HD }, { text: "用来在脑内反复加工的CP切片", effect: S_LL }, { text: "普通的观看体验", effect: S_NONE }, { text: "宣称自己更喜欢另一款游戏的抽卡体验", effect: S_KK } ] },
    { text: "关于游戏版本的评价，你会：", options: [ { text: "核对版本更新公告里的数值修正", effect: S_QD }, { text: "将更新点截图发去引发吐槽", effect: S_HD }, { text: "无所谓", effect: S_MM }, { text: "挑起不同玩家群的矛盾", effect: S_LZ }, { text: "等待更新结束", effect: S_NONE }, { text: "截取公告图重新拼贴制作搞笑图", effect: S_EC } ] },
    { text: "当失误操作导致游戏崩盘时，你的反应是：", options: [ { text: "计算出其实可以通过某种机制挽回", effect: S_QD }, { text: "将其做成动图全网发布", effect: S_HD }, { text: "觉得无可奈何的样子有些可爱", effect: S_XM }, { text: "觉得是在拖延时长", effect: S_LH }, { text: "同情一下", effect: S_NONE }, { text: "披上护航马甲故意去敌营引战", effect: S_CZ } ] },
    { text: "对于“退环境”这三个字，你认为适用在：", options: [ { text: "旧干员被新机制替代的时刻", effect: S_QD }, { text: "为了争夺话语权迫不及待拉踩的人身上", effect: S_LZ }, { text: "言论被炎上后继续开播的场景", effect: S_JN }, { text: "随时挑起骂战的黑子", effect: S_LH }, { text: "只是调侃罢了", effect: S_NONE }, { text: "感叹开服时期没有这种复杂的机制", effect: S_LZL } ] },
    { text: "如果把他比作一种领域，你觉得是：", options: [ { text: "海量的机制数据灌入大脑", effect: S_QD }, { text: "无差别的拉踩斩击粉碎节奏", effect: S_LZ }, { text: "与其他UP主纠缠不清的影子", effect: S_LL }, { text: "无论外界怎么骂依然我行我素", effect: S_LH }, { text: "普通的直播间", effect: S_NONE }, { text: "通过高额打赏才能触发互动的空间", effect: S_LB } ] },
    { text: "关于适应社区节奏的能力，你认为是：", options: [ { text: "玩家对数值膨胀的阈值越来越高", effect: S_QD }, { text: "黑子总能找到新的刁钻角度攻击", effect: S_LH }, { text: "遭受舆论风暴后依然正常直播", effect: S_JN }, { text: "抛出暴论让社区开始随之起舞", effect: S_LZ }, { text: "不太关心背后的节奏", effect: S_NONE }, { text: "重复发送“适应了”直到被禁言", effect: S_FDJ } ] },
    { text: "在这个生态圈里，纯粹意味着：", options: [ { text: "坚持用数据为干员正名", effect: S_QD }, { text: "无条件站在他这边的粉丝", effect: S_JN }, { text: "只磕特定CP不允许拆逆", effect: S_LL }, { text: "每天搜索黑料由恨生爱", effect: S_LH }, { text: "为了干员倾家荡产", effect: S_NONE }, { text: "一直在线却从不发表观点", effect: S_QSZ } ] },
    { text: "如果出现极端暴言，你认为接下来会：", options: [ { text: "放弃弱势干员加入唯强度论", effect: S_QD }, { text: "无差别锐评攻击其他UP主", effect: S_LH }, { text: "搞节目效果发癫感到开心", effect: S_LZ }, { text: "期待暴言引发百楼对骂", effect: S_HD }, { text: "以为在读台词", effect: S_NONE }, { text: "到处宣扬该游戏数值已经彻底崩坏", effect: S_SZJL } ] },
    { text: "发现弹幕里总是出现某几个人，你会想：", options: [ { text: "他们是来带节奏和钓鱼的", effect: S_LH }, { text: "脑补是否存在不为人知的羁绊", effect: S_LL }, { text: "视为可以一起搬运爆典的同好", effect: S_HD }, { text: "根本不关心弹幕有谁", effect: S_MM }, { text: "看久了自然眼熟", effect: S_NONE }, { text: "发弹幕询问另一款同类游戏的情况", effect: S_KK } ] },
    { text: "在观看视频时如果能暂停，你会：", options: [ { text: "仔细抄下技能倍率和敌方抗性公式", effect: S_QD }, { text: "截取表情扭曲的一帧全网发布", effect: S_HD }, { text: "观察那一刻的眼神和嘴角", effect: S_JN }, { text: "去把所有引战言论全点赞", effect: S_LZ }, { text: "去倒杯水", effect: S_NONE }, { text: "将这一帧提取并制作为恶搞视频封面", effect: S_EC } ] },
    { text: "在这个社区环境中，你理解的价值是：", options: [ { text: "坚持用严谨的数值证明自己", effect: S_QD }, { text: "在所有人都跟风黑时进行支持", effect: S_JN }, { text: "将最真实的战况传递到每个板块", effect: S_HD }, { text: "保持理智不参与党同伐异", effect: S_MM }, { text: "开心最重要", effect: S_NONE }, { text: "伪装成萌新去引战贴里煽风点火", effect: S_CZ } ] },
    { text: "如果血狼破军突然开始播《我的世界》，并在挖矿时身后出现了苦力怕的嘶嘶声，你会：", options: [ { text: "截取苦力怕爆炸的瞬间，提取声音制作鬼畜视频", effect: S_EC }, { text: "计算爆炸伤害与血狼破军所穿护甲的减伤比例", effect: S_QD }, { text: "直接打赏一个醒目留言，提醒或嘲笑血狼破军即将失去装备", effect: S_LB }, { text: "认为血狼破军连最基础的听声辨位都做不到，游戏水平极差", effect: S_LH }, { text: "看着屏幕等待结果，不发一条弹幕", effect: S_QSZ }, { text: "跟着弹幕一起刷嘶嘶嘶的拟声词", effect: S_FDJ } ] },
    { text: "当血狼破军拿出一个黑色封皮的笔记本，并声称要像《死亡笔记》里那样把退环境的干员名字全写上去时，你会：", options: [ { text: "借此机会在论坛散布恐慌，宣称名单上的干员已失去实战价值", effect: S_SZJL }, { text: "怂恿血狼破军在本子上写下其他争议主播的名字以制造节目效果", effect: S_LZ }, { text: "觉得血狼破军这个举动类似于动漫里嘴硬的属性角色", effect: S_XM }, { text: "不懂这个笔记本的梗，只关心血狼破军接下来测什么干员", effect: S_MM }, { text: "提到另一款游戏，表示那边的平衡做得更好不需要这种形式", effect: S_KK }, { text: "回忆起血狼破军早年连弱势干员都用来打高难关卡的时期", effect: S_LZL } ] },
    { text: "在与其他UP主连麦辩论干员强度时，如果血狼破军试图使用《辉夜大小姐》中“先表露倾向的人就输了”的心理战术，你会：", options: [ { text: "捕捉血狼破军和连麦对象之间的心理博弈，将其视为互动发糖", effect: S_LL }, { text: "提取他们辩论中涉及的穿甲和DPS计算公式", effect: S_QD }, { text: "伪装成对方的粉丝，在弹幕发送攻击性言论挑起争端", effect: S_CZ }, { text: "不关心辩论结果，只盯着血狼破军思考对策时的小动作", effect: S_JN }, { text: "记录下血狼破军在心理战中处于下风的语录，发帖赚取回复量", effect: S_HD }, { text: "默默看完这场连麦，不发表任何站队言论", effect: S_QSZ } ] },
    { text: "若血狼破军试图用讲解《我的世界》红石电路的方式，来拆解某个新干员的索敌逻辑，你的反应是：", options: [ { text: "记录这套逻辑并应用于高难关卡的流程设计中", effect: S_QD }, { text: "把血狼破军讲解红石时卡壳出错的片段剪辑成搞笑集锦", effect: S_EC }, { text: "抓住推演中的漏洞，长篇大论地论证其专业性不足", effect: S_LH }, { text: "充值醒目留言，直接询问最终结论而不看推导过程", effect: S_LB }, { text: "觉得过于复杂听不懂，选择暂时切出直播间", effect: S_MM }, { text: "看着满屏的代码，在弹幕里跟随复读看不懂", effect: S_FDJ } ] },
    { text: "如果血狼破军像《死亡笔记》里的夜神月一样，宣称某次社区争议“完全在自己的计划之中”，你会：", options: [ { text: "无论真假，立刻截图转发期待看到各路人马的反应", effect: S_LZ }, { text: "将这个宣言作为标题，在论坛发布引战贴以获取消息提示", effect: S_HD }, { text: "披上理性的马甲，在帖子下指责血狼破军为了流量制造话题", effect: S_CZ }, { text: "认为血狼破军现在的风格过于浮躁，失去了早期做攻略的重心", effect: S_LZL }, { text: "觉得血狼破军强装镇定掌控一切的样子有一种特殊的吸引力", effect: S_JN }, { text: "表示其他游戏的环境比这里清净，没有这些事件", effect: S_KK } ] },
    { text: "假设血狼破军直播时输了惩罚游戏，被迫模仿《辉夜大小姐》里的书记舞，你会：", options: [ { text: "在脑海中为血狼破军换上女仆装或相应的二次元形象", effect: S_XM }, { text: "逐帧录制，利用动作捕捉技术替换成干员模型发布", effect: S_EC }, { text: "认为这种行为是在哗众取宠，截图去论坛进行人身攻击", effect: S_LH }, { text: "觉得这种环节没有意义，催促血狼破军回到干员测试环节", effect: S_QD }, { text: "刷礼物要求血狼破军再跳一遍或指定下一个动作", effect: S_LB }, { text: "看着屏幕，面无表情地等惩罚环节过去", effect: S_QSZ } ] },
    { text: "在评价某个争议干员时，血狼破军采取了类似《我的世界》中“垂直往下挖”这种打破常规且具风险的极端论点，你会：", options: [ { text: "利用该论点，向玩家渲染不抽这个干员就会卡关的焦虑", effect: S_SZJL }, { text: "预料到该论点会引发骂战，立刻去各大论坛占座看戏", effect: S_LZ }, { text: "伪装成该干员的极端粉丝，在其他主播的评论区进行拉踩", effect: S_CZ }, { text: "猜测这种反常举动是否在向某位曾持有相反观点的熟人喊话", effect: S_LL }, { text: "不在意论点有多极端，只按照自己的偏好抽卡", effect: S_MM }, { text: "在弹幕里大量复制血狼破军刚才说出的极端观点", effect: S_FDJ } ] },
    { text: "直播间里，血狼破军一边进行着复杂的数据推导，一边像夜神月一样用夸张的动作拿起一块薯片吃下，你会：", options: [ { text: "将吃薯片的动作与游戏内决战技的音效进行同步剪辑", effect: S_EC }, { text: "观察血狼破军吃薯片时的咀嚼习惯和吞咽动作", effect: S_JN }, { text: "认为血狼破军在刻意制造烂梗，发帖批评其直播态度", effect: S_LH }, { text: "忽略吃薯片的动作，只记录屏幕上的DPS数值", effect: S_QD }, { text: "怀念以前安静算数据、不搞这些动作的时期", effect: S_LZL }, { text: "抱怨该游戏的数值系统过于繁琐，不像别的游戏直观", effect: S_KK } ] },
    { text: "当血狼破军非常看好某个干员却拒不承认，犹如《辉夜大小姐》中不肯告白的学生会长，你会：", options: [ { text: "记录下血狼破军前后矛盾的言论，发到贴吧进行扩散博取关注", effect: S_HD }, { text: "将这种属性与血狼破军平时的暴躁形象结合进行二次设定", effect: S_XM }, { text: "将血狼破军嘴硬的对象替换为另一位UP主撰写互动桥段", effect: S_LL }, { text: "将血狼破军的不坦率解读为该干员强度暗藏隐患以制造焦虑", effect: S_SZJL }, { text: "发送醒目留言，用金额要求血狼破军给出对该干员的正面评价", effect: S_LB }, { text: "知道血狼破军在嘴硬，但不发一言看血狼破军何时圆不下去", effect: S_QSZ } ] },
    { text: "在解读新机制时，血狼破军出现了一个离谱的常识性错误，就像把蝴蝶指认为鸽子的梗一样，你会：", options: [ { text: "在评论区列出详细的数据和公式，纠正血狼破军的机制理解", effect: S_QD }, { text: "将这个失误视为游戏理解低下的铁证，在相关帖子中反复提及", effect: S_LH }, { text: "伪装成血狼破军的死忠粉强行洗白这个错误，招致路人反感", effect: S_CZ }, { text: "把错误截图做成表情包，在各个群聊里大肆传播", effect: S_LZ }, { text: "没有发现血狼破军犯错，或者觉得这不影响自己玩游戏", effect: S_MM }, { text: "跟着弹幕满屏发送问号", effect: S_FDJ } ] },
    { text: "如果将当前充满拉踩的社区比作《我的世界》中充满危险的下界，你认为血狼破军在这里的生存方式是：", options: [ { text: "血狼破军四处喷吐火球，而我享受看着血狼破军引发混乱的过程", effect: S_LZ }, { text: "我深入下界收集血狼破军的暴言，搬运回主世界换取流量", effect: S_HD }, { text: "无论环境多恶劣，我都会持续关注血狼破军在下界的一举一动", effect: S_JN }, { text: "觉得现在的社区环境太差，还是早年和平的主世界时代更好", effect: S_LZL }, { text: "站在传送门边缘默默观察，不亲自踏入这片区域", effect: S_QSZ }, { text: "认为这个游戏的社区环境没救了，不如去玩另一款游戏", effect: S_KK } ] },
    { text: "假设为了评估干员强度，需要像交换“死神之眼”那样消耗精力，你认为：", options: [ { text: "这是值得的，只有准确的数值才能指导资源分配", effect: S_QD }, { text: "借此宣扬获取强度的代价，让普通玩家对培养产生畏惧感", effect: S_SZJL }, { text: "认为血狼破军消耗精力不仅仅为了数据，也是为了看清某人在社区的立场", effect: S_LL }, { text: "将这种消耗过度的状态描绘成一种脆弱的属性美感", effect: S_XM }, { text: "觉得玩游戏没必要这么极端，随便玩玩就好", effect: S_MM }, { text: "用资金支持血狼破军，试图通过这种方式补偿血狼破军测试消耗的精力", effect: S_LB } ] },
    { text: "当血狼破军面对外部社区的攻击，表现出类似《辉夜大小姐》中石上优那种拒绝解释的玩家状态时，你会：", options: [ { text: "认为这纯粹是装可怜博取同情，继续输出负面评价", effect: S_LH }, { text: "保护欲被激发，觉得血狼破军不解释也具有某种悲剧色彩", effect: S_JN }, { text: "将血狼破军过往的高光时刻与现在的状态剪辑在一起配上音乐", effect: S_EC }, { text: "假扮成中立者，发表看似同情实则暗讽的言论恶化其处境", effect: S_CZ }, { text: "不关注血狼破军的心理状态，只关心下一期干员测评什么时候出", effect: S_QD }, { text: "在弹幕里无脑发送心疼，并不探究事件起因", effect: S_FDJ } ] },
    { text: "面对一个简单的干员技能，血狼破军却像套娃一样进行了多层深度的假设与推演，你的态度是：", options: [ { text: "把血狼破军的结论断章取义，发到贴吧制造血狼破军过度吹捧的假象", effect: S_HD }, { text: "指出血狼破军以前的测评干脆利落，现在为了凑时长过于繁琐", effect: S_LZL }, { text: "觉得血狼破军这种推演是为了在特定机制上与某位熟人的观点对齐", effect: S_LL }, { text: "虽然推演复杂，但依然记录下每层假设中的极端DPS上限", effect: S_QD }, { text: "嘲讽这游戏的技能描述不清导致过度解读，并夸奖另一款游戏", effect: S_KK }, { text: "挂着直播间做其他事情，等血狼破军推演完给出最终结论再看屏幕", effect: S_QSZ } ] },
    { text: "当血狼破军的某个论点像引燃了《我的世界》中的TNT方块一样，引发了连锁的社区爆炸时，你的定位是：", options: [ { text: "在旁边按下打火石，并欣赏爆炸过程的旁观者", effect: S_LZ }, { text: "悄悄在原本的TNT旁边又放了几个其他阵营炸药包的人", effect: S_CZ }, { text: "利用爆炸余波，告诉大家资源规划错误下场就和被炸毁一样", effect: S_SZJL }, { text: "截取各大论坛爆炸的言论，拼接成迷惑行为大赏视频", effect: S_EC }, { text: "在爆炸中心刷一个醒目留言，试图用资金让大家冷静", effect: S_LB }, { text: "在爆炸发生前就退出了服务器，对争端毫不知情", effect: S_MM } ] },
    { text: "如果血狼破军宣称自己立下了“束缚”，只要这期抽卡不歪，以后就再也不骂某个干员时，你会：", options: [ { text: "分析这个干员是否真的值得血狼破军立下这种誓言", effect: S_QD }, { text: "等着看血狼破军下次歪了之后如何违背誓言破防", effect: S_LZ }, { text: "截图记录，等血狼破军下次开骂时发到论坛打脸", effect: S_HD }, { text: "觉得血狼破军这种强行给自己加设定的行为有点中二的可爱", effect: S_XM }, { text: "在弹幕里跟随大军复读“束缚已成立”", effect: S_FDJ }, { text: "看着血狼破军立誓，内心毫无波澜", effect: S_QSZ } ] },
    { text: "血狼破军在直播间开启了下注竞猜，赌自己能不能一把过高难，你会：", options: [ { text: "充值大量礼物，表示要用财力帮血狼破军强行改命", effect: S_LB }, { text: "毫不犹豫地把竞猜币押血狼破军输，想看他破产的节目效果", effect: S_LZ }, { text: "仔细研究敌方数值和血狼破军的阵容，计算出胜率后再理性下注", effect: S_QD }, { text: "在弹幕冷嘲热讽，表示以血狼破军的操作水平“梭哈”就是白送", effect: S_LH }, { text: "随便押一点参与一下，输赢无所谓", effect: S_MM }, { text: "披上血狼破军的粉丝牌子去带节奏，要求他输了就直播下跪", effect: S_CZ } ] },
    { text: "如果血狼破军某天直播背景在洗脚城，一边享受泡脚服务一边和弹幕闲聊干员强度，你会：", options: [ { text: "关心水温烫不烫，询问血狼破军最近是不是太累了需要放松", effect: S_JN }, { text: "把血狼破军泡脚时惬意发出的声音截取下来，做成鬼畜音频", effect: S_EC }, { text: "猜测血狼破军是不是和其他某位关系好的UP主一起去洗脚的", effect: S_LL }, { text: "感叹以前血狼破军做攻略多么严肃，现在居然堕落到洗脚城直播了", effect: S_LZL }, { text: "录屏并发布帖子“震惊！某攻略UP主竟在洗脚城做强度评测”", effect: S_HD }, { text: "趁机提问另一款游戏有没有类似洗脚放松的休闲玩法", effect: S_KK } ] },
    { text: "血狼破军突然在动态晒出自己健身举铁的照片，并配文“现在的我已经超越了重装干员”，你会：", options: [ { text: "认真比对人类举重世界纪录和泰拉干员的力量设定差距", effect: S_QD }, { text: "疯狂保存照片，在脑海里勾勒血狼破军狂野的肌肉线条", effect: S_XM }, { text: "嘲讽血狼破军肌肉练得再好，打游戏时的脑力还是不及格", effect: S_LH }, { text: "借此发挥，在论坛散布“打不出血狼破军的操作就是身体素质不行”的焦虑", effect: S_SZJL }, { text: "把血狼破军的肌肉照片P成干员精二立绘到处传播", effect: S_EC }, { text: "默默点个赞，然后继续潜水", effect: S_QSZ } ] },
    { text: "当血狼破军在游戏中打出一波极限操作，并大喊“这一击，打出了黑闪！”时，你会：", options: [ { text: "逐帧分析这波操作的技能轴，确认是不是真的存在极限的帧数判定", effect: S_QD }, { text: "觉得血狼破军配音太出戏，准备录下来去其他群里嘲笑他发癫", effect: S_LZ }, { text: "联想血狼破军之前是不是和某位朋友一起看《咒术回战》受了影响", effect: S_LL }, { text: "在弹幕里配合血狼破军，疯狂刷屏“黑闪！黑闪！”", effect: S_FDJ }, { text: "在其他原著粉聚集的地方大肆宣扬，试图引起跨圈子的反感", effect: S_CZ }, { text: "觉得只是个普通的动漫梗，看看就过了", effect: S_MM } ] },
    { text: "如果血狼破军因为抽卡上头，不仅花光了合成玉还自爆向朋友借了钱继续赌，你会：", options: [ { text: "立刻截图发帖：“某主播沉迷抽卡竟负债累累，是人性的扭曲还是数值的沦丧”", effect: S_HD }, { text: "感到十分心疼，甚至想要自己掏钱帮血狼破军把坑填上", effect: S_JN }, { text: "敏锐地察觉，疯狂猜测那个借钱给血狼破军的“朋友”究竟是谁", effect: S_LL }, { text: "痛心疾首，表示早年为了游戏热爱做视频的血狼破军现在已经变质了", effect: S_LZL }, { text: "直接打赏一个高额超话或舰长，留言“拿去还债”", effect: S_LB }, { text: "借机警告新玩家，如果不早做规划，下场就会像血狼破军一样破产", effect: S_SZJL } ] },
    { text: "在洗脚城直播时，血狼破军不小心把洗脚城的塑料拖鞋穿反了，还毫无察觉地高谈阔论，你会：", options: [ { text: "截取血狼破军穿反拖鞋的画面，制作成一张“指点江山”的世界名画梗图", effect: S_EC }, { text: "觉得血狼破军连基本的生活自理能力都没有，更加看不起他", effect: S_LH }, { text: "觉得这种在镜头前毫不做作、有些笨拙的形象直戳XP", effect: S_XM }, { text: "不提醒血狼破军，就等着看他站起来走路摔跤的滑稽场面", effect: S_LZ }, { text: "发现了拖鞋穿反，但就是憋在心里不说，静静观看", effect: S_QSZ }, { text: "跟着弹幕大军无脑复读“拖鞋！拖鞋！”", effect: S_FDJ } ] },
    { text: "血狼破军在直播时拿出一个巨大的蛋白粉桶，声称这是他高强度健身的证明，你会：", options: [ { text: "仔细辨认蛋白粉的牌子，打算买同款，想体验和血狼破军一样的生活方式", effect: S_JN }, { text: "在弹幕中纠正血狼破军，指出过量摄入蛋白质并不能提高神经反应速度", effect: S_QD }, { text: "截取他喝蛋白粉的画面，去论坛造谣血狼破军为了带节奏已经开始磕药", effect: S_HD }, { text: "询问弹幕另一款游戏的体力药剂是不是也长得像血狼破军喝的蛋白粉", effect: S_KK }, { text: "伪装成健身达人，长篇大论地辱骂血狼破军喝粉的姿势不标准", effect: S_CZ }, { text: "觉得就是主播常见的带货套路，准备跳过这部分", effect: S_MM } ] },
    { text: "如果血狼破军在连麦辩论时，将双方甩出Excel表格对线比作“领域展开的碰撞”，你会：", options: [ { text: "忽视中二的台词，迅速下载血狼破军的表格核实各项数值是否正确", effect: S_QD }, { text: "觉得这种赛博斗殴太精彩了，拼命在两边直播间来回传话拱火", effect: S_LZ }, { text: "将这种激烈的碰撞视为灵魂共鸣，疯狂脑补血狼破军与对方私下的交锋", effect: S_LL }, { text: "嘲讽血狼破军算错了一个数据，他的“领域”属于是残缺版，一触即溃", effect: S_LH }, { text: "给血狼破军连麦的画面加上《咒术回战》的特效，做成燃向剪辑", effect: S_EC }, { text: "看着满屏的表格和弹幕，一言不发地旁观", effect: S_QSZ } ] },
    { text: "当血狼破军因为抽不到想要的干员，气得拍桌子并在直播间现场开启“玄学作法”时，你会：", options: [ { text: "利用血狼破军沉船的惨状，在社区里极力渲染这个池子水很深，制造抽取恐慌", effect: S_SZJL }, { text: "觉得血狼破军抓狂又迷信的样子有一种反差萌，非常可爱", effect: S_XM }, { text: "录下血狼破军作法的过程，配上“血狼小丑时刻”的标题发往各大群聊", effect: S_HD }, { text: "留言感叹血狼破军以前抽卡多理智，现在也被厂商的概率逼疯了", effect: S_LZL }, { text: "花钱在直播间放烟花或打赏，就为了盖住血狼破军作法的声音", effect: S_LB }, { text: "乘机安利另一款抽卡爆率更高的游戏，试图拉走直播间的观众", effect: S_KK } ] },
    { text: "血狼破军在洗脚直播的中途，竟然因为太舒服靠在沙发上睡着了，你会：", options: [ { text: "觉得血狼破军平时太辛苦了，在屏幕前默默注视着他的睡颜，不忍打扰", effect: S_JN }, { text: "疯狂在弹幕里发高频弹幕，试图把血狼破军吵醒看他惊跳的反应", effect: S_LZ }, { text: "猜测这个时候会不会有哪个神秘人物来给血狼破军盖上毯子", effect: S_LL }, { text: "截图发帖攻击血狼破军“毫无职业素养，开播睡觉骗粉丝钱”", effect: S_LH }, { text: "截取血狼破军睡觉的静态画面，配上各种冥曲和黑白滤镜发布", effect: S_EC }, { text: "既然血狼破军睡了，觉得没内容看就直接关掉网页了", effect: S_MM } ] },
    { text: "血狼破军为了证明自己的反应能力，直播打起了拳击沙袋，但没打几下就开始大喘气，你会：", options: [ { text: "根据血狼破军出拳的速度和体力消耗，计算他在泰拉大陆可能连源石虫都打不过", effect: S_QD }, { text: "把血狼破军气喘吁吁、略显狼狈的样子做成GIF，到处散播作为嘲笑他的资本", effect: S_HD }, { text: "将汗水浸湿衣服的画面深深刻在脑海里，对血狼破军进行深度的私密幻想", effect: S_XM }, { text: "去健身圈发帖，用血狼破军的视频作为反面教材引战，激起圈外人的谩骂", effect: S_CZ }, { text: "在弹幕里无情地跟随复读“血狼细狗”、“虚了”", effect: S_FDJ }, { text: "看着血狼破军大喘气，依然面无表情，甚至连个标点符号都不发", effect: S_QSZ } ] },
    { text: "在分析干员退环境的过程时，血狼破军将官方的暗改或数值膨胀形容为“不可视的解”和“捌”，你会：", options: [ { text: "顺着血狼破军的话，大肆渲染官方正在用“解”切碎所有老干员，制造全服焦虑", effect: S_SZJL }, { text: "不理会这些花里胡哨的修辞，只要求血狼破军给出明确的DPS下降百分比", effect: S_QD }, { text: "觉得血狼破军是在为自己以前吹错干员找借口，甩锅给官方的不可视暗改", effect: S_LH }, { text: "觉得血狼破军发病的语录又增加了，赶紧抄下来去别的社区引战", effect: S_LZ }, { text: "砸钱送礼，要求血狼破军立刻停止中二发言，换下一个干员测", effect: S_LB }, { text: "借机提到自己玩的游戏不会有这种官方暗杀老角色的恶劣行径", effect: S_KK } ] },
    { text: "血狼破军原本信誓旦旦说绝对不碰某个毒池，结果半夜却被发现在偷偷氪金抽卡，你会：", options: [ { text: "连夜截图血狼破军的氪金记录，发帖痛斥“某主播表面客观实则暗地里当赌狗”", effect: S_HD }, { text: "替血狼破军辩解，觉得他肯定是为了给粉丝做更详细的测评才被迫破戒的", effect: S_JN }, { text: "摇摇头，在评论区留下“血狼破军终究还是活成了自己最讨厌的样子”后取关", effect: S_LZL }, { text: "敏锐地怀疑，是不是血狼破军很在意的某个人喜欢这个干员，他才偷偷抽的", effect: S_LL }, { text: "披上结仇主播的粉丝马甲，在动态下疯狂嘲讽血狼破军言而无信", effect: S_CZ }, { text: "抽就抽呗，觉得血狼破军玩游戏花点钱很正常，不想多管闲事", effect: S_MM } ] },
    { text: "泡脚泡到微醺状态的血狼破军，突然开始眼含热泪地讲起自己做UP主以来的心路历程，你会：", options: [ { text: "完全共情，跟着血狼破军一起落泪，觉得他一路走来真的太不容易了", effect: S_JN }, { text: "认为这纯粹是洗脚城水蒸气熏的，血狼破军假惺惺地卖惨固粉令人作呕", effect: S_LH }, { text: "把血狼破军流泪的脸和以前暴躁骂人的脸拼接在一起，做成对比讽刺视频", effect: S_EC }, { text: "录下血狼破军哭泣的丑态，发到论坛里说“血狼终于被喷破防了，速来围观”", effect: S_LZ }, { text: "觉得这些情绪价值毫无意义，要求血狼破军擦干眼泪立刻开始今天的强度总结", effect: S_QD }, { text: "根本不管血狼破军在说什么感人的话，依旧盲目地复制弹幕里的“？？？”", effect: S_FDJ } ] },
    { text: "健身第二天，血狼破军在直播中表现得浑身酸痛，连拿鼠标的手都在抖，你会：", options: [ { text: "看着血狼破军因为酸痛而动作迟缓的样子，觉得具有一种极其脆弱的美感", effect: S_XM }, { text: "严厉指出因为血狼破军手抖导致操作失误，刚才那波测试的极限数据作废", effect: S_QD }, { text: "截图血狼破军手抖的瞬间，造谣他因为长期熬夜打游戏导致神经衰弱", effect: S_HD }, { text: "脑补血狼破军是不是和某人发生了一些不可描述的激烈运动才导致浑身酸痛", effect: S_LL }, { text: "刷醒目留言让血狼破军下播去休息，并且包下了他这个月的按摩费用", effect: S_LB }, { text: "看到血狼破军手抖，依然不发任何弹幕关心，继续像个幽灵一样挂机", effect: S_QSZ } ] },
    { text: "当某个备受争议的弱势干员突然崛起，血狼破军大喊“魔虚罗，适应了这个环境！”时，你会：", options: [ { text: "利用血狼破军这句话，宣称没有这个模组的玩家将被彻底淘汰，拉满恐慌情绪", effect: S_SZJL }, { text: "翻出血狼破军以前狂踩这个干员的视频截图，放在一起制造强烈的反差乐子", effect: S_LZ }, { text: "坚决不承认干员变强，认为血狼破军只是为了迎合官方强行吹捧，丧失了底线", effect: S_LH }, { text: "忽略血狼破军的大喊，冷静分析新模组增加的白值是否真的跨越了质变阈值", effect: S_QD }, { text: "发弹幕问血狼破军这种老角色翻身的机制，有没有抄袭其他二次元游戏的设定", effect: S_KK }, { text: "虽然不懂魔虚罗是什么，但觉得这个干员变强了是个好消息", effect: S_MM } ] },
    { text: "血狼破军在一次打赌中运气爆棚，连续单抽出了三个六星，直播间瞬间沸腾，你会：", options: [ { text: "把血狼破军抽卡瞬间的狂喜表情剪辑下来，配上《好日子》的BGM循环播放", effect: S_EC }, { text: "比血狼破军本人还要高兴，觉得这是上天对血狼平时辛苦付出的奖赏", effect: S_JN }, { text: "伪装成破防的非酋玩家，在论坛大骂游戏暗调了血狼破军账号的爆率引发众怒", effect: S_CZ }, { text: "觉得现在的人大惊小怪，回忆起以前无保底时代出货才叫真正的奇迹", effect: S_LZL }, { text: "加入满屏的复读大军，疯狂复制“吸血狼破军欧气”、“寿命换的”", effect: S_FDJ }, { text: "即使直播间弹幕已经卡得动不了，你依然双手离开键盘，静静观看", effect: S_QSZ } ] },
    { text: "血狼破军在洗脚时由于太放松，不小心说漏了某个社区大佬的真名或隐秘八卦，你会：", options: [ { text: "如获至宝，立刻记录下这个名字，作为在贴吧掀起腥风血雨的终极武器", effect: S_HD }, { text: "大脑飞速运转，将这个新名字纳入CP关系网中，分析血狼破军与他们的修罗场", effect: S_LL }, { text: "认为血狼破军故意泄露别人隐私，立刻将这段录音发给当事人挑拨离间", effect: S_LH }, { text: "觉得今晚没有白看，坐等这位被泄露隐私的大佬明天发文和血狼破军撕逼", effect: S_LZ }, { text: "赶紧打赏高额礼物刷屏，试图用这种方式把血狼破军说漏嘴的弹幕掩盖过去", effect: S_LB }, { text: "根本不知道血狼破军提到的大佬是谁，觉得只是个无聊的人名，继续看他泡脚", effect: S_MM } ] },
    { text: "如果血狼破军在漫展线下和粉丝掰手腕，结果被粉丝秒杀的视频被传到网上，你会：", options: [ { text: "拿着这个视频到处转发，嘲笑血狼破军在网上重拳出击，在线下软弱无力", effect: S_LH }, { text: "觉得血狼破军即使输了，咬牙切齿的不甘表情也非常符合傲娇受的设定，反复观看", effect: S_XM }, { text: "严谨地分析两人的杠杆原理、肌肉发力点，指出血狼破军输在姿势不对而不是力量", effect: S_QD }, { text: "跑去原视频下面带节奏，说那个粉丝其实是收了钱故意演戏来羞辱血狼破军的", effect: S_CZ }, { text: "评价说如果是另一款游戏的主播，肯定平时有更好的锻炼，不会像血狼破军这么虚", effect: S_KK }, { text: "感叹血狼破军现在为了热度什么烂活都接，以前那个高冷的技术流已经死了", effect: S_LZL } ] },
{ 
        text: "如果突然爆出惊天猛料，血狼破军其实是gay，你的第一反应是：", 
        options: [ 
            { text: "立刻计算这会不会影响他拔剑的速度和测评干员的DPS", effect: S_QD }, 
            { text: "狂喜，立刻去贴吧发帖“大节奏来了！血狼性取向大揭秘！”", effect: S_HD }, 
            { text: "早就看出来了，他和龙哥那眼神拉丝的互动还用说？立刻动笔写万字同人", effect: S_LL }, 
            { text: "故意去反串带节奏：“只有这种性取向才能测好男干员，你们懂什么！”", effect: S_CZ }, 
            { text: "无论他喜欢男的还是女的，只要他这身肉还在，我就依然爱他", effect: S_JN }, 
            { text: "这下彻底粉转黑了，截屏他以前的话证明他不仅嘴臭还隐藏身份", effect: S_LH } 
        ] 
    },
    { 
        text: "假设血狼破军某天直播时忘了关摄像头，站起来时不小心露出了粉色蕾丝女仆装裙摆，你会：", 
        options: [ 
            { text: "逐帧截图放大，用AI修复画质，然后发到各大群里引发全网鬼畜狂欢", effect: S_EC }, 
            { text: "心中那股难以名状的XP被点燃了，觉得他娇羞的样子太可爱了！", effect: S_XM }, 
            { text: "疯狂复读弹幕：“粉色女仆装？”“粉色女仆装？”“粉色女仆装？”", effect: S_FDJ }, 
            { text: "趁乱刷十个醒目留言，要求他立刻站起来转一圈！", effect: S_LB }, 
            { text: "跑去其他游戏论坛发帖：“你们二游的主播有我们这么硬核的变装吗？”", effect: S_KK }, 
            { text: "毫不关心他穿什么，发弹幕问他：“所以新干员的DPH到底破千没？”", effect: S_QD } 
        ] 
    },
    { 
        text: "如果血狼破军宣布退网去送外卖，且你刚好点到了他送的黄焖鸡米饭，你会：", 
        options: [ 
            { text: "拉着他不让他走，非要他在楼道里给你手算一遍红蒂拐水陈的极值", effect: S_QD }, 
            { text: "拍照发NGA：“震惊！昔日方舟大UP沦落至此，原因竟是数值膨胀？”", effect: S_SZJL }, 
            { text: "觉得他送外卖的样子充满了沧桑的男子气概，忍不住想给他擦汗", effect: S_JN }, 
            { text: "怀念道：“你以前做攻略的时候，哪怕也是这股黄焖鸡味，但至少干货满满。”", effect: S_LZL }, 
            { text: "默默接过外卖，一声不吭地关上门，假装不认识他", effect: S_QSZ }, 
            { text: "故意给差评，然后在评论区写：“送得太慢，不如某字头游戏的物流体验”", effect: S_KK } 
        ] 
    },
    { 
        text: "直播测干员时，血狼破军因为新干员太弱，气得当场咬碎了牙，你会：", 
        options: [ 
            { text: "在旁边配上《野蜂飞舞》的BGM，做成鬼畜踩点视频投稿，配标题“卧槽牙崩了”", effect: S_EC }, 
            { text: "立刻去各大论坛发帖引战：“血狼破军因干员太弱直播自残，策划不出来磕头？”", effect: S_HD }, 
            { text: "阴阳怪气地发弹幕：“急了急了，他急了，好似！”", effect: S_LH }, 
            { text: "完全不理会他的发癫，自己默默在Excel里验证这干员是不是真的没救了", effect: S_QD }, 
            { text: "心疼地砸下重金发SC：“别咬牙了，哥哥咬我吧！”", effect: S_LB }, 
            { text: "假装没看见，继续在弹幕问：“萌新刚入坑，请问这游戏要怎么注册？”", effect: S_MM } 
        ] 
    },
    { 
        text: "如果某天血狼破军在直播间公开招亲，要求对象必须能心算物理闪避期望，你会：", 
        options: [ 
            { text: "立刻掏出草稿纸，开始默写各路干员的闪避帧与概率分布，誓要拿下正宫之位", effect: S_QD }, 
            { text: "觉得这种择偶标准太傲娇了，简直就像轻小说里口嫌体正直的女主", effect: S_XM }, 
            { text: "在贴吧带节奏：“心算闪避期望？这是在选妃还是在选人形计算机？”", effect: S_LZ }, 
            { text: "跑到评论区假扮萌妹发言：“哥哥好厉害，人家连1+1都不会，可以教人家吗？”", effect: S_CZ }, 
            { text: "疯狂艾特龙哥哥，让他赶紧出来算，守护属于他们的爱情！", effect: S_LL }, 
            { text: "看着满屏的相亲弹幕，自己作为老粉丝只觉得这人越来越魔怔了", effect: S_LZL } 
        ] 
    },
    { 
        text: "如果血狼破军被雷劈了之后突然性情大变，开始对每一个干员进行无差别的吹捧：“太强了，全是超大杯”，你的反应是：", 
        options: [ 
            { text: "觉得他终于收钱了，立刻收集截图准备全网网暴他", effect: S_LH }, 
            { text: "极度恐慌，认为如果全是超大杯，那自己的玉肯定不够，到处贩卖数值焦虑", effect: S_SZJL }, 
            { text: "觉得这种失去理智的反差感太涩了，赶紧把音频录下来晚上循环播放", effect: S_JN }, 
            { text: "去隔壁友商论坛发帖：“看吧，方舟连最硬核的主播都开始无脑吹了，这游戏要完”", effect: S_KK }, 
            { text: "跟着弹幕一起疯狂刷：“太强了！超大杯！太强了！超大杯！”", effect: S_FDJ }, 
            { text: "默默看了一会觉得没意思，一言不发地退出了直播间", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼破军去参加《非诚勿扰》，面对女嘉宾的提问，他用全损干员DPS曲线作为回答，你会：", 
        options: [ 
            { text: "把女嘉宾全部灭灯的画面剪辑下来，配上伤感的二次元BGM", effect: S_EC }, 
            { text: "立刻去贴吧发帖：“血狼非诚勿扰爆典！相亲不如算DPS！”", effect: S_HD }, 
            { text: "觉得只有那些能看懂图表的高端大佬，才配得上他孤高的灵魂", effect: S_LL }, 
            { text: "仔细核对他在大屏幕上放出的DPS曲线，发现了一处计算错误", effect: S_QD }, 
            { text: "砸钱给节目组，要求在屏幕上飘过自己的SC嘲笑他", effect: S_LB }, 
            { text: "看不懂这个节目，觉得还是纸片人老婆比较好", effect: S_MM } 
        ] 
    },
    { 
        text: "在漫展上，你竟然发现一个身高一米八的壮汉在出星熊的cosplay，走近一看是血狼破军，你会：", 
        options: [ 
            { text: "被这种反差萌击中，立刻脑补出一万字的娇羞猛男文学", effect: S_XM }, 
            { text: "冲上去问他：“穿这身衣服能不能硬扛三阶段爱国者的长枪？”", effect: S_QD }, 
            { text: "拍下照片并加上群嘲配文，发到每一个对立主播的粉丝群里引战", effect: S_CZ }, 
            { text: "嘲笑他辣眼睛，并恶毒地指出他腿毛都没刮干净", effect: S_LH }, 
            { text: "指指点点：“别的二游主播出的cos多还原，这出的是个啥？”", effect: S_KK }, 
            { text: "在一旁冷笑，感叹当年那个纯粹的数据测评UP主终究还是媚宅了", effect: S_LZL } 
        ] 
    },
    { 
        text: "如果血狼破军突然发布视频，声称自己其实是某公司开发的AI虚拟测评机器人，你会：", 
        options: [ 
            { text: "大喊“这太赛博朋克了”，开始疯狂煽动大家去查他背后的代码是谁写的", effect: S_LZ }, 
            { text: "宣称既然是AI，那以后的所有节奏和错误全都可以甩锅给程序员", effect: S_SZJL }, 
            { text: "毫不惊讶，并表示只有AI才能拥有如此冷酷无情的排轴计算能力", effect: S_QD }, 
            { text: "复读弹幕：“血狼是AI？”“血狼是AI？”“血狼是AI？”", effect: S_FDJ }, 
            { text: "觉得不管是人是机器，只要能继续听他富有磁性的机械音就行", effect: S_JN }, 
            { text: "只是挂着后台听个响，完全不打算在评论区发表看法", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼直播切屏时不小心暴露了浏览记录，上面赫然写着‘如何治疗严重脱发’，你会：", 
        options: [ 
            { text: "把这张图配上牛子豪一起做成表情包，成为全B站通用的防脱发圣经", effect: S_EC }, 
            { text: "去NGA发帖：“实锤了！方舟的高难环境已经把主播逼秃了！”", effect: S_HD }, 
            { text: "心疼哥哥，立刻扫码转账让他去买最好的霸王防脱洗发水", effect: S_LB }, 
            { text: "觉得这一定是算数据算出来的工伤，默默向他致敬", effect: S_QD }, 
            { text: "假装不知情，但在别的地方带节奏：“某UP主头发都没了还天天教人打游戏？”", effect: S_CZ }, 
            { text: "完全没注意浏览记录，还在问刚才那局怎么部署的", effect: S_MM } 
        ] 
    },
    { 
        text: "如果血狼破军决定去打综合格斗，且上台的BGM选了明日方舟的抽卡音效，你会：", 
        options: [ 
            { text: "在脑海里帮他配上字幕：“这一拳，有十万的DPH！”", effect: S_XM }, 
            { text: "期待他在台上被暴打，然后在贴吧实时转播他的惨状", effect: S_LH }, 
            { text: "发现对手是某竞品游戏的主播，立刻将其上升为两款游戏的尊严之战", effect: S_KK }, 
            { text: "分析他的臂展和肌肉量，计算他的平A伤害能否破防对手", effect: S_QD }, 
            { text: "在台下大喊早年的方舟名台词，试图唤醒他身为老玩家的斗志", effect: S_LZL }, 
            { text: "在场边一言不发，安静地看完全场比赛", effect: S_QSZ } 
        ] 
    },
    { 
        text: "你有幸参加泰拉探索协会线下聚会，却发现血狼破军正在用拖把在地上画干员攻击范围，你会：", 
        options: [ 
            { text: "惊呼他已经走火入魔，到处散播他神经失常的谣言制造恐慌", effect: S_SZJL }, 
            { text: "立刻上前，和他一起用粉笔把怪物的行动轨迹和帧数补全", effect: S_QD }, 
            { text: "在一旁录像，并配文《当代明日方舟主播的抽象精神状态》发到B站", effect: S_EC }, 
            { text: "觉得他挥舞拖把的样子孔武有力，被那种奇异的魅力深深折服", effect: S_JN }, 
            { text: "脑补他其实是在和另一位保洁大叔进行地盘的阵营博弈", effect: S_LL }, 
            { text: "跟着围观群众一起喊：“拖把战神！”“拖把战神！”", effect: S_FDJ } 
        ] 
    },
    { 
        text: "如果血狼破军在菜市场和卖菜大妈因为一毛钱吵了起来，甚至用上了‘这白菜的性价比不如卫戍协议六本买个图图’的句式，你会：", 
        options: [ 
            { text: "立刻开启直播，把这场菜市场论战包装成年度最强节奏", effect: S_HD }, 
            { text: "觉得他在无理取闹，发帖指责他素质低下、欺负老人", effect: S_LH }, 
            { text: "走到大妈摊位前，甩出一百块钱：“他买的白菜我全包了！”", effect: S_LB }, 
            { text: "在旁边起哄：“大妈快用你的大招！打断他的施法前摇！”", effect: S_LZ }, 
            { text: "反串成大妈的家属，去网上发帖要求血狼破军公开道歉", effect: S_CZ }, 
            { text: "买完自己的土豆就走，不关心旁边在吵什么", effect: S_MM } 
        ] 
    },
    { 
        text: "血狼破军突然宣布顿悟了，以后只测一星干员的强度，认为二星及以上都是数值膨胀的异端，你会：", 
        options: [ 
            { text: "觉得他终于疯了，感叹这个圈子又少了一个正常算数据的人", effect: S_LZL }, 
            { text: "开始认真研究一星干员的极限压等级打法，跟随他的新脚步", effect: S_QD }, 
            { text: "在各大论坛散布论调：“完了，连血狼都放弃高星了，这游戏氪金彻底没用了！”", effect: S_SZJL }, 
            { text: "觉得这种偏执狂的设定非常有魅力，简直像是个美强惨的反派", effect: S_XM }, 
            { text: "跑到别的游戏社区宣扬：“看看我们方舟，一星干员才是真理！”", effect: S_KK }, 
            { text: "只要不说话，就没人知道我还在偷偷练六星干员", effect: S_QSZ } 
        ] 
    },
    { 
        text: "假设血狼破军穿越到了泰拉大陆，变成了整合运动里最底层的小兵，你觉得他会：", 
        options: [ 
            { text: "因为精确计算了罗德岛干员的攻击死角，苟活到了大结局", effect: S_QD }, 
            { text: "天天在军营里煽动小兵造反，引发整合运动内部的派系大乱斗", effect: S_LZ }, 
            { text: "由于嘴太臭，第一天就被塔露拉一把火给烧成了灰", effect: S_LH }, 
            { text: "成功引起了某个男性高级将领的注意，上演了一出军营绝恋", effect: S_LL }, 
            { text: "被做成搞笑MMD：小兵血狼破军的悲惨挨打一生", effect: S_EC }, 
            { text: "满世界到处跑腿，遇到谁都只会喊那几句NPC台词", effect: S_FDJ } 
        ] 
    },
    { 
        text: "如果有人爆料血狼破军晚上睡觉打呼噜的节奏是完美的摩尔斯电码，翻译过来是‘法抗’，你会：", 
        options: [ 
            { text: "把呼噜声录下来，发到B站作为今年最阴间的方舟二创", effect: S_HD }, 
            { text: "心疼他为了游戏数据连潜意识都被侵蚀了，想给他买安眠药", effect: S_JN }, 
            { text: "认为这是他发出的求救信号，肯定是被资本绑架了！", effect: S_CZ }, 
            { text: "用打赏SC的方式在直播间破译他的呼噜声", effect: S_LB }, 
            { text: "感叹老一辈UP主的执着，现在的年轻UP主连做梦都不算数据了", effect: S_LZL }, 
            { text: "根本不信，觉得太魔幻了，这肯定是段子", effect: S_MM } 
        ] 
    },
    { 
        text: "抽卡非到极致，血狼破军直播时徒手把手机捏成了粉末，并在屏幕前咆哮，你会：", 
        options: [ 
            { text: "趁机向萌新贩卖焦虑：“看吧，连大UP都抽不到，微氪玩家趁早跑路！”", effect: S_SZJL }, 
            { text: "不关心他碎掉的手机，开始计算他这波非酋的概率学极小值", effect: S_QD }, 
            { text: "觉得这种充满力量感的破坏欲简直荷尔蒙爆棚！", effect: S_XM }, 
            { text: "去米哈游的社区发帖：“方舟的爆率把主播逼疯了，还是咱们这边好！”", effect: S_KK }, 
            { text: "静静地看着他发疯，双手离开键盘绝不发一条安慰的弹幕", effect: S_QSZ }, 
            { text: "把咆哮声剪下来，加上电音做成新时代的鬼畜战歌", effect: S_EC } 
        ] 
    },
    { 
        text: "血狼破军被外星人绑架，要求他用数据论证地球人还有活下去的价值，不然就毁灭地球，你会：", 
        options: [ 
            { text: "立刻在论坛发帖倒计时：“地球毁灭倒计时！血狼能算出保底吗？”", effect: S_HD }, 
            { text: "疯狂带节奏：“他肯定会背叛地球的，他个汉奸！”", effect: S_LH }, 
            { text: "期待他用一套完美的DPS推演说服外星人，拯救全人类", effect: S_QD }, 
            { text: "觉得外星人首领肯定会被他折服，上演跨越星际的强制爱CP", effect: S_LL }, 
            { text: "在直播间刷火箭，希望外星人看在钱的份上放过地球", effect: S_LB }, 
            { text: "复读：“地球要毁灭了？”“地球要毁灭了？”“地球要毁灭了？”", effect: S_FDJ } 
        ] 
    },
    { 
        text: "某天看直播时，血狼破军突然顺着网线爬出屏幕，强迫你和他一起算红蒂的buff收益，你会：", 
        options: [ 
            { text: "虽然害怕，但还是拿起笔和他一起探讨那0.5%的误差去哪了", effect: S_QD }, 
            { text: "觉得这简直就是恐怖片，立刻拍照发微博引发全网恐慌", effect: S_LZ }, 
            { text: "娇羞地低下头，觉得这种强迫系的展开简直是乙女游戏照进现实", effect: S_XM }, 
            { text: "立刻换上其他游戏的Cos服，试图用文化差异劝退他", effect: S_KK }, 
            { text: "反向操作，装作自己是方舟策划，当面嘲笑他算的全是错的", effect: S_CZ }, 
            { text: "闭上眼睛假装在做梦，一动不动直到他自己退回屏幕里", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼破军发布了首张个人单曲，全网打榜，但歌词全是他念的技能倍率公式，你会：", 
        options: [ 
            { text: "天天在各种方舟群里发链接刷屏，强迫所有人听这首神曲", effect: S_HD }, 
            { text: "将这首歌作为素材，混音成各大电音节的DJ打碟神曲", effect: S_EC }, 
            { text: "听着听着流下了眼泪，回忆起开服时期大家一起算数据的纯真年代", effect: S_LZL }, 
            { text: "借机嘲讽：“这什么破歌，干员的上限就这么点，听得我都焦虑了！”", effect: S_SZJL }, 
            { text: "戴上耳机闭着眼，单纯欣赏他低沉的嗓音，完全不听他在唱什么", effect: S_JN }, 
            { text: "没听过，也不打算听，我是来玩游戏的不是来听歌的", effect: S_MM } 
        ] 
    },
    { 
        text: "有水友扒出血狼破军在贴吧开了个小号，天天自己给自己发帖‘血狼破军也太帅了吧’，你会：", 
        options: [ 
            { text: "立刻把截图做成传世经典大字报，贴满整个NGA", effect: S_LH }, 
            { text: "觉得他太自恋了，赶紧去帖子底下引战让他下不来台", effect: S_LZ }, 
            { text: "觉得这种背地里自夸的反差萌太可爱了，连带滤镜也加深了", effect: S_XM }, 
            { text: "用自己的钞能力买下贴吧头条，帮他把这句话挂在首页示众", effect: S_LB }, 
            { text: "去他的小号下面跟帖复读：“血狼破军也太帅了吧+1”", effect: S_FDJ }, 
            { text: "跑去别的游戏区发帖：“你们主播有我们家主播这么戏多吗？”", effect: S_KK } 
        ] 
    },
    { 
        text: "为了证明某个重装干员真的很肉，血狼破军直播穿上三级防弹衣让龙哥哥拿平底锅拍他来作为比喻，你会：", 
        options: [ 
            { text: "无视他的哀嚎，开始计算平底锅挥舞的动能和防弹衣的减伤率", effect: S_QD }, 
            { text: "把挨打的画面做成GIF，配上‘大飞老师’的音效在全网疯传", effect: S_EC }, 
            { text: "觉得龙哥哥打他的动作充满了不可描述的张力，瞬间脑补出一万字", effect: S_LL }, 
            { text: "假扮成圣母去举报他的直播间宣扬暴力，试图封他的号", effect: S_CZ }, 
            { text: "发弹幕感慨：“现在做个测评真不容易，以前哪有这种花活。”", effect: S_LZL }, 
            { text: "冷漠地看着他挨打，内心毫无波澜甚至想吃黄瓜", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼破军去参加了《最强大脑》，挑战项目是‘蒙眼听攻击音效辨别出是哪位干员’，你会：", 
        options: [ 
            { text: "在电视机前同步跟着猜，借机检验自己对游戏的硬核理解程度", effect: S_QD }, 
            { text: "把他在节目上因为猜错而抓狂的表情截下来到处发帖嘲笑", effect: S_HD }, 
            { text: "借机在微博上带节奏：“玩个破游戏也能上最强大脑？黑幕！”", effect: S_LZ }, 
            { text: "趁机科普，说如果玩的是隔壁某大作，肯定不用记这么无聊的东西", effect: S_KK }, 
            { text: "被他蒙眼时那种专注且脆弱的神情深深迷住", effect: S_JN }, 
            { text: "不看综艺，只关心周四方舟又要更新什么", effect: S_MM } 
        ] 
    },
    { 
        text: "如果血狼破军打赌输了，被迫在直播时戴上猫耳，每说一句话都要加个‘喵’，你会：", 
        options: [ 
            { text: "立刻大额打赏，要求他不仅要叫喵，还要学猫洗脸！", effect: S_LB }, 
            { text: "把音频全部提取出来，配上宅舞模型做成血狼版《极乐净土》", effect: S_EC }, 
            { text: "觉得这种行为极度恶心，发长文批判他为了流量不要底线", effect: S_LH }, 
            { text: "听得头皮发麻，但为了干员的最终测评结论，硬着头皮听完", effect: S_QD }, 
            { text: "满脑子都是傲娇老男人被调教的剧情，在弹幕里狂刷爱心", effect: S_XM }, 
            { text: "疯狂复读：“喵喵喵？”“喵喵喵？”", effect: S_FDJ } 
        ] 
    },
    { 
        text: "突然有八卦博主惊爆：血狼破军其实是龙哥失散多年的亲兄弟，两人为了争夺家产在网上演戏，你会：", 
        options: [ 
            { text: "尖叫抓狂！这种骨科兄弟相爱相杀的戏码简直是同人女的终极狂欢！", effect: S_LL }, 
            { text: "立刻到处煽风点火，跑到两人直播间疯狂刷对方的名字引战", effect: S_LZ }, 
            { text: "假装内部知情人，在贴吧爆料更多离谱的豪门恩怨剧情", effect: S_CZ }, 
            { text: "感叹：“怪不得以前他们连麦的时候氛围就不对劲，一切都有迹可循啊！”", effect: S_LZL }, 
            { text: "借机散布恐慌：“两人争家产，那以后的方舟攻略岂不是要断更了？”", effect: S_SZJL }, 
            { text: "默默在屏幕前看着这出闹剧，绝不参与任何一边的站队", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼破军决定转型美食区，开直播教大家如何用精确到毫克的配比调出一杯‘超大杯’奶茶，你会：", 
        options: [ 
            { text: "拿起笔记本，严格记录糖分和茶底的配比，试图复刻最完美的数值", effect: S_QD }, 
            { text: "把他在厨房翻车的各种名场面剪下来，发到B站赚取硬币", effect: S_EC }, 
            { text: "觉得他做饭的样子很有居家好男人的魅力，让人忍不住想嫁", effect: S_JN }, 
            { text: "砸醒目留言，让他直接公布外卖在哪买的，懒得自己做", effect: S_LB }, 
            { text: "去别的平台拉踩：“这手艺还不如我家楼下卖原神联名奶茶的！”", effect: S_KK }, 
            { text: "看不懂为什么一个游戏UP主要去搞这些花里胡哨的", effect: S_MM } 
        ] 
    },
    { 
        text: "某天血狼发了一张光头自拍，宣布自己已经看破二游红尘出家了，法号‘真伤’，你会：", 
        options: [ 
            { text: "在各个群里疯狂转发他的光头照，并配文：‘一代方舟法师的陨落’", effect: S_HD }, 
            { text: "跑到他的寺庙去，在门外大喊假扮隔壁竞品游戏的粉丝进行挑衅", effect: S_CZ }, 
            { text: "恶毒地评论：“这种心术不正的人就算出家了也是个妖僧！”", effect: S_LH }, 
            { text: "满屏幕复读：“高僧预测！”“高僧预测！”“高僧预测！”", effect: S_FDJ }, 
            { text: "觉得就算没有头发，他那算无遗策的智慧光芒依然让人迷醉", effect: S_XM }, 
            { text: "默默地退订了他的频道，不再留恋", effect: S_QSZ } 
        ] 
    },
    { 
        text: "你发现某二手交易平台上有人在卖‘血狼破军穿过的原味袜子（带有高玩加持）’，你会：", 
        options: [ 
            { text: "立刻砸下重金拍下，觉得只要有了这双袜子自己也能刀刀烈火！", effect: S_LB }, 
            { text: "把商品页面截图发到贴吧，配文‘现在的方舟圈已经变态到这种地步了吗？’", effect: S_LZ }, 
            { text: "觉得这是个完美的同人梗，立刻写一篇《血狼与丢失的左脚袜》", effect: S_LL }, 
            { text: "借题发挥：“连UP主都要卖袜子求生了，普通玩家还能在这游戏活下去吗？”", effect: S_SZJL }, 
            { text: "发长文痛斥这种把老牌UP主饭圈化的行为，怀念当年纯洁的社区环境", effect: S_LZL }, 
            { text: "觉得太恶心了，看了一眼立刻关掉页面去洗手", effect: S_MM } 
        ] 
    },
    { 
        text: "如果血狼破军去当小学数学老师，每天用‘打大盾需要几刀’来给小学生出应用题，你会：", 
        options: [ 
            { text: "在后排旁听，并在他漏算了护甲穿透时大声指出他的错误", effect: S_QD }, 
            { text: "把小学生们被应用题难哭的视频做成鬼畜集锦全网放送", effect: S_EC }, 
            { text: "满眼星星地看着他在黑板上写粉笔字，觉得认真的男人最帅", effect: S_JN }, 
            { text: "去教育局假装学生家长实名举报他给小孩灌输暴力游戏思想", effect: S_CZ }, 
            { text: "对比自己玩过的其他游戏，觉得方舟的数值系统确实只能拿来当奥数题", effect: S_KK }, 
            { text: "在教室外一言不发地看着这一切发生，像个透明的幽灵", effect: S_QSZ } 
        ] 
    },
    { 
        text: "血狼直播时不小心切到了隔壁《O神》，并且正在深渊里用极品面板大杀四方，你会：", 
        options: [ 
            { text: "立刻把截图发到贴吧：“惊天大瓜！血狼破军原来是O神仙人！”", effect: S_HD }, 
            { text: "狂喜，立刻在弹幕里用最恶劣的语言拉踩两款游戏，挑起终极跨界大战", effect: S_LZ }, 
            { text: "嘲讽地发弹幕：“怪不得最近方舟测得这么水，原来是去玩米O游了！”", effect: S_LH }, 
            { text: "跟着弹幕一起刷满屏的：“O神，启动！”“O神，启动！”", effect: S_FDJ }, 
            { text: "不关心他玩什么游戏，只关注他推演深渊怪物的DPS计算过程是否严谨", effect: S_QD }, 
            { text: "借机疯狂输出：“看吧，我就说O神的数值设计比方舟优秀多了！”", effect: S_KK } 
        ] 
    },
    { 
        text: "如果血狼破军的麦克风漏电发出了奇怪的电音，你的反应是：", 
        options: [ 
            { text: "提取漏电声音的频率作为干员攻击间隔的参考", effect: S_QD }, 
            { text: "发帖宣称他遭到了神秘组织的电击暗杀", effect: S_HD }, 
            { text: "觉得漏电时的抽搐动作有一种奇异的机械美感", effect: S_XM }, 
            { text: "将电音采样提取出来制作成鬼畜单曲", effect: S_EC }, 
            { text: "在弹幕不断复读漏电的拟声词", effect: S_FDJ }, 
            { text: "觉得这股电流声和微波炉加热的声音很像", effect: S_NONE } 
        ] 
    },
    { 
        text: "当发现血狼偷偷将一个公认的下水道干员练到满级满专精时，你会：", 
        options: [ 
            { text: "计算该干员在极限环境下的理论伤害上限", effect: S_QD }, 
            { text: "截图发至各大论坛嘲笑其硬核人设崩塌", effect: S_LH }, 
            { text: "猜测这是为了引起另一位特定UP主的注意", effect: S_LL }, 
            { text: "借机宣扬游戏数值彻底崩坏，下水道也能当主力", effect: S_SZJL }, 
            { text: "赞助高额留言要求其用该干员单通高难关卡", effect: S_LB }, 
            { text: "盯着干员立绘上的纽扣看了十分钟", effect: S_NONE } 
        ] 
    },
    { 
        text: "如果血狼在直播时不小心露出桌面壁纸是初音未来，你会：", 
        options: [ 
            { text: "觉得他打破了冰冷的数据人设，变得更亲近了", effect: S_JN }, 
            { text: "截图搬运到相关贴吧引发虚拟偶像圈的讨论", effect: S_HD }, 
            { text: "宣称玩其他二游的玩家品味比这高多了", effect: S_KK }, 
            { text: "伪装成初音粉丝在弹幕里发带节奏的言论", effect: S_CZ }, 
            { text: "默默截图保存但不发表任何言论", effect: S_QSZ }, 
            { text: "发现显示器右下角的时间慢了两分钟", effect: S_NONE } 
        ] 
    },
    { 
        text: "面对血狼将新干员评级定为“超超大杯”的情况，你会：", 
        options: [ 
            { text: "拿着评级截图去贴吧四处引战", effect: S_LZ }, 
            { text: "记录数据以便安排后续的抽卡资源规划", effect: S_QD }, 
            { text: "回忆开服时期的幻神，认为现在的评级已经通货膨胀", effect: S_LZL }, 
            { text: "将该评级片段做成动态表情包广泛传播", effect: S_EC }, 
            { text: "抱怨由于该干员太强，后续关卡如果不抽将无法通关", effect: S_SZJL }, 
            { text: "觉得水杯里的水今天格外透明", effect: S_NONE } 
        ] 
    },
    { 
        text: "当血狼在实战演示中连续撤退失败导致干员没发挥出水平时，你会：", 
        options: [ 
            { text: "计算撤退失败损失的部署费用和再部署时间", effect: S_QD }, 
            { text: "将失败画面录制并在对立群体中循环播放", effect: S_LH }, 
            { text: "认为这种失误操作显得他非常呆萌可爱", effect: S_XM }, 
            { text: "在弹幕里复制其他人的嘲讽话语跟进刷屏", effect: S_FDJ }, 
            { text: "提出如果是某款竞品游戏就不会有这种反人类操作", effect: S_KK }, 
            { text: "开始数弹幕里有多少个标点符号", effect: S_NONE } 
        ] 
    },
    { 
        text: "看到血狼破军在贴吧被人挂了长篇大论进行攻击，你会：", 
        options: [ 
            { text: "将长文转发到更多平台以扩大负面影响", effect: S_HD }, 
            { text: "逐条反驳文中的数据错误以维护其实力", effect: S_QD }, 
            { text: "在长文下发激化矛盾的评论让双方打得更激烈", effect: S_LZ }, 
            { text: "对这种网络冲突漠不关心，只看个热闹", effect: S_MM }, 
            { text: "认为这是资本下场购买水军进行的打压", effect: S_CZ }, 
            { text: "觉得这个帖子的背景颜色有点伤眼", effect: S_NONE } 
        ] 
    },
    { 
        text: "如果血狼破军突然宣布要联动某知名虚拟偶像，你的做法是：", 
        options: [ 
            { text: "觉得这种媚宅行为背叛了硬核攻略的初衷", effect: S_LZL }, 
            { text: "期待看到他在联动中被迫进行羞耻营业", effect: S_LZ }, 
            { text: "在弹幕中发送大量付费留言以支持此次活动", effect: S_LB }, 
            { text: "将其形象与虚拟偶像进行二次创作结合", effect: S_EC }, 
            { text: "全程挂在直播间观看但不发送一条互动弹幕", effect: S_QSZ }, 
            { text: "尝试用舌头舔到自己的手肘", effect: S_NONE } 
        ] 
    },
    { 
        text: "当血狼破军在打肉鸽模式时由于贪导致防线崩盘，你会：", 
        options: [ 
            { text: "总结崩盘原因并计算不同节点的抓位收益", effect: S_QD }, 
            { text: "将防线崩溃瞬间其绝望的表情截屏做成头像", effect: S_LH }, 
            { text: "觉得他运气不好的样子让人产生强烈的保护欲", effect: S_JN }, 
            { text: "在弹幕区复制别人的满屏问号", effect: S_FDJ }, 
            { text: "借机散布肉鸽模式存在暗改爆率的阴谋论", effect: S_SZJL }, 
            { text: "觉得如果把手机倒过来拿手感会更好", effect: S_NONE } 
        ] 
    },
    { 
        text: "发现血狼把某干员的名字连续念错三次，你会：", 
        options: [ 
            { text: "将错误读音剪辑成鬼畜循环音频", effect: S_EC }, 
            { text: "认为他连名字都记不住，攻略的专业性存疑", effect: S_LH }, 
            { text: "觉得他笨嘴拙舌的属性与冷酷外表形成了完美反差", effect: S_XM }, 
            { text: "将这一片段截屏并配上嘲笑的标题发布至贴吧", effect: S_HD }, 
            { text: "认为他是故意念错以在社区制造话题度", effect: S_CZ }, 
            { text: "盯着键盘上的H键陷入沉思", effect: S_NONE } 
        ] 
    },
    { 
        text: "如果血狼在直播时突然咳嗽了五分钟，你的反应是：", 
        options: [ 
            { text: "立刻进行大额打赏让其休息", effect: S_LB }, 
            { text: "猜测他是因为某位特定对象的言论而气出病来", effect: S_LL }, 
            { text: "认为他是为了逃避测试某个弱势干员而在装病", effect: S_LH }, 
            { text: "记录下咳嗽的时长和频率寻找隐藏的规律", effect: S_QD }, 
            { text: "认为以前的攻略作者身体素质更好，能连续通宵", effect: S_LZL }, 
            { text: "去厨房把昨天的剩饭热了一下", effect: S_NONE } 
        ] 
    },
    { 
        text: "官方更新公告直接修改机制，背刺了血狼刚测完的结论，你会：", 
        options: [ 
            { text: "重新计算修改后的数据并发布修正版参数", effect: S_QD }, 
            { text: "跑去各大论坛看他被打脸的笑话", effect: S_LZ }, 
            { text: "认为这是官方在针对他，发帖控诉游戏公司", effect: S_HD }, 
            { text: "借机宣传这游戏的策划水平不如某款开放世界游戏", effect: S_KK }, 
            { text: "持续复读“被背刺了”“被打脸了”", effect: S_FDJ }, 
            { text: "觉得公告的字体行距看起来不太协调", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼发动态表示今天停播，理由是“去登山”，你的反应是：", 
        options: [ 
            { text: "觉得这是一种孤独忧郁的文艺属性表现", effect: S_XM }, 
            { text: "猜测他是和另外一位知名玩家一起去的", effect: S_LL }, 
            { text: "在论坛发帖造谣他因为节奏太大已经跑路", effect: S_HD }, 
            { text: "对其私生活毫不关心，只等他回来继续发攻略", effect: S_MM }, 
            { text: "默默点赞停播动态，但不留下任何评论", effect: S_QSZ }, 
            { text: "开始研究家里地板瓷砖的花纹", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼在算数据时计算器软件突然崩溃卡死，你会：", 
        options: [ 
            { text: "嘲笑其电脑配置太低，连个计算器都带不动", effect: S_LH }, 
            { text: "将崩溃瞬间的卡顿画面截取作为二创素材", effect: S_EC }, 
            { text: "用手算帮他完成剩余公式的推导", effect: S_QD }, 
            { text: "认为这是因为新干员的数值膨胀导致了溢出错误", effect: S_SZJL }, 
            { text: "假装路人发弹幕宣称计算器罢工说明干员没救了", effect: S_CZ }, 
            { text: "觉得鼠标滑轮的阻尼感今天不太对", effect: S_NONE } 
        ] 
    },
    { 
        text: "有人做了一个血狼的音MAD视频并在首页爆火，你会：", 
        options: [ 
            { text: "将视频链接转发至所有能看到的群聊和社区", effect: S_HD }, 
            { text: "认为这种娱乐化创作削弱了他作为攻略作者的严肃性", effect: S_LZL }, 
            { text: "在视频评论区跟随其他人重复刷名词短语", effect: S_FDJ }, 
            { text: "觉得视频里的他展现出了不同于往常的迷人一面", effect: S_JN }, 
            { text: "不点开看，不关心游戏外的衍生内容", effect: S_MM }, 
            { text: "发现自己左手食指的指甲该剪了", effect: S_NONE } 
        ] 
    },
    { 
        text: "当血狼在论战中抛出了一句“你什么冠军”时，你的做法是：", 
        options: [ 
            { text: "将这句话收录为引战语录，四处使用", effect: S_LZ }, 
            { text: "顺着他的逻辑，列出各干员在危机合约的登顶次数", effect: S_QD }, 
            { text: "在其他频道的评论区发这句话进行挑衅", effect: S_CZ }, 
            { text: "认为这句话体现了他作为权威的傲慢与狂气", effect: S_XM }, 
            { text: "发送付费留言让他在直播里再大声念一遍", effect: S_LB }, 
            { text: "看着窗外的树叶掉落，觉得很符合重力学", effect: S_NONE } 
        ] 
    },
    { 
        text: "如果粉丝群里有人发了血狼的AI合成性转照片，你会：", 
        options: [ 
            { text: "觉得这种行为非常冒犯，发长文进行抵制", effect: S_JN }, 
            { text: "脑补他与男版自己的同人剧情", effect: S_LL }, 
            { text: "将照片保存并用作自己新一期整活视频的素材", effect: S_EC }, 
            { text: "发到外网论坛嘲笑该游戏玩家的精神状态", effect: S_KK }, 
            { text: "潜水看大家讨论，自己不发图也不说话", effect: S_QSZ }, 
            { text: "觉得这张图的像素密度看起来不均匀", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼直播玩恐怖游戏被吓出尖叫，你的反应是：", 
        options: [ 
            { text: "认为他平时的冷静都是装出来的，实际上是个胆小鬼", effect: S_LH }, 
            { text: "把尖叫声剪辑下来替换掉游戏里怪物的音效", effect: S_EC }, 
            { text: "觉得他受惊吓的样子很让人心疼", effect: S_JN }, 
            { text: "拿着尖叫的片段去贴吧发帖取笑他", effect: S_HD }, 
            { text: "复制弹幕里的高音评价进行刷屏", effect: S_FDJ }, 
            { text: "把水杯从桌子左边移到了右边", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼和某人连麦时陷入了长达一分钟的沉默，你会：", 
        options: [ 
            { text: "构思这一分钟内两人之间暗流涌动的情感交锋", effect: S_LL }, 
            { text: "借机在弹幕带节奏说两人已经决裂", effect: S_LZ }, 
            { text: "利用这一分钟去计算刚才提到的某项数据", effect: S_QD }, 
            { text: "觉得早期玩家之间的连麦更纯粹，现在只剩下尴尬", effect: S_LZL }, 
            { text: "将这段沉默原封不动地录制下来配上伤感文案发布", effect: S_HD }, 
            { text: "突然想算一下自己一分钟能呼吸几次", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼破军被做成了终末地里的一个干员模型替换模组，你会：", 
        options: [ 
            { text: "测试该模组的数值是否符合他平时的强度标准", effect: S_QD }, 
            { text: "认为这种做法侵犯了肖像权，去作者评论区攻击", effect: S_LH }, 
            { text: "录制用该模组打通各路关卡的视频", effect: S_EC }, 
            { text: "发帖抱怨现在的玩家净搞这些没用的衍生内容", effect: S_KK }, 
            { text: "虽然觉得有趣，但只看别人玩，自己不下载", effect: S_MM }, 
            { text: "发现游戏界面的边框其实不是纯黑色", effect: S_NONE } 
        ] 
    },
    { 
        text: "当血狼在抽卡时连续歪了六次并当场破防，你会：", 
        options: [ 
            { text: "计算这种极端情况发生的概率学数值", effect: S_QD }, 
            { text: "觉得他破防砸桌子的动作充满了狂野的张力", effect: S_XM }, 
            { text: "将抽卡录像发到论坛作为嘲讽他的绝佳素材", effect: S_HD }, 
            { text: "大肆宣扬游戏的抽卡机制存在暗改，制造资源焦虑", effect: S_SZJL }, 
            { text: "发送大额打赏嘲笑他的运气，并在屏幕上长时间停留", effect: S_LB }, 
            { text: "觉得抽卡界面的光效有点刺眼，于是调低了亮度", effect: S_NONE } 
        ] 
    },
    { 
        text: "如果血狼在下播前极其温柔地说了“晚安”，你会：", 
        options: [ 
            { text: "将这两个字截取下来作为每天睡前的专属助眠音频", effect: S_JN }, 
            { text: "猜测这句晚安是特意说给潜伏在直播间里的某个人听的", effect: S_LL }, 
            { text: "认为他是在为了挽回人气而刻意营业", effect: S_LH }, 
            { text: "觉得早期他下播时干脆利落的告别更有硬核感", effect: S_LZL }, 
            { text: "听完后关闭网页，不回复晚安", effect: S_QSZ }, 
            { text: "觉得晚安这个词的拼音是对称的", effect: S_NONE } 
        ] 
    },
    { 
        text: "发现血狼的测评视频被原封不动抄袭到了外网，你会：", 
        options: [ 
            { text: "跑去抄袭者的评论区用极端语言挑起跨平台骂战", effect: S_LZ }, 
            { text: "将抄袭事件整理成长图发回国内论坛获取关注", effect: S_HD }, 
            { text: "认为既然是客观数据，只要数据没错谁发都一样", effect: S_QD }, 
            { text: "假装外国网友在抄袭视频下留言带节奏抹黑他", effect: S_CZ }, 
            { text: "跟随大部队在评论区复读维权的口号", effect: S_FDJ }, 
            { text: "发现自己的网页浏览器占用了太多内存", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼宣布以后再也不测某个特定职业的干员，你会：", 
        options: [ 
            { text: "分析该职业在当前版本由于机制落后确实没有测试价值", effect: S_QD }, 
            { text: "将此言论解读为他因为玩不懂该职业而气急败坏", effect: S_LH }, 
            { text: "在贴吧发帖散布恐慌，称该职业已经被官方彻底放弃", effect: S_SZJL }, 
            { text: "觉得他这种偏执决绝的性格非常有上位者的霸气", effect: S_XM }, 
            { text: "跑到别的二游论坛称这边的职业平衡做得像个笑话", effect: S_KK }, 
            { text: "觉得今天的天气不太适合出门扔垃圾", effect: S_NONE } 
        ] 
    },
    { 
        text: "有人扒出血狼的账号UID是个极度稀有的豹子号，你会：", 
        options: [ 
            { text: "认为这证明了他是官方内定的人员，发帖揭露黑幕", effect: S_CZ }, 
            { text: "试图通过UID的数字排列寻找他和其他主播的暗号联系", effect: S_LL }, 
            { text: "觉得他拥有这种特殊的数字赋予了他某种天选之人的宿命感", effect: S_JN }, 
            { text: "充值大额礼物，要求他用这个特定账号帮自己代抽", effect: S_LB }, 
            { text: "看过UID后就忘了，并不关心这种数字规律", effect: S_MM }, 
            { text: "尝试把这几个数字加起来看是不是偶数", effect: S_NONE } 
        ] 
    },
    { 
        text: "直播时血狼的背景音里传来了猫叫声，你会：", 
        options: [ 
            { text: "觉得养猫的设定让他硬核无情的人设多了一丝温柔", effect: S_XM }, 
            { text: "截取猫叫声配上方舟干员的动作做成搞笑视频", effect: S_EC }, 
            { text: "认为猫叫声干扰了他推演数据的专注度，发长文批评", effect: S_LZL }, 
            { text: "将他在直播中分心逗猫的片段发到论坛引发讨论", effect: S_HD }, 
            { text: "在弹幕里跟随其他人疯狂复读猫叫声", effect: S_FDJ }, 
            { text: "有没有可能那是龙哥哥的八万？", effect: S_LL } 
        ] 
    },
    { 
        text: "血狼在预测合约登顶阵容思路时预测错了登顶的阵容，你会：", 
        options: [ 
            { text: "根据实际阵容重新核对之前被忽略的干员机制上限", effect: S_QD }, 
            { text: "拿着之前的预测截图四处去嘲笑他游戏理解不过关", effect: S_LH }, 
            { text: "认为他是为了给特定攻略组让路故意预测错的", effect: S_LL }, 
            { text: "在别人的直播间发引战弹幕对比理解能力", effect: S_LZ }, 
            { text: "看完实战录像后默默关掉网页，不参与讨论", effect: S_QSZ }, 
            { text: "觉得合约的UI布局有点左倾", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼收到一个自称是“未来人”的邮件，预言了下个强力干员，你会：", 
        options: [ 
            { text: "对预言嗤之以鼻，坚持只有通过严谨计算得出的才是真理", effect: S_QD }, 
            { text: "把邮件截图发至各大群组，引发对未来干员强度的无端焦虑", effect: S_SZJL }, 
            { text: "认为这是他为了搞节目效果自己编造的，发帖攻击他", effect: S_CZ }, 
            { text: "觉得这种悬疑色彩的剧情非常适合写成二次创作小说", effect: S_XM }, 
            { text: "吹嘘隔壁游戏的内鬼爆料比这种邮件准确多了", effect: S_KK }, 
            { text: "检查了一下自己的邮箱有没有垃圾邮件", effect: S_NONE } 
        ] 
    },
    { 
        text: "当血狼在演示极限操作时手滑点到了退出关卡，你会：", 
        options: [ 
            { text: "觉得他手滑懊恼的样子非常真实可爱", effect: S_JN }, 
            { text: "将退出的瞬间截图，配上放弃游戏的文字到处散播", effect: S_HD }, 
            { text: "认为他操作退化已经跟不上当年了，发帖怀念过去", effect: S_LZL }, 
            { text: "用高额打赏嘲笑他的老年人手速", effect: S_LB }, 
            { text: "跟随弹幕大军刷满屏的嘲讽词汇", effect: S_FDJ }, 
            { text: "觉得退出界面的动画过渡很平滑", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼的粉丝自发组织了一次线下聚会，但他本人没去，你的反应是：", 
        options: [ 
            { text: "猜测他没去是因为要和某个不能公开的人去过周末", effect: S_LL }, 
            { text: "认为他清高耍大牌，跑到各大社区发帖带节奏", effect: S_LZ }, 
            { text: "将聚会照片和他以往的孤独发言剪辑制作对比视频", effect: S_EC }, 
            { text: "觉得他不凑热闹、坚持测数据的性格才是真正的魅力", effect: S_JN }, 
            { text: "本身就不关注线下活动，安静打游戏就好", effect: S_MM }, 
            { text: "觉得自己今天穿的袜子颜色不太搭配", effect: S_NONE } 
        ] 
    },
    { 
        text: "血狼在新年直播中抽奖，结果自己抽中了自己，你会：", 
        options: [ 
            { text: "用概率学公式论证在大量参与者中抽中自己的极小概率", effect: S_QD }, 
            { text: "截图跑到论坛发帖控诉其暗箱操作", effect: S_LH }, 
            { text: "披上伪装马甲去粉丝群里挑拨离间，试图引起内部混乱", effect: S_CZ }, 
            { text: "宣扬不仅抽卡爆率存在问题，连抽奖系统都是假的", effect: S_SZJL }, 
            { text: "待在直播间看大家吵架，自己绝不发表评论", effect: S_QSZ }, 
            { text: "盯着抽奖名单的滚动条看了五秒钟", effect: S_NONE } 
        ] 
    }
];

// 为每一题自动追加“我都不想选”选项
rawQuestions.forEach(q => {
    q.options.push({ text: "我都不想选", effect: S_NONE });
});

// 3. 结局文案映射表
const outcomes = {
    "positive_positive_positive_positive": { 
        title: "强度党", 
        desc: "你关注血狼破军只是单纯的为了了解干员强度，然后考虑要不要跳过池子或者对干员开始拉踩，无论如何，你乐在其中。\n\n你是绝对的功利主义者，看视频只跳到最后看结论。只要他敢说一句“中杯”，你就敢拿着截图去贴吧大战三百回合；只要他说一句“必抽”，你立马盘算手里的合成玉。你把他的话当成抽卡圣旨和PVP的弹药库，干员在你眼里不是角色，而是一组组冰冷的DPS数据和你在赛博空间跟人对喷的资本。",
        danger: "⚠️⚠️"
    },
    "positive_positive_negative_positive": { 
        title: "混沌乐子人", 
        desc: "无聊，你只是想看到所有人都在网上吵起来，血流成河。\n\n你就是互联网上最纯粹的反派。血狼破军？他只是你用来点燃赛博火药桶的一根火柴罢了。你最喜欢看粉丝和黑子在评论区撕得不可开交，看强度党和XP党打得头破血流。你站在高处，一边吃瓜一边煽风点火，唯恐天下不乱。哪里有战火，哪里就有你的身影，你就是混乱的化身，到处拉屎的毒瘤！",
        danger: "⚠️⚠️⚠️⚠️⚠️"
    },
    "positive_negative_positive_positive": { 
        title: "小红点厨", 
        desc: "你单纯喜欢搬运血狼破军的言论到其他论坛，有人叫你狼孝子，有人叫你传话太监，只有你知道你只是对小红点爱得深沉。\n\n你每天像个勤劳的工蜂一样穿梭在B站、贴吧和NGA之间。血狼刚叹了口气，你已经把“血狼对新干员绝望了”发到了各大版块。被人骂又怎样？被封号又怎样？只要看到右上角那个象征着消息回复的红色数字亮起“99+”，你的多巴胺就会疯狂分泌。你不在乎血狼，你只在乎流量，你就是互联网信息搬运界的神。",
        danger: "⚠️⚠️⚠️⚠️"
    },
    "positive_negative_negative_positive": { 
        title: "狼黑", 
        desc: "你单纯的讨厌血狼破军，但是却知道血狼破军的每一个黑料，他的每一场直播你都看，他的每一次爆典你都迫不及待地搬运到其他地方给别人看，或许你比所有人都真的更爱血狼破军。\n\n你嘴上骂得比谁都脏，心里却把他装得比谁都满。你美其名曰“收集反面教材”，实则连他三年前直播打了个喷嚏你都记得清清楚楚。你比任何一个粉丝都准时蹲守在直播间，生怕漏掉他哪怕一秒钟的黑历史。你这种由恨生爱的扭曲情感，简直是饭圈虐恋的最高境界，承认吧，你就是他最大的真爱粉。",
        danger: "⚠️⚠️⚠️⚠️⚠️"
    },
    "negative_positive_positive_positive": { 
        title: "军奴", 
        desc: "你只是单纯喜欢血狼破军的肉体，喜欢他的声音，性格，还有大胃袋，其实你或许没有那么关注明日方舟的干员强度，你只是喜欢看血狼破军。\n\n每当他开播，你的关注点永远不在什么DPS计算和法术抗性上，你只在乎他今天吃了几个汉堡，喝了多少可乐。哪怕他在屏幕前发呆打嗝，你都能在屏幕后疯狂截屏。你对他的爱超越了泰拉大陆的任何一个干员，你不是来玩游戏的，你是来赛博追星的，纯度极高的老缠粉说的就是你。",
        danger: "⚠️⚠️⚠️"
    },
    "negative_positive_negative_positive": { 
        title: "狼小妹单推厨", 
        desc: "你喜欢看血狼破军，但是会把他幻想成一个娘化的萌妹形象再对其进行前所未有的性压抑。\n\n在你扭曲的视界里，那个满嘴强度的男人早已被套上了白丝女仆装。你每天在脑海里进行着不可告人的二创，把他的每一次破防大叫都脑补成傲娇萝莉的娇嗔。别人在看干员测评，你在进行赛博发情，你的成分之复杂、XP之诡异，简直是方舟圈未解之谜，建议立刻去看医生！",
        danger: "⚠️⚠️⚠️⚠️"
    },
    "negative_negative_positive_positive": { 
        title: "龙狼📏", 
        desc: "你喜欢看血狼破军和其他主播互动，磕cp，比如龙哥哥，比如ve，比如某个fifa人物，或许你也喜欢看一些其他主播的cp，比如龙龙骗骗请和......\n\n你的雷达永远只对男男互动有反应。只要血狼的直播间出现了其他男人的声音，或者提到了某人的名字，你的大脑就会立刻开始撰写十万字的同人小黄文。你对明日方舟的强度毫无兴趣，你只在乎今天龙哥哥有没有来查房，ve有没有和他连麦。你就是互联网上最可怕的赛博红娘，拿着放大镜在玻璃碴子里找糖吃。",
        danger: "⚠️⚠️⚠️"
    },
    "negative_negative_negative_positive": { 
        title: "萌萌人", 
        desc: "血狼破军是谁？\n\n你对这片风起云涌的互联网粪坑一无所知。什么大杯超大杯，什么龙狼CP，什么传话太监，你统统不关心。你可能只是一个偶尔上线抽个卡、看看漂亮纸片人老婆的纯路人。这个充满黑话和戾气的测试对你来说就像是天书，快跑吧，这里的水太深了，不适合你这种纯洁的泰拉小白。",
        danger: "⚠️"
    },
    "positive_positive_positive_negative": { 
        title: "二创爱好者", 
        desc: "你将直播内容视为获取素材的渠道。你捕捉直播中的特定画面或语言片段，进行视频剪辑、图像处理或文本创作，并发布至不同平台。你不参与强度争论，只关注哪些言论可以被转化为具有传播属性的二次创作物。",
        danger: "⚠️⚠️⚠️"
    },
    "positive_positive_negative_negative": { 
        title: "串子", 
        desc: "你倾向于模仿特定群体的发言特征以催化矛盾。你在弹幕和讨论中故意使用特定厨力群体或敌对阵营的标志性词汇，通过伪造立场引发他人的反感与定向攻击。你不在乎游戏本身的数值，关注点在于激化社区内的群体对立。",
        danger: "⚠️⚠️⚠️⚠️"
    },
    "positive_negative_positive_negative": { 
        title: "老资历", 
        desc: "你偏好早期的内容环境。你持续提及过去的游戏数值环境或早期的直播状态，对当下的干员机制更迭与社区表达方式持否定或审视态度。你习惯用过去的事件作为比对基准，认为当前的讨论环境不如以往。",
        danger: "⚠️⚠️"
    },
    "positive_negative_negative_negative": { 
        title: "老板", 
        desc: "你通过资金投入参与直播互动。你游离于常规的强度争议之外，主要通过付费留言、舰长购买等方式获取直播间反馈，或提供高资源账号供主播进行测试与抽卡。你的参与方式直接与资金相关，较少介入常规的弹幕讨论。",
        danger: "⚠️"
    },
    "negative_positive_positive_negative": { 
        title: "复读机", 
        desc: "你重复直播间已有的特定文本。你不产生原创发言，在弹幕或评论区复制他人正在发送的语句以参与互动。你通过跟随刷屏来维持存在感，不介入具体的游戏机制或社区节奏分析。",
        danger: "⚠️⚠️"
    },
    "negative_positive_negative_negative": { 
        title: "潜水者", 
        desc: "你观看直播但不产生交互。你保持在线状态观看内容，但不发送弹幕、不参与投票，也不在相关论坛发表评论。你作为观看基数存在，不对任何争议或讨论提供公开的文字反馈。",
        danger: "⚠️"
    },
    "negative_negative_positive_negative": { 
        title: "数值焦虑制造者", 
        desc: "你反复强调干员强度以引发他人的资源恐慌。你在弹幕和论坛中频繁放大某些干员的劣势或新干员的必需性，利用主播的评价体系来制造玩家对游戏内物资分配的焦虑。你通过施加这种讨论压力获取反馈。",
        danger: "⚠️⚠️⚠️"
    },
    "negative_negative_negative_negative": { 
        title: "口口爱好者", 
        desc: "你其实比起明日方舟更爱另外一款游戏，或许你才是真正的串子。你关注相关讨论是为了对比或寻找差异，在弹幕或论坛中伺机引入其他游戏的元素，试图转移话题或挑起不同游戏受众之间的摩擦。",
        danger: "⚠️⚠️⚠️⚠️"
    }
};
// ==========================================
// 追加模块：120种交互风味文本字典 (matchDictionary)
// ==========================================
// 键名格式：按字母顺序排列的两种结局键值，中间用 '|' 分隔。

const matchDictionary = {
    "negative_negative_negative_negative|negative_negative_negative_positive": "一方试图引入外部游戏元素，另一方对社区信息呈现隔离状态。交流缺乏共同的认知基础。",
    "negative_negative_negative_negative|negative_negative_positive_negative": "一方试图转移话题至其他游戏，另一方专注于制造本游戏内的资源恐慌。两者均在输出负面情绪，但方向不同。",
    "negative_negative_negative_negative|negative_negative_positive_positive": "一方关注跨界对比，另一方专注于内部人物关系图谱。双方关注点处于不相交的平行线。",
    "negative_negative_negative_negative|negative_positive_negative_negative": "一方试图引入外部元素，另一方保持沉默。单方面输出无法形成有效互动。",
    "negative_negative_negative_negative|negative_positive_negative_positive": "一方讨论其他游戏环境，另一方沉浸于人物的二次设定。双方处于完全不同的讨论维度。",
    "negative_negative_negative_negative|negative_positive_positive_negative": "一方试图拉踩其他游戏，另一方仅复制当前弹幕内容。互动停留在机械重复层面。",
    "negative_negative_negative_negative|negative_positive_positive_positive": "一方贬低当前游戏环境，另一方无条件支持主播。容易在维护主观立场时发生直接对立。",
    "negative_negative_negative_negative|positive_negative_negative_negative": "一方引入跨界对比，另一方通过资金获取话语权。双方的信息传播渠道与目的存在壁垒。",
    "negative_negative_negative_negative|positive_negative_negative_positive": "一方排斥当前游戏，另一方排斥主播本人。在输出负面情绪时存在部分重合，但针对主体不同。",
    "negative_negative_negative_negative|positive_negative_positive_negative": "一方用其他游戏进行横向对比，另一方用早期版本进行纵向对比。均对现状不满，但评价参照物不同。",
    "negative_negative_negative_negative|positive_negative_positive_positive": "一方提供跨界引战素材，另一方负责将其搬运至外部论坛。存在行为上的上下游配合可能。",
    "negative_negative_negative_negative|positive_positive_negative_negative": "一方进行跨界拉踩，另一方伪装身份进行煽动。容易在社区中混合形成复杂的混乱源。",
    "negative_negative_negative_negative|positive_positive_negative_positive": "一方试图转移话题，另一方乐于观测跨界拉踩引发的争吵。后者会从前者的行为中获取情绪反馈。",
    "negative_negative_negative_negative|positive_positive_positive_negative": "一方讨论其他游戏，另一方提取素材。前者较难为后者提供本游戏相关的核心创作切片。",
    "negative_negative_negative_negative|positive_positive_positive_positive": "一方脱离本游戏数值体系，另一方专注于本游戏数据推演。交流通常会因参照系不同而中断。",
    
    "negative_negative_negative_positive|negative_negative_positive_negative": "一方对游戏机制不敏感，另一方试图制造数值焦虑。后者的信息输入难以对前者产生实质影响。",
    "negative_negative_negative_positive|negative_negative_positive_positive": "一方仅关注游戏表层，另一方专注于人物关系发掘。双方在信息获取深度上存在差异。",
    "negative_negative_negative_positive|negative_positive_negative_negative": "双方均缺乏主动交互意愿。处于互不干扰的绝对静默状态。",
    "negative_negative_negative_positive|negative_positive_negative_positive": "一方作为普通玩家，另一方带有强烈的个人幻想。认知模式存在显著差异。",
    "negative_negative_negative_positive|negative_positive_positive_negative": "一方偶尔观看，另一方机械重复信息。不产生实质性交流。",
    "negative_negative_negative_positive|negative_positive_positive_positive": "一方心态平和，另一方带有强烈的排他性支持。前者无法理解后者的狂热行为。",
    "negative_negative_negative_positive|positive_negative_negative_negative": "一方不参与深入讨论，另一方使用资金主导互动。处于社区生态的完全不同层级。",
    "negative_negative_negative_positive|positive_negative_negative_positive": "一方回避社区节奏，另一方主动散播负面信息。前者会主动切断与后者的信息接触。",
    "negative_negative_negative_positive|positive_negative_positive_negative": "一方对当前环境接受度高，另一方执着于过去。缺乏共同的时间轴参照。",
    "negative_negative_negative_positive|positive_negative_positive_positive": "一方不关心社区争议，另一方依靠争议获取关注。行为模式互不兼容。",
    "negative_negative_negative_positive|positive_positive_negative_negative": "一方难以识别伪装，但也较少受到煽动影响。后者的挑拨对前者无效。",
    "negative_negative_negative_positive|positive_positive_negative_positive": "一方回避冲突，另一方制造冲突。前者是后者行为的被动旁观者或逃避者。",
    "negative_negative_negative_positive|positive_positive_positive_negative": "一方是内容的被动消费者，另一方是内容的加工者。存在单向的信息传递关系。",
    "negative_negative_negative_positive|positive_positive_positive_positive": "一方不关注极限数据，另一方追求数值精确。讨论难以深入同一维度。",
    
    "negative_negative_positive_negative|negative_negative_positive_positive": "一方制造数值恐慌，另一方关注人物关系。讨论领域无交集。",
    "negative_negative_positive_negative|negative_positive_negative_negative": "一方持续输出焦虑，另一方保持观察不予回应。",
    "negative_negative_positive_negative|negative_positive_negative_positive": "一方关注干员强度劣势，另一方关注主播形象。信息处理方向完全不同。",
    "negative_negative_positive_negative|negative_positive_positive_negative": "一方散播恐慌言论，另一方将其作为复读素材扩大传播。存在无意识的放大效应。",
    "negative_negative_positive_negative|negative_positive_positive_positive": "一方强调数值不足，另一方维护主播的所有输出。会因对主播的强度评价产生单向摩擦。",
    "negative_negative_positive_negative|positive_negative_negative_negative": "一方制造抽卡焦虑，另一方具备充足的资源。后者的资金能力直接消解了前者的焦虑输出。",
    "negative_negative_positive_negative|positive_negative_negative_positive": "一方针对游戏机制输出负面情绪，另一方针对主播本人。两者均带有攻击性，但目标不一致。",
    "negative_negative_positive_negative|positive_negative_positive_negative": "一方放眼当前的数值膨胀，另一方怀念过去的机制环境。均对现状持批判态度。",
    "negative_negative_positive_negative|positive_negative_positive_positive": "一方的焦虑言论为另一方提供了搬运素材。存在客观上的内容供给关系。",
    "negative_negative_positive_negative|positive_positive_negative_negative": "一方煽动资源恐慌，另一方煽动群体对立。两者结合易造成社区环境的快速恶化。",
    "negative_negative_positive_negative|positive_positive_negative_positive": "一方的焦虑输出为另一方提供了观测争吵的契机。",
    "negative_negative_positive_negative|positive_positive_positive_negative": "一方的极端恐慌言论偶尔会被截取，作为视频的切片素材。",
    "negative_negative_positive_negative|positive_positive_positive_positive": "一方利用数据制造恐慌，另一方依靠数据进行客观推演。存在基于机制理解深度的直接对抗。",

    "negative_negative_positive_positive|negative_positive_negative_negative": "一方积极构建关系网络，另一方处于完全的静默观察状态。",
    "negative_negative_positive_positive|negative_positive_negative_positive": "一方关注多人物间的互动，另一方将焦点完全集中于单一主体。存在幻想对象的排他性差异。",
    "negative_negative_positive_positive|negative_positive_positive_negative": "一方输出人物关系解读，另一方仅作机械重复。",
    "negative_negative_positive_positive|negative_positive_positive_positive": "一方关注主播与他人的联系，另一方关注主播本身的状态。在注意力分配上存在分歧。",
    "negative_negative_positive_positive|positive_negative_negative_negative": "一方依靠观察细节满足想象，另一方通过付费直接干预直播内容。",
    "negative_negative_positive_positive|positive_negative_negative_positive": "一方寻找互动细节进行正面解读，另一方截取细节进行负面攻击。对同一素材存在截然相反的处理方式。",
    "negative_negative_positive_positive|positive_negative_positive_negative": "一方关注当前的人物互动，另一方回忆早年的人际关系。关注的时间节点不同。",
    "negative_negative_positive_positive|positive_negative_positive_positive": "一方的关联解读可能被搬运至论坛，成为外界争议的话题。",
    "negative_negative_positive_positive|positive_positive_negative_negative": "一方的圈子文化容易被另一方利用，进行反向串联与群体攻击。",
    "negative_negative_positive_positive|positive_positive_negative_positive": "一方的人物关系讨论若引发摩擦，将成为另一方的观测乐趣。",
    "negative_negative_positive_positive|positive_positive_positive_negative": "一方的想象为另一方提供了混剪和创作的文本灵感。存在客观的互补性。",
    "negative_negative_positive_positive|positive_positive_positive_positive": "一方关注人际互动，另一方关注数据面板。属于完全不相交的两套评价体系。",

    "negative_positive_negative_negative|negative_positive_negative_positive": "一方不发一言，另一方沉浸于个人幻想。互不干扰。",
    "negative_positive_negative_negative|negative_positive_positive_negative": "一方拒绝交互，另一方依赖现成文本。两者均不产出有效增量信息。",
    "negative_positive_negative_negative|negative_positive_positive_positive": "一方隐匿行踪，另一方高调维护。行为模式处于两极。",
    "negative_positive_negative_negative|positive_negative_negative_negative": "一方零成本观察，另一方高成本介入。参与社区的维度完全不同。",
    "negative_positive_negative_negative|positive_negative_negative_positive": "一方静默，另一方四处搜集黑料并散发。无交集。",
    "negative_positive_negative_negative|positive_negative_positive_negative": "一方不参与当前讨论，另一方持续输出过去的标准。",
    "negative_positive_negative_negative|positive_negative_positive_positive": "一方不产生可搬运的交互，另一方无法从其身上获取收益。",
    "negative_positive_negative_negative|positive_positive_negative_negative": "一方不发表言论，使得另一方的引战行为无法获取反馈。",
    "negative_positive_negative_negative|positive_positive_negative_positive": "一方不参与冲突，无法为另一方提供情绪观测价值。",
    "negative_positive_negative_negative|positive_positive_positive_negative": "一方仅消费内容，不产生可供二次创作的文本特征。",
    "negative_positive_negative_negative|positive_positive_positive_positive": "一方仅作为客观数据的接收端，不参与数值推演过程。",

    "negative_positive_negative_positive|negative_positive_positive_negative": "一方的幻想表达可能被另一方直接复制刷屏。",
    "negative_positive_negative_positive|negative_positive_positive_positive": "双方均持有高度关注，但一方偏向二次元形象解构，另一方偏向现实状态维护。存在潜在认知冲突。",
    "negative_positive_negative_positive|positive_negative_negative_negative": "一方依靠内心幻想，另一方依靠资金引起注意。",
    "negative_positive_negative_positive|positive_negative_negative_positive": "一方美化主播形象，另一方丑化主播形象。存在绝对的对立关系。",
    "negative_positive_negative_positive|positive_negative_positive_negative": "一方关注当前构建的二次设定，另一方强调过去真实的社区表现。",
    "negative_positive_negative_positive|positive_negative_positive_positive": "一方的极端单推言论容易被截取至外部论坛引发围观。",
    "negative_positive_negative_positive|positive_positive_negative_negative": "一方的情感投射容易被另一方伪装利用，进而引发群体摩擦。",
    "negative_positive_negative_positive|positive_positive_negative_positive": "一方对主播的维护若引发争吵，将成为另一方的娱乐来源。",
    "negative_positive_negative_positive|positive_positive_positive_negative": "一方的幻想设定可直接转化为另一方进行视频剪辑的基础素材。",
    "negative_positive_negative_positive|positive_positive_positive_positive": "一方解构人物形象，另一方解构数值机制。讨论目标南辕北辙。",

    "negative_positive_positive_negative|negative_positive_positive_positive": "一方机械刷屏，另一方可能认为其干扰了正常的支持表达。",
    "negative_positive_positive_negative|positive_negative_negative_negative": "一方使用零成本的文本复制，另一方使用高成本的资金留言。",
    "negative_positive_positive_negative|positive_negative_negative_positive": "一方若复制了攻击性文本，客观上协助了后者的负面传播。",
    "negative_positive_positive_negative|positive_negative_positive_negative": "一方跟随当前节奏，另一方试图拉回过去的语境。",
    "negative_positive_positive_negative|positive_negative_positive_positive": "一方的刷屏行为本身可能成为另一方截取的社区乱象素材。",
    "negative_positive_positive_negative|positive_positive_negative_negative": "一方极易被引导，成为另一方扩大特定冲突的复读工具。",
    "negative_positive_positive_negative|positive_positive_negative_positive": "一方无意识的扩大矛盾，为另一方提供了持续的冲突场景。",
    "negative_positive_positive_negative|positive_positive_positive_negative": "一方的重复性弹幕构成视觉奇观，可被用作视频的背景素材。",
    "negative_positive_positive_negative|positive_positive_positive_positive": "一方干扰讨论环境，另一方需要清晰的交流空间进行数据论证。存在环境排斥。",

    "negative_positive_positive_positive|positive_negative_negative_negative": "双方均有强烈的支持意愿，但实现途径分别为弹幕声援与资金介入。",
    "negative_positive_positive_positive|positive_negative_negative_positive": "一方极端维护，另一方极端攻击。在社区内呈现绝对的排斥与对线状态。",
    "negative_positive_positive_positive|positive_negative_positive_negative": "一方无条件支持现状，另一方对现状进行审视并怀念过去。",
    "negative_positive_positive_positive|positive_negative_positive_positive": "一方的过度维护言论常被另一方作为饭圈化的案例搬运至外站。",
    "negative_positive_positive_positive|positive_positive_negative_negative": "一方的忠诚度极易被另一方利用，通过反串引发与其他群体的对立。",
    "negative_positive_positive_positive|positive_positive_negative_positive": "一方对抗负面言论的过程，是另一方获取情绪观测价值的主要途径。",
    "negative_positive_positive_positive|positive_positive_positive_negative": "一方对主播状态的细致观察，能为后者提供特定的高光切片节点。",
    "negative_positive_positive_positive|positive_positive_positive_positive": "一方关注人物本身的处境与感受，另一方剥离情感只看数据。",

    "positive_negative_negative_negative|positive_negative_negative_positive": "一方投入资金支持，另一方投入精力攻击。两者的行为逻辑互不理解。",
    "positive_negative_negative_negative|positive_negative_positive_negative": "一方试图用资金影响当前走向，另一方坚持过去的社区规范。",
    "positive_negative_negative_negative|positive_negative_positive_positive": "一方的大额打赏或特殊要求经常成为另一方搬运至论坛的话题事件。",
    "positive_negative_negative_negative|positive_positive_negative_negative": "一方的醒目留言可能被另一方作为靶子，进行群体上的挑拨。",
    "positive_negative_negative_negative|positive_positive_negative_positive": "一方引发的特殊互动或争议，为另一方提供了稀有的观测样本。",
    "positive_negative_negative_negative|positive_positive_positive_negative": "一方的付费互动往往能触发特定反应，直接产生高质量创作素材。",
    "positive_negative_negative_negative|positive_positive_positive_positive": "一方通过资金加速测试进度，另一方关注测试过程的严谨性。",

    "positive_negative_negative_positive|positive_negative_positive_negative": "一方全面否定当前主体，另一方通过对比过去表达不满。在否定倾向上有一定重合。",
    "positive_negative_negative_positive|positive_negative_positive_positive": "双方具有高度的共生关系。一方负责生产发掘负面素材，另一方负责跨平台扩散。",
    "positive_negative_negative_positive|positive_positive_negative_negative": "双方均旨在破坏社区环境。经常出现目标一致但手段不同的协同效应。",
    "positive_negative_negative_positive|positive_positive_negative_positive": "一方主导攻击行为，另一方在旁观攻击引发的混乱中获取乐趣。",
    "positive_negative_negative_positive|positive_positive_positive_negative": "一方的攻击性言论或恶意截图，偶尔会被转化为偏向负面的剪辑素材。",
    "positive_negative_negative_positive|positive_positive_positive_positive": "一方以攻击为目的曲解数据，另一方要求客观中立。存在关于事实裁定的直接冲突。",

    "positive_negative_positive_negative|positive_negative_positive_positive": "一方对过去的回顾可能被另一方用作论证现环境恶化的素材搬运。",
    "positive_negative_positive_negative|positive_positive_negative_negative": "一方的怀旧言论容易被利用，成为拉踩新玩家或新机制的武器。",
    "positive_negative_positive_negative|positive_positive_negative_positive": "一方对现状的不满若引发与其他群体的摩擦，会被另一方视作观测节目。",
    "positive_negative_positive_negative|positive_positive_positive_negative": "一方掌握的早期知识可为后者的视频提供历史考据视角的补充。",
    "positive_negative_positive_negative|positive_positive_positive_positive": "双方均有数据分析能力，但一方基于过往框架，另一方基于当前版本。",

    "positive_negative_positive_positive|positive_positive_negative_negative": "双方是信息污染的上下游。一方在内部伪装引战，另一方将战火搬运至外部。",
    "positive_negative_positive_positive|positive_positive_negative_positive": "双方均从社区冲突中获益。一方追求论坛的回复量，另一方追求即时的情绪刺激。",
    "positive_negative_positive_positive|positive_positive_positive_negative": "一方搬运文字与截图，另一方处理视频与音频。同为信息的再加工者，媒介不同。",
    "positive_negative_positive_positive|positive_positive_positive_positive": "一方为了话题度可能断章取义，另一方坚持数据的完整性与客观性。存在本质矛盾。",

    "positive_positive_negative_negative|positive_positive_negative_positive": "双方均以引发混乱为目的。前者亲自下场扮演角色，后者旁观并推波助澜。",
    "positive_positive_negative_negative|positive_positive_positive_negative": "一方伪造群体立场，另一方进行物理层面的素材剪辑。行为轨迹通常不发生直接交叉。",
    "positive_positive_negative_negative|positive_positive_positive_positive": "一方通过非理性言论破坏讨论，另一方试图维持理性的计算环境。水火不容。",

    "positive_positive_negative_positive|positive_positive_positive_negative": "一方享受即时的混乱对线，另一方将混乱过程提炼为具备传播属性的成型视频。",
    "positive_positive_negative_positive|positive_positive_positive_positive": "一方希望数据存在争议以引发对立，另一方希望数据精确以终结悬念。",

    "positive_positive_positive_negative|positive_positive_positive_positive": "一方关注表现力与节目效果，另一方关注底层逻辑与数值结果。各取所需，互不干扰。"
};
