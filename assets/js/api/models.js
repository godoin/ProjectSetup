/**
 * models.js
 * UserResponse class for handling API responses
 */
export class UserResponse {

	/**
	 * Returns a standardized success response object
	 * @param {*} param0 
	 * @returns 
	 */
	static success({
		message,
		title = "Success",
		response = "N/A",
		code = 200,
	} = {}) {
		return { 
			success: true, 
			title, 
			message, 
			code, 
			response 
		};
	}


	/**
	 * Returns a standardized error response object
	 * @param {*} param0 
	 * @returns 
	 */
	static error({
		message,
		title = "Error",
		response = "N/A",
		code = "N/A",
	} = {}) {
		return { 
			success: false, 
			title, 
			message, 
			code, 
			response 
		};
	}
}
