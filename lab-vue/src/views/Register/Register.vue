<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <div class="card">
          <div class="card-header bg-gradient">
            <h3>Đăng kí tài khoản</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input
                  v-model="user.name"
                  type="text"
                  placeholder="Tên"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.email"
                  type="text"
                  placeholder="Email"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  type="password"
                  placeholder="Mật khẩu"
                  class="form-control"
                />
              </div>

              <div class="mb-2 d-flex justify-content-end">
                <input type="submit" class="btn btn-success" value="Đăng kí" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js">
</script>

<style src="./Register.css">
</style>