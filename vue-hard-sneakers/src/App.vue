<script setup>
import {onMounted} from "vue";

import Header from "@/components/Header.vue";
import st1 from "@/components/st1.vue";
import st2 from "@/components/st2.vue";
import st3 from "@/components/st3.vue";
import st4 from "@/components/st4.vue";
import st5 from "@/components/st5.vue";
import st6 from "@/components/st6.vue";
import st7 from "@/components/st7.vue";
import Footer from "@/components/Footer.vue";
import Cart from "@/components/Cart.vue";
import Order from "@/components/Order.vue";
import SneakerInfo from "@/components/SneakerInfo.vue";

import {useSneakersStore} from "@/store/sneakersStore.js";
import {useAbsoluteBlockStore} from "@/store/absoluteBlockStore.js";
import {useCartStore} from "@/store/cartStore.js";

const absoluteBlockStore = useAbsoluteBlockStore();
const sneakersStore = useSneakersStore();
const cartStore = useCartStore();

//переменная, в которой указывается количество изначально загружаемых кроссовок, равное 12
sneakersStore.sneakersNumber = 12;

onMounted(async () => {
  window.scrollTo(0, 0);

  await sneakersStore.getSneakers(sneakersStore.sneakersNumber);
  await cartStore.getCartItems();
})

</script>

<template>
  <div class="absolute-block"
       v-show="absoluteBlockStore.absoluteBlockVisible"
       @click.self="absoluteBlockStore.closeCart()"
  >
    <Cart v-if="absoluteBlockStore.cartBlockVisible"/>
    <Order v-if="absoluteBlockStore.orderBlockVisible"/>
    <SneakerInfo v-if="absoluteBlockStore.sneakerInfoBlockVisible"/>
  </div>
  <Header @openCart="absoluteBlockStore.openCart('cart')"/>
  <main class="content">
    <st1/>
    <st2/>
    <st3/>
    <st4/>
    <st5/>
    <st6/>
    <st7/>
  </main>
  <Footer/>
</template>