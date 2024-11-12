import { client } from "./client";

export const fetchAllDocuments = async () => {
  const query = `
  *[_type != 'sanity.imageAsset'] {
    _type,
    ...
  }
  `;
  const documents = await client.fetch(query);

  return documents;
};