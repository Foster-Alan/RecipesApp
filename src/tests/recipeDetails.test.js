import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

document.execCommand = jest.fn();
describe('Testando Profile', () => {
//   beforeEach(() => {
//     global.fetch = jest.fn(fetch);
//   });
  it('testando componentes na tela', async () => {
    const { history } = renderWithRouter(
      <App />,
    );
    act(() => {
      history.push('/meals');
    });
    // const bigMac = await screen.findByText('Big Mac');
    const bigMac = await screen.findByTestId('11-card-img');
    expect(bigMac).toBeInTheDocument();
    userEvent.click(bigMac);
    const RecipeDetails = screen.getByText('RecipeDetails');
    const photo = screen.getByTestId('recipe-photo');
    const recipetitle = screen.getByTestId('recipe-title');
    const ingredient = await screen.findByTestId('0-ingredient-name-and-measure');
    const video = screen.getByTestId('video');
    const instructions = screen.getByTestId('instructions');
    const shareBtn = screen.getByTestId('share-btn');
    const favorite = screen.getByTestId('favorite-btn');
    const start = screen.getByTestId('start-recipe-btn');

    expect(RecipeDetails).toBeInTheDocument();
    expect(photo).toBeInTheDocument();
    expect(ingredient).toBeInTheDocument();
    expect(recipetitle).toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect(shareBtn).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();

    userEvent.click(favorite);

    userEvent.click(start);

    const bigMacORetorno = await screen.findByText('Big Mac');
    const recipe2 = await screen.findByTestId('recipe-category');
    const finish = await screen.findByTestId('finish-recipe-btn');
    expect(bigMacORetorno).toBeInTheDocument();
    expect(recipe2).toBeInTheDocument();
    userEvent.click(favorite);
    userEvent.click(favorite);
    // const linkcopy = await screen.findByText('Link copied!');
    const checkbox1 = await screen.findByTestId('0-ingredient-step');
    const checkbox2 = await screen.findByTestId('1-ingredient-step');
    const checkbox3 = await screen.findByTestId('2-ingredient-step');
    const checkbox4 = await screen.findByTestId('3-ingredient-step');
    const checkbox5 = await screen.findByTestId('4-ingredient-step');
    const checkbox6 = await screen.findByTestId('5-ingredient-step');
    const checkbox7 = await screen.findByTestId('6-ingredient-step');
    const checkbox8 = await screen.findByTestId('7-ingredient-step');
    const checkbox9 = await screen.findByTestId('8-ingredient-step');
    const checkbox10 = await screen.findByTestId('9-ingredient-step');
    const checkbox11 = await screen.findByTestId('10-ingredient-step');
    const checkbox12 = await screen.findByTestId('11-ingredient-step');
    const checkbox13 = await screen.findByTestId('12-ingredient-step');
    const checkbox14 = await screen.findByTestId('13-ingredient-step');
    userEvent.click(checkbox1);
    userEvent.click(checkbox2);
    userEvent.click(checkbox3);
    userEvent.click(checkbox4);
    userEvent.click(checkbox5);
    userEvent.click(checkbox6);
    userEvent.click(checkbox7);
    userEvent.click(checkbox8);
    userEvent.click(checkbox9);
    userEvent.click(checkbox10);
    userEvent.click(checkbox11);
    userEvent.click(checkbox12);
    userEvent.click(checkbox13);
    userEvent.click(checkbox14);

    userEvent.click(finish);

    const done = await screen.findByText('Done Recipes');
    expect(done).toBeInTheDocument();

    // const shareBtn = screen.getByTestId('share-btn');
    // const favorite = screen.getByTestId('favorite-btn');
    // const start = screen.getByTestId('start-recipe-btn');
  });
});
