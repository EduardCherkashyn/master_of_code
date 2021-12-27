const { Pool } = require('pg');
const { db: dbConfig } = require('../config');

module.exports = () => {
  const client = new Pool(dbConfig);

  return {
    testConnection: async () => {
      try {
        console.log('hello from pg');
        await client.query('SELECT NOW()');
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    close: async () => {
      console.log('INFO: Closing pg DB wrapper');
      client.end();
    },

    createProduct: async ({
      item,
      type,
      measure,
      measureValue,
      priceType,
      priceValue,
    }) => {
      try {
        if (!item) {
          throw new Error('ERROR: No item defined');
        }
        if (!type) {
          throw new Error('ERROR: No item type defined');
        }
        if (!['quantity', 'weight'].includes(measure)) {
          throw new Error('ERROR: Item measure is not valid');
        }
        if (typeof measureValue !== 'number') {
          throw new Error('ERROR: Measure value should be a valid number');
        }
        if (!['pricePerItem', 'pricePerKilo'].includes(priceType)) {
          throw new Error('ERROR: Item price type is not valid');
        }
        if (!priceValue) {
          throw new Error('ERROR: No price value defined');
        }
        const res = await client.query(
          'INSERT INTO products(item, type, measure, measure_value, price_type, price_value) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
          [item, type, measure, measureValue, priceType, priceValue],
        );

        console.log(
          `DEBUG: New product created: ${JSON.stringify(res.rows[0])}`,
        );

        return res.rows[0];
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    getProduct: async (id) => {
      try {
        if (!id) {
          throw new Error('ERROR: No product id defined');
        }

        const res = await client.query(
          'SELECT * FROM products WHERE id = $1 AND deleted_at IS NULL',
          [id],
        );

        if (res.rowCount === 0) {
          return {
            code: 200,
            responseData: `There is no item with id ${id}`,
          };
        }

        return res.rows[0];
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    updateProduct: async ({ id, ...product }) => {
      try {
        if (!id) {
          throw new Error('ERROR: No product id defined');
        }

        const query = [];
        const values = [];

        // eslint-disable-next-line no-restricted-syntax
        for (const [i, [k, v]] of Object.entries(product).entries()) {
          query.push(`${k} = $${i + 1}`);
          values.push(v);
        }

        if (!values.length) {
          throw new Error('ERROR: Nothing to update');
        }

        values.push(id);
        const res = await client.query(
          `UPDATE products SET ${query.join(', ')} WHERE id = $${
            values.length
          } RETURNING *`,
          values,
        );

        console.log(`DEBUG: Product updated: ${JSON.stringify(res.rows[0])}`);

        return res.rows[0];
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    deleteProduct: async (id) => {
      try {
        if (!id) {
          throw new Error('ERROR: No product id defined');
        }

        await client.query(
          'UPDATE products SET deleted_at = $1 WHERE id = $2',
          [new Date(), id],
        );

        return {
          code: 200,
        };
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },
  };
};
