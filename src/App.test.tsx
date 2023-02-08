import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from './App';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/1/', (req, res, ctx) => {
    return res(ctx.json({name: 'Luke Skywalker'}));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Check if first person is Luke Skywalker', async () => {
  render(<App />);
  let name =await screen.findByText('Luke Skywalker')
  expect(name).toBeInTheDocument();
});

