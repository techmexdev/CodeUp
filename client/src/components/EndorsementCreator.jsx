import React from 'react';
import PropTypes from 'prop-types';
import Section from 'grommet/components/Section';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormField from 'grommet/components/FormField';
import Checkbox from 'grommet/components/CheckBox';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const EndorsementCreator = props => (
  <Section>
    <Layer closer onClose={props.closeEC}>
      <Form>
        <Header>
          <Heading>
            Endorse
          </Heading>
        </Header>
        {
          props.skillsToEndorse.map(skill => (
            <FormField>
              <Checkbox label={skill} onChange={() => props.toggleSkill(skill)} />
            </FormField>
          ))
        }
        <FormField label="Comments">
          <TextInput onDOMChange={e => props.writeComment(e.target.value)} />
        </FormField>
        <Footer pad={{ vertical: 'medium' }}>
          <Button
            primary
            label="Submit"
            type="button"
            onClick={() => props.sendEndorsement()}
          />
        </Footer>
      </Form>
    </Layer>
  </Section>
);

EndorsementCreator.propTypes = {
  closeEC: PropTypes.func.isRequired,
  skillsToEndorse: PropTypes.isRequired,
  toggleSkill: PropTypes.func.isRequired,
  writeComment: PropTypes.func.isRequired,
  sendEndorsement: PropTypes.func.isRequired,
};

export default EndorsementCreator;
