import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Chip from 'react-toolbox/lib/chip';

const Endorsement = ({ endorsement }) => (
  <Card style={{ width: '100%', display: 'inline-block' }} >
    <CardTitle
      avatar={endorsement.endorserImg}
      title={endorsement.endorserUsername}
    />

    <CardTitle title={endorsement.title} />
    <CardText>{endorsement.comments}</CardText>
    <div>
      {endorsement.skills.map((s, k) => (
        <Chip key={+k + 1} style={{ display: 'inline-block' }}>{s}</Chip>
      ))}
    </div>
  </Card>
);

Endorsement.propTypes = {
  endorsement: PropTypes.shape({
    endorserUsername: PropTypes.string.isRequired,
    endorserImg: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Endorsement;
