import {defineStore} from "pinia";
import {onMounted, ref} from "vue";

export const useAbsoluteBlockStore = defineStore('absoluteBlockStore', () => {
    //переменная видимости всего абсолютного блока
    const absoluteBlockVisible = ref(false);
    //переменная видимости блока корзины
    const cartBlockVisible = ref(false);
    //переменная видимости блока заказа
    const orderBlockVisible = ref(false);
    //переменная видимости блока информации о кроссовках
    const sneakerInfoBlockVisible = ref(false);
    //переменная хранящая данные об активном кроссовке
    const sneakerInfo = ref();
    //переменная хранящая данные о рейтинге активного кроссовка
    const sneakerRating = ref(0);

    //функция открытия абсолютного блока
    const openCart = ref();
    onMounted(() => {
        openCart.value = (value) => {
            document.body.classList.add('body--absolute');
            absoluteBlockVisible.value = true;
            let top = window.scrollY;
            const absoluteBlock = document.querySelector('.absolute-block');
            absoluteBlock.style.top = `${top}px`;
            if (value === 'cart') {
                sneakerInfoBlockVisible.value = false;
                if (!orderBlockVisible.value) {
                    cartBlockVisible.value = true;
                }
            } else {
                sneakerInfoBlockVisible.value = true;
                cartBlockVisible.value = false;
                orderBlockVisible.value = false;
            }
        };
    })
    //функция закрытия абсолютного блока
    const closeCart = () => {
        document.body.classList.remove('body--absolute');
        absoluteBlockVisible.value = false;
        sneakerInfoBlockVisible.value = false;
        orderBlockVisible.value = false;
        cartBlockVisible.value = true;
    }
    //функция передачи информации о кроссовке, на который нажали
    const getSneakerInfo = (sneaker) => {
        sneakerInfo.value = sneaker;
    }
    return {
        absoluteBlockVisible,
        cartBlockVisible,
        orderBlockVisible,
        sneakerInfoBlockVisible,
        openCart,
        sneakerInfo,
        sneakerRating,
        closeCart,
        getSneakerInfo,
    }
})