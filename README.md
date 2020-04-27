## Be the Hero
Backend part for the Be the Hero application.

## Technologies
- Nodejs 
- Express
- SQLite
- Knex

## Routes
- `/sessions` send `POST` with the your charity ID on the body, if the cheity exists the response will be `{ name: CHARITY_NAME }` .

- `/ongs` send `POST` with a body that contains name, email, whatsapp, city, uf. if succsessfull the response will be `{ id: ONG_ID }` .

- `/ongs` send `GET`, will list all the ongs registered on the database.

- `/incidents` send `POST` with a body containing title, description and value, also, you'll need on the headers `{ authorization: CHARITY_ID }` .

- `/incidents` send `GET` to get the all incidents, theres pagianation you can send on the query `?page=NUMBER` there a limit of 5 incidents per page.

- `/incidents/:id` send `DELETE` with the incident `ID` on the route and on the headers `{ authorization: CHARITY_ID }` .

- `/profile` list all incidents from a charity sending on the headers `{ authorization: CHARITY_ID }` .
