<template>
  <div class="topnavAndBanner">
    <Topnav :toggleMenuButton="false" />
    <div class="banner">
      <h1>DD UI</h1>
      <p>一个 Vue 3 组件库</p>
      <div class="actions">
        <Button @click="linkTo('github')">GitHub</Button>
        <Button @click="linkTo('getStart')" theme="primary">开始使用</Button>
      </div>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Topnav from '@/components/Topnav.vue'
import Button from '@/lib/button/index.vue'

const router = useRouter()

const linkTo = (params: string): void => {
  if (params === 'github') {
    window.open('https://github.com/0709FanLi/ddUI', '_blank')
  } else if (params === 'getStart') {
    router.push({
      path: '/doc'
    })
  }
}
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  /* background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  ); */
  /* clip-path: ellipse(80% 60% at 50% 40%); */
}

.banner {
  padding: 170px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: rgb(44, 62, 80);
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    margin-bottom: 18px;
    font-family: Metropolis, sans-serif;
    text-size-adjust: 100%;
  }

  p {
    color: rgb(51, 54, 57);
    font-size: 16px;
    height: 25px;
    line-height: 25px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  > .actions {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .jw-button {
      height: 40px;
      padding: 0 18px;
    }
    .jw-button:last-of-type {
      margin-left: 20px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  border-top: 1px solid rgb(234, 236, 239);
  padding-top: 20px;
  @media (min-width: 800px) {
    width: 800px;
  }
  /* background-color: pink; */

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      padding: 0 30px;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
