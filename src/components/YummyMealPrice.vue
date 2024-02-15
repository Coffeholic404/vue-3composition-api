<template>
    <span>{{ pricePretty }}</span>
</template>

<script>
import { computed, inject } from "vue";
export default {
    props: {
        price: Number,
    },
    setup(props) {
        const currencySymbol = inject("currencySymbol")
        const pricePretty = computed(() => `${currencySymbol}${props.price.toFixed(2)}`);
          return { pricePretty }
    },
}
</script>