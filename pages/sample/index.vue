<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-14">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <h2 class="text-2xl font-semibold text-gray-900">お問い合わせ</h2>
          <p class="mt-4 text-sm">
            下記項目にご入力ください。「必須」印は入力必須項目です。<br />内容によっては回答をさしあげるのにお時間をいただくこともございます。また、休業日は翌営業日以降の対応となりますのでご了承ください。
          </p>
          <table class="block px-6 mt-4 bg-white rounded-lg">
            <tr
              v-for="(item, index) in contactInfo"
              class="block py-4"
              :class="[index == 0 ? 'border-0' : 'border-t']"
              :key="item.heading"
            >
              <th
                v-if="item.isRequired"
                class="w-full font-medium text-left text-gray-700"
              >
                {{ item.heading }}
                <span
                  class="inline-block ml-2 text-xs leading-5 text-center text-red-800 bg-red-100 rounded w-14"
                  >必須</span
                >
              </th>
              <th v-else class="font-medium text-left text-gray-700 w-80">
                {{ item.heading }}
              </th>
              <td v-if="item.isInquiry" class="block w-full text-gray-700">
                <textarea
                  class="h-28 w-full mt-3.5 py-2 px-3 border-gray-300 rounded-md border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-transparent"
                  placeholder="お問い合わせ内容"
                ></textarea>
              </td>
              <td v-else class="w-3/4 text-gray-700">
                {{ item.content }}
              </td>
            </tr>
          </table>
          <ul class="flex mt-4 mb-16">
            <li class="w-2/4 pr-3">
              <button
                @click="$router.go(-1)"
                class="w-full text-sm leading-9 text-center text-white bg-gray-300 rounded-md"
              >
                戻る
              </button>
            </li>
            <li class="w-2/4 pl-3">
              <nuxt-link
                to="/contact/confirm"
                class="block w-full text-sm leading-9 text-center text-white rounded-md bg-pink"
                >確認ページへ</nuxt-link
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
