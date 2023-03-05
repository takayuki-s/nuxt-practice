<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-14 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h2 class="text-2xl font-semibold text-gray-900">お問い合わせ</h2>
          <p class="mt-4 text-sm">
            下記の内容で送信してもよろしいでしょうか？よろしければ、一番下の「送信」ボタンをクリックしてください。
          </p>
          <table class="block mt-4 pt-0.5 px-6 bg-white">
            <tr
              v-for="(item, index) in contactInfo"
              class="block py-4 text-sm"
              :class="[index == 0 ? 'border-0' : 'border-t']"
              :key="item.heading"
            >
              <th class="w-80 text-gray-700 font-medium text-left align-top">
                {{ item.heading }}
              </th>
              <td class="text-sm text-gray-700">
                {{ item.content }}
              </td>
            </tr>
          </table>
          <ul class="flex mt-4 mb-16">
            <li class="w-2/4 pr-3">
              <button
                @click="$router.go(-1)"
                class="bg-gray-300 rounded-md text-white text-center text-sm leading-9 w-full"
              >
                戻る
              </button>
            </li>
            <li class="w-2/4 pl-3">
              <button
                v-if="inquiry"
                to="/contact/complete"
                class="block bg-pink rounded-md text-white text-center text-sm leading-9 w-full"
                @click="sendMail"
              >
                送信
              </button>
              <button
                v-else
                class="block bg-pink-200 rounded-md text-white text-center text-sm leading-9 w-full cursor-not-allowed"
              >
                送信
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useContactStore } from "~/store/contact";

const router = useRouter();
const store = useContactStore();

definePageMeta({
  layout: "default-template",
});

const contactInfo = ref([]);
const inquiry = ref("");

const userData = computed(() => {
  return store.getUserData;
});

const setContactInfo = () => {
  contactInfo.value = [
    { heading: "会社名", content: userData.value.user_entered_company_name },
    {
      heading: "お名前",
      content: `${userData.value.name_sei} ${userData.value.name_mei}`,
    },
    {
      heading: "お名前(フリガナ)",
      content: `${userData.value.name_sei_kana} ${userData.value.name_mei_kana}`,
    },
    { heading: "郵便番号", content: `〒${userData.value.zip_code}` },
    {
      heading: "住所",
      content: `${userData.value.address1} ${userData.value.address2}`,
    },
    { heading: "電話番号", content: userData.value.tel },
    { heading: "メールアドレス", content: userData.value.email },
    {
      heading: "お問い合わせ内容",
      content: inquiry.value,
      isRequired: true,
      isInquiry: true,
    },
  ];
};

const sendMail = () => {
  store
    .sendMail(inquiry.value)
    .then(() => {
      router.push("/contact/complete");
    })
    .catch((error) => {
      console.log(error);
      alert("メール送信に失敗しました。もう一度お試しください。");
    });
};

onMounted(async () => {
  await store.fetchUserData();
  inquiry.value = store.getInquiry;
  setContactInfo();
});
</script>

<style lang="scss" scoped>
.nav_title {
  position: relative;
}
</style>
