<template>
    <div class="wrapper2">
        <nav class="navbar-container">
            <div class="navbar-brand">
                <router-link to="/" class="link">Alora</router-link>
            </div>
            <div class="navbar-search">
                <input
                    type="text"
                    class="form-input"
                    placeholder="Search User"
                    v-model="person"
                />
            </div>
            <div class="navbar-options">
                <div
                    class="nabvar-option-text"
                    v-if="$store.state.isAuthenticated"
                >
                    <router-link to="/write" class="link">Write</router-link>
                </div>
                <div class="nabvar-option-text" v-if="usernamechecker">
                    {{ username }}
                </div>
                <div class="nabvar-option-text sign-in" v-if="!usernamechecker">
                    <router-link to="Login" class="link">LogIn</router-link>
                </div>
                <div
                    class="nabvar-option-text sign-in logout"
                    @click="logout"
                    v-if="usernamechecker"
                >
                    Logout
                </div>

                <div
                    class="nabvar-option-text navbar-get-started"
                    v-if="!usernamechecker"
                >
                    <router-link to="SignUp" class="link"
                        >Get Started</router-link
                    >
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            username: "",
            person: "",
        };
    },
    mounted() {
        this.$store.commit("initializeStore");
        const token = this.$store.state.token;
        const username = this.$store.state.username;
        this.username = username;
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Token " + token;
        } else {
            axios.defaults.headers.common["Authorization"] = "";
        }
    },
    methods: {
        logout() {
            this.$store.commit("removeToken");
            window.location.href = "/login";
        },
    },
    computed: {
        usernamechecker() {
            if (this.username == "") {
                return false;
            } else {
                return true;
            }
        },
    },
};
</script>

<style scoped>
.wrapper {
    padding: 0;
    margin-top: 0;
}
* {
    padding: 0;
    margin: 0;
    width: 100%;
}
.navbar-container {
    /* background-color: #2e3034; */
    /* height: 8rem; */

    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar-brand {
    width: 20%;
    padding-left: 7rem;
    font-size: 5rem;
    font-family: "Balsamiq Sans";
    letter-spacing: 7%;
    color: #2e3034;
}
.navbar-options {
    padding-right: 2rem;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
}
.nabvar-option-text {
    color: #2e3034;
    font-size: 1.4rem;
    font-family: "Montserrat";
}
.sign-in:hover {
    cursor: pointer;
}
.link {
    text-decoration: none;
    color: #2e3034;
}
.navbar-get-started {
    background-color: rgba(241, 138, 148, 1);
    font-weight: 400;
    border-radius: 1.2rem;
    text-align: center;
    padding: 0.2rem 0.2rem;
    transition: 0.2s;
}
.navbar-get-started:hover {
    background-color: rgba(241, 138, 148, 0.8);
    cursor: pointer;
}
.logout {
    background-color: rgba(241, 138, 148, 0.9);
    font-weight: 400;
    border-radius: 0.5rem;
    text-align: center;
    padding: 0.2rem 0.2rem;
    transition: 0.2s;
}
.logout:hover {
    background-color: rgba(241, 138, 148, 0.7);
}
.navbar-search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-input {
    padding: 0.5rem 0.7rem;
    margin-top: 1rem;
    width: 30%;
    font-family: "Montserrat";
    font-size: 1.4rem;
    border-radius: 0.7rem;
    outline: none;
    border: 2px solid rgba(241, 138, 148, 1);
}
</style>
