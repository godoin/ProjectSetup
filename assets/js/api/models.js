// models.js

export class UserResponse {
	static success({
		message,
		title = "Success",
		response = "N/A",
		code = 200,
	} = {}) {
		return { success: true, title, message, code, response };
	}

	static error({
		message,
		title = "Error",
		response = "N/A",
		code = "N/A",
	} = {}) {
		return { success: false, title, message, code, response };
	}
}
