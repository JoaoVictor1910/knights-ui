<template>
    <div class="home-container">
        <div class="available-pages">
            <div class="link-table">
            <div class="link-row">
                <div class="link-cell">
                <a href="/register">Crie seu Herói</a>
                </div>
                <div class="link-cell">
                <a href="/lista">Sala dos Heróis</a>
                </div>
            </div>
            <div class="link-row">
                <div class="link-cell">
                    <img src="../assets/shiba-soldier-transformed.png" alt="" style="width: 400px">
                </div>
                <div class="link-cell">
                    <img src="../assets/shiba-hero-transformed.png" alt="" style="width: 300px">
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {}

</script>

<style>
h1 {
    color: #2c3e50;
}
.home-container {
    margin: 15px;
    position: relative;
    text-align: -webkit-center;
}
.available-pages{
    padding: 50px;
}
.link-table {
    display: table;
    width: 50%;
    text-align: center;
}
.link-row {
    display: table-row;
}
.link-cell {
    display: table-cell;
    padding-top: 50px;
}
.link-cell > a {
    padding: 50px 40px;
    border: 5px solid #fff;
    border-radius: 8px;
    background: #444343;
    transition: 0.3s;
    text-transform: uppercase;
    font-weight: bold;
}
.link-cell > a:hover{
    background: #fff;
    color: #000;
    text-decoration: none;
}
</style>
  