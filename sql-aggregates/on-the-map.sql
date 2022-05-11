select "countries"."name" as "Country",
       count("cities"."name") as "numberOfCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
