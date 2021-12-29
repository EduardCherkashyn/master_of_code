module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4,
      },
      item: DataTypes.STRING,
      type: DataTypes.STRING,
      measure: DataTypes.STRING,
      measureValue: {
        type: DataTypes.INTEGER,
        field: 'measure_value',
        allowNull: false,
      },
      priceType: {
        type: DataTypes.STRING,
        field: 'price_type',
        allowNull: false,
      },
      priceValue: {
        type: DataTypes.STRING,
        field: 'price_value',
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
