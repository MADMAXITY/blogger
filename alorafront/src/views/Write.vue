<template>
    <div class="wrapper">
        <Header />
        <div class="textarea-wrapper">
            <textarea
                placeholder="Write your thing..."
                id=""
                cols="70"
                rows="15"
                v-model="text"
            ></textarea>
            <div class="image-submit">
                <input
                    type="text"
                    class="form-input"
                    placeholder="Title"
                    v-model="title"
                />
                <button @click="onUpload">Submit</button>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "Write",
    data() {
        return {
            file: "",
            text: "",
            title: "",
        };
    },

    components: {
        Header,
        Footer,
    },
    methods: {
        onFileChanged(event) {
            console.log(file);
            this.file = event.target.files[0];
        },
        async onUpload() {
            // upload file
            let formdata = new FormData();
            formdata.append("text", this.text);
            formdata.append("username", this.$store.state.username);
            formdata.append("title", this.title);
            await axios
                .post("/api/v1/submitpost/", formdata)
                .then((response) => {
                    var resp_dict = response["data"];
                });
        },
    },
};
</script>
<style scoped>
.textarea-wrapper {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-input {
    padding: 0.5rem 0.7rem;
    width: 60%;
    font-family: "Montserrat";
    font-size: 1.4rem;
    border-radius: 0.7rem;
    outline: none;
    border: 2px solid rgba(241, 138, 148, 1);
}
textarea {
    padding: 0.7rem 0.7rem;
    font-family: "Balsamiq Sans";
    font-size: 1.2rem;
    /* color: #fbd2b5; */
    background-color: #fffef2;
    /* background: rgb(243, 228, 195);
    background: linear-gradient(
        180deg,
        rgba(243, 228, 195, 1) 0%,
        rgba(245, 241, 216, 1) 61%
    ); */
    border: 2px solid #ede6db;
    outline: none;
}
.image-submit {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
button {
    background-color: rgba(244, 167, 166, 1);
    padding: 0.3rem 0.7rem;
    font-family: "Montserrat";
    font-size: 1.2rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
}
button:hover {
    background-color: rgba(244, 167, 166, 0.9);
}
</style>
