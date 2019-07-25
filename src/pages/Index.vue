<template>
  <div>
    <div class="row q-ma-lg">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 q-mx-auto">
        <q-card>
          <q-card-section>
            <div>
              <h6 class="q-my-none text-center">
                {{ $t('pages:index:label') }}
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
              <q-btn color="primary" size="xl" @click="search">
                {{ $t('pages:index:search') }}
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
        <div class="q-mt-lg" v-if="founded">
          <q-card>
            <q-card-section>
              <p class="text-center">{{ $t('pages:index:labelResult') }}</p>
              <h4 class="q-my-none text-center">
                {{ founded.stateName }}
              </h4>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-mt-lg" v-if="messageError">
          <q-card class="bg-negative text-white">
            <q-card-section>
              <h4 class="q-my-none text-center">{{ messageError }}</h4>
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
  name: 'Index',
  data: () => ({
    plate: '',
    founded: null,
    messageError: null,
  }),
  watch: {
    plate(value) {
      if (!value) {
        this.founded = null;
        this.messageError = null;
      }
    },
  },
  methods: {
    search() {
      try {
        this.messageError = null;
        this.founded = null;
        this.plate = this.plate.toUpperCase();

        if (!this.plate.match(/^[A-Z]{3}(\d)[0-9A-Z](\d){2}$/g)) throw this.$t('pages:index:errorIncompletePlate');
        this.founded = plateSearch(this.plate);
        if (!this.founded) throw this.$t('pages:index:notFound');
      } catch (e) {
        this.messageError = e;
      }
    },
  },
};
</script>
