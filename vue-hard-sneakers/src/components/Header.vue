<script setup>
import {onMounted, reactive} from "vue";

import BurgerMenu from "@/components/icons/BurgerMenu.vue";
import Cart from "@/components/icons/Cart.vue";

import {useScrollToElement} from "@/composables/useScrollToElement.js";

import {useCartStore} from "@/store/cartStore.js";

const cartStore = useCartStore();

//все элементы, к которым будем делать скролл
var elementForScroll = reactive({});
onMounted(() => {
  elementForScroll = {
    catalog: document.querySelector('.st-1'),
    aboutUs: document.querySelector('.st-2'),
    itemsForYou: document.querySelector('.st-3'),
    ourTeam: document.querySelector('.st-4'),
    orderAndPrice: document.querySelector('.st-5'),
    contacts: document.querySelector('.st-6'),
  }
})

const emits = defineEmits(['openCart']);
</script>

<template>
  <header class="header">
    <p class="header__bg-text hidden-mobile">SneakMax</p>
    <div class="header__inner container">
      <div class="header__line">
        <a href="" class="header__logo logo"><h2 class="h2">SneakMax</h2></a>
        <nav class="header__links header-menu">
          <ul class="header-menu__list hidden-mobile">
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.catalog, 0)"
              >Каталог</a>
            </li>
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.aboutUs)"
              >О нас</a>
            </li>
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.itemsForYou)"
              >Подбор товаров</a>
            </li>
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.ourTeam, 0)"
              >Наша команда</a>
            </li>
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.orderAndPrice)"
              >Доставка и оплата</a>
            </li>
            <li class="header-menu__item">
              <a href="" class="header-menu__link"
                 @click.prevent="useScrollToElement(elementForScroll.contacts)"
              >Контакты</a>
            </li>
          </ul>
          <div class="header-menu__cart" @click="emits('openCart')">
            <p>Корзина</p>
            <div>
              <Cart/>
              <span v-if="cartStore.cart.length !== 0">{{cartStore.cart.length}}</span>
            </div>
          </div>
          <button class="header__burger-icon visible-mobile" type="button"><BurgerMenu/></button>
        </nav>
      </div>
      <div class="header__info">
        <h1 class="header__title h1">Кроссовки известных брендов с доставкой по России и СНГ</h1>
        <p class="header__text">Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
        <button class="header__btn button" type="button">Перейти к покупкам</button>
      </div>
    </div>
  </header>
</template>