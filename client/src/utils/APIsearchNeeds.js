import axios from 'axios';

export default {
  // Gets all needs for specific item_categoryID
  getNeeds: function(item_categoryID) {
    return axios.get("/api/needs/" + item_categoryID);
  }
};