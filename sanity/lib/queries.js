import { client } from "./client";

export const fetchProducts = async () => {
  const query = `
  *[_type == 'produto'] {
    _type,
    ...
  }
  `;
  const products = await client.fetch(query);

  return products;
};

export const fetchClients = async () => {
  const query = `
  *[_type == 'cliente'] {
    _type,
    ...
  }
  `;
  const customers = await client.fetch(query);

  return customers;
};

export const fetchCatalogo = async () => {
  const query = `
  *[_type == 'catalogoProdutos'] {
    _type,
    ...
  }
  `;
  const catalogo = await client.fetch(query);

  return catalogo;
};