  import { defineField, defineType } from "sanity";

export default defineType({
  name: "cliente",
  title: "Cliente",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
    }),
    defineField({
      name: "site",
      title: "Site",
      type: "url",
    }),
  ],
});