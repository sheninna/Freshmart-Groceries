const axios = require('axios');
const EMPLOYEE_SERVICE_URL = "http://127.0.0.1:8000/api/employees/";

exports.getEmployees = async (req, res) => {
    try {
        const response = await axios.get(EMPLOYEE_SERVICE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const response = await axios.post(EMPLOYEE_SERVICE_URL, req.body, {
            headers: { "Content-Type": "application/json" }
        });
        res.status(201).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
};
