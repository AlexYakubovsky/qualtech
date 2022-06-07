module.exports = {
	apps: [{
		//general
		name: "qualtech",
		script: "npm",
		args: "run start",

		//advanced features
		instances: 2,
		exec_mode: "cluster",
		watch: false,
		max_memory_restart: "1G",

		//control flow
		listen_timeout: 5000,
		max_restarts: 50,
		autorestart: true,
		env: {
			PORT: 3000
		}
	}]
}
