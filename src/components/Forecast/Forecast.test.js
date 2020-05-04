import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Forecast from './Forecast';

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("renders temp of city", () => {
	act(() => {
		render(<Forecast />, container);
	});
	expect(container.textContent).toBe("Current Weather Conditions By CityFahrenheitCelciusGet Forecast");

	act(() => {
		render(<Forecast text="city" />, container);
	});
	expect(container.textContent).toBe("Current Weather Conditions By CityFahrenheitCelciusGet Forecast");

	act(() => {
		render(<Forecast text="description" />, container);
	});
	expect(container.textContent).toBe("Current Weather Conditions By CityFahrenheitCelciusGet Forecast");

});
