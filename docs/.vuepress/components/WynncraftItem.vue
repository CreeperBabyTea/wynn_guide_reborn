<template>
  <div class="item-window">
    <img :src="itemData.icon" :alt="itemData.name" class="item-icon" />
    <div class="item-details">
      <p class="item-header">
        <span class="item-name">{{ itemData.name }}</span><br />
        <span class="item-attribute">{{ getAttackSpeedText(itemData.attackSpeed) }}</span>
      </p>
      <p class="damage">
        <span>
          <span class="neutral" v-if="itemData.damage.type === 'neutral'">Neutral Damage: </span>
          <span class="earth" v-else-if="itemData.damage.type === 'earth'">Earth Damage: </span>
          <span class="thunder" v-else-if="itemData.damage.type === 'thunder'">Thunder Damage: </span>
          <span class="water" v-else-if="itemData.damage.type === 'water'">Water Damage: </span>
          <span class="fire" v-else-if="itemData.damage.type === 'fire'">Fire Damage: </span>
          <span class="air" v-else-if="itemData.damage.type === 'air'">Air Damage: </span>
          {{ itemData.damage.min }}-{{ itemData.damage.max }}
        </span><br />
        <span>
          <span class="gray avg-dps">Average DPS: </span>{{ itemData.damage.avgDps }}
        </span>
      </p>
      <p class="requirements">
        Class Req: {{ itemData.requirements.class }}<br />
        Combat Lv. Min: {{ itemData.requirements.combatLevel }}<br />
        <template v-if="itemData.requirements.intelligence">
          Intelligence Min: {{ itemData.requirements.intelligence }}<br />
        </template>
        <template v-if="itemData.requirements.agility">
          Agility Min: {{ itemData.requirements.agility }}<br />
        </template>
        <template v-if="itemData.requirements.strength">
          Strength Min: {{ itemData.requirements.strength }}<br />
        </template>
        <template v-if="itemData.requirements.defence">
          Defence Min: {{ itemData.requirements.defence }}
        </template>
      </p>

      <!-- 动态渲染属性 -->
      <p v-for="(stat, index) in itemData.stats" :key="'stat-' + index" class="id">
        <span :class="stat.value >= 0 ? 'id-positive' : 'id-negative'">
          {{ stat.value >= 0 ? '+' : '' }}{{ stat.value }}
          <template v-if="stat.range">
            <span> to </span> +{{ stat.range.max }}
          </template>
          {{ stat.unit ? ' ' + stat.unit : '' }}
        </span> {{ stat.name }}
      </p>

      <!-- 主要效果（可选） -->
      <p v-if="itemData.majorEffect" class="id">
        <span class="major-id-name">+{{ itemData.majorEffect.name }}:</span>
        <span class="major-id-desc" v-html="itemData.majorEffect.description"></span>
      </p>

      <p class="powder-rarity">
        [{{ itemData.powderSlots }}] Powder slots<br />
        <span class="rarity">{{ itemData.rarity }}</span><br />
        <span>{{ itemData.lore }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemWindow",
  props: {
    itemData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    getAttackSpeedText(speedValue) {
      const speedMap = {
        [-3]: "Super Slow Attack Speed",
        [-2]: "Very Slow Attack Speed",
        [-1]: "Slow Attack Speed",
        [0]: "Normal Attack Speed",
        [1]: "Fast Attack Speed",
        [2]: "Very Fast Attack Speed",
        [3]: "Super Fast Attack Speed"
      };
      return speedMap[speedValue] || "Normal Attack Speed";
    }
  }
};
</script>

<style scoped>
/* 样式保持不变 */
.item-window {
  border: 2px solid #9400d3;
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px;
  width: 300px;
}

.item-icon {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
}

.item-header {
  text-align: center;
}

.item-name {
  color: rgb(164, 57, 192);
  font-size: 20px;
  font-weight: bold;
}

.item-attribute {
  font-size: 16px;
  margin-top: 5px;
  color: rgb(170, 170, 170);
}

.damage {
  font-size: 16px;
  color: rgb(170, 170, 170);
}

.neutral {
  color: rgb(255, 170, 0);
}

.neutral::before {
  content: "○ ";
}

.earth {
  color: rgb(0, 170, 0);
}

.earth::before {
  content: "✤ ";
}

.thunder {
  color: #ffff00;
}

.thunder::before {
  content: "✦ ";
}

.water {
  color: #00ffff;
}

.water::before {
  content: "❉ ";
}

.fire {
  color: rgb(255, 85, 85);
}

.fire::before {
  content: "✹ ";
}

.air {
  color: #ffffff;
}

.air::before {
  content: "❋ ";
}

.gray {
  color: rgb(85, 85, 85);
}

.avg-dps {
  margin-left: 1rem;
}

.requirements,
.id,
.powder-rarity {
  font-size: 14px;
  color: rgb(170, 170, 170);
}

.requirements {
  margin-top: 10px;
}

.id {
  margin-top: 10px;
}

.id > .id-positive {
  color: rgb(85, 255, 85);
}

.id > .id-positive > span {
  color: rgb(0, 170, 0);
}

.id > .id-negative {
  color: rgb(255, 85, 85);
}

.id > .id-negative > span {
  color: rgb(170, 0, 0);
}

.major-id-name {
  color: #55ffff;
}

.major-id-desc {
  color: #00aaaa;
}

.powder-rarity {
  margin-top: 10px;
}

.rarity {
  color: rgb(164, 57, 192);
  text-align: left;
}
</style>