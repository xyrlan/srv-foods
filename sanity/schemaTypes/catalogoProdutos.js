  import { defineField, defineType } from "sanity";

export default defineType({
  name: "catalogoProdutos",
  title: "Catalogo de Produtos",
  type: "document",
  fields: [
    defineField({
      name: "documento",
      title: "Catalogo de Produtos ",
      type: "file",
    }),
  ],
});