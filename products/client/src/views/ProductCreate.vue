<template>
  <main class="mt-3">
    <div class="container">
        <h2 class="text-center">제품 등록</h2>
         <div class="mb-3 row">
            <label class="col-md-3 col-form-label">제품명</label>
            <div class="col-md-9">
              <input type="text" class="form-control">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">가격</label>
            <div class="col-md-9">
              <div class="col-md-3 input-group">
                <input type="number" class="form-control">
                <span class="input-group-text">원</span>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">배송비</label>
            <div class="col-md-9">
              <div class="col-md-3 input-group">
                <input type="number" class="form-control">
                <span class="input-group-text">원</span>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">추가배송비(도서산간)</label>
            <div class="col-md-9">
              <div class="col-md-3 input-group">
                <input type="number" class="form-control">
                <span class="input-group-text">원</span>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">제품카테고리</label>
            <div class="col-md-9">
              <div class="row">
                <div class="col-auto">
                  <select class="form-select">
                    <option value="">전자제품</option>
                  </select>
                </div>
                <div class="col-auto">
                  <select class="form-select">
                    <option value="">컴퓨터</option>
                  </select>
                </div>
                <div class="col-auto">
                  <select class="form-select">
                    <option value="">악세사리</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">태그</label>
            <div class="col-md-9">
              <input type="text" class="form-control">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">출고일</label>
            <div class="col-md-9">
              <div class="col-md-3 input-group">
                <input type="number" class="form-control">
                <span class="input-group-text">일 이내 출고</span>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">썸네일 이미지</label>
            <div class="col-md-9">
              <div class="mb-3">
                <input class="form-control" type="file" accept="image/png,image/jpg">
                <div class="alert alert-secondary" role="alert">
                  <ul>
                    <li>이미지 사이즈: 350x350</li>
                    <li>파일 사이즈: 1MB 이하</li>
                    <li>파일 확장자: png, jpg만 가능</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">제품 이미지</label>
            <div class="col-md-9">
              <div class="mb-3">
                <input class="form-control" type="file" accept="image/png,image/jpg" multiple>
                <div class="alert alert-secondary" role="alert">
                  <ul>
                    <li>최대 5개 가능</li>
                    <li>이미지 사이즈: 700x700</li>
                    <li>파일 사이즈: 1MB 이하</li>
                    <li>파일 확장자: png, jpg만 가능</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">제품 설명 이미지</label>
            <div class="col-md-9">
              <div class="mb-3">
                <input class="form-control" type="file" accept="image/png,image/jpg" multiple>
                <div class="alert alert-secondary" role="alert">
                  <ul>
                    <li>파일 사이즈: 5MB 이하</li>
                    <li>파일 확장자: png, jpg만 가능</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="mb-3 row">
            <div class="col-6 d-grid p-1">
              <button type="button" class="btn btn-lg btn-dark ">취소하기</button>
            </div>
            <div class="col-6 d-grid p-1">
              <button type="button" class="btn btn-lg btn-danger">저장하기</button>
            </div>
        </div>
      </div>
</main>
</template>

<script>
export default {
    computed:{
    user(){
      return this.$store.state.user;
    }
  },
  mounted(){
    if(this.user.email == undefined){
        alert("로그인을 해야 이용할 수 있습니다.")
        this.$router.push({path:'/'});
    }
  }
}
</script>
