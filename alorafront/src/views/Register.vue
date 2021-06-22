<template>
    <div class="overall">
        <Header />
        <div class="wrapper">
            <form @submit.prevent="submitform" class="form-wrapper">
                <label class="form-label">Username</label>
                <input
                    type="text"
                    class="form-input"
                    placeholder="Username"
                    v-model="username"
                />
                <label class="form-label">Password</label>
                <input
                    type="password"
                    class="form-input"
                    placeholder="Password"
                    v-model="password"
                />
                <label class="form-label">Password</label>
                <input
                    type="password"
                    class="form-input"
                    placeholder="Confirm Password"
                    v-model="password2"
                />
                <div
                    class="errors"
                    v-for="(error, errorindex) in errors"
                    v-bind:key="errorindex"
                >
                    {{ error }}
                </div>
                <button class="btn">Submit</button>
            </form>
        </div>
        <Footer />.
    </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "SignUp",
    data() {
        return {
            username: "",
            password: "",
            password2: "",
            errors: [],
        };
    },
    components: {
        Header,
        Footer,
    },
    mounted() {
        document.title = "LogIn | Alora";
    },
    methods: {
        submitform() {
            this.errors = [];
            if (this.username === "") {
                this.errors.push("Invalid Username!");
            } else if (this.password === "") {
                this.errors.push("Invalid Password!");
            } else if (this.password != this.password2) {
                this.errors.push("Password doesn't match!");
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password,
                };

                axios.post("/api/v1/users/", formData).then((response) => {
                    alert("Account Created Succefully, Please Log In!");
                });
                this.$router.push("/login");
            }
        },
    },
};
</script>

<style scoped>
.wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-wrapper {
    padding: 3rem 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(25, 129, 200, 0.9);
    border-radius: 2rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
}
.form-label {
    color: white;
    margin-top: 1rem;
    font-family: "Montserrat";
    font-size: 1.4rem;
}
.form-input {
    margin-top: 1rem;
    font-family: "Montserrat";
    font-size: 1.4rem;
    padding: 0.5rem 0.9rem;
    border-radius: 0.7rem;
    outline: none;
    border: 2px solid #0274c4;
}
.errors {
    font-family: "Montserrat";
}
.btn {
    margin-top: 1rem;
    padding: 0.5rem 0.8rem;
    font-family: "Montserrat";
    font-size: 1.4rem;
    background-color: rgba(255, 255, 255, 1);
    outline: none;
    border: 1.5px solid #0274c4;
    border-radius: 0.7rem;
}
.btn:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048);
}
</style>
