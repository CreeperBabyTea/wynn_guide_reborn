<template><div><p>在教程任务中你应该已经接触到了鉴定系统，大致了解了鉴定是什么，下面我们更加深入的讲解词条与鉴定系统</p>
<h1 id="词条系统" tabindex="-1"><a class="header-anchor" href="#词条系统"><span>词条系统</span></a></h1>
<p>Wynn中的物品(武器，盔甲，饰品)往往都有<strong>词条</strong></p>
<Tabs :data='[{"id":"1"},{"id":"2"}]'>
<template #title0="{ value, isActive }">1</template>
<template #title1="{ value, isActive }">2</template>
<template #tab0="{ value, isActive }">
<p><img src="/assets/img/basic/id_spring.jpg" alt=""></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/assets/img/basic/id_spring2.jpg" alt=""></p>
</template>
</Tabs>
<p>上面是两把水神话弓Spring的词条</p>
<p>对于同一个物品，词条的列表是固定的，但是鉴定度往往不同。这也就是说，所有的Spring都有且仅有这些词条，但是词条具体给多少值，则取决于其鉴定度</p>
<p>物品的非技能点词条往往有一个<strong>鉴定范围</strong>。鉴定时，会随机在范围内选取一个值作为该词条的鉴定度</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>你可以在Wynncraft官网、WynnBuilder或者直接在wynntils的物品指南中查询物品词条的鉴定范围，也可以直接在游戏中将鼠标悬停在物品上按下shift来查看</p>
</div>
</div></template>


