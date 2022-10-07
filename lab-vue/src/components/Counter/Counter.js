import { ref, onMounted, computed, watch } from "vue";
export default {
    name: "Counter",
    props: {
        initialValue: {
            type: Number,

        },
    },
    emits: ["counter-update"],
    setup(props, context) {
        console.log(context);
        const count = ref(props.initialValue);
        const increment = () => {
            count.value += 1;
        };
        const decrement = () => {
            count.value -= 1;
        };
        const incrementBy = (value) => {
            count.value += value;
        };
        const countPow = computed(() => count.value * count.value);
        watch(count, (value) => {
            context.emit("counter-update", value);
        });
        onMounted(() => console.log("Composition API counter mounted"));

        return {
            count,
            increment,
            decrement,
            incrementBy,
            countPow,
        };
    },
};