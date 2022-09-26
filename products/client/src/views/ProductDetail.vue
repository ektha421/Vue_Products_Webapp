<template>
  <main class="mt-3">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div :class="`carousel-item ${i === 0 ? 'active' : ''}`" :key="i" v-for="(pimg, i) in productImage">
      <img :src="pimg.path" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div class="col-md-7">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">{{productDetail.product_name}}</h5>
                        <h5 class="card-title py-3 border-top">{{gteCurrencyFormat(productDetail.product_price)}}원</h5>
                        <p class="card-text border-top pt-3">
                            <span class="badge bg-dark">{{productDetail.category1}}</span>
                            <span class="badge bg-dark mx-1">{{productDetail.category2}}</span>
                            <span class="badge bg-dark">{{productDetail.category3}}</span>
                        </p>
                        <p class="card-text">
                          배송비 {{gteCurrencyFormat(productDetail.delivery_price)}}원 | 도서산간(제주도) 배송비 추가 {{gteCurrencyFormat(productDetail.add_delivery_price)}}원 | 택배배송 | {{productDetail.outbound_days}}일 이내 출고(주말, 공휴일 제외)
                        </p>
                        <div class="card-text border-top pb-3">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="col-form-label">구매수량</label>
                                </div>
                                <div class="col-auto">
                                    <div class="input-group">
  <span class="input-group-text" style="cursor:pointer" @click="calcPrice(-1)">-</span>
  <input type="text" class="form-control" style="width:40px" v-model="total">
  <span class="input-group-text" style="cursor:pointer" @click="calcPrice(+1)">+</span>
</div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-3 border-top">
                            <div class="col-6 text-start">
                                <h5>총 상품 금액</h5>
                            </div>
                            <div class="col-6 text-end">
                                <h5>{{gteCurrencyFormat(totalPrice)}}원</h5>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="col-6 d-grid p-1">
                                  <button type="button" class="btn btn-lg btn-dark ">장바구니 담기</button>
                            </div>
                            <div class="col-6 d-grid p-1">
                                  <button type="button" class="btn btn-lg btn-danger">주문하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img class="img-fluid" :src="productDetail.path">
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
data(){
    return{
        productId: 0,
        productDetail:{},
        productImage:[],
        total: 1,
        totalPrice: 0,
    }
},
 created(){
    this.productId = this.$route.query.product_id;
    this.getProductDetail();
    this.getProductImage();
 },
 methods: {
    calcPrice(cnt){
        let total = this.total + cnt;
        if(total < 1) total = 1;
        this.total = total;
        this.totalPrice = this.productDetail.product_price * this.total
    },

    async getProductDetail(){
       let productDetail = await this.$api("/api/productDetail", {param:[this.productId]});

       if(productDetail.length > 0){
        this.productDetail = productDetail[0];
        this.totalPrice = this.productDetail.product_price * this.total;
       }
    },

    async getProductImage(){
       this.productImage = await this.$api("/api/productMainImages", {param:[this.productId]});
       console.log(this.productImage);
    },

    gteCurrencyFormat(price){
        return this.$currencyFormat(price);
    }
 } 
}
</script>