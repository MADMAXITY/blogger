<template>
    <Header />
    <div class="wrapper">
        <div class="full-body">
            <div
                class="poster"
                v-for="(post, postindex) in posts"
                v-bind:key="postindex"
            >
                <router-link
                    class="link"
                    :to="{
                        name: 'PostPage',
                        params: {
                            post: [post.title, post.text, post.username],
                        },
                    }"
                >
                    <div class="post">
                        <div class="posttitle">{{ post.title }}</div>
                        <div class="postauthor">
                            @<i>{{ post.username }}</i>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "Homepage",
    data() {
        return {
            posts: [],
        };
    },
    components: {
        Header,
        Footer,
    },
    async mounted() {
        await axios.post("/api/v1/getallposts/").then((response) => {
            this.posts = response["data"]["data"];
        });
    },
};
</script>
<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}
.full-body {
    margin-top: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
}
.link {
    text-decoration: none;
    color: black;
}
.posttitle {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 2rem;
}
.postauthor {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 1.5rem;
}
.poster {
    width: 25%;
    margin: 4% 4%;
}
.post {
    width: 100%;
    height: 10rem;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: #dcedc1;

    border-radius: 2rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
    transition: 0.3s linear;
}
.post:hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
    cursor: pointer;
    background: rgb(220, 237, 193);
    background: linear-gradient(
        180deg,
        rgba(220, 237, 193, 1) 0%,
        rgba(251, 211, 182, 1) 30%
    );
}
</style>
