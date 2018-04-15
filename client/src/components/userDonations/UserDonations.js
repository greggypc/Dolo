import React from 'react';
import DonationList from './DonationList';
import DonationListItem from './DonationListItem';
import DonationContainer from './DonationContainer';


class UserDonations extends React.Component {
  
  render() {
    return (
      <div>
        <DonationContainer>
        <DonationList>
          <DonationListItem>

          </DonationListItem>
        </DonationList>
        </DonationContainer>
      </div>
        
    );
  }
}

export default UserDonations;