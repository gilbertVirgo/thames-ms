import axios from "axios";

const root = "http://localhost:8000/api";

const isJWTExpired = (token) =>
	JSON.parse(atob(token.split(".")[1])).exp * 1000 < Date.now();

const request = async ({ endpoint, method, data }) => {
	const token = localStorage.getItem("google_auth_token");

	if (isJWTExpired(token) && window.location.pathname !== "/login") {
		window.location.href = "/login";
		throw new Error("JWT Expired");
	}

	try {
		const res = await axios({
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method,
			url: `${root}/${endpoint}`,
			data,
		});

		if (res.data) return res.data;
	} catch (err) {
		if (!err.hasOwnProperty("response")) throw new Error(err.toString());
		else throw new Error(err.response.data.content);
	}
};

export default {
	get: (endpoint) => request({ endpoint, method: "GET" }),
	update: (endpoint, data) => request({ endpoint, data, method: "PATCH" }),
	create: (endpoint, data) => request({ endpoint, data, method: "PUT" }),
};
