<template><div><h1 id="什么是配装" tabindex="-1"><a class="header-anchor" href="#什么是配装"><span>什么是配装？</span></a></h1>
<p>配装就是一整套装备，同时往往也带一套技能树</p>
<p>一套合格的配装往往能提供输出能力或辅助能力，并且具有一定生存能力</p>
<p>配装的第一要求肯定是能穿上配装、能拿动武器，也就是技能点要足够</p>
<p>一个100级的存档拥有200个可分配技能点，同时任意属性你只能分配最多100点，因此高于100就需要装备来提供点数</p>
<p>除此之外，技能点的增益上限是150点，超出150的点数是无效的<s>对吧dz</s></p>
<h2 id="元素" tabindex="-1"><a class="header-anchor" href="#元素"><span>元素</span></a></h2>
<p>配装往往强调两种或两种以上的元素装备组合。最常见的配装往往采用三元素组合或彩虹。每种元素具有其特点：</p>
<ul>
<li>地E(str)：较高的血量，较高的伤害，强化近战</li>
<li>电T(dex)：较低血量，极高伤害，依靠ms续航</li>
<li>水W(int)：较高技能伤害，依靠mr续航</li>
<li>火F(def)：肉，高回血</li>
<li>气A(agi)：高移速，技能减cost，脆</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这些都只是一般规律，并非所有装备都符合</p>
</div>
<p>常见元素组合：</p>
<ul>
<li>彩虹：最全能的组合，样样都会但往往样样不精</li>
<li>ETF：新手推荐组合，有肉有输出，但是Spell流可能回转比较艰难</li>
<li>ETW：玻璃大炮，高风险但是高伤害</li>
<li>TWA：性能比较均衡，但是缺少地点数使伤害受限</li>
<li>EWA：和TWA一样比较均衡，伤害稳定</li>
</ul>
<h2 id="ehp" tabindex="-1"><a class="header-anchor" href="#ehp"><span>ehp</span></a></h2>
<p>ehp即effective health，火属性和气属性都会影响ehp。然而，由于气属性的闪避随机性很大，我们更喜欢参考ehp(no agi)，即忽略闪避的ehp</p>
<blockquote>
<p>使用agi享受随机被秒杀</p>
</blockquote>
<p>ehp随玩法的变化差别也很大，有些玻璃大炮可能只有7k甚至5k ehp，而作为坦克的圣骑士则可以轻松达到100k以上</p>
<h1 id="战斗" tabindex="-1"><a class="header-anchor" href="#战斗"><span>战斗</span></a></h1>
<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2>
<p>大部分配装都需要考虑输出的问题。输出词条主要包含三种：技能点、百分比伤害、原始伤害</p>
<p>技能点方面，最重要的是str和dex。除此之外各元素对应的技能点也有一定伤害加成，如int点数对水伤有加成</p>
<p>然后两种词条伤害，粗略的理解，百分比伤害是乘在在武器基础伤害(base dps)之上，而原始伤害则是直接相加，且原始伤害不受百分比伤害影响</p>
<p>因此，比如我们有一把base dps为594的武器，如果在10%spell和72raw spell中选择，72raw spell的收益就更高</p>
<blockquote>
<p>什么武器才594base啊，hero说到</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>一般而言，武器基础面板为：</p>
<p>弓手&gt;萨满、刺客&gt;战士&gt;法师</p>
<p>因此百分比对弓手、萨满、刺客有更好效果，原始伤害对法师有更好效果，而战士则需要权衡</p>
</div>
<h2 id="回转" tabindex="-1"><a class="header-anchor" href="#回转"><span>回转</span></a></h2>
<p>回转一般包括两种，蓝量回转和血量回转。血量回转是指依靠烧血的fallen和依靠血池的acolyte，在战斗中维持自己的血量的能力。而蓝量回转则是普通的烧蓝的职业</p>
<p>对于消耗蓝量的职业，需要通过mr或ms或技能树技能维持蓝量：</p>
<ul>
<li>Spell Spam：直接依靠高额mr回转。常见于带有水属性的配装</li>
<li>Spell Steal：将攻速压低到super slow，在技能间穿插平a偷蓝。常见于电属性配装</li>
<li>双回转：上述两种都有</li>
</ul>
<p>部分职业有特别的回蓝技能，如bolt的Recycling和奥法的奥术转换。不同职业的蓝耗也往往不同，如血萨的蓝耗就远远低于bolt的</p>
<h1 id="基本配装思路" tabindex="-1"><a class="header-anchor" href="#基本配装思路"><span>基本配装思路</span></a></h1>
<ol>
<li>选择一把武器，选择一个职业分支。有些职业分支有特别适配的武器，比如萨满的oly适配召唤师，法师的lament适配lb。具体而言可以参考神话介绍，或问问群友</li>
<li>买不起神话的话，有一些神话有下位取代，一样可以参考神话介绍中的内容。除此之外也可以在wynnatlas查询，网址见<RouteLink to="/tutorial/">新手教程</RouteLink></li>
<li>确定元素组合。新手比较推荐使用ETF、EWF等，最好E/T带一个，F/A带一个(优先F)，再加上W提供回转</li>
<li>饰品的选择上，手镯无脑Prowess，项链选择li岛对应元素的，戒指选择li戒指或者summa提供点数和回转</li>
<li>装备的选择上，最重要的是能穿上，其次考虑回转和输出。点数不够且对输出要求不太高的情况下裤子可以使用Vaward。hive的装备往往比较强力，可以优先使用</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>万能公式</p>
<p>头盔：Spectrum/Sequencer
胸甲：Libra
裤子：Aleph Null/Vaward
鞋子：Epilogue/Capricorn
戒指：Summa/Moon Pool Circlet/diamond li
手镯：Prowess
项链：Gigabyte/Collection/diamond li</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>关于hive装备 配装时务必时刻记住，hive同层的装备是无法同时装备的，否则会受到大量负面效果</p>
<p>例如，Prowess与Contrast，Intensity这三件饰品只能同时装备一件在身上</p>
</div>
</div></template>


