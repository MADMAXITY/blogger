<template>
    <router-view />
</template>
<script>
import axios from "axios";
export default {};
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
    padding-left: 7rem;
    font-size: 5rem;
    font-family: "Balsamiq Sans";
    letter-spacing: 7%;
    color: #2e3034;
}
.navbar-options {
    padding-right: 5rem;
    display: flex;
    width: 50%;
    justify-content: flex-end;
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
    background-color: rgba(25, 129, 200, 1);
    font-weight: 400;
    border-radius: 1.2rem;
    text-align: center;
    padding: 0.2rem 0.2rem;
    transition: 0.2s;
}
.navbar-get-started:hover {
    background-color: rgba(25, 129, 200, 0.8);
    cursor: pointer;
}
.footer {
    position: absolute;
    bottom: 0px;
    /* height: 14rem; */
    background-color: rgba(25, 129, 200);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.footer-quote {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-family: "Balsamiq Sans";
    letter-spacing: 7%;
    color: #2e3034;
}
#footer-name {
    color: white;
}
.footer-icons {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon {
    width: 8%;
    text-align: center;
    color: white;
}
</style>
