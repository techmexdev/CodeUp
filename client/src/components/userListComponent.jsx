import React from 'react';
import PropTypes from 'prop-types';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Anchor from 'grommet/components/Anchor';
import CliIcon from 'grommet/components/icons/base/Cli';
import Status from 'grommet/components/icons/Status';

const imgStyle = {
  float: 'left',
  height: '80px',
  width: '80px',
};
const headerStyle = {
  marginLeft: '90px',
};
const UserList = ({ users }) => (
  <Tiles fill flush={false}>
    {users.map((user, key) =>
      (<Tile key={user._id + +key} align={'start'}>
        <Card
          label={<Anchor
            href="#"
            path={`/profile/${user.username}`}
          ><img alt="Profilepic" src={`${user.img}`} style={imgStyle} />
            <p style={headerStyle}>{user.username}</p><br />
            <p style={headerStyle}>{user.location.length > 0 ? user.location.join(', ') : 'Not Specified'}</p></Anchor>}
          contentPad="none"
          link={user.status === 'Unavailable' ? (<span> <Status value="critical" />Unavailable</span>)
                : (<span> {user.status === 'Available' ? <Status value="ok" />
                : <CliIcon colorIndex={user.status ? 'accent-3' : 'critical'} />}{user.status || '  offline'}</span>)}
          heading={user.skills.join(' | ') || '(╯°□°）╯︵ ┻━┻'}
          description={
            <span>
              {`- ${user.desired.join('  |  ') || 'Does not desire to learn anything ¯\\_(ツ)_/¯'}`}<br />
              {`- ${user.bio ? user.bio : 'Sorry, my bio is imaginary.  Try rotating your computer 90 degrees and try again'}`}
            </span>
          }
        />
      </Tile>)
    )}
  </Tiles>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
