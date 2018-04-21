import axios from 'axios';

export default {
  // Gets all donations for specific item_categoryID
  getDonationsByCategory: function(item_categoryID) {
    return axios.get("/api/searchDonations/item_categoryID/" + item_categoryID);
  }
};