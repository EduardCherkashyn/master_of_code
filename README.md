## Create products table

1. Inside db container(docker exec -it db bash) run:

a) Login as db user(psql -U <db_user>) and run:

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

```
CREATE TABLE products (
  id uuid DEFAULT uuid_generate_v4 (),
  item VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  measure VARCHAR NOT NULL,
  measure_value integer NOT NULL,
  price_type VARCHAR NOT NULL,
  price_value VARCHAR NOT NULL,
  deleted_at TIMESTAMP(0) DEFAULT NULL,

  PRIMARY KEY (id)
);
```
