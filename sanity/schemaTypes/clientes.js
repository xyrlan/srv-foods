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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
    }),
    defineField({
      name: "site",
      title: "Site",
      type: "url",
    }),
  ],
});