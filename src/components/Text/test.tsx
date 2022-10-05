import { render, screen } from '@testing-library/react';

import Text from '.';

describe('<Text />', () => {
  it('should render the text', () => {
    render(<Text tag="h1">React avançado</Text>);
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
});
