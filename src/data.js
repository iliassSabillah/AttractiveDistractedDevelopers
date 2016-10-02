let data = {
  about: {
    store_name: 'ADD',
    store_slogan: "Welcome to ADD, Home of the Attractive Distracted Coder's Store",
    store_address: '123 Main Street, New York, NY',
    store_email: 'add@gmail.com',
    store_phone: '555-555-0000'
  },
  products: {
    product1: [{name:'Product1', price: 1.99}, {name:'Product1a', price: 2.99}, {name:'Product1b', price: 3.99}],
    product2: [{name:'Product2', price: 1.99}, {name:'Product2a', price: 2.99}, {name:'Product2b', price: 3.99}, {name: 'Product2c', price: 3.99}],
    product3: [{name:'Product3', price: 1.99}, {name:'Product3a', price: 2.99}, {name:'Product3b', price: 3.99}],
    product4: [{name:'Product4', price: 4.99}],
    product5: [{name:'Product5', price: 5.99},{name:'Product5a', price: 5.99}]
  },
  images: ['http://rlv.zcache.com/coder_in_training_t_shirt-rccbe5f0682394bdfac3c97fbfcc95315_jgosd_324.jpg', 'http://rlv.zcache.co.nz/born_to_code_onesey_rompers-rba221cca0e6a4280b979b9c7f36623c9_jfhfi_324.jpg','http://rlv.zcache.com/web_design_programmer_html_geek_head_hat-r9eed763f1c254a75b8df90060c2e8c13_j29re_324.jpg?rlvnet=1']
};

data.getproduct = function() {
  return this.products;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

export default data;
