<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :style="asideStyle">
        <div class="menu">
          <div class="menu-group">
            <span class="menu-group-title text-overflow"> 文档 </span>
            <router-link class="menu-item text-overflow" to="/doc/intro">介绍</router-link>
            <router-link class="menu-item text-overflow" to="/doc/install">安装</router-link>
            <router-link class="menu-item text-overflow" to="/doc/get-started"
              >开始使用</router-link
            >
          </div>
          <div class="menu-group">
            <span class="menu-group-title text-overflow"> 通用组件 (4) </span>
            <router-link class="menu-item text-overflow" to="/doc/switch">Switch 开关</router-link>
            <router-link class="menu-item text-overflow" to="/doc/button">Button 按钮</router-link>
            <router-link class="menu-item text-overflow" to="/doc/avatar">头像 Avator</router-link>
            <router-link class="menu-item text-overflow" to="/doc/tag">标签 Tag</router-link>
            <router-link class="menu-item text-overflow" to="/doc/ellipsis"
              >省略 ellipsis</router-link
            >
          </div>
        </div>
      </aside>
      <div class="toggle-button" @click="toggleAside" :style="toggleAsidStyle">
        <img src="@/assets/svg/right-arrow.svg" alt="" />
      </div>
      <main :style="mainStyle">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref, computed } from 'vue'
import Topnav from '@/components/Topnav.vue'

const asideVisible = inject<Ref<boolean>>('asideVisible')
const clientWidth = inject<Ref<number>>('clientWidth')

const toggleAside = () => {
  asideVisible!.value = !asideVisible!.value
}

const asideStyle = computed(() => {
  return { left: asideVisible!.value ? '0px' : '-272px' }
})

const toggleAsidStyle = computed(() => {
  return {
    left: asideVisible!.value ? '272px' : '0px',
    transform: asideVisible!.value
      ? 'rotate(180deg) translateX(50%)'
      : 'rotate(0deg) translateX(50%)'
  }
})

const mainStyle = computed(() => {
  return clientWidth!.value < 500
    ? { 'padding-left': '24px' }
    : { 'padding-left': asideVisible!.value ? '302px' : '60px' }
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
    transition: all 0.5 ease;
    z-index: 1;

    > aside {
      flex-shrink: 0;
      width: 272px;
      padding: 16px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #efeff5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transition: all 250ms ease;

      .menu,
      .menu-group {
        width: 100%;
      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .menu-group-title {
        height: 36px;
        padding-left: 32px;
        font-size: 13px;
        color: rgb(118, 124, 130);
        overflow: hidden;

        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 44px;
        padding-left: 48px;
        color: rgb(51, 54, 57);
        font-size: 14px;

        &:hover {
          color: #18a058 !important;
        }
      }

      .router-link-exact-active {
        color: #18a058 !important;
        background-color: #e7f5ee;
        border-radius: 3px;
      }
    }
    > main {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 32px 24px 56px 56px;
      transition: all 250ms ease;
      overflow: auto;
    }
  }
}

.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 272px;
  top: 240px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 10;
  > img {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
</style>
