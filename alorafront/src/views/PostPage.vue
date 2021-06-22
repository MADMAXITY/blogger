<template>
    <Header />
    <div class="wrapper">
        <div class="post">
            <div class="desc">
                <div class="title">
                    {{ post[0] }}
                </div>
                <div class="username">
                    @<i>{{ post[2] }}</i>
                </div>
            </div>

            <div class="text">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                >{{ post[1] }}
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    data() {
        return {
            spacing: "",
        };
    },
    name: "PostPage",
    components: {
        Header,
        Footer,
    },
    props: {
        post: Array,
    },
};
</script>
<style scoped>
.wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.desc {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin-bottom: 2rem;
}
.post {
    border-radius: 1.6rem;
    padding: 1rem;
    background-color: #dcedc1;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title {
    font-family: "Balsamiq Sans";
    font-size: 3rem;
}
.username {
    font-family: "Balsamiq Sans";
    font-size: 1rem;
    border-bottom: 0.2rem solid #a9d6c3;
}
.text {
    font-family: "Open Sans";
    font-size: 1.3rem;
}
</style>
