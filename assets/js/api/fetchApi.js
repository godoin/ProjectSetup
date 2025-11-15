import { UserResponse } from "./models.js";

/**
 * fetchApi.js
 * FetchAPI class for making HTTP requests with standardized responses
 */
export class FetchAPI {

	/**
     * Returns a new instance of FetchAPI
     * @param {string} [baseUrl=""] - Base URL for all requests
	 * @returns {FetchAPI} Instance with default headers configured
	 */
	constructor(
        baseUrl = ""
    ) {
		this.baseUrl = baseUrl;
		this.headers = {
			"Content-Type": "application/json",
		};
	}

	/**
	 * Returns the response of a fetch request
	 * @param {*} param0 
	 * @returns {Promise<Object>} Standardized success or error response from UserResponse
	 */
	async request({ 
        method = "GET", 
        endpoint = "", 
        params = {}, 
        body = null 
    }) {
		try {
			let url = new URL(this.baseUrl + endpoint);
			if (params && Object.keys(params).length) {
				Object.keys(params).forEach((key) =>
					url.searchParams.append(key, params[key])
				);
			}

			const response = await fetch(url, {
				method,
				headers: this.headers,
				body: body ? JSON.stringify(body) : null,
			});

			const data = await response.json();
			if (!response.ok) {
				return UserResponse.error({
					message: data.message || "Request failed",
					code: response.status,
					response: data,
				});
			}

			return UserResponse.success({
				message: "Request succeeded",
				response: data,
			});
		} catch (err) {
			return UserResponse.error({ 
				message: 
				err.message 
			});
		}
	}

	/**
	 * Returns the response of a GET request
	 * @param {*} endpoint 
	 * @param {*} params 
	 * @returns {Promise<Object>} Standardized success or error response
	 */
	async get(
		endpoint, 
		params = {}
	) {
		return this.request({ 
			method: "GET", 
			endpoint, 
			params 
		});
	}

	/**
	 * Returns the response of a POST request
	 * @param {*} endpoint 
	 * @param {*} body 
	 * @returns {Promise<Object>} Standardized success or error response
	 */
	async post(
		endpoint, 
		body = {}
	) {
		return this.request({ 
			method: "POST", 
			endpoint, 
			body 
		});
	}

	/**
	 * Returns the response of a PUT request
	 * @param {*} endpoint 
	 * @param {*} body 
	 * @returns {Promise<Object>} Standardized success or error response
	 */
	async put(
		endpoint, 
		body = {}
	) {
		return this.request({ 
			method: "PUT", 
			endpoint, 
			body 
		});
	}

	/**
	 * Returns the response of a DELETE request
	 * @param {*} endpoint 
	 * @param {*} params 
	 * @returns {Promise<Object>} Standardized success or error response
	 */
	async delete(
		endpoint, 
		params = {}
	) {
		return this.request({ 
			method: 
			"DELETE", 
			endpoint, 
			params 
		});
	}
}
