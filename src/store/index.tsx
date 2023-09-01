import axios from "axios";
import { makeAutoObservable, flow } from "mobx";

interface IUserData {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

class Data {
  userData: IUserData | null = null;
  isLoading: boolean = false;
  errorMessage: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  getData = flow(function* (this: Data, name) {
    this.isLoading = true;
    this.userData = null;
    this.errorMessage = "";
    try {
      const { data } = yield axios.get(`https://api.github.com/users/${name}`);
      this.userData = data;
      this.isLoading = false;
      console.log(data);
    } catch (error: any) {
      this.errorMessage = error.response?.data?.message || error.message;
      this.isLoading = false;
      this.userData = null;
    } finally {
      this.isLoading = false;
    }
  });
}
export const Store = new Data();
