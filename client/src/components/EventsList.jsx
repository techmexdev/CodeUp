import React from 'react';
import PropTypes from 'prop-types';
import Card from 'grommet/components/Card';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Timestamp from 'grommet/components/Timestamp';
import PinIcon from 'grommet/components/icons/base/Pin';
import Spinning from 'grommet/components/icons/Spinning';

const EventsList = ({
  events,
  status,
  isAuthenticated,
  errMessage,
  updateEvent,
  displayEditEventForm
}) => (
  <div>
    {status === 'LOADING' && <p className="loading">Loading ...<Spinning /></p>}
    {status === 'ERROR' && <p className="error">Error loading or posting events ... {errMessage}</p>}
    {
      <Tiles fill flush={false}>
        {events.map(evt =>
          (<Tile key={evt._id} align={'start'}>
            <Card
              heading={evt.title}
              label={evt.username && evt.private ?
                <div>
                  <span><strong>*Private</strong> created by <Anchor href="#" path={`/profile/${evt.username}`}>{evt.username}</Anchor></span>
                </div> :
                <span>Created by <Anchor href="#" path={`/profile/${evt.username}`}>{evt.username}</Anchor></span>
              }
              description={
                <Accordion>
                  <AccordionPanel heading={<Timestamp value={evt.date} /> || 'No date provided'}>
                    <Paragraph>
                      {evt.description || 'No description provided for this event'}
                      <br />
                      {evt.topics ? evt.topics.join(', ') : 'No topics provided for this event'}
                      <br />
                      <br />
                      {evt.private ? '*Please contact event creator for location' : evt.location || 'No location provided for this event'}
                      <br />
                      {evt.duration || 'No duration provided for this event'}
                      <br />
                      <PinIcon />
                      {`  Pinned by ${evt.pinned.length}`}
                    </Paragraph>
                  </AccordionPanel>
                </Accordion>}
              link={evt.username === isAuthenticated ?
                <Anchor
                  onClick={() => displayEditEventForm(evt)}
                  label={'Edit/Delete this event'}
                /> :
                (
                  <span>
                    {JSON.stringify(evt.pinned).includes(isAuthenticated) ?
                      (<span><PinIcon colorIndex={'neutral-2-a'} /> <strong> Pinned</strong></span>)
                      : <Anchor
                        icon={<PinIcon />}
                        onClick={(e) => {
                          e.preventDefault();
                          updateEvent({ id: evt._id, toUpdate: [{ typeUpdate: 'pinned', data: isAuthenticated }] });
                        }}
                        label={'Pin this event'}
                      />
                  }
                  </span>
                )
              }
            />
          </Tile>)
        )}
      </Tiles>
    }
  </div>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.string.isRequired,
  updateEvent: PropTypes.func.isRequired,
  displayEditEventForm: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.string.isRequired,
  errMessage: PropTypes.string,
};

EventsList.defaultProps = {
  errMessage: PropTypes.string,
};

export default EventsList;
