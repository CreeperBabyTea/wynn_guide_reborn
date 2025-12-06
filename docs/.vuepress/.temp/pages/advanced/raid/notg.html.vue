<template><div><p>名称：Nest of the Grootslangs<br>
简称：NOTG<br>
最低等级需求：54<br>
入场费用：1 Az Rune<br>
前置任务：<a href="https://wynncraft.wiki.gg/wiki/Realm_of_Light_I_-_The_Worm_Holes" target="_blank" rel="noopener noreferrer">Realm of Light I - The Worm Holes</a></p>
<h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h2>
<h3 id="room-1" tabindex="-1"><a class="header-anchor" href="#room-1"><span>Room 1</span></a></h3>
<Tabs :data='[{"id":"Tower Room"},{"id":"Slimey Platform"}]'>
<template #title0="{ value, isActive }">Tower Room</template>
<template #title1="{ value, isActive }">Slimey Platform</template>
<template #tab0="{ value, isActive }">
<p>守塔任务</p>
<p>在这一个挑战中，地面上会有多个带颜色的标记</p>
<p><img src="/assets/img/advanced/raid/notg1_tower.jpg" alt=""></p>
<p>其中随机一个标记会刷新出白圈，需要至少一名玩家站在白圈后，在刷新出来的柱子上生存</p>
<p>总计需站立60秒，单个平台最多持续30秒就会自然消失，所以最少需要站两轮</p>
<p><img src="/assets/img/advanced/raid/notg1_tower_whelp.jpg" alt=""></p>
<p>注意，平台周围会刷一种名为Grootslang Whelp的怪，它会攻击平台，务必优先消灭，否则它会摧毁平台，延长通关时间</p>
</template>
<template #tab1="{ value, isActive }">
<p>蹲点任务</p>
<p>在这一个挑战中，场地中央会有一个史莱姆平台，需要一名玩家站立在上面激活倒计时</p>
<p>倒计时持续期间，平台周围会不断刷怪，且周围的绿名史莱姆蛋会随机开裂</p>
<p><img src="/assets/img/advanced/raid/notg1_slime_egg.jpg" alt=""></p>
<p>如果史莱姆蛋开裂(会有字幕提示)，需要及时将其破坏掉，否则倒计时将被强制暂停一段时间</p>
<p>倒计时结束后，即可打开通道通关</p>
</template>
</Tabs>
<h3 id="room-2" tabindex="-1"><a class="header-anchor" href="#room-2"><span>Room 2</span></a></h3>
<p>收集任务</p>
<Tabs :data='[{"id":"Puzzle"},{"id":"Parkour"},{"id":"Battle"}]'>
<template #title0="{ value, isActive }">Puzzle</template>
<template #title1="{ value, isActive }">Parkour</template>
<template #title2="{ value, isActive }">Battle</template>
<template #tab0="{ value, isActive }">
<p>左侧的解密机制为：按照头顶的浮岛颜色，控制加农炮开炮，铺路完成后，通过跑酷到对面拿到材料。</p>
<p>你需要在本房间的左侧观察玻璃顺序来击落对应颜色的浮岛。</p>
<p>该解密保证每次加农炮的移动间隔不超过1次</p>
<p>这一侧的最佳解法为：由一名玩家负责开炮，另一名玩家负责提前到终点处等候，这样可以大幅增加史莱姆块的获取效率。</p>
<p>负责提前等候的玩家需要在交付完成后，立刻使用位移技能返回终点待命</p>
<p>一般来说，这名玩家最好为没有输出能力的角色</p>
</template>
<template #tab1="{ value, isActive }">
<p>中间的跑酷机制类似于UR副本，需要进行多次史莱姆跳。不推荐做，如果你不是acrobat那么效率远不如战斗或者解密</p>
</template>
<template #tab2="{ value, isActive }">
<p>打就完了，小心不要被combo</p>
</template>
</Tabs>
<h3 id="room-3" tabindex="-1"><a class="header-anchor" href="#room-3"><span>Room 3</span></a></h3>
<Tabs :data='[{"id":"Hammer Room"},{"id":"Minibosses Room"}]'>
<template #title0="{ value, isActive }">Hammer Room</template>
<template #title1="{ value, isActive }">Minibosses Room</template>
<template #tab0="{ value, isActive }">
<p>开路任务</p>
<p>这一面存在重要机制，如果您不熟悉机制，请让队友承担重要角色</p>
<p>在这一个挑战中，需要一名玩家携带巨锤破坏路径上的巨石，并与其他队员一同到达终点。</p>
<p>举起巨锤后，移速，普攻，技能伤害均会大幅降低，但可以左键巨石上的<strong>裂痕</strong>破坏巨石，其他玩家无法进行这一操作，需要保护携带巨锤的玩家破坏巨石。</p>
<p><img src="/assets/img/advanced/raid/notg3_hammer.jpg" alt=""></p>
<p>需要注意，每当一块巨石的破坏进度达到60%，会刷新名为&quot;Shelled Grub&quot;的小怪，这个小怪几乎是无敌的且会发光，手持巨锤的玩家用巨锤敲击这个虫子一次即可让其变为正常敌怪</p>
<p>请注意，锤子具有冷却(也就是较长的攻击间隔)，在屏幕最上方显示</p>
<p>如果你成功破坏1次裂缝，则会出现铁砧落地的响声并伴随白色烟雾粒子，否则无事发生，可以用来判断是否敲到了</p>
<p>无敌小怪正常来说无需理会，并且还能作为刷伤害计数的工具人</p>
</template>
<template #tab1="{ value, isActive }">
<p>击杀任务</p>
<p>在这一个挑战中，玩家会被传送到有上下两层的大型空间，需要两名玩家分别进入左右两侧的洞口并被传送至下层来开始此面。</p>
<p>首先，在下层的玩家击杀平台上的miniBOSS，之后平台会上升，然后由上层玩家再次击杀miniBOSS，底层会出现新的平台，循环四次后，终点的传送门将会开启。</p>
<p>请注意，在上层的玩家一旦跌落，则会被遣送回起点。非常不建议萨满玩家留在上层。一旦某一侧两名玩家均死亡，挑战即失败</p>
</template>
</Tabs>
<h2 id="boss-grootslang-wyrmling" tabindex="-1"><a class="header-anchor" href="#boss-grootslang-wyrmling"><span>Boss: Grootslang Wyrmling</span></a></h2>
<p>notg的BOSS为拥有多个体节的大虫子：Grootslang Wyrmling。boss竞技场的边缘有缝隙，掉进去会被弹飞并受到高额伤害</p>
<p>Grootslang Wyrmling的战斗从它从竞技场中心出现并向天空咆哮开始，随后它会接近地面上的玩家</p>
<p><strong>请注意，Grootslang Wyrmling的身体只有在被打破后，才能对本体造成伤害。</strong></p>
<h3 id="技能列表" tabindex="-1"><a class="header-anchor" href="#技能列表"><span>技能列表</span></a></h3>
<table>
<thead>
<tr>
<th>技能</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>巨兽冲刺</td>
<td>Grootslang Wyrmling会张开嘴巴，朝某个方向喷射出一道火焰粒子，随后迅速朝那个方向冲去，造成高额伤害</td>
</tr>
<tr>
<td>遁地</td>
<td>Grootslang Wyrmling会从地面跳出，快速地连续钻进另一个地方。它出现的地方会有冲击波(俗称白光)扩散开来。每次跳出前地面会出现几个绿色符文，boss出现的位置会有一个更大的绿色符文，均需躲避</td>
</tr>
<tr>
<td>黏液池</td>
<td>一团绿色的液体会从天花板掉落到地面上，形成一个有毒区域，持续几秒钟。走进黏液水坑的玩家会中毒。造成足够的伤害可以摧毁</td>
</tr>
<tr>
<td>吞噬</td>
<td>当Grootslang Wyrmling升空时，一名玩家下方会出现一个巨大的绿色符文。然后它会冲向符文，对未能逃脱的玩家造成伤害并自身回血。可以使用位移技能或高移速躲避</td>
</tr>
<tr>
<td>新一族</td>
<td>会生成几只小怪Grootslang Whelps和Carnivorous Plant</td>
</tr>
<tr>
<td>死亡螺旋</td>
<td>Grootslang Wyrmling会在天空盘旋直到达到天花板，掉落泥土方块并召唤绿色符文。随后它会从场地正中央直接潜入地面，释放巨大的冲击波</td>
</tr>
<tr>
<td>食人</td>
<td>Grootslang Wyrmling会把Grootslang Whelps抛向空中，紧接着它跳起并吃下幼虫。恢复生命值和2个体节</td>
</tr>
</tbody>
</table>
<h3 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧"><span>技巧</span></a></h3>
<p>notg的boss战中，大部分时候你只需要注意<strong>白色冲击波</strong>和<strong>地面上的绿色圈</strong></p>
<p><img src="/assets/img/advanced/raid/notg_boss.jpg" alt=""></p>
<p>部分技能会释放白色的冲击波，被冲击波撞到会受到伤害并击退，可以通过跳跃或者位移技能规避。<s>被击中自动进入观战</s></p>
<p>有时候boss会在地上留下<strong>绿圈</strong>标志，这些绿圈如果被冲击波命中则会召唤出地刺，伤害非常高，<strong>一定不要站在绿圈上</strong></p>
<p>当boss使用一些钻入地下的技能时，它钻出的位置会出现一个大绿圈提示，记得规避</p>
<h2 id="graid" tabindex="-1"><a class="header-anchor" href="#graid"><span>Graid</span></a></h2>
<p>gnotg中，白光技能都改为两道白光</p>
<p>除此之外，巨兽冲刺撞到墙上时也会释放白光</p>
</div></template>


