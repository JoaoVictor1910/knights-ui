<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
            <div class="sticky">
                <div class="divOne">
                    <h2 class="slugOne">If life gives you a cat, trade it for a dog. We hork hard</h2>
                    <img src="../assets/shiba-farme-transformed.png" alt="" class="imgOne">
                </div>
                <div class="divTwo">
                    <h2 class="slugTwo">Não seja apenas um cão, seja um Cãovaleiro</h2>
                    <img src="../assets/shiba-hero-transformed.png" alt="" class="imgTwo">
                </div>
            </div>
        </div>
        <div class="col-6">
            <form @submit.prevent="submitForm">
                <h2 class="formDescription">Information:</h2>
                <div class="form-group">
                <form-input v-model="name" label="Name" class="form-control" />
                </div>
                <div class="form-group">
                <form-input v-model="nickname" label="Nickname" class="form-control" />
                </div>
                <div class="form-group">
                <form-input v-model="birthday" label="Birthday" type="date" class="form-control" />
                </div>
                <h2 class="formDescription">Weapons:</h2>
                <div class="form-group">
                <form-input
                    v-model="weapons[0].name"
                    label="Weapon Name"
                    class="form-control"
                    :key="weapons[0].name"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="weapons[0].mod"
                    label="Weapon Mod"
                    type="number"
                    class="form-control"
                    :key="weapons[0].mod"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="weapons[0].attr"
                    label="Weapon Attribute"
                    class="form-control"
                    :key="weapons[0].attr"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="weapons[0].equipped"
                    label="Weapon Equipped"
                    type="checkbox"
                    :key="weapons[0].equipped"
                />
                </div>
                <h2 class="formDescription">Attributes:</h2>
                <div class="form-group">
                <form-input
                    v-model="attributes.strength"
                    label="Strength"
                    type="number"
                    class="form-control"
                    :key="attributes.strength"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="attributes.dexterity"
                    label="Dexterity"
                    type="number"
                    class="form-control"
                    :key="attributes.dexterity"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="attributes.constitution"
                    label="Constitution"
                    type="number"
                    class="form-control"
                    :key="attributes.constitution"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="attributes.intelligence"
                    label="Intelligence"
                    type="number"
                    class="form-control"
                    :key="attributes.intelligence"
                />
                </div>
                <div class="form-group">
                <form-input
                    v-model="attributes.wisdom"
                    label="Wisdom"
                    type="number"
                    class="form-control"
                    :key="attributes.wisdom"
                />
                </div>
                <div class="form-group">
                    <form-input
                    v-model="attributes.charisma"
                    label="Charisma"
                    type="number"
                    class="form-control"
                    :key="attributes.charisma"
                    />
                </div>
                <div class="form-group">
                    <form-input
                    v-model="keyAttribute"
                    label="Key Attribute"
                    class="form-control"
                    :key="keyAttribute"
                    />
                </div>
                <div class="btn-submit">
                    <button class="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
</template>
  
<script>
import FormInput from '@/components/FormInput.vue';

export default {
    components: {
        FormInput,
    },
    data() {
        return {
            name: '',
            nickname: '',
            birthday: '',
            weapons: [
                {
                name: 'sword',
                mod: 3,
                attr: 'strength',
                equipped: true,
                },
            ],
            attributes: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            keyAttribute: 'strength'
        }
    }
} 
</script>

<style>

.form-control{
    background: none;
    border: none;
}
.form-group{
    text-align: right;
}
.btn-submit{
    text-align: right;
    margin: 50px;
}
.sticky{
    position: sticky;
    top: 0;
}
.sticky img{
    width: 250px;
    height: auto;
}
.slugOne{
    transform: rotate(-11deg) translate(-150px, 16px);
    font-size: 25px;
    border-bottom: 3px solid #000;
    width: fit-content;

    color: #ffee00;
    text-shadow: -4px 0px 10px #050505;
    line-height: 2rem;
    text-align: left;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: bold;
}
.imgOne{
    transform: translate(100px, -35px);
}
.slugTwo{
    transform: rotate(11deg) translate(60px, 16px);
    font-size: 25px;
    border-bottom: 3px solid #000;
    width: fit-content;
    color: #ffee00;
    text-shadow: -4px 0px 10px #050505;
    line-height: 2rem;
    text-align: left;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: bold;
}
.imgTwo{
    transform: translate(-250px, 35px);
}
.formDescription{
    text-align: left;
    transform: translate(85px, 0px);
    width: fit-content;
    color: black;
    font-weight: bold;
    border-bottom: 4px solid black;
    margin-bottom: 10px;
}

</style>