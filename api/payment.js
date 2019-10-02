const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

stripe.charges.retrieve("ch_1FOxdH2eZvKYlo2C3Rs5MDER", {
  api_key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
});
