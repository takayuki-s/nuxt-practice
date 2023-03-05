import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const useContactStore = defineStore("loadContactStatus", {
  state: () => ({
    userData: {},
    inquiry: "",
  }),
  actions: {
    async fetchUserData() {
      await axios.get(baseUrl + "/members").then((res) => {
        this.userData = res.data.data;
      });
    },
    saveInquiry(inquiryInfo) {
      this.inquiry = inquiryInfo;
    },
    async sendMail(inquiryInfo) {
      const url = `${baseUrl}/send_contact_mail`;
      const params = {
        mail_body: inquiryInfo,
      };
      // TODO: API未実装なので実装後に要確認
      await axios
        .post(url, params, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res);
          this.inquiry = "";
        })
        .catch(function (error) {
          console.log(error);
          throw new Error("send failed");
        });
    },
  },

  getters: {
    getUserData(state) {
      return state.userData;
    },
    getInquiry(state) {
      return state.inquiry;
    },
  },
});
