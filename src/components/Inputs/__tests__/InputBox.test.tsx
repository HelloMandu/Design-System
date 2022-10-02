import { fireEvent, render } from '@tests/test-utils';

import InputBox from '@components/Inputs/InputBox';

describe('Input Box', () => {
  it('onChange로 value 값이 바뀐다.', () => {
    const INPUT_TEST = 'Input Test';
    const onChange = jest.fn();

    const { getByRole } = render(<InputBox onChange={onChange} />);

    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: INPUT_TEST } });

    if (input instanceof HTMLInputElement) {
      expect(input.value).toBe(INPUT_TEST);
    }
  });
});