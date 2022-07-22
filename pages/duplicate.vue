<template>
  <div>
    <p>通常</p>
    <ul>
      <li  v-for="data in dataArray" :key="data.id">
        {{ data }}
      </li>
    </ul>
    <p>重複削除</p>
    <ul>
      <li  v-for="data in duplicateData(dataArray)" :key="data.id">
        {{ data }}
      </li>
    </ul>
    <p>lodashを使った重複削除</p>
    <ul>
      <li  v-for="data in duplicateDataByLodash(dataArray)" :key="data.id">
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data: function() {
    return {
      dataArray: [
      {id: 1, name: "test1", code: 1},
      {id: 2, name: "test2", code: 2},
      {id: 3, name: "test3", code: 3},
      {id: 4, name: "test4", code: 1},
      {id: 5, name: "test5", code: 5},
      ]
    }
  },
  methods: {
    duplicateData(dataArray) {
      const result = dataArray.filter(function (data, index, self) {
        const bookList = self.map((data) => data.code);
        if (bookList.indexOf(data.code) === index) {
          return data;
        }
      })
      return result
    },
    duplicateDataByLodash(dataArray) {
      const result = _.unionBy(dataArray, 'code');
      return result
    },
  }
}
</script>