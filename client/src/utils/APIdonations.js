import axios from 'axios';

export default {
  // Gets all donations for specific user
  getDonations: function(uid) {
    return axios.get("/api/donations/uid/" + uid);
  },
  // Gets a donation with the given id to later update
  getDonation: function(id) {
    return axios.get("/api/donations/id/" + id);
  },
  // Update (POST) edited donation
  updateDonation: donationData => {
    return axios.put("api/donations/", donationData);
  },
  // Saves a donation to the database
  saveDonation: function(donationData) {
    return axios.post("/api/donations/", donationData);
  },
  // Deletes a donation with the given id
  deleteDonation: function(id) {
    return axios.delete("/api/donations/id/" + id);
  }
};