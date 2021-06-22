<template>
    <div class="wrapper">
        <Header />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "Homepage",
    components: {
        Header,
        Footer,
    },
};
</script>
