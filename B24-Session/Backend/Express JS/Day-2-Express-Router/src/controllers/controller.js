// 1. Type
export function handlerCreateAccount() {}

// 2 . Arrow

export const handleCreateAccount = () => {};

// 3. Object Oriented Functions
export const UserActions = {
  createAccount: () => {
    console.log("User Account created!");
  },
};

// 4. function with export
exports.createAccount = () => {};

// export { handleCreateAccount, handlerCreateAccount, UserActions }; // Es6+

// import { handleCreateAccount, handlerCreateAccount, UserActions } from "controller"
