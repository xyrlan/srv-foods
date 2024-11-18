import { client } from "./client";
import { cache } from "react";

export const revalidate = 0;


export const fetchProducts = cache(async () => {
  const query = `
    *[_type == 'produto'] {
      _type,
      ...
    }
  `;

  const products = await client.fetch(query, {}, { next: { tags: ["produto"] } });
  return products;
});

export const fetchClients = cache(async () => {
  const query = `
  *[_type == 'cliente'] {
    _type,
    ...
  }
  `;
  const customers = await client.fetch(query, {}, { next: { tags: ["cliente"] } });

  return customers;
});

export const fetchCatalogo = cache(async () => {
  const query = `
  *[_type == 'catalogoProdutos'] {
    _type,
    ...
  }
  `;
  const catalogo = await client.fetch(query, {}, { next: { tags: ["catalogoProdutos"] } });

  return catalogo;
});