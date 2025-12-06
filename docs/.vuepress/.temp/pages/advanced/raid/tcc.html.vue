<template><div><p>名称：The Canyon Colossus<br>
简称：TCC<br>
最低等级需求：95<br>
入场费用：1 Tol Rune<br>
前置任务：<a href="https://wynncraft.wiki.gg/wiki/The_Breaking_Point" target="_blank" rel="noopener noreferrer">The Breaking Point (level 97)</a></p>
<p>Tcc是当前游戏流程内最难的raid之一（吗？</p>
<p>需要注意的是，tcc的前置和前置的前置和前置的前置的前置很多，建议有机会就尽快完成，以免后面补任务坐牢</p>
<h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h2>
<h3 id="room-1" tabindex="-1"><a class="header-anchor" href="#room-1"><span>Room 1</span></a></h3>
<Tabs :data='[{"id":"2 Platforms Room"},{"id":"Lava Lake Room"}]'>
<template #title0="{ value, isActive }">2 Platforms Room</template>
<template #title1="{ value, isActive }">Lava Lake Room</template>
<template #tab0="{ value, isActive }">
<p>双守点任务</p>
<p>玩家会被传送至一座山前，初始状态下，山脚的洞门会被巨石堵住，需要派遣玩家前往山顶的平台踩住激活后，才可以消除山脚的巨石障碍</p>
<p>山脚内的房间同样存在一个平台，一样需要有玩家踩住激活</p>
<p>山顶和山脚的平台各有60s的倒计时，当玩家站在中间3*3的浅蓝色范围(实际判定范围比3x3略小一点)时，倒计时才会启动</p>
<p>山下的倒计时用于开启山顶的通道，山顶的倒计时用于开启终点</p>
<p><strong>两边倒计时均结束</strong>后，方可挑战成功</p>
<p>需注意，平台周围会持续刷怪，且平台会随机启动防御模式击飞平台上的玩家，请保护好自己。上下两个平台被同时踩住时，平台的防御模式会被关闭</p>
<p>当上方倒计时结束后，必须要站在正中间1格，才能帮助下方停止防御模式</p>
<p>所以上方倒计时结束时，守点玩家应该继续站台直到下方计时结束</p>
</template>
<template #tab1="{ value, isActive }">
<p>团队合作+守点+miniboss</p>
<p>这一个挑战中，玩家会被传送至一岩浆湖的一侧，周围有一滩水和五个岩浆柱</p>
<p>玩家需要清除小怪干扰的同时，从水潭中收集水</p>
<p>然后找到正在喷发的岩浆柱，与其互动将其熄灭</p>
<p>累计五次未能成功熄灭岩浆柱将会立刻导致Raid失败</p>
<p>每次岩浆柱熄灭，会根据剩余时间减少平台升起的倒计时，熄灭越快，减少的时间越多</p>
<p>平台升起的倒计时归零之后，岩浆海上会升起一块平台，且该平台上会刷新一只miniboss</p>
<p><strong>如果没有玩家站在最新升起的平台上，倒计时将会被暂停。</strong></p>
<p><strong>当有玩家站在最新升起的平台上时，岩浆柱的喷发间隔会缩短。</strong></p>
<p>其余玩家重复上述操作，第二个平台升起后，刚刚站在第一块平台上的玩家需移动到第二块平台</p>
<p>当第三块平台升起后，挑战完成</p>
<p>miniboss伤害较高但血量一般，推荐灌伤职业站台秒杀miniboss</p>
</template>
</Tabs>
<h3 id="room-2" tabindex="-1"><a class="header-anchor" href="#room-2"><span>Room 2</span></a></h3>
<Tabs :data='[{"id":"Labyrinth"},{"id":"Golem Room"}]'>
<template #title0="{ value, isActive }">Labyrinth</template>
<template #title1="{ value, isActive }">Golem Room</template>
<template #tab0="{ value, isActive }">
<p>寻路任务</p>
<p>玩家会被传送至一个迷宫中心，周围共有四条路——红绿蓝黄</p>
<p>地图中心有一个翅膀，队伍中有一名玩家需要拾起翅膀，以上帝视角遍历整个迷宫，为队友找到终点</p>
<p>迷宫终点由紫色和白色的粒子组成的圈进行标记，<strong>请确保你开启了粒子效果</strong></p>
<p><img src="/assets/img/advanced/raid/tcc2_labyrinth.jpg" alt=""></p>
<p>当上帝视角的玩家找到终点，其需要为其他队友引路，迷宫内会有多个封闭的门，其余玩家需要击杀守门的miniboss才能继续前进。</p>
<p>本关开始时，由一名战斗能力较弱玩家选择拿取翅膀，其余玩家全部进入蓝色区域开路</p>
<p>拿取翅膀的玩家需要依次检查红色和绿色区域</p>
<p>一般来说，若出口位于这三个区域，则很快就能探查到；否则，出口位于黄色区域</p>
<p>发现出口的玩家需要先汇报颜色，然后再汇报坐标或者指路</p>
</template>
<template #tab1="{ value, isActive }">
<p>护航任务</p>
<p>本关开始时玩家会被传送到峡谷环绕的一片小区域中，区域内有一个Inert Stone Golem（石傀儡）。右键激活后，石傀儡会沿着固定路径移动并摧毁途中的巨石。每当到达新的区域，都会生成一个或数个Molten Monster（熔岩巨兽），它会攻击石傀儡。同时也会有很多攻击玩家的小怪随机刷新</p>
<p>房间的某些部分设有需要特定实体才能打开的门</p>
<p>除了终点大门之外，绿色的门只能由石傀儡站在<strong>巨型绿色压力板</strong>上时开启，而蓝色的门则需要玩家拉下<strong>巨型蓝色拉杆</strong>才能开启</p>
<p>在房间的中途，玩家需兵分两路激活并保护第二个石傀儡。路径上会不断出现Molten Monster攻击它</p>
<p>当两个石傀儡都被护送至各自的平台且未被摧毁时，房间即成功完成，任意Golem被摧毁则Raid失败</p>
<p>途中，蓝色傀儡在遇到第一扇门时，需要有玩家前往右侧的洞穴内拉动蓝色拉杆</p>
<p>第一扇门打开后，需要快速前往对岸激活绿色傀儡。</p>
<p>当绿色傀儡打开最后的路障后，保护绿色傀儡的玩家需要拉动里面的第二个蓝色拉杆</p>
<p>最后玩家需要进入塔楼，拉动顶端的蓝色拉杆</p>
<p><img src="/assets/img/advanced/raid/tcc2_golem.jpg" alt=""></p>
</template>
</Tabs>
<h3 id="room-3" tabindex="-1"><a class="header-anchor" href="#room-3"><span>Room 3</span></a></h3>
<p>收集任务</p>
<p>这个房间中玩家需要完成四个任务解锁四个封印符文，同时保护Astral</p>
<p><img src="/assets/img/advanced/raid/tcc3.jpg" alt=""></p>
<Tabs :data='[{"id":"Defending Astal"},{"id":"Miniboss: Primeval Machine"},{"id":"Parkour"},{"id":"Miniboss: Agate Axon"},{"id":"Evade"}]'>
<template #title0="{ value, isActive }">Defending Astal</template>
<template #title1="{ value, isActive }">Miniboss: Primeval Machine</template>
<template #title2="{ value, isActive }">Parkour</template>
<template #title3="{ value, isActive }">Miniboss: Agate Axon</template>
<template #title4="{ value, isActive }">Evade</template>
<template #tab0="{ value, isActive }">
<p>Astal于巨像正下方凝结法阵，左右两侧会不断有陨石袭来，Astal共有五点生命，每次被陨石命中会减少一点</p>
<p>玩家可以站在法阵中，瞄准后利用下蹲发射激光摧毁陨石以保护Astal</p>
<p><strong>如果Astal的生命降低至0，Raid会立刻失败。</strong></p>
<p>你可以保持潜行来持续发射激光。</p>
<p>当有一边存在陨石时，另一边不会存在陨石。</p>
<p>当陨石未成功防御时，Astal会展开保护罩，在接下来的短时间内免疫陨石的攻击</p>
</template>
<template #tab1="{ value, isActive }">
<p>击杀任务1</p>
<p>在出生点左后方</p>
<p>Primeval Machine会从巨像附近的平台上跳下开始战斗</p>
<p>它的战斗方式与其他傀儡类守护者类似，会进行多种攻击，例如向玩家投掷石块、用锤子进行大范围挥击，以及在近距离时直接用锤子攻击附近的玩家</p>
<p>将其击败后，符文封印将会出现</p>
</template>
<template #tab2="{ value, isActive }">
<p>跑酷任务1</p>
<p>在出生点左前方</p>
<p>玩家需要先在起点处拿取火焰才能解除封印，拿取火焰后，玩家将无法使用技能</p>
<p>推荐具有一定ws和jh的玩家进行此挑战。</p>
<p>这里有一段简单的小跑酷，跑到顶端即可解除符文封印。</p>
<blockquote>
<p>谁家好人做跑酷第一个跳是三远一高，结果越往后越简单</p>
</blockquote>
</template>
<template #tab3="{ value, isActive }">
<p>击杀任务2</p>
<p>在出生点右前方</p>
<p>当玩家对其发起攻击时，它会被激活，将玩家拖拽至浮空岩石上，并需要在岩石上击败它一次以进入第二阶段</p>
<p>第二阶段的战斗会发生在一片更开阔的空地上，并且Agate Axon在第二阶段也会变得更强</p>
<p>当其生命值降至50%时，会召唤数个Potassium Axons，同时半血后会开始释放高频高伤害的弹幕</p>
<p>在第二次击败Agate Axon后，它会将玩家拖至其符文封印处</p>
<p>虽然法师可以使用tp提前到达封印处，但在击败Axon之前无法与之交互</p>
<p>每一次转阶段时，都需要站在Axon旁边，才可以被成功拖拽传送。否则就等着干瞪眼吧</p>
</template>
<template #tab4="{ value, isActive }">
<p>跑酷任务2</p>
<p>玩家需要先在起点处拿取火焰才能解除封印，拿取火焰后，玩家的额外移速将被清空，且无法使用技能</p>
<p>这个通道内会不断有滚石向玩家袭来，玩家需要躲避滚石，到达道路尽头的符文封印</p>
<p>贴着道路最右侧走，可以规避大部分滚石</p>
</template>
</Tabs>
<h4 id="通关技巧" tabindex="-1"><a class="header-anchor" href="#通关技巧"><span>通关技巧</span></a></h4>
<p>一般来说，四名玩家可以分散开完成四个挑战，前往Machine的玩家最好为DPS角色，在速杀完成后立即返回def进行防御，在这之前陨石会砸到一两次，不要紧</p>
<p>Axon同样需要DPS角色，由于分两次阶段，并且二阶段会逃跑耽误时间，因此最好也是速杀</p>
<p>前往跑酷的玩家尽量要持有一定的移动速度来提高过关率，否则大量的3远1高跳跃将会折磨很久</p>
<p>前往右后方滚石的玩家只要贴着右边墙走就可以了，要求不高</p>
<h2 id="boss-the-canyon-colossus" tabindex="-1"><a class="header-anchor" href="#boss-the-canyon-colossus"><span>Boss: The Canyon Colossus</span></a></h2>
<p>tcc的场地是一系列碎片，掉出碎片会被弹起并受到高额伤害</p>
<p>tcc的平a包括直接用拳头或者用剑打出大范围超高伤害</p>
<h3 id="技能列表" tabindex="-1"><a class="header-anchor" href="#技能列表"><span>技能列表</span></a></h3>
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
<td style="text-align:left">巨剑横扫</td>
<td style="text-align:left"></td>
<td style="text-align:left">峡谷巨像会先收回剑，然后挥剑扫过整个场地。位于巨像剑道轨迹上的碎片会显示为红色。安全区在场地最后面那几块</td>
</tr>
<tr>
<td style="text-align:left">泰坦头槌</td>
<td style="text-align:left"></td>
<td style="text-align:left">当玩家处于范围内时，峡谷巨像会用头撞击所有靠近的玩家，造成极大击退效果</td>
</tr>
<tr>
<td style="text-align:left">剑刃猛击</td>
<td style="text-align:left"></td>
<td style="text-align:left">峡谷巨像会击中场地中的部分平台，使其沉入地面。碎片将在20秒后重新出现。该技能发动后，需至少冷却20秒才能再次使用</td>
</tr>
<tr>
<td style="text-align:left">毁灭视线</td>
<td style="text-align:left">生命值降至50%</td>
<td style="text-align:left">峡谷巨像会从眼中向场地远端的一个平台发射绿色激光，永久性地摧毁该平台直至战斗结束</td>
</tr>
<tr>
<td style="text-align:left">灭绝之眼</td>
<td style="text-align:left"></td>
<td style="text-align:left">峡谷巨像的眼睛将变为红色，随后向玩家丢陨石</td>
</tr>
<tr>
<td style="text-align:left">蓝焰</td>
<td style="text-align:left"></td>
<td style="text-align:left">峡谷巨像的眼睛变为蓝色并举起剑。玩家当前位置下方会出现蓝色符文，随后标记处会升起净化光束</td>
</tr>
<tr>
<td style="text-align:left">地裂之刃</td>
<td style="text-align:left">生命值降至50%</td>
<td style="text-align:left">巨像举起右手召唤场边嵌着的一把剑。剑落下攻击前会有红色符文作为预警。剑击中场地时，会对范围内的玩家造成巨大伤害，并产生向外扩散的冲击波(notg同款白光)</td>
</tr>
</tbody>
</table>
<h3 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧"><span>技巧</span></a></h3>
<p>首先不要怕这些技能，看起来很吓人实际上有几个基本上没机会放出来(比如地裂之刃)</p>
<p>战斗一开始，tcc会固定释放一个平a，攻击范围覆盖中间和右侧的平台，所以一开始直接去左平台打。战斗过程中注意tcc的动作，有异常就跑就行了</p>
<p>还有，tcc的碰撞箱很大，紧贴最前方平台，如果有3block gambit的话要注意距离</p>
<p>除此之外，打桩灌伤就行</p>
<h2 id="graid" tabindex="-1"><a class="header-anchor" href="#graid"><span>Graid</span></a></h2>
<p>巨像技能的前摇缩短，技能频率显著增加，巨剑横扫的范围会更大，地裂之刃会在战斗开始时激活。</p>
<p>巨像两侧会出现两座火山。当其中一座火山激活时，屏幕中央会有一个图标。南边的火山会释放大量小型陨石，覆盖范围更广；北边的火山则会发射数量较少但体积更大的陨石，如果玩家被命中，将受到大量伤害</p>
<p>陨石落地后会破裂成小陨石造成二次伤害</p>
<p>目前而言，gtcc只能通过灌伤在约30s内击杀，否则一旦地裂之刃、火山的前摇结束，队伍将完全失去输出能力(全都在躲技能)，所以对dps要求非常高</p>
</div></template>


