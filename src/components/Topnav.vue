<template>
  <div class="topnav">
    <img
      class="toggle-aside"
      v-if="toggleMenuButton"
      src="../assets/logo.png"
      @click="toggleAside"
    />
    <div class="logo" @click="getStart">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-leaf"></use>
      </svg>
    </div>
    <div class="menu">
      <router-link to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/coderyjw/jw-ui" target="_blank">GitHub</a>
      <span>1.0.0</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  toggleMenuButton: {
    type: Boolean,
    default: true
  }
})

const getStart = () => {
  router.push({
    path: '/doc'
  })
}

const asideVisible = inject<Ref<boolean>>('asideVisible')

const toggleAside = () => {
  asideVisible!.value = !asideVisible?.value
}
</script>

<style lang="scss">
.topnav {
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      width: 32px;
      height: 32px;
    }
    span {
      margin-left: 10px;
      color: rgb(31, 34, 37);
      cursor: pointer;
      font-size: 18px;
      line-height: 28px;
      height: 28px;
    }
    &:hover {
      border-bottom: none;
    }
  }

  .menu {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }
  .toggle-aside {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
