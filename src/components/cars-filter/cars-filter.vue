<script lang="ts">
import { brands, models, complectations } from '@cmp/cars-filter/data/cars'
import BaseRadio from '@cmp/cars-filter/base-radio.vue'
export default {
  name: 'carsFilter',
  components: {
    BaseRadio,
  },
  data() {
    return {
      selectedBrand: null,
      selectedModel: null,
      selectedComplectation: null,
      carsBrands: brands,
      carsModels: models,
      carsComplectations: complectations,
    }
  },
  methods: {
    // Set up correct checked state for radio buttons after pick the radio
    changeCheckedRadio(array, newValue: string) {
      return array.map(
        item => {
          if (item?.slug === newValue?.slug) {
            item.checked = true
          } else {
            item.checked = false
          }
          return item
        }
      )
    },
    // Set all the radio buttons states to false
    clearAllCheckedStates(array) {
      return array.map(
        item => {
          item.checked = false
          return item
        }
      )
    },
    // Filter complectations depends on selected model
    filterArrayBySelectedItem(array, selectedItem, slugName) {
      if (selectedItem && selectedItem.slug) {
        return array.filter(
          item => item[slugName] === selectedItem.slug
        )
      } else {
        return []
      }
    },
  },
  watch: {
    // Watch the brand and filter models on changes
    selectedBrand(newValue) {
      this.carsBrands = this.changeCheckedRadio(this.carsBrands, newValue)
      this.carsModels = this.clearAllCheckedStates(this.carsModels)
      this.carsModels = this.filterArrayBySelectedItem(models, newValue, 'brandSlug')
      this.selectedModel = null
      this.selectedComplectation = null
    },
    // Watch the model and filter complectations on changes
    selectedModel(newValue) {
      this.carsModels = this.changeCheckedRadio(this.carsModels, newValue)
      this.carsComplectations = this.clearAllCheckedStates(this.carsComplectations)
      this.carsComplectations = this.filterArrayBySelectedItem(complectations, newValue, 'modelSlug')
      this.selectedComplectation = null
    },
    // Watch the model and filter complectations on changes
    selectedComplectation(newValue) {
      this.carsComplectations = this.changeCheckedRadio(this.carsComplectations, newValue)
    },
  },
  computed: {
    // The case when all of the filters has been selected
    selectedAll() {
      return this.selectedBrand && this.selectedModel && this.selectedComplectation
    },
  },
}
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <header class="mb-10">
          <h1 class="text-2xl font-semibold">
            Фильтр автомобилей
          </h1>
        </header>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="">
        <h2 class="font-bold">
          Фильтр
        </h2>
        <form>
          <div class="mb-3">
            <h3 class="font-semibold">
              Марка авто
            </h3>
            <base-radio
              v-for="(option, key) in carsBrands"
              :option="option"
              :key="key"
              :option-index="key"
              group-name="cars-brands"
              @pick="val => selectedBrand = val"
            />
          </div>
          <div class="mb-3">
            <h3 class="font-semibold">
              Модель авто
            </h3>
            <div
              v-if="selectedBrand && carsModels"
            >
              <base-radio
                v-for="(option, key) in carsModels"
                :option="option"
                :key="key"
                :option-index="key"
                group-name="cars-models"
                @pick="val => selectedModel = val"
              />
            </div>
          </div>
          <div
            class="mb-3"
            v-if="selectedBrand"
          >
            <h3 class="font-semibold">
              Комплектация авто
            </h3>
            <div v-if="selectedModel">
              <base-radio
                v-for="(option, key) in carsComplectations"
                :option="option"
                :key="key"
                :option-index="key"
                group-name="cars-complectations"
                @pick="val => selectedComplectation = val"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="col-span-2">
        <div class="">
          <h2 class="font-bold">
            Комплектация
          </h2>

          <div
            class="mb-3"
            v-if="selectedAll"
          >
            <h2 class="font-semibold">
              {{ selectedComplectation.title }}
            </h2>
            <ul class="list-group">
              <li class="list-group-item">
                Антиблокировочная система {{ selectedComplectation.abs ? 'есть.' : 'отсутствует.' }}
              </li>
              <li class="list-group-item">
                Противоугонная система {{ selectedComplectation.signaling ? 'есть.' : 'отсутствует.' }}
              </li>
              <li class="list-group-item">
                Подушки безопасности {{ selectedComplectation.airbags ? 'есть' : 'отсутствуют.' }}
                <span
                  v-if="selectedComplectation.airbags"
                >
                  в количестве {{ selectedComplectation.airbagsCount }}
                </span>
              </li>
            </ul>
          </div>

          <div v-else>
            <p>Нужно заполнить все поля фильтра</p>
          </div>

          <div
            v-if="false"
          >
            <pre>
              carsBrands {{ carsBrands }}
            </pre>
            <pre>
              carsModels {{ carsModels }}
            </pre>
            <pre>
              carsComplectations {{ carsComplectations }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>