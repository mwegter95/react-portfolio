import { render, screen, cleanup } from '@testing-library/react';
import ProjectList from '../index.js';

test('should render ProjectList component', () => {
    render(<ProjectList/>);
    const projectListElement = screen.getByTestId('projectList-1');
    expect(projectListElement).toBeInTheDocument();
});