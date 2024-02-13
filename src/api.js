// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://gbifinance-uat.rno.apple.com/gsf/eurovat_snowflake/businessareas/finance/subjectareas/eurovat_snowflake/services', // Replace with your API base URL
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json",
    'CSRFToken': "PDD2-IX2T-W1AX-9UR5-068X-Q233-D5EX-YXW8-7FJL-OIXG-IREH-WOQ6-JA4K-VICM-74AY-17JT-LZB1-23X5-H87X-KI6W-UWEY-YB6X-XKXY-9B4S-R46F-OIDH-FL5Y-FYWJ-17G0-WXTS-PG8R-HH11",
    "ALLOW-FROM-ORIGIN": "ALLOW",
    Cache: 'no-cache',
    CSRF:"PDD2-IX2T-W1AX-9UR5-068X-Q233-D5EX-YXW8-7FJL-OIXG-IREH-WOQ6-JA4K-VICM-74AY-17JT-LZB1-23X5-H87X-KI6W-UWEY-YB6X-XKXY-9B4S-R46F-OIDH-FL5Y-FYWJ-17G0-WXTS-PG8R-HH11",
    'X-Requested-With': 'XMLHttpRequest'
  },
});

export default api;



  // https://cors-anywhere.herokuapp.com/https://your-deployed-server.com/api/endpoint


