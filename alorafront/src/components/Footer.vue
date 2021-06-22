<template>
    <div class="footer">
        <div class="footer-quote">
            "Life is what happens when you're busy making other plans."
            <span id="footer-name"><br /><i>- Not Shankar Jadhav</i></span>
        </div>
        <div class="footer-icons">
            <span class="material-icons icon">
                facebook
            </span>
            <span class="material-icons icon">
                email
            </span>
            <span class="material-icons icon">
                deck
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
};
</script>
<style scoped>
.footer {
    width: 100%;
    margin-top: 5rem;
    /* height: 14rem; */
    /* background-color: #f18994; */
    background: rgb(244, 167, 166);
    background: linear-gradient(
        180deg,
        rgba(244, 167, 166, 1) 0%,
        rgba(241, 138, 148, 1) 61%
    );
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
