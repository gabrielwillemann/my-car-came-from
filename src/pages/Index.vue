<template>
  <div>
    <div class="row q-ma-lg">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 q-mx-auto">
        <q-card>
          <q-card-section>
            <div>
              <h6 class="q-my-none text-center">
                Digite a placa do veículo e descubra onde ele foi emplacado
              </h6>
            </div>
            <div class="q-mt-md" @keyup.enter="search">
              <q-input
                rounded
                outlined
                v-model="plate"
                clearable
                placeholder="ABC1234"
                mask="AAA#X##"
                input-class="text-center text-h5"
              />
            </div>
            <div class="q-mt-lg text-center">
              <q-btn color="primary" size="xl" label="Procurar" @click="search" />
            </div>
          </q-card-section>
        </q-card>
        <div class="q-mt-lg" v-if="founded">
          <q-card>
            <q-card-section>
              <p class="text-center">O estado de emplacamento do veículo é:</p>
              <h4 class="q-my-none text-center">
                {{ founded.stateName }}
              </h4>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-lg" v-if="notFound">
          <q-card class="bg-negative text-white">
            <q-card-section>
              <h4 class="q-my-none text-center">
                Placa não encontrada!
              </h4>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plateSearch from '../plates/plateSearch.js';

export default {
  name: 'PageIndex',
  data: () => ({
    plate: '',
    founded: null,
    notFound: false,
  }),
  watch: {
    plate(value) {
      if (!value) {
        this.founded = null;
        this.notFound = false;
      }
    },
  },
  methods: {
    search() {
      try {
        this.plate = this.plate.toUpperCase();
        if (!this.plate.match(/^[A-Z]{3}(\d)[0-9A-Z](\d){2}$/g)) {
          throw 'Placa inválida!';
        }
        this.founded = plateSearch(this.plate);
        this.notFound = !this.founded;
      } catch (e) {}
    },
  },
};
</script>
