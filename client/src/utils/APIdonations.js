import axios from 'axios';

export default {
  // Gets all donations for specific user
  getDonations: function(uid) {
    return axios.get("/api/donations/" + uid);
  },
  // Gets a donation with the given id to later update
  getDonation: function(id) {
    return axios.get("/api/donations/" + id);
  },
  // Update (POST) edited donation
  updateDonation: id => {
    return axios.update("api/donations/" + id);
  },
  // Saves a donation to the database
  saveDonation: function(donationData) {
    return axios.post("/api/donations", donationData);
  },
    // Deletes a donation with the given id
    deleteDonation: function(id) {
      return axios.delete("/api/donations/" + id);
    }
};