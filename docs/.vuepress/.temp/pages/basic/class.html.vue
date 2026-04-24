<template><div><h2 id="职业" tabindex="-1"><a class="header-anchor" href="#职业"><span>职业</span></a></h2>
<p>现版本Wynncraft总共有5个职业，每个职业按照技能树左中右又分为三个特化流派</p>
<p>所有职业都有四种技能，虽然在技能树上位置不一定相同，但是同一个鼠标按键序列对应技能，往往功能上是相近的</p>
<table>
<thead>
<tr>
<th>技能</th>
<th>序列</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>一技能</td>
<td>RLR</td>
<td>次要输出技能</td>
</tr>
<tr>
<td>二技能</td>
<td>RRR</td>
<td>位移技能</td>
</tr>
<tr>
<td>三技能</td>
<td>RLL</td>
<td>主要输出技能</td>
</tr>
<tr>
<td>四技能</td>
<td>RRL</td>
<td>流派特化技能</td>
</tr>
</tbody>
</table>
<p>当然这只是粗略的分类，并不是所有技能树都符合这个特点</p>
<Tabs :data='[{"id":"弓手"},{"id":"法师"},{"id":"战士"},{"id":"萨满"},{"id":"刺客"}]'>
<template #title0="{ value, isActive }">弓手</template>
<template #title1="{ value, isActive }">法师</template>
<template #title2="{ value, isActive }">战士</template>
<template #title3="{ value, isActive }">萨满</template>
<template #title4="{ value, isActive }">刺客</template>
<template #tab0="{ value, isActive }">
<div><ClassArchetypes 
icon="/assets/img/basic/archer.png"
leftArchetype="Boltslinger"
midArchetype="Trapper"
rightArchetype="Sharpshooter">
<template #desc>
<p>弓手是一个纯粹的输出职业，防御较低，但是机动性很高</p>
<p>弓手的技能几乎完全是输出技能，因此是天生的玻璃大炮选手。同时弓手的技能往往不带穿透，因此定位是纯粹的对王输出职业</p>
</template>
<template #spells>
<ul>
<li>一技能：Arrow Storm，连续快速射出大量箭造成高额伤害</li>
<li>二技能：Escape，后跳位移</li>
<li>三技能：Arrow Bomb，射出落地或击中敌人爆炸的箭爆</li>
<li>四技能：Arrow Shield，召唤剑盾，受击时提供减伤并击退敌人</li>
</ul>
</template>
<template #left>
<p>闪击射手是现版本弓手最强输出分支，依靠高额的mr或ms续航，通过高频释放箭爆和箭雨打出极高的近距离爆发输出</p>
<p>同时，闪击射手有较大的输出面，在面对群怪的时候也相当舒适</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★</li>
<li>伤害：★★★★★★</li>
<li>机动：★★★</li>
<li>生存：★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Guardian Angle: 将箭盾转为持续攻击的守卫天使</li>
<li>Divine Intervention: 使用箭爆或箭雨后，守护天使获得加成</li>
<li>Recycling: 当箭矢未命中时恢复蓝量</li>
<li>Elusive: 取消箭爆和箭雨的后坐力，同时箭爆不会炸到自己</li>
</ul>
</template>
<template #mid>
<p>陷阱师的操作相对简单，主要输出依赖箭爆放置的陷阱，因此实际输出非常依赖队友操作和敌人配合</p>
<p>陷阱师的终极大招会让陷阱携带冰霜法阵，对周围的怪物挂上强力的的debuff</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★</li>
<li>伤害：★★</li>
<li>机动：★★★</li>
<li>生存：★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Basaltic Trap: 箭爆击中地面时放置陷阱</li>
<li>Patient Hunter: 陷阱伤害随放置时间递增</li>
<li>Grape Bomb: 箭爆会丢出三个小炸弹，安放额外的陷阱</li>
<li>Chilling Snare: 在陷阱上附着一个冰阵，陷阱激活后冰阵展开造成大规模debuff</li>
</ul>
</template>
<template #right>
<p>鹰眼射手的输出机制来自&quot;专注&quot;，类似法师的&quot;风印&quot;，伤害会随着专注的叠加而提升，直到专注叠满后启动终极大招</p>
<p>鹰眼射手的终极大招触发后进入飞行，同时释放高伤害的追踪激光</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★</li>
<li>伤害：★★★</li>
<li>机动：★★★★</li>
<li>生存：★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Phantom Ray: 将箭雨转为激光，以便维持专注</li>
<li>Focus: 击中敌人叠加专注</li>
<li>Homing Shots: 平A箭矢转变为激光，不受重力影响且追踪敌人</li>
<li>Crepuscular Ray: 叠加一定专注后飞天并持续发射追踪激光</li>
</ul>
</template>
</ClassArchetypes>
</div>
</template>
<template #tab1="{ value, isActive }">
<div><ClassArchetypes 
icon="/assets/img/basic/mage.png"
leftArchetype="Lightbender"
midArchetype="Riftwalker"
rightArchetype="Arcanist">
<template #desc>
<p>现版本中法师偏向辅助职业，法师的三个分支就是在辅助能力和输出能力之间做取舍</p>
<p>法师有全职业中最舒服的治疗技能和较好的机动性，是团本中不可或缺的角色</p>
</template>
<template #spells>
<ul>
<li>一技能：Heal，对范围内的玩家(当然包括自己)回血</li>
<li>二技能：Teleport，向前传送一段距离</li>
<li>三技能：Metor，召唤陨石对击中范围内敌人造成大量伤害</li>
<li>四技能：Ice Snake，召唤冰蛇造成小额伤害和减速</li>
</ul>
<p><strong>法师技能树在2.2中大改，此处尚未维护</strong></p>
</template>
<template #left>
<p>球法几乎完全放弃了aoe输出能力，转而极致强化治疗和辅助能力</p>
<p>球法玩法相对简单，同时一名优秀的球法能让队伍非常舒适</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★</li>
<li>伤害：★★</li>
<li>机动：★★★</li>
<li>生存：★★★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Orphanim: 将陨石转换为光球，光球随平a输出</li>
<li>Fortitude: 达到一定治疗量后对附近队友挂上高额输出增益</li>
<li>Fluid Healing: 治疗量随水伤增加而增加</li>
<li>Lightweaver: 达到一定治疗量后召唤旋转光球造成持续输出</li>
<li>Sunflare: 达到一定治疗量后对附近队友进行持续治疗，同时光球持续输出</li>
</ul>
</template>
<template #mid>
<p>风法与鹰眼射手的玩法比较接近，叠加风印增加伤害，直到启动大招</p>
<p>风法兼具输出和辅助能力，但因此两方面都不是特别强势</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★</li>
<li>伤害：★★★</li>
<li>机动：★★★★</li>
<li>生存：★★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Windsweeper: 平A对敌人叠加风印</li>
<li>Breathless: 陨石与光球伤害随风印层数增加</li>
<li>Time Dilation: 疾跑越跑越快，对队友也有效</li>
<li>Timelock: 吸收周围所有风印飞天并回满蓝，飞天时一切技能均不耗蓝</li>
</ul>
</template>
<template #right>
<p>Arcanist</p>
<p>奥术法师完全放弃了治疗能力，转而添加了&quot;法力储备&quot;机制，合理的操作能达到电表倒转的效果</p>
<p>但是奥法在一轮修复后半截入土，现在输出也不太行了...</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★★</li>
<li>伤害：★★★</li>
<li>机动：★★★</li>
<li>生存：★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Arcane Transfer: 技能命中增加法力储备，使用一技能将法力储备转为蓝量</li>
<li>Psychokinesis: 陨石改为从玩家丢出</li>
<li>Chaos Explosion: 奥术转换一定量的蓝后会自动释放前几个咒语</li>
<li>Arcane Power: 增加技能命中的法力储备</li>
</ul>
</template>
</ClassArchetypes>
</div>
</template>
<template #tab2="{ value, isActive }">
<div><ClassArchetypes 
icon="/assets/img/basic/warrior.png"
leftArchetype="Fallen"
midArchetype="Battlemonk"
rightArchetype="Paladin">
<template #desc>
<p>战士拥有全职业最高的基础防御补正，战士的技能树同样是在输出能力和辅助能力之间取舍，但是输出和辅助的分支都非常极端</p>
<p>战士的攻击范围近但是aoe极大，同时拥有非常舒适的位移技能，全流程体验较好，适合新手入门</p>
</template>
<template #spells>
<ul>
<li>一技能：Bash，砸地，对大范围敌人造成高额伤害</li>
<li>二技能：Charge，向前冲刺较远距离，可以在空中释放</li>
<li>三技能：Uppercut，上挑对敌人造成高额伤害</li>
<li>四技能：Warscream，范围内造成伤害并对队友施加抗性增益</li>
</ul>
</template>
<template #left>
<p>腐化战士腐化状态下受伤时伤害增加，同时解除腐化时有一定回血能力</p>
<p>蓝量不足时，腐化战士使用血条释放技能，用血条释放的技能伤害增加</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★★</li>
<li>伤害：★★★★</li>
<li>机动：★★★★★</li>
<li>生存：★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Bak'al's Grasp: 释放战吼进入腐化状态</li>
<li>Blood Pact: 蓝量不足时使用血量释放技能，同时获得伤害增益</li>
<li>Enraged Blow: 随腐化条增加而增加伤害</li>
<li>Bloodlust: 解除腐化时对周围大范围生物造成超高伤害</li>
<li>Haemorrhage: 减少血契的烧血量</li>
</ul>
</template>
<template #mid>
<p>武道士的核心机制在于按照一定的顺序释放技能，来触发强化技能以及技能减耗</p>
<p>武道士的输出偏低，而且释放技能复杂度较高，但是有比较高的坦度</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★</li>
<li>伤害：★★</li>
<li>机动：★★★★★</li>
<li>生存：★★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Bak'al's Grasp: 释放战吼进入腐化状态</li>
<li>Blood Pact: 蓝量不足时使用血量释放技能，同时获得伤害增益</li>
<li>Enraged Blow: 随腐化条增加而增加伤害</li>
<li>Bloodlust: 解除腐化时对周围大范围生物造成超高伤害</li>
<li>Haemorrhage: 减少血契的烧血量</li>
</ul>
</template>
<template #right>
<p>圣骑士的技能树基本都是在强化坦度和辅助能力，加之战士超高的基础防御补正，是天生的坦克角色</p>
<p>同时，结合腐化战士与武道士的部分技能，圣骑士也能拥有一定输出</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★</li>
<li>伤害：★</li>
<li>机动：★★★★★</li>
<li>生存：★★★★★★★★★★★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Mantle of the Bovemists: 战吼召唤圣盾</li>
<li>Sacred Surge: 释放技能和挨揍积攒神圣能量</li>
<li>Embodying Cry: 战吼对周围玩家提供增伤和抗性</li>
<li>Provoke: 战吼使周围的怪仇恨到你</li>
<li>Radiance: 重击对范围内所有玩家全词条增益</li>
<li>Heavenly Trumpet: 消耗所有神圣能量施加金血</li>
<li>Second Chance: 允许每十分钟复活一次</li>
</ul>
</template>
</ClassArchetypes>
</div>
</template>
<template #tab3="{ value, isActive }">
<div><ClassArchetypes 
icon="/assets/img/basic/shaman.png"
leftArchetype="Summoner"
midArchetype="Ritualist"
rightArchetype="Acolyte">
<template #desc>
<p>萨满拥有全职业最低的基础防御补正，同时萨满这个职业高度依赖召唤的图腾，一旦离开图腾范围就会失去一切战斗能力</p>
<p>萨满的治疗和输出都非常强悍，但是代价是极高的操作难度和风险</p>
</template>
<template #spells>
<ul>
<li>一技能：Totem，召唤图腾</li>
<li>二技能：Haul，向图腾方向移动</li>
<li>三技能：Aura，图腾发出光环，造成伤害</li>
<li>四技能：Uproot，发射一个投掷物造成伤害</li>
</ul>
</template>
<template #left>
<p>召唤师依靠召唤物战斗，在战斗中召唤师可以召唤<s>星尘之龙</s>人偶、魔像、蜂鸟三种召唤物</p>
<p>召唤师最多可以放置四个图腾，有着不错的对群压制和aoe输出</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★★</li>
<li>伤害：★★★★</li>
<li>机动：★</li>
<li>生存：★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Puppet Master：图腾每3秒将会召唤1只Puppet协助你战斗</li>
<li>Exploding Puppets：当Puppet的剩余3秒时，它们将高速冲向敌人并且自爆</li>
<li>Crimson Effigy：使用Uproot击打图腾时，会召唤Effigy，它们拥有更高的攻击且会将敌人向图腾拉扯</li>
</ul>
</template>
<template #mid>
<p>Ritualist</p>
<p>圣祭司的铲除被替换为穿上假面，不同的假面会有独特的buff和debuff。圣祭司一般不会一点到底，而是为召唤师或血教徒提供增伤</p>
<p>圣祭司的终极大招会提供所有假面的buff，同时取消debuff</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：-</li>
<li>伤害：-</li>
<li>机动：-</li>
<li>生存：-</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Mask of Lunatic: 红面具，增伤减防</li>
<li>Mask of Fanatic: 黄面具，增防减速</li>
<li>Mask of Heretic: 蓝面具，增速减伤</li>
<li>Awakened: 兼具三个面具的增益，同时取消负面效果</li>
</ul>
</template>
<template #right>
<p>血教徒是所有职业、所有分支中上手难度最高的，血教徒的核心机制在于抽血填充血池，再利用血池进行输出和治疗</p>
<p>技术好的血萨既有相当的输出能力，又有极强的辅助能力。但是不熟练的话容易导致血量被抽干</p>
<p><strong>综合评价</strong></p>
<ul>
<li>难度：★★★★★★</li>
<li>伤害：★★★★★</li>
<li>机动：★</li>
<li>生存：★★</li>
</ul>
<p><strong>重要技能</strong></p>
<ul>
<li>Sacrificial Shrine: 图腾抽血，光环消耗血池回血并获得增伤</li>
<li>Vengeful Spirit: 图腾范围内所有玩家增伤</li>
<li>Eldritch Call: 潜行释放图腾将图腾时长设置为十秒，同时召唤触手输出</li>
<li>Blood Rite: 玩家在图腾范围内受伤会填充血池</li>
<li>Blood Sorrow: 消耗血池召唤激光，对敌人造成高额伤害、对队友施加高额金血</li>
</ul>
</template>
</ClassArchetypes>
</div>
</template>
<template #tab4="{ value, isActive }">
<div><ClassArchetypes 
icon="/assets/img/basic/assassin.png"
leftArchetype="Shadestepper"
midArchetype="Trickster"
rightArchetype="Acrobat">
<template #desc>
<p>刺客同样是重要的dps职业，但是技能树比较抽象</p>
<p>主流刺客武器在提供高额输出的同时也有很好的坦度和回转，熟练后手感不输弓手</p>
</template>
<template #spells>
<ul>
<li>一技能：Spin Attack，以你为中心释放回旋斩</li>
<li>二技能：Dash，向前冲刺，不会重置你的坠落速度</li>
<li>三技能：Multihit，对前方小范围内的敌人快速释放多次斩击</li>
<li>四技能：Smoke Bomb，丢出烟雾弹造成持续范围伤害</li>
</ul>
</template>
<template #left>
<p>影布者的核心机制在于背刺和破隐，通过叠加多端倍率，打出一刀六位数以上的伤害</p>
<p>但是由于背刺的判定问题，实际上很需要队友配合才能打满伤害</p>
</template>
<template #mid>
<p>幻术师可以召唤分身，通过给敌人叠加标记以及控制分身释放技能，打出相当可观的伤害</p>
</template>
<template #right>
<p><s>飞天苍蝇</s>风舞者的技能树提供了一系列用来维持悬空飞行的技能，通过在敌人头顶释放技能打伤害</p>
<p>风舞者的输出一般，但是飞天的特性让他可以很好的规避敌人的攻击</p>
</template>
</ClassArchetypes>
</div>
</template>
</Tabs>
</div></template>


