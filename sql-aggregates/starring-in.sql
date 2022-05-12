select "g"."name" as "genre",
       count("f"."filmId") as "numberOfMovies"
       from "genres" as "g"
       join "filmGenre" using ("genreId")
       join "films" as "f" using ("filmId")
       join "castMembers" using ("filmId")
       join "actors" using ("actorId")
       where "actors"."firstName" = 'Lisa'
       and "actors"."lastName" = 'Monroe'
       group by "g"."name"
       order by count("f"."filmId") desc;
