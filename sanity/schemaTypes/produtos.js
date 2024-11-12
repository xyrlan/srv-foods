import { defineField, defineType } from "sanity";

export default defineType({
  name: "produto",
  title: "Produto",
  type: "document",
  fields: [
    defineField({
      name: "nome",
      title: "Nome",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descricao",
      title: "Descrição",
      type: "string",
    }),
    defineField({
      name: "foto",
      title: "Foto",
      type: "image",
    }),
  ],
});
