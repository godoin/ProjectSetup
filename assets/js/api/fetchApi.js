// fetchApi.js

import { UserResponse } from "./models.js";

export class FetchAPI {
	constructor(
        baseUrl = ""
    ) {
		this.baseUrl = baseUrl;
		this.headers = {
			"Content-Type": "application/json",
		};
	}

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
			return UserResponse.error({ message: err.message });
		}
	}

	async get(endpoint, params = {}) {
		return this.request({ method: "GET", endpoint, params });
	}

	async post(endpoint, body = {}) {
		return this.request({ method: "POST", endpoint, body });
	}

	async put(endpoint, body = {}) {
		return this.request({ method: "PUT", endpoint, body });
	}

	async delete(endpoint, params = {}) {
		return this.request({ method: "DELETE", endpoint, params });
	}
}
