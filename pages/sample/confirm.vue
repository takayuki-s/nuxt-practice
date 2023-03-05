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
              <nuxt-link
                to="/contact/complete"
                class="block bg-pink rounded-md text-white text-center text-sm leading-9 w-full"
                >送信</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default-template",
});

const contactInfo = [
  { heading: "会社名", content: "test corporation" },
  { heading: "お名前", content: "test name" },
  { heading: "お名前(フリガナ)", content: "test name kana" },
  { heading: "郵便番号", content: "〒1231234" },
  { heading: "住所", content: "test address" },
  { heading: "電話番号", content: "090-1234-1234" },
  { heading: "メールアドレス", content: "test@test.com" },
  {
    heading: "お問い合わせ内容",
    content: "",
    isRequired: true,
    isInquiry: true,
  },
];
</script>

<style lang="scss" scoped>
.nav_title {
  position: relative;
}
</style>
