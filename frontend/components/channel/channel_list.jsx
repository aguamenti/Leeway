import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {

  visibleChannels() {
    const usersChannels = this.props.channels.map( (channel, idx) => {
      return <ChannelListItem channel={channel} key={idx} />;
    });

    return usersChannels;
  }

  newChannel() {
    
  }

  render() {
    return (
      <div className="channel-sidebar">
        <h2 onClick={this.newChannel}>Channels</h2>
        <div className="channel-ul">
          <ul>
            {this.visibleChannels()}
          </ul>
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  channels: Object.values(state.entities.channels)
});

export default connect(mapStateToProps)(ChannelList);
