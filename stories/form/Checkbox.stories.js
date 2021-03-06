import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { Checkbox, UnstyledLink } from '@sparkpost/matchbox';

export default storiesOf('Form|Checkbox', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))

  .add('Basic Checkbox', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
     />
  )))

  .add('Without Label', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      labelHidden
      checked='indeterminate'
     />
  )))

  .add('With JSX in Label', withInfo()(() => (
    <Checkbox
      id='id'
      label={<span>I agree to SparkPost's <UnstyledLink>Terms of Use</UnstyledLink></span>}
     />
  )))

  .add('Disabled', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      disabled
     />
  )))

  .add('With help text', withInfo()(() => (
    <Checkbox
      id='id'
      label='Check Me'
      helpText='Check this box'
     />
  )))

  .add('Group', withInfo('This component only styles its children with correct spacing.')(() => (
    <div>
      <Checkbox
        id='id'
        label='Parent'
      />
      <Checkbox.Group>
        <Checkbox
          id='id2'
          label='Check Me' />
        <Checkbox
          id='id3'
          label='Check Me' />
        <Checkbox
          id='id4'
          label='Check Me' />
      </Checkbox.Group>
    </div>
  )))

  .add('Group with label', withInfo()(() => (
    <div>
      <Checkbox.Group label="Example">
        <Checkbox
          id='id2'
          label='Check Me' />
        <Checkbox
          id='id3'
          label='Check Me' />
        <Checkbox
          id='id4'
          label='Check Me' />
      </Checkbox.Group>
    </div>
  )));
