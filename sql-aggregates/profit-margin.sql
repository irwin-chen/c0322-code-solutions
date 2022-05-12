with "cost" as (
 select "f"."filmId",
       sum("f"."replacementCost") as "expense"
    from "films" as "f"
    join "inventory" using ("filmId")
    group by "f"."filmId"
)

select "f"."title",
       "f"."description",
       "f"."rating",
       sum("p"."amount") - "expense" as "profit"
  from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  join "cost" using ("filmId")
  group by "f"."title","f"."description","f"."rating","cost"."expense"
  order by sum("p"."amount") - "expense" desc
  limit 5;
