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

const S_EC = { d1: 1, d2: 1, d3: 1, d4: -4, typeStr: "二创爱好者" };
const S_CZ = { d1: 1, d2: 1, d3: -1, d4: -4, typeStr: "串子" };
const S_LZL = { d1: 1, d2: -1, d3: 1, d4: -4, typeStr: "老资历" };
const S_LB = { d1: 1, d2: -1, d3: -1, d4: -4, typeStr: "老板" };
const S_FDJ = { d1: -1, d2: 1, d3: 1, d4: -4, typeStr: "复读机" };
const S_QSZ = { d1: -1, d2: 1, d3: -1, d4: -4, typeStr: "潜水者" };
const S_SZJL = { d1: -1, d2: -1, d3: 1, d4: -4, typeStr: "数值焦虑制造者" };
const S_KK = { d1: -1, d2: -1, d3: -1, d4: -4, typeStr: "口口爱好者" };

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
    { text: "当血狼破军的某个论点像引燃了《我的世界》中的TNT方块一样，引发了连锁的社区爆炸时，你的定位是：", options: [ { text: "在旁边按下打火石，并欣赏爆炸过程的旁观者", effect: S_LZ }, { text: "悄悄在原本的TNT旁边又放了几个其他阵营炸药包的人", effect: S_CZ }, { text: "利用爆炸余波，告诉大家资源规划错误下场就和被炸毁一样", effect: S_SZJL }, { text: "截取各大论坛爆炸的言论，拼接成迷惑行为大赏视频", effect: S_EC }, { text: "在爆炸中心刷一个醒目留言，试图用资金让大家冷静", effect: S_LB }, { text: "在爆炸发生前就退出了服务器，对争端毫不知情", effect: S_MM } ] }
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
