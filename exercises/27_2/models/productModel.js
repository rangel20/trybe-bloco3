const connect = require('./connection');

const add = async (name, brand) => {
  try {
    const db = await connect();
    const result = await db
      .getTable('products')
      .insert(['name', 'brand'])
      .values(name, brand)
      .execute();
    return { id: result.getAutoIncrementValue(), name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};


const getAll = async () => {
  try {
    const db = await connect();
    const searchDb = await db.collection('products').find().toArray();
    return searchDb ? searchDb.map(([id, name, brand]) => ({ id, name, brand })) : [];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (ProductId) => {
  try {
    const db = await connect();
    const searchDb = await db
      .getTable('products')
      .select()
      .where('id = :id')
      .bind('id', ProductId)
      .execute();
    const result = await searchDb.fetchAll();
    if(!result.length) return null;
    const [[id, name, brand]] = result;
    return result !== [] ?
     { id, name, brand } : null;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
try {
    const db = await connect();
    return db
      .getTable('products')
      .update()
      .set('name', name)
      .set('brand', brand)
      .where('id = :id')
      .bind('id', id)
      .execute();
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
    try {
    const db = await connect();
    const product = await getById(id);
    if(!product) return {};
    await db.getTable('products')
      .delete()
      .where('id = :id')
      .bind('id', id)
      .execute();
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
