import { mutation, query } from "./_generated/server";

export const getMeny = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  }
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await ctx.db.insert("users", {
      name: "Pondpopza",
    });

    return userId;
  }
})