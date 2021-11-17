import serviceBase from "./serviceBase";

const productService = {
  login: (payload) => serviceBase.post("/api/login", payload),
  getBooks: () => serviceBase.get("/api/books"),
  getUsers: () => serviceBase.get("/api/users"),
  getUserById: (queryString) => serviceBase.get(`/api/users/${queryString}`),
  searchBook: (queryString) => serviceBase.get(`/api/books/${queryString}`),
  searchUser: (queryString) =>
    serviceBase.get(`/api/users/search/${queryString}`),
  getuserBooks: (queryString) =>
    serviceBase.get(`/api/handlebooks/get-user-books/${queryString}`),
  attachBook: (payload) => serviceBase.post("/api/handlebooks/attach", payload),
  detachBook: (payload) => serviceBase.post("/api/handlebooks/detach", payload),
};
export default productService;
