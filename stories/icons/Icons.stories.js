import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import StoryContainer from '../storyHelpers/StoryContainer';

import * as icons from '@sparkpost/matchbox-icons';
import { IconBase } from '@sparkpost/matchbox-icons/IconBase';
const Assessment = icons.Assessment;

storiesOf('Icons|matchbox-icons', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('single icon', withInfo({ propTables: [IconBase], propTablesExclude: [Assessment] })(() => (
    <Assessment size={50} />
  )))

  .add('all icons', () => {
    const renderIcons = Object.keys(icons).map((name, i) => {
      const Icon = icons[name];

      return (
        <span style={{ display: 'inline-block', width: '220px', margin: '30px 0', textAlign: 'center'}}>
          <Icon size={50} />
          <p>{'<'}{ name } {'/>'}</p>
        </span>
      )
    });

    return <div>{ renderIcons }</div>;
  });
