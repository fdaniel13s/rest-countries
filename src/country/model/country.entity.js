export class Country {
// información name, oficial name, currency, capital, región, subregion,
// languages, area, population, la imagen de su bandera (flag), y la imagen de su escudo
// (coatOfArms).

    constructor(name = '', officialName = '', currency = '', capital = '', region = '', subregion = '', languages = [], area = 0, population = 0, flag = '', coatOfArms = '') {
        this.name = name;
        this.officialName = officialName;
        this.currency = currency;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.area = area;
        this.population = population;
        this.flag = flag;
        this.coatOfArms = coatOfArms;
    }
}