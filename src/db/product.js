const { product } = require('../../models');

module.exports = () => {
  return {
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
        const res = await product.create(
          {
            item,
            type,
            measure,
            measureValue,
            priceType,
            priceValue,
          },
          {
            returning: true,
          },
        );

        return res;
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

        const res = await product.findAll({
          where: {
            id,
            deletedAt: null,
          },
          raw: true,
          nest: true,
        });

        if (res.rowCount === 0) {
          return {
            code: 200,
            responseData: `There is no item with id ${id}`,
          };
        }

        return res[0];
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    getProductAll: async () => {
      try {
        const res = await product.findAll({
          where: {
            deletedAt: null,
          },
          raw: true,
          nest: true,
        });

        return res;
      } catch (err) {
        console.error(err.message || err);
        throw err;
      }
    },

    updateProduct: async ({ id, ...productToUpdate }) => {
      try {
        if (!id) {
          throw new Error('ERROR: No product id defined');
        }

        const res = await product.update(productToUpdate, {
          where: { id },
          returning: true,
        });

        return res[1];
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

        await product.update(
          {
            deletedAt: new Date(),
          },
          {
            where: { id },
          },
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
