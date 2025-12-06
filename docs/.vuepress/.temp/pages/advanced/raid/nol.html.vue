<template><div><p>名称：Orphion's Nexus of Light<br>
简称：NOL<br>
最低等级需求：79<br>
入场费用：1 Uth Rune<br>
前置任务：<a href="https://wynncraft.wiki.gg/wiki/Realm_of_Light_V_-_The_Realm_of_Light" target="_blank" rel="noopener noreferrer">Realm of Light V - The Realm of Light (level 79)</a></p>
<p>nol是现版本实际上最难的raid</p>
<h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h2>
<h3 id="room-1" tabindex="-1"><a class="header-anchor" href="#room-1"><span>Room 1</span></a></h3>
<p>守点任务</p>
<p>这个任务中间有一个柱子，周围地面上有若干水晶。一名玩家在中央塔台上站60秒通关(可以通过角落的金色弹跳垫登上塔台)</p>
<p>其他玩家需要清理水晶下面定期刷新的寄生虫，否则计时器暂停(类似notg的Slimey Platform)</p>
<p>推荐lb等垂直位移比较流畅的职业去站台，其他玩家在下面清理小怪</p>
<h3 id="room-2" tabindex="-1"><a class="header-anchor" href="#room-2"><span>Room 2</span></a></h3>
<Tabs :data='[{"id":"Clouds Room"},{"id":"Resource Room"}]'>
<template #title0="{ value, isActive }">Clouds Room</template>
<template #title1="{ value, isActive }">Resource Room</template>
<template #tab0="{ value, isActive }">
<p>击杀任务</p>
<p>房间内所有玩家获得10jump height。每波三朵云会出现黑色的光柱，出现光柱的云会刷怪。玩家需要在30s内杀死所有云上的小怪</p>
</template>
<template #tab1="{ value, isActive }">
<p>收集任务</p>
<ul>
<li>战斗：直走。击败Athanatic Witness，获得2个晶核。</li>
<li>跑酷：左转。平台隐形，需观察上方金块判断位置。期间玩家移动法术被禁用。完成获得1个晶核。</li>
<li>解谜：右转。在房间中心潜行发射光线，击杀来袭的Decay Atriums以自卫。完成获得2个晶核</li>
</ul>
<p>一般直接全队去中线灌伤</p>
</template>
</Tabs>
<h3 id="room-3" tabindex="-1"><a class="header-anchor" href="#room-3"><span>Room 3</span></a></h3>
<Tabs :data='[{"id":"Tower Room"},{"id":"Maze Room"}]'>
<template #title0="{ value, isActive }">Tower Room</template>
<template #title1="{ value, isActive }">Maze Room</template>
<template #tab0="{ value, isActive }">
<p>带路任务</p>
<p>开始时房间内会有一个Darkness Crystal，右键拿起。有玩家拿起水晶后挑战开始</p>
<p>挑战中房间会有一个不断移动的光柱，对持有水晶者隐形，其他玩家需要引导持水晶者跟随光柱移动</p>
<p>持有者在光柱附近时，屏幕顶部进度会增加，进度填满后本层结束</p>
<p>总共有三层，嗯</p>
<p>一般而言由两名非dps职业做任务，其他人清理小怪</p>
</template>
<template #tab1="{ value, isActive }">
<p>寻路任务</p>
<p>开始时房间内会有一个Light Crystal，右键拿起。拿起水晶的玩家可以看到道路，需要引导其他玩家到达检查点</p>
<p>到达检查点后，经过的路线就对所有人可见了，然后会出现两个额外平台，需要三名玩家分别站在检查点和两个额外平台。站完之后，额外平台会消失。站两次解锁下一个检查点，继续由持水晶者带路</p>
<p>一般而言，持水晶者直接去检查点，其他玩家位移过来即可</p>
</template>
</Tabs>
<h2 id="boss" tabindex="-1"><a class="header-anchor" href="#boss"><span>Boss</span></a></h2>
<h3 id="orphion-fading-light" tabindex="-1"><a class="header-anchor" href="#orphion-fading-light"><span>Orphion, Fading Light</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">技能</th>
<th style="text-align:left">触发条件</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">冲撞</td>
<td style="text-align:left"></td>
<td style="text-align:left">Orphion用头撞击玩家，并在身后留下光束</td>
</tr>
<tr>
<td style="text-align:left">光爆</td>
<td style="text-align:left"></td>
<td style="text-align:left">Orphion在竞技场上空创造光球，喷射出能伤害玩家的粒子</td>
</tr>
<tr>
<td style="text-align:left">十字光</td>
<td style="text-align:left"></td>
<td style="text-align:left">Orphion向四个方向发射十字形的光束，这些光束会追踪玩家</td>
</tr>
<tr>
<td style="text-align:left">野性冲锋</td>
<td style="text-align:left"></td>
<td style="text-align:left">Orphion在竞技场横冲直撞，并在身后留下光束</td>
</tr>
<tr>
<td style="text-align:left">怒嚎蚀日</td>
<td style="text-align:left">生命值低于70%</td>
<td style="text-align:left">Orphion摆出架势准备咆哮<s>哈气</s>，随后从其口部开始的锥形范围内对玩家造成伤害</td>
</tr>
<tr>
<td style="text-align:left">雷霆震击</td>
<td style="text-align:left">生命值低于45%</td>
<td style="text-align:left">Orphion抖落Parasitic Mites，在他周围生成一个大型闪电环，在 Mites 周围生成小型闪电环。位于闪电环内的玩家屏幕会收到警告闪烁（小环两侧各一个闪电标志，Orphion的大环每侧三个）。蓄力结束后，所有Parasitic Mites死亡并对环内玩家造成伤害。若玩家在 Orphion的大环内，将获得-75/5秒法力回复和-6阶攻速（随时间快速衰减）；若在小环内，则会被快速冻结在原地</td>
</tr>
<tr>
<td style="text-align:left">太阳雨</td>
<td style="text-align:left">生命值达到50%</td>
<td style="text-align:left">转阶段</td>
</tr>
</tbody>
</table>
<p>Orphion生命值达到50%时释放太阳雨技能，前往竞技场中心并朝天吼叫，一个太阳随之出现并增长。随后太阳落到地上，向周围发射碎片，对击中的玩家造成伤害和击退。随后太阳会变成黑洞，同时碎片从场地外飞向黑洞。黑洞有引力，碎片也会对玩家造成极大击退。进入黑洞的玩家将承受持续高速的巨额伤害</p>
<p>Orphion生命值达到70%、40%时出现4个Crystaline，会在场地四处徘徊，并帮Boss补血。杀掉它会使击杀者逐渐被水晶冻住，被冻住后将被定在原地，并无法攻击和使用任何技能。此时需要队友攻击帮助解冻或杀掉场上所有的Crystalline才会解除，如果等它自动崩坏会对被冰冻的玩家造成大量伤害。</p>
<p>Orphion生命值清零时同时释放野性冲撞、光爆和十字光，一小段时间后进入下一阶段</p>
<p>战斗中需要注意尽可能呆在奥菲翁屁股后面，防止被Orphion哈气</p>
<h3 id="parasite" tabindex="-1"><a class="header-anchor" href="#parasite"><span>Parasite</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">技能</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">毒素炸弹</td>
<td style="text-align:left">发射一个大型抛射物，可在竞技场内弹跳。</td>
</tr>
<tr>
<td style="text-align:left">力量争夺</td>
<td style="text-align:left">Parasite摆出准备猛扑的架势，然后扑向一名玩家。被抓住的玩家被控制，受Parasite支配移动，并会施放其职业的技能，同时自身周期性受到伤害。玩家可通过正确操作屏幕提示暂时夺回控制权，避免施放技能，并为驱逐进度增加10%。操作失败则抵抗无效。当 Parasite 的生命值降低10%时，它会从被控制的玩家身上脱离。</td>
</tr>
</tbody>
</table>
<p>Parasite血条清零后会跳到场地中央被Orphion哈气，随后玩家再打一下结束raid</p>
<h2 id="graid" tabindex="-1"><a class="header-anchor" href="#graid"><span>Graid</span></a></h2>
<p>gnol中，被Orphion技能打中会扣除最大生命值，10s内不再被打中，最大生命值会慢慢恢复</p>
<p>被Parasite毒素炸弹打中一段时间后会吃大量伤害，并在玩家位置再次释放毒素炸弹</p>
<p>由于扣除最大生命值的设定实在太恶心，一般没人打gnol</p>
</div></template>


