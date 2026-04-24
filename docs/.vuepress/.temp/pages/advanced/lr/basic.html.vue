<template><div><p>Lootrun是游戏中后期开始的，用于获取大量装备、绿宝石以及一些tome的单人副本。无论是对于想要获取第一件神话的新手，还是对想赚大钱的老玩家，lootrun都是一个很重要的内容</p>
<h2 id="营地" tabindex="-1"><a class="header-anchor" href="#营地"><span>营地</span></a></h2>
<p>Lootrun需要解锁银牛公司的相应分区后，在指定营地进行。截止笔者写这篇文章(<a href="https://wynncraft.wiki.gg/wiki/Version_2.2.0" target="_blank" rel="noopener noreferrer">2.2.0FrumaExpansion</a>)，我们总共有七个营地，等级从低到高依次是：</p>
<ul>
<li>峡谷：Canyon of the Lost Excursion (South)</li>
<li>Corkus：The Corkus Traversal</li>
<li>火山：Molten Heights Hike</li>
<li>空岛：Sky Islands Exploration</li>
<li>SE：Silent Expanse Expedition</li>
<li>西Fruma：The Fruma Foray (West)</li>
<li>东Fruma：The Fruma Foray (East)</li>
</ul>
<p>解锁一处的Lootrun会有一些要求，包括完成一些任务和洞穴。开始后，你的装备和治疗药水会被锁定，且只能和铁匠交互，其他任何包括银行，都是不可以使用的。你可以和lr的初始npc对话来结算，也可以跑完。lr结束后你会被传送回营地，随后你就可以去开箱拿战利品了。除此之外，每个lr场地都有一定范围限制，离开范围会出现极其醒目的警告和倒计时，倒计时内没返回场地内，会被强制结算</p>
<h2 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h2>
<p>进行lr时，你需要进行一系列挑战，完成一个挑战会消耗一次挑战次数(称之为c)。目前版本的lr开始时都给你提供12个挑战(也就是12c)。挑战失败或挑战中死亡，会扣除1c。在挑战数耗尽时，本场lr强制结算</p>
<p>进行挑战有倒计时，初始时为4min。一般而言，开始挑战、完成挑战都会奖励一定的时长，且时长不允许超过15min。死亡时，会将你传送至营地并扣除1min。时间耗尽时lr强制结算</p>
<p>lr开始时以及上一场挑战完成时，会出现若干个信标，作为你下一场挑战的候选列表，你走到信标处即可开始挑战。每个营地的挑战都是从固定几个中选取，因此多打有助于摸清不同营地的不同套路。挑战分为如下类型：</p>
<ul>
<li>探险(Spelunker)：起始地点在某洞穴入口，你需要搜刮该洞穴内所有的t3和t4箱子</li>
<li>打桩(Destroy)：场地中央生成一个木桩，同时附近周期性刷小怪。你需要摧毁木桩</li>
<li>击杀(Slay)：刷新若干波小怪，一般而言难度递增，你需要全部击杀</li>
<li>斩首(Target)：类似于击杀和打桩的结合，在固定一波会刷新miniboss，需要击杀所有miniboss</li>
<li>保护(Defend)：场地中央生成一个木桩，附近刷小怪，你需要保护这个木桩不被小怪摧毁，并坚持指定时长</li>
</ul>
<h2 id="信标" tabindex="-1"><a class="header-anchor" href="#信标"><span>信标</span></a></h2>
<p>每一个挑战开始前，游戏会给你提供若干个挑战地点，挑战地点可以有不同类型(颜色)的信标出现，他们的功能各不相同：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Beacon</th>
<th style="text-align:left">默认效果</th>
<th style="text-align:left">所需最低段位</th>
<th style="text-align:left">最大使用次数</th>
<th style="text-align:left">额外说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Blue</td>
<td style="text-align:left">选择一个100%效能的boon</td>
<td style="text-align:left">Rookie I</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">充满/海蓝强化后的蓝色信标会提升boon效能</td>
</tr>
<tr>
<td style="text-align:left">Purple</td>
<td style="text-align:left">+1curse，+1pull</td>
<td style="text-align:left">Rookie I</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">无</td>
</tr>
<tr>
<td style="text-align:left">Yellow</td>
<td style="text-align:left">生成1个飞行宝箱</td>
<td style="text-align:left">Rookie I</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">无</td>
</tr>
<tr>
<td style="text-align:left">Pink</td>
<td style="text-align:left">+1信标重选机会</td>
<td style="text-align:left">Rookie I</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">无</td>
</tr>
<tr>
<td style="text-align:left">Aqua</td>
<td style="text-align:left">下一个信标效果+100%</td>
<td style="text-align:left">Rookie II</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">不会连续出现两次。完成挑战后死亡会移除其效果</td>
</tr>
<tr>
<td style="text-align:left">Orange</td>
<td style="text-align:left">接下来5个挑战中，每次多1个信标选项</td>
<td style="text-align:left">Rookie III</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">第10个挑战后出现概率降低。每个橙信标单独计数</td>
</tr>
<tr>
<td style="text-align:left">Green</td>
<td style="text-align:left">+120秒时间奖励；本挑战中怪物不获得任何增益</td>
<td style="text-align:left">Assistant II</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">不会连续出现两次</td>
</tr>
<tr>
<td style="text-align:left">Dark Grey</td>
<td style="text-align:left">+3curse，+3pull</td>
<td style="text-align:left">Sentinel I</td>
<td style="text-align:left">1次</td>
<td style="text-align:left">第10个挑战后出现概率降低</td>
</tr>
<tr>
<td style="text-align:left">White</td>
<td style="text-align:left">本次 lootrun 挑战数+5</td>
<td style="text-align:left">Sentinel III</td>
<td style="text-align:left">1次</td>
<td style="text-align:left">第10个挑战后出现概率降低</td>
</tr>
<tr>
<td style="text-align:left">Grey</td>
<td style="text-align:left">从3个任务中选1个</td>
<td style="text-align:left">Elite I</td>
<td style="text-align:left">3次</td>
<td style="text-align:left">过度跳过第2或第3个灰信标会导致其从可选池中移除</td>
</tr>
<tr>
<td style="text-align:left">Red</td>
<td style="text-align:left">挑战数+3，但完成它们不获得时间奖励</td>
<td style="text-align:left">Elite III</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">不会连续出现两次。充满红信标改为+5挑战。若总挑战数达到100（含失败）则移除</td>
</tr>
<tr>
<td style="text-align:left">Crimson</td>
<td style="text-align:left">从2个试炼中选1个</td>
<td style="text-align:left">Admiral</td>
<td style="text-align:left">2次</td>
<td style="text-align:left">跳过会显著降低出现率。充满/海蓝强化只增加试炼选项数（最多4）。高阶挑战中跳过会更稀有；若长期不选/跳过会被移除</td>
</tr>
<tr>
<td style="text-align:left">Rainbow</td>
<td style="text-align:left">接下来10个挑战中，信标必定为充满状态</td>
<td style="text-align:left">Master</td>
<td style="text-align:left">不限</td>
<td style="text-align:left">无</td>
</tr>
</tbody>
</table>
<p>信标类型和挑战地点之间没有任何关联，也就是说，比如同一个洞穴，可能这一次给了彩虹信标，下一次又可以给一个蓝信标</p>
<h3 id="增益减益" tabindex="-1"><a class="header-anchor" href="#增益减益"><span>增益减益</span></a></h3>
<p>每当你完成一个带有蓝色信标的挑战时，你会被提供在两个或多个恩赐(boon，即增益)中选择。恩赐是影响你后续战利品任务的有益效果; 动态恩赐具有持续效果，而静态恩赐则根据你迄今为止的进展立即获得增益，后续不再改变</p>
<p>每当你完成带有紫色或深灰色信标的挑战时，会在剩余的战利品任务中对你施加一个或多个诅咒(curse，即减益) ，增强你在挑战期间及间遇到的所有怪物。通常诅咒数量没有限制；它们会在每个生成的怪物基础属性上叠加，并在每个挑战后与正常加成叠加。但值得注意的是，怪物最多只能获得70%的伤害抗性</p>
<h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h2>
<p>完成四个挑战后，以及完成标记为灰色信标的挑战后，你将获得若干个任务选择，每种任务类型为当前战利品任务提供不同的效果或奖励。同一时间只能做一个任务，只要已有一个任务处于激活状态，就不会获得任何灰色信标。完成的挑战越多，灰信标出现的频率会降低，因此务必在任务出现时选择。任务目标是随机的。目标包括：获得时间、获得终结奖励抽取、开启宝箱、获得恩惠或诅咒，或获得一定数量的信标</p>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:left">奖励效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Cleansing Greed</td>
<td style="text-align:left">打开一个飞行宝箱后，移除你的一个诅咒。</td>
</tr>
<tr>
<td style="text-align:left">Materialism</td>
<td style="text-align:left">所有挑战现在都会额外附带黄色信标的效果。</td>
</tr>
<tr>
<td style="text-align:left">Hoarder</td>
<td style="text-align:left">打开7个宝箱后，从3个恩惠中选择1个。</td>
</tr>
<tr>
<td style="text-align:left">Jester's Trick</td>
<td style="text-align:left">从飞行宝箱中获得30件物品后，随机获得：+3抽取、+1恩惠、+1诅咒或+30秒。</td>
</tr>
<tr>
<td style="text-align:left">Interest Scheme</td>
<td style="text-align:left">获得2次抽取时，为完成下一个黄色信标额外增加一个飞行宝箱，最多叠加12次。</td>
</tr>
<tr>
<td style="text-align:left">Orphion's Grace</td>
<td style="text-align:left">恩惠的效果提高50%。</td>
</tr>
<tr>
<td style="text-align:left">Opal Offering</td>
<td style="text-align:left">获得诅咒后，消耗1个恩惠以获取+2抽取（每50%效能额外+1抽取）。</td>
</tr>
<tr>
<td style="text-align:left">Gourmand</td>
<td style="text-align:left">使用信标重选时，信标选项+1（最多+6）。开始新挑战时重置此效果。</td>
</tr>
<tr>
<td style="text-align:left">Porphyrophobia</td>
<td style="text-align:left">出现紫色信标选项时，获得+1诅咒。紫色信标现在提供双倍抽取次数。</td>
</tr>
<tr>
<td style="text-align:left">Sacrificial Ritual</td>
<td style="text-align:left">完成一个挑战后，消耗1次抽取，使挑战总数+3。</td>
</tr>
<tr>
<td style="text-align:left">Radiant Hunter</td>
<td style="text-align:left">击败一个辐射挑战的怪物获得+1抽取（每个挑战最多通过此方式获得5次抽取）。</td>
</tr>
<tr>
<td style="text-align:left">Equilibrium</td>
<td style="text-align:left">获得诅咒时，你下一个恩惠的效能提高50%。（最高可叠加至+300%）</td>
</tr>
<tr>
<td style="text-align:left">Inner Peace</td>
<td style="text-align:left">诅咒的效果减半。</td>
</tr>
<tr>
<td style="text-align:left">Optimism</td>
<td style="text-align:left">重选信标时，已出现过的选项不会再次出现，除非所有选项都已用过。</td>
</tr>
<tr>
<td style="text-align:left">Backup Beat</td>
<td style="text-align:left">每当你的计时器增加300秒，获得+1信标重选机会。</td>
</tr>
<tr>
<td style="text-align:left">Requiem</td>
<td style="text-align:left">接下来的15分钟内，怪物的属性增长无效。</td>
</tr>
<tr>
<td style="text-align:left">Stasis</td>
<td style="text-align:left">在选择信标时，计时器不减少。（最多累积5分钟）</td>
</tr>
<tr>
<td style="text-align:left">Chronokinesis</td>
<td style="text-align:left">（非飞行）宝箱现在提供+1抽取，但会从计时器中扣除10秒（每个宝箱后续再+5秒）。完成一个挑战会使此惩罚减少15秒。</td>
</tr>
<tr>
<td style="text-align:left">Thrill Seeker</td>
<td style="text-align:left">红色信标会提供从5个选项中选择1个恩惠的机会。</td>
</tr>
<tr>
<td style="text-align:left">High Roller</td>
<td style="text-align:left">获得+10抽取和+1rr机会。</td>
</tr>
<tr>
<td style="text-align:left">Redemption</td>
<td style="text-align:left">获得+1sac机会。</td>
</tr>
<tr>
<td style="text-align:left">Complete Chaos</td>
<td style="text-align:left">完成一个挑战后，额外获得一个随机的信标奖励。</td>
</tr>
</tbody>
</table>
<h2 id="试炼" tabindex="-1"><a class="header-anchor" href="#试炼"><span>试炼</span></a></h2>
<p>挑战 20 后，完成一个标记为稀有猩红信标的挑战，将让你在两个或多个试炼中选择。与任务类似，试炼是更具风险和更难的支线目标，能获得极具价值的奖励，如rr和sac。同样的，一次只能做一个试炼</p>
<table>
<thead>
<tr>
<th style="text-align:left">名称 (英文)</th>
<th style="text-align:left">试炼</th>
<th style="text-align:left">奖励</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Adrenaline Junkie</td>
<td style="text-align:left">在获得25次抽取之前，每30秒（在间歇期）失去1个恩惠。</td>
<td style="text-align:left">获得+2次rr机会。</td>
</tr>
<tr>
<td style="text-align:left">Dying Light</td>
<td style="text-align:left">在恩惠总效能达到+1000%之前，每2.5秒你的一个恩惠会损失-5%效能（逐个衰减）。</td>
<td style="text-align:left">彩虹信标现在会额外提供+1次sac。</td>
</tr>
<tr>
<td style="text-align:left">Monochromokopia</td>
<td style="text-align:left">在获得+30次抽取之前，已完成的信标将会被“遮蔽”7个挑战。</td>
<td style="text-align:left">向你的信标池中增加一个白色、一个灰色和一个深灰色信标。</td>
</tr>
<tr>
<td style="text-align:left">Chronotrigger</td>
<td style="text-align:left">在接下来12个挑战中，你无法以任何方式获得时间。</td>
<td style="text-align:left">绿色信标会清除你15%的诅咒，并提升你3.5%的抽取次数（向上取整）。</td>
</tr>
<tr>
<td style="text-align:left">All In</td>
<td style="text-align:left">在接下来10个挑战中，诅咒效果翻倍。</td>
<td style="text-align:left">在本次 lootrun 结束时，将你拥有的每个sac转换为+3次rr。</td>
</tr>
<tr>
<td style="text-align:left">Gambling Beast</td>
<td style="text-align:left">每完成一个挑战，从你的计时器中扣除300秒（每个挑战额外+90秒）。</td>
<td style="text-align:left">在本次 lootrun 结束时，每次触发此扣除即获得+1次rr。</td>
</tr>
<tr>
<td style="text-align:left">Hubris</td>
<td style="text-align:left">在接下来10个挑战中，死亡将直接结束你的 lootrun。</td>
<td style="text-align:left">获得+1次rr机会和+1次sac。</td>
</tr>
<tr>
<td style="text-align:left">Lights Out</td>
<td style="text-align:left">在击败25只辐射挑战怪物之前，每个挑战结束后获得2个“辐射概率”诅咒。</td>
<td style="text-align:left">根据你拥有的每个“辐射强度”或“辐射概率”诅咒获得+5次抽取，并清除这些诅咒。</td>
</tr>
<tr>
<td style="text-align:left">Side Hustle</td>
<td style="text-align:left">在打开30个宝箱之前，开始、完成或失败一个挑战都会将你的计时器设为75秒。</td>
<td style="text-align:left">获得+2次rr。</td>
</tr>
<tr>
<td style="text-align:left">Treasury Bill</td>
<td style="text-align:left">每60秒失去1次抽取，直到你达到“当前抽取次数+20”的总抽取次数。</td>
<td style="text-align:left">将你当前的抽取次数提升+75%。</td>
</tr>
<tr>
<td style="text-align:left">Ultimate Sacrifice</td>
<td style="text-align:left">在接下来10个挑战中，你的恩惠被禁用。</td>
<td style="text-align:left">获得+2次sac机会。</td>
</tr>
<tr>
<td style="text-align:left">Warmth Devourer</td>
<td style="text-align:left">在获得20次抽取之前，每完成一个挑战，消耗1个恩惠和1个挑战次数。</td>
<td style="text-align:left">获得+1次rr机会和+1次sac。</td>
</tr>
</tbody>
</table>
<h2 id="战利品" tabindex="-1"><a class="header-anchor" href="#战利品"><span>战利品</span></a></h2>
<p>我们lr完成后进行结算开箱。在开箱时，你总共有三个主要的数据：抽取(pull)、重选(reroll, rr)、献祭(sacrifice, sac)</p>
<p>简单来说，你的pull越多，每次开箱出货概率越大。rr允许你重新开箱一次，sac允许你将本场lr的pulls部分保留至下一场</p>
</div></template>


