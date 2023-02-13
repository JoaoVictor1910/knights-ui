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
                    <div>
                    <label for="input" class="form-label">Name:</label>
                    <input id="input" v-model="formData.name" label="Name" class="form-control"/>
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Nickname:</label>
                    <input id="input" v-model="formData.nickname" label="Nickname" class="form-control"/>
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Birthday:</label>
                    <input id="input" v-model="formData.birthday" label="Birthday" type="date" class="form-control"/>
                    </div>
                </div>
                <h2 class="formDescription">Weapons:</h2>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Weapon Name:</label>
                    <input
                    id="input"
                    v-model="formData.weapons[0].name"
                    label="Weapon Name"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Weapon Mod:</label>
                    <input
                    id="input"
                    v-model="formData.weapons[0].mod"
                    label="Weapon Mod"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Weapon Attribute:</label>
                    <input
                    id="input"
                    v-model="formData.weapons[0].attr"
                    label="Weapon Attribute"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Weapon Equipped:</label>
                    <input
                    id="input"
                    v-model="formData.weapons[0].equipped"
                    label="Weapon Equipped"
                    type="checkbox"
                    />
                    </div>
                </div>
                <h2 class="formDescription">Attributes:</h2>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Strength:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].strength"
                    label="Strength"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Dexterity:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].dexterity"
                    label="Dexterity"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Constitution:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].constitution"
                    label="Constitution"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Intelligence:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].intelligence"
                    label="Intelligence"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Wisdom:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].wisdom"
                    label="Wisdom"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Charisma:</label>
                    <input
                    id="input"
                    v-model="formData.attributes[0].charisma"
                    label="Charisma"
                    type="number"
                    class="form-control"
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div>
                    <label for="input" class="form-label">Key Attribute:</label>
                    <input
                    id="input"
                    v-model="formData['keyAttribute']"
                    label="Key Attribute"
                    class="form-control"
                    />
                    </div>
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
// import FormInput from '@/components/FormInput.vue';
import api from '@/store/api.js';

export default {
    components: {
        // FormInput,
    },
    data() {
        const formData = {
            name: '',
            nickname: '',
            birthday: '',
            weapons: [
                {
                name: '',
                mod: 0,
                attr: '',
                equipped: false,
                },
            ],
            attributes: [{
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            }],
            keyAttribute: ''
        }

        return {
            formData
        }
    },
    methods: {
        async submitForm(){
            try {
                
                const create = await api.createKnight(this.formData);
                if(create.data.save === true){
                    alert('CÃOVALEIRO CRIADO COM SUCESSO')
                } else {
                    alert('FALHA AO CRIAR TEU SOLDADO, TENTE COM UM GATO')
                }

            } catch (error) {
                alert('Não foi possivel criar teu cãovaleiro!')
            }
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
    transform: rotate(11deg) translate(0, 16px);
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