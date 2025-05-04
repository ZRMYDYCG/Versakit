<template>
  <div class="demo-container">
    <div class="demo-item">
      <h3>默认脱敏规则</h3>
      <p>
        手机号:
        <span v-desensitize="'phone'">13812345678</span>
      </p>
      <p>
        身份证:
        <span v-desensitize="'idCard'">110101199003077654</span>
      </p>
      <p>
        姓名:
        <span v-desensitize="'name'">张三</span>
      </p>
      <p>
        邮箱:
        <span v-desensitize="'email'">example@domain.com</span>
      </p>
    </div>

    <div class="demo-item">
      <h3>自定义脱敏规则</h3>
      <p>
        银行卡号:
        <span
          v-desensitize="{
            type: 'bankCard',
            rules: {
              bankCard: (str) => str.replace(/(\d{4})\d{8}(\d{4})/, '$1****$2'),
            },
          }"
        >
          6225888888888888
        </span>
      </p>
      <p>
        自定义姓名脱敏:
        <span
          v-desensitize="{
            type: 'customName',
            rules: {
              customName: (str) => str.replace(/(.).*(.)/, '$1*$2'),
            },
          }"
        >
          李四
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}
h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}
p {
  margin: 8px 0;
}
</style>
