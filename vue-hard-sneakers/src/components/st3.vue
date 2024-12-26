<script setup>
import {onMounted, ref} from "vue";

import Swiper from 'swiper';
import 'swiper/css';
import FiltersSearch from "@/components/icons/FiltersSearch.vue";

//переменная видимости блока слайдеров
const slidersVisible = ref(true);

const swiper = ref();
onMounted(() => {
  swiper.value = new Swiper('.st-3__swiper', {
    spaceBetween: 20,
    allowTouchMove: false
  });
})
</script>

<template>
  <section class="st-3">
    <div class="st-3__inner container">
      <div class="st-3__first" v-show="slidersVisible">
        <h2 class="st-3__title h2">Мы подберем идеальную пару для вас</h2>
        <p class="st-3__text">Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </p>
        <div class="swiper st-3__swiper">
          <div class="swiper-wrapper st-3__swiper-wrapper">
            <div class="swiper-slide st-3__swiper-slide st-slide">
              <h3 class="st-slide__title h3">Какой тип кроссовок рассматриваете?</h3>
              <ul class="st-slide__list">
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
                <li class="st-slide__item">
                  <div class="st-slide__item-container">
                    <img src="../../public/images/firstSlidePhoto.jpg" loading="lazy"/>
                  </div>
                  <label class="st-slide__checkbox checkbox">
                    <input type="checkbox">
                    <div><FiltersSearch/></div>
                    <p>кеды</p>
                  </label>
                </li>
              </ul>
            </div>
            <div class="swiper-slide st-3__swiper-slide st-slide">
              <h3 class="st-slide__title h3">Какой размер вам подойдет?</h3>
              <div class="st-slide__checkbox-size">
                <label class="st-slide__checkbox checkbox">
                  <input type="checkbox">
                  <div><FiltersSearch/></div>
                  <p>менее 36</p>
                </label>
                <label class="st-slide__checkbox checkbox">
                  <input type="checkbox">
                  <div><FiltersSearch/></div>
                  <p>36-38</p>
                </label>
                <label class="st-slide__checkbox checkbox">
                  <input type="checkbox">
                  <div><FiltersSearch/></div>
                  <p>39-41</p>
                </label>
                <label class="st-slide__checkbox checkbox">
                  <input type="checkbox">
                  <div><FiltersSearch/></div>
                  <p>42-44</p>
                </label>
                <label class="st-slide__checkbox checkbox">
                  <input type="checkbox">
                  <div><FiltersSearch/></div>
                  <p>45 и больше</p>
                </label>
              </div>
              <div class="st-slide__item-container st-slide__second-container">
                <img src="../../public/images/secondSlidePhoto.jpg" loading="lazy"/>
              </div>
            </div>
            <div class="swiper-slide st-3__swiper-slide st-slide">
              <h3 class="st-slide__title h3">Уточните какие-либо моменты</h3>
              <textarea class="st-slide__textarea" placeholder="Введите сообщение"></textarea>
            </div>
          </div>
        </div>
        <div class="st-3__footer">
          <div class="st-3__steps">
            <p>1</p>
            <p>из</p>
            <p>3</p>
          </div>
          <button class="st-3__btn button button--light" @click="swiper.slideNext()">Следующий шаг</button>
        </div>
      </div>
      <div class="st-3__second" v-show="!slidersVisible">
        <h2 class="st-3__title h2">Ваша подборка готова</h2>
        <p class="st-3__text st-3__second-text">Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
        <form class="st-3__second-form">
          <div class="st-3__second-form-content">
            <h1 class="h1">Получить предложение</h1>
            <p>Получите подборку подходящих для вас моделей на почту</p>
            <div class="st-3__second-form-inputs">
              <input type="text" minlength="1" placeholder="Ваше имя">
              <input type="email" minlength="1" placeholder="E-mail">
            </div>
            <button class="button" type="submit">Получить</button>
          </div>
          <div class="st-3__second-device hidden-mobile">
            <img src="../../public/images/Iphone.png" loading="lazy"/>
            <img src="../../public/images/IphoneActive.png" loading="lazy"/>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>