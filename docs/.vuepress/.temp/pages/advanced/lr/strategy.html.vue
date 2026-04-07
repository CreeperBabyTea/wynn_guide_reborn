<template><div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>本文将认为读者已经打到银牛lr满级，并且已经基本了解了lr的流程、信标的作用。对这些不清楚的，可以看lr的基础技巧</p>
</div>
<h2 id="开局" tabindex="-1"><a class="header-anchor" href="#开局"><span>开局</span></a></h2>
<p>一场lr最难也最简单的是开局。开局怪物面板低，但是能否顺利开局还是很看脸的</p>
<blockquote>
<p>c20不出彩虹就老实了</p>
</blockquote>
<p>无论采用哪种策略，开局你要做这些事：</p>
<ol>
<li>拿一点基础boon和信标reroll</li>
<li>完成1~2个任务</li>
<li>拿到足够的c以及彩虹信标</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>因此你的拿信标优先级为：<br>
彩虹&gt;橙&gt;青&gt;粉，蓝</p>
</div>
<p>开局不能绝对保证成功。一般而言，c20没拿到彩虹可以直接投降了</p>
<h2 id="信标策略" tabindex="-1"><a class="header-anchor" href="#信标策略"><span>信标策略</span></a></h2>
<p>如果你单纯的拿白、拿红、拿绿，那哪怕你有彩虹也会很狼狈。这里介绍几个笔者比较喜欢的策略：</p>
<Tabs :data='[{"id":"红绿策略"},{"id":"红白策略"},{"id":"Sacrificial Ritual策略"},{"id":"Side Hustle策略"}]'>
<template #title0="{ value, isActive }">红绿策略</template>
<template #title1="{ value, isActive }">红白策略</template>
<template #title2="{ value, isActive }">Sacrificial Ritual策略</template>
<template #title3="{ value, isActive }">Side Hustle策略</template>
<template #tab0="{ value, isActive }">
<p>这个就是拿红补c拿绿补时间，在有彩虹的加持下是可以长途的</p>
<p>它的优点在于几乎不依赖运气，只要你开局成功并且时刻注意剩余挑战和时场，就不会有什么问题。缺点也很明显，你的容错会很低，有一些限制时间的trial你打不了</p>
</template>
<template #tab1="{ value, isActive }">
<p>红信标给的挑战不会奖励额外时间，但是它有一个特点：这些挑战不是接在现有挑战的末尾，而是你拿到这个红信标的下一个挑战开始</p>
<p>一般而言，一个挑战耗时(从上一个结束到这一个结束)
，是要远远少于奖励的时长的。因此你可以在普通挑战之间穿插红信标，红信标期间消耗时间，白信标期间恢复时间，差不多恢复到12~
15分钟就可以继续红信标了</p>
<p>这种操作一般要求你拿到一个+600%的白信标，也就是增强青白，来铺成你打红白的基础轨道</p>
<p>红白策略不能跑100c，要打长途后期可能需要转为红绿策略</p>
</template>
<template #tab2="{ value, isActive }">
<p>Sacrificial Ritual这个任务，会在你每次完成一个挑战时，会-1pull +3c。这个任务的好处是，它给的所有任务都是有时间奖励的，所以你完全不需要担心时间问题，无脑跑就行</p>
<p>很多人都认为这个任务已经废了，但是实际上一个pull可以换来3c，而且你还可以穿插红白尽快叠满100c来避免进一步吃pull，所以实际上一般只会吃掉15pulls左右，完全是可以跑的</p>
</template>
<template #tab3="{ value, isActive }">
<p>Side Hustle这个试炼会在挑战开始和结束的时候将计时器设为75s，<strong>无论当前处于红白信标</strong></p>
<p>也就是说，只要你不开箱，一直狂吃红信标来蹭这个+75s，就可以无限续杯</p>
<p>这个策略主要问题在于，虽然Spelunker外的任务你可以不去开箱，但是毕竟洞穴占了lr差不多一半的挑战了，你终究会把Side
Hustle用完然后转为红绿或红白策略</p>
<p>转出的难度会比较大，因为转出时你大概率依然处在红信标中。因此建议刷绿信标前去搜野箱结束这个任务，来保证转出不会直接导致你用光时长</p>
<p>这个我个人觉得应该是bug，并且在2.2更新后还没用过这个策略，不确定是否仍可用</p>
</template>
</Tabs>
<h2 id="叠pulls策略" tabindex="-1"><a class="header-anchor" href="#叠pulls策略"><span>叠pulls策略</span></a></h2>
<p>在能跑之后我们就开始寻思怎么搞很多</p>
<p>很多很多</p>
<p>很多很多很多</p>
<p>很多很多很多很多</p>
<p>的pulls了。下面依然是笔者总结出来的，现版本还能用的策略(对吧，optimism)</p>
<Tabs :data='[{"id":"青紫策略"},{"id":"Opal Offering策略"}]'>
<template #title0="{ value, isActive }">青紫策略</template>
<template #title1="{ value, isActive }">Opal Offering策略</template>
<template #tab0="{ value, isActive }">
<p>这也是最无脑但是压力最大的策略。反复叠堆青紫会给你叠加非常高的诅咒，你必须依赖高强度增益和de-debuff来续航</p>
<p>青紫策略在处理一些试炼时会压力很大，比如那些禁用boon和增强curse的，如果有机会避免，还是尽可能不要用青紫</p>
<p>但是作为最基础的策略还是得会打的对吧</p>
</template>
<template #tab1="{ value, isActive }">
<p>试炼Opal Offering允许你在获得一个诅咒的时候吃一个boon获得若干pulls，操作恰当可以叠加非常离谱的数值</p>
<p>这个策略的大致打法就是，开局之后的前90%用来叠加超多boon，并在最后10%反复拿紫来耗尽boon，因此显然，压力区间在最后缺boon的那几个挑战</p>
<p>这里推荐这样一种思路：拿到Opal Offering后先拿紫把这之前的低品质boon洗掉，然后尽可能把几个叠加hp和输出的，维持你末端的最基本boon放在最底下也就是最先拿，后面的就可以爱拿啥拿啥爽玩了</p>
</template>
</Tabs>
<h2 id="reroll还是sacrifice" tabindex="-1"><a class="header-anchor" href="#reroll还是sacrifice"><span>Reroll还是Sacrifice？</span></a></h2>
<p>先说一下抽奖机制吧：</p>
<p>每一pull会在奖池中随机选择一件物品，允许重复。然后所有pulls抽完后对战利品列表按照稀有度从高到低排序，放入战利品箱，超出箱子容量部分删掉</p>
<p>我们不妨设出神话的概率为λ，这里λ是一个很小的数，而我们某一次开箱时带着x pulls，那么最终出货的数学期望就是λx个，由于λ很小，我们可以直接认为λx就是出货概率。
如果此时你有1rr，则会额外抽取x次，也就是出货概率直接翻倍为2λx，以此类推。
而如果你用sac，当你有1sac时，会在下一次加上x/2次抽取，如果下一次也有1rr，那么就有了2*(x/2)，也就是相当于本局中拿1rr的情况
或者，如果你能保证此后每局都有0rr和1sac，则其最终求和结果也是相当于本局中拿1rr的情况</p>
<p>但是如果我们数据比较高，比如能维持每局rr+sac总共为4，那么选一两个sac的收益就很高了</p>
<p>这里我们就可以看到，在数据较低的情况下拿rr的收益是远远高于sac的，而在数据较高，且能稳定开局的情况下sac的收益则会显著高于rr</p>
<p>考虑到上面说的开局存在失败风险，如果你的技术不算特别强，则不建议玩sac。但是你要追求出好货，就得试着用sac堆叠更高额的pulls了</p>
<h2 id="关于粉信标" tabindex="-1"><a class="header-anchor" href="#关于粉信标"><span>关于粉信标</span></a></h2>
<p>拿粉信标可以给你信标reroll，这个机制看起来不是很有用，但是在特殊情况下可以救急。很多时候都可能要用到信标reroll，这里我也不举例了，反正就是，开局拿四五个信标reroll用不了多久，还能让你后面打的很舒服</p>
</div></template>


