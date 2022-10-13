import { renderWithTheme } from '@src/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Image from '.';

describe('<Image />', () => {
  it('Should render correctly', () => {
    renderWithTheme(
      <Image
        src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        alt="image of Octocat mascot of github"
      />
    );

    expect(
      screen.getByRole('img', { name: /image of Octocat mascot of github/i })
    );
  });
});
