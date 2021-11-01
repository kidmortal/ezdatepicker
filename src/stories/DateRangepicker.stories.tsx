import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateRangePicker } from '../DateRangePicker';

const Container = styled.div``;

const View = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: lightgray;
`;

export default {
  title: 'Kidmortal/Datepicker',
  component: DateRangePicker,
  argTypes: {},
} as ComponentMeta<typeof DateRangePicker>;

const Template: ComponentStory<typeof DateRangePicker> = (args) => {
  const [first, setFirst] = useState<any>(undefined);
  const [last, setLast] = useState<any>(undefined);
  const [visible, setVisible] = useState(true);
  const startDate = new Date();
  const limitDate = new Date('5-01-2022');
  function FormatDate(date: Date) {
    return date
      ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      : '';
  }
  return (
    <div>
      <input
        readOnly
        value={FormatDate(first)}
        onClick={() => {
          setVisible(true);
        }}
      />
      <input
        readOnly
        value={FormatDate(last)}
        onClick={() => {
          setVisible(true);
        }}
      />
      <DateRangePicker
        first={first}
        last={last}
        startDate={startDate}
        limitDate={limitDate}
        onFirstDateSelected={(date) => setFirst(date)}
        onLastDateSelected={(date) => setLast(date)}
        onRequestClose={() => setVisible(false)}
        onSelectionComplete={() => setVisible(false)}
        visible={visible}
        multiple={args.multiple}
        weekdaysName={args.weekdaysName}
        monthsName={args.monthsName}
        customStyles={args.customStyles}
      />
    </div>
  );
};

export const SingleCalendar = Template.bind({});
SingleCalendar.args = {
  multiple: false,
};
export const MultpleCalendar = Template.bind({});
MultpleCalendar.args = {
  multiple: true,
};
export const CustomCalendar = Template.bind({});
CustomCalendar.args = {
  multiple: true,
  weekdaysName: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
  monthsName: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  customStyles: {
    HeaderContainer: {
      backgroundColor: '#e63ecfcf',
    },
    HeaderYear: {
      color: '#4bee36dd',
    },
    ColorPallet: {
      backgroundColor: {
        firstSelected: '#4bee36dd',
        lastSelected: '#e63ecfcf',
        between: '#ee367344',
      },
    },
  },
};
