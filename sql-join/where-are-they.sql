select "p"."amount",
       "c"."firstName",
       "c"."lastName",
       "a"."line1" as "address",
       "a"."district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  join "addresses" as "a" using ("addressId")
  join "cities" using ("cityId")
  join "countries" using ("countryId")
  order by "p"."amount" desc
  limit 10;
