import axios from 'axios';

export default {
  // Gets all Needs for specific user
  getNeeds: function(uid) {
    return axios.get("/api/needs/" + uid);
  },
  // Gets a Need with the given id
  getNeed: function(id) {
    return axios.get("/api/needs/" + id);
  },
  // Gets a Need with the given id 
  editNeed: function(id) {
    return axios.put("/api/needs/" + id);
  },
  // Deletes a Need with the given id
  deleteNeed: function(id) {
    return axios.delete("/api/needs/" + id);
  },
  // Saves a Need to the database
  saveNeed: function(NeedData) {
    return axios.post("/api/needs", NeedData);
  }
};