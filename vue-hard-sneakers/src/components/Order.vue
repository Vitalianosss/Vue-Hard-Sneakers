<script setup>
import OrderItem from "@/components/OrderItem.vue";
import OrderAccordionIcon from "@/components/icons/OrderAccordionIcon.vue";

import {useCartStore} from "@/store/cartStore.js";
import {useAbsoluteBlockStore} from "@/store/absoluteBlockStore.js";

const cartStore = useCartStore();
const absoluteBlockStore = useAbsoluteBlockStore();

//фукция при клике на удаление товара
const deleteFromCart = (id) => {
  cartStore.deleteFromCartItem(id);
  if (cartStore.cart.length === 0) {
    absoluteBlockStore.orderBlockVisible = false;
    absoluteBlockStore.closeCart();
  }
}
</script>

<template>
  <div class="order">
    <div class="order__line">
      <p class="order-title">Оформление заказа</p>
      <span class="order-number">Заказ 3456 67</span>
    </div>
    <div class="order__items">
      <div class="order__items-line">
        <span>Товаров в заказе:</span>
        <p>{{cartStore.cart.length}} шт</p>
      </div>
      <div class="order__items-line">
        <span>Общая сумма заказа:</span>
        <p>{{cartStore.totalPrice.toLocaleString()}} ₽</p>
      </div>
      <div class="order__accordion">
        <div class="order__accordion-item">
          <input type="checkbox" id="faq-1">
          <label class="order__accordion-line" for="faq-1">
            <span class="order__accordion-title">Состав заказа</span>
            <span class="order__accordion-icon"><order-accordion-icon/></span>
          </label>
          <ul class="order__accordion-list" v-auto-animate>
            <OrderItem
                v-for="orderItem in cartStore.cart"
                :image-url="orderItem.gallery[0].url"
                :title="orderItem.title"
                :price="orderItem.price"
                @delete-from-cart="deleteFromCart(orderItem.id)"
            />
          </ul>
        </div>
      </div>
    </div>
    <form class="order__form">
      <input class="order__form-input" type="text" placeholder="Ваше имя">
      <input class="order__form-input" type="tel" placeholder="Номер телефона">
      <input class="order__form-input" type="email" placeholder="E-mail">
    </form>
    <button class="order-btn button" type="submit">Оформить заказ</button>
  </div>
</template>