<script>
import CountryCard from "./country/components/country-card.component.vue";
import {RestCountriesApi} from "./country/services/rest-countries-API.service.js";
import {Country} from "./country/model/country.entity.js";
import FooterContent from "./public/components/footer-content.component.vue";

export default {
  name: "app",
  components: {FooterContent, CountryCard},
  data() {
    return {
      country:null,
      countryAPI: new RestCountriesApi()
    }
  },
  created() {
    this.buildCountry();
  },
  methods: {
    buildCountry() {
      this.countryAPI.getCountry().then(response => {
        const countryData = response.data[0]; // Asegúrate de que estás accediendo al primer elemento del array de respuesta.

        // Crear la representación de la moneda como un string
        const currency = countryData.currencies.PEN ? `${countryData.currencies.PEN.name} (${countryData.currencies.PEN.symbol})` : '';

        // Convertir el objeto de idiomas a un array de strings
        const languages = countryData.languages ? Object.values(countryData.languages) : [];

        // Crear la instancia de Country con los datos adecuados
        this.country = new Country(
            countryData.name.common,
            countryData.name.official,
            currency,
            countryData.capital ? countryData.capital[0] : 'No capital', // Manejo seguro de capital
            countryData.region,
            countryData.subregion,
            languages,
            countryData.area,
            countryData.population,
            countryData.flags.svg, // Usar el enlace SVG de la bandera
            countryData.coatOfArms.svg // Usar el enlace SVG del escudo de armas
        );
      }).catch(e => console.error(e));
    }
  }
}
</script>

<template>
<country-card v-if="country" :country="country"></country-card>
  <footer-content></footer-content>
</template>