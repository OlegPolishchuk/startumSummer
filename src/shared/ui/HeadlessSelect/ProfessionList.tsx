import { Listbox } from '@headlessui/react';

interface Option {
  id: number;
  title: string;
}

interface Props {
  options: Option[];
}
export const ProfessionList = ({ options }: Props) => {
  console.log(options);

  return (
    <Listbox onChange={() => {}}>
      <Listbox.Button data-elem="industry-select">Выберете отрасль</Listbox.Button>
      <Listbox.Options>
        {options.map(option => (
          <Listbox.Option key={option.id} value={option.title}>
            {option.title && option.title}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
