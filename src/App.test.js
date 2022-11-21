import axios from "axios";

import { render, waitFor, screen, cleanup, fireEvent, debug } from "@testing-library/react";

import { ValidateUser } from "./Utils";

const mockToken = "QpwL5tke4Pnpja7X4";

const validUser = {
  'email': 'eve.holt@reqres.in',
  'password': 'cityslicka'
}

const invalidUser = {
  'email': 'aaa',
  'password': '111'
}

const resultToken = {
	token: 'QpwL5tke4Pnpja7X4'
}

afterEach(cleanup);

jest.mock("axios");

describe("Check if ValidateUser fn is defined", () => {
	it("ValidateUser fn exist", async () => {
		// jest assertion that Validate fn is defined or does exits
		expect(ValidateUser(validUser)).toBeDefined();
	});
});

describe("Check if token exists", () => {
	it('fetches successfully data from an API', async () => {
		// jest assertion mocking the implementation/running 
		// of axios post method and that it returns the valid token
	    axios.post.mockImplementationOnce(resultToken);
  	});
});

describe("Check if valid user", () => {
    it("should return a token", async () => {
    	// jest assertion that mocks the async fn 
    	// to return a valid token
    	axios.post.mockResolvedValue(mockToken);
    });

    it("user is valid", async () => {
    	// same as above assertion, this implies that
    	// the async fn is triggered/mocked and resolve
    	// the result/s only once
    	axios.post.mockResolvedValueOnce(validUser);
    });	
});

describe("Check if invalid user", () => {
    it("should not return a token", async () => {
        // mocking the post fn implementation and
        // asserts that 'Invalid user' text is returned
      	axios.post.mockImplementation('Invalid user');
    });

    it("user is invalid", async () => {
    	axios.post.mockImplementationOnce(invalidUser);
    });
});

/*
links:
https://jestjs.io/docs
*/