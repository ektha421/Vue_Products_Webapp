module.exports = {
    productList: {
        query: `SELECT t1.*, t2.path, t3.category1, t3.category2, t3.category3 
FROM products_db.t_products t1, products_db.t_image t2, products_db.t_category t3
where t1.id = t2.product_id and t2.type = 1 and t1.category_id = t3.id`
    },
     productList2: {
    query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2, t2.category3 
      from products_db.t_products t1, products_db.t_category t2
      where t1.category_id = t2.id) t3
      left join (select * from products_db.t_image where type=1) t4
      on t3.id = t4.product_id`
  },
    productDetail: {
        query:`SELECT t1.*, t2.path, t3.category1, t3.category2, t3.category3 
FROM products_db.t_products t1, products_db.t_image t2, products_db.t_category t3
where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id;`
    },
    productMainImages: {
        query:`SELECT * FROM products_db.t_image where product_id = ? and type =2;`
    },
    productInsert: {
        query:`insert into products_db.t_products (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
values(?,?,?,?,?,?,?,?);`
    },
    productImageInsert: {
        query:`insert into products_db.t_image (product_id, type, path)
        values(?,?,?);`
    },
    sellerList: {
        query: 'select * from products_db.t_seller'
    },
    signUp: {
        query:`insert into products_db.t_user set ? on duplicate key update ?`
    },
    productDelete:{
          query:`delete from products_db.t_products where id = ?`
    }
}