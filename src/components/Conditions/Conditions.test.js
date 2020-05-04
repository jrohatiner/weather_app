import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Conditions from './Conditions';

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

it("renders temp", () => {
	act(() => {
		render(<Conditions />, container);
	});
	expect(container.textContent).toBe("");

	act(() => {
		render(<Conditions name="city" />, container);
	});
	expect(container.textContent).toBe("");

});
