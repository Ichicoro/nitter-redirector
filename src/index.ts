import { Hono, HonoRequest } from 'hono'
import { Handler, BlankEnv, BlankInput } from 'hono/types';

const app = new Hono()

const staticURL = ''; // Set this to an instance if you always want to use a single Nitter instance instead of fetching from API.

type NitterHost = {
  url: string;
  domain: string;
  points: number;
  rss: boolean;
  recent_pings: number[];
  ping_max: number;
  ping_min: number;
  ping_avg: number;
  version: string;
  version_url: string;
  healthy: boolean;
  last_healthy: string;
  version_state: string;
  is_upstream: boolean;
  is_latest_version: boolean;
  is_bad_host: boolean;
  country: string;
  recent_checks: [string, boolean][];
  healthy_percentage_overall: number;
  connectivity: string | null;
  __show_last_seen: boolean;
};

type NitterInstancesResponse = {
  hosts: NitterHost[];
  last_update: string;
  latest_commit: string;
};

const testResponse: NitterInstancesResponse = {
  "hosts": [{
    "url": "https://nitter.net",
    "domain": "nitter.net",
    "points": 79,
    "rss": false,
    "recent_pings": [4408, 1264, 1617, 1701, 1460, 1282, 1746, 1546, 1579, 3016, 1839, 6449],
    "ping_max": 6449,
    "ping_min": 1264,
    "ping_avg": 2325,
    "version": "2026.02.10-dcec1eb",
    "version_url": "https://github.com/zedeus/nitter/commit/dcec1eb",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Current",
    "is_upstream": true,
    "is_latest_version": true,
    "is_bad_host": false,
    "country": "🇳🇱",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 94,
    "connectivity": "IPv4",
    "__show_last_seen": false
  }, {
    "url": "https://nitter.tiekoetter.com",
    "domain": "nitter.tiekoetter.com",
    "points": 78,
    "rss": false,
    "recent_pings": [21, 20, 25, 20, 4, 4, 3, 20, 20, 4, 4, 20],
    "ping_max": 25,
    "ping_min": 3,
    "ping_avg": 12,
    "version": "2026.02.09-40b1ba4",
    "version_url": "https://github.com/zedeus/nitter/commit/40b1ba4",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇩🇪",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 38,
    "connectivity": "All",
    "__show_last_seen": false
  }, {
    "url": "https://nitter.privacyredirect.com",
    "domain": "nitter.privacyredirect.com",
    "points": 77,
    "rss": true,
    "recent_pings": [1740, 1772, 1546, 2681, 2066, 2004, 2077, 1671, 2713, 1774, 1880, 1923],
    "ping_max": 2713,
    "ping_min": 1546,
    "ping_avg": 1987,
    "version": "2026.02.09-40b1ba4",
    "version_url": "https://github.com/zedeus/nitter/commit/40b1ba4",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇫🇮",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 94,
    "connectivity": "All",
    "__show_last_seen": false
  }, {
    "url": "https://nuku.trabun.org",
    "domain": "nuku.trabun.org",
    "points": 76,
    "rss": false,
    "recent_pings": [1760, 1342, 1757, 1658, 1441, 1881, 1447, 1941, 3692, 1831, 1659, 3605],
    "ping_max": 3692,
    "ping_min": 1342,
    "ping_avg": 2001,
    "version": "2026.02.09-40b1ba4",
    "version_url": "https://github.com/zedeus/nitter/commit/40b1ba4",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇨🇱",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 96,
    "connectivity": null,
    "__show_last_seen": false
  }, {
    "url": "https://nitter.catsarch.com",
    "domain": "nitter.catsarch.com",
    "points": 76,
    "rss": false,
    "recent_pings": [1283, 1399, 1248, 1407, 1326, 1566, 1836, 1807, 1867, 1743, 2513, 1550],
    "ping_max": 2513,
    "ping_min": 1248,
    "ping_avg": 1628,
    "version": "2026.02.09-40b1ba4",
    "version_url": "https://github.com/zedeus/nitter/commit/40b1ba4",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇺🇸/🇩🇪",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 61,
    "connectivity": "All",
    "__show_last_seen": false
  }, {
    "url": "https://nitter.poast.org",
    "domain": "nitter.poast.org",
    "points": 73,
    "rss": true,
    "recent_pings": [1286, 1409, 1313, 1301, 1383, 1322, 1236, 1341, 2034, 1984, 1946, 1387],
    "ping_max": 2034,
    "ping_min": 1236,
    "ping_avg": 1495,
    "version": "2026.02.09-1925adf",
    "version_url": "https://github.com/zedeus/nitter/commit/1925adf",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "UnknownCommit",
    "is_upstream": false,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇺🇸",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", false],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 86,
    "connectivity": "IPv4",
    "__show_last_seen": false
  }, {
    "url": "https://nitter.space",
    "domain": "nitter.space",
    "points": 72,
    "rss": false,
    "recent_pings": [1346, 1520, 1773, 1243, 1817, 1392, 1510, 2139, 2317, 2128, 1768, 1700],
    "ping_max": 2317,
    "ping_min": 1243,
    "ping_avg": 1721,
    "version": "2025.12.08-baeaf68",
    "version_url": "https://github.com/zedeus/nitter/commit/baeaf68",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇺🇸",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 96,
    "connectivity": "All",
    "__show_last_seen": false
  }, {
    "url": "https://xcancel.com",
    "domain": "xcancel.com",
    "points": 71,
    "rss": true,
    "recent_pings": [1237, 125, 145, 172, 1324, 1298, 1282, 147, 1477, 1683, 172, 1555],
    "ping_max": 1683,
    "ping_min": 125,
    "ping_avg": 884,
    "version": "2026.01.18-5443e78",
    "version_url": "https://github.com/zedeus/nitter/commit/5443e78",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "UnknownCommit",
    "is_upstream": false,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇺🇸",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 97,
    "connectivity": "All",
    "__show_last_seen": false
  }, {
    "url": "https://lightbrd.com",
    "domain": "lightbrd.com",
    "points": 70,
    "rss": false,
    "recent_pings": [1541, 1356, 1196, 1338, 1360, 1344, 1466, 1595, 2048, 1706, 1507, 1493],
    "ping_max": 2048,
    "ping_min": 1196,
    "ping_avg": 1495,
    "version": "2025.10.12-662ae90",
    "version_url": "https://github.com/zedeus/nitter/commit/662ae90",
    "healthy": true,
    "last_healthy": "2026-02-11T13:44:50Z",
    "version_state": "Outdated",
    "is_upstream": true,
    "is_latest_version": false,
    "is_bad_host": false,
    "country": "🇹🇷",
    "recent_checks": [
      ["2026.02.11 08:27", true],
      ["2026.02.11 08:42", true],
      ["2026.02.11 08:57", true],
      ["2026.02.11 09:12", true],
      ["2026.02.11 09:27", true],
      ["2026.02.11 09:42", true],
      ["2026.02.11 09:58", true],
      ["2026.02.11 10:13", true],
      ["2026.02.11 10:28", true],
      ["2026.02.11 10:43", true],
      ["2026.02.11 10:58", true],
      ["2026.02.11 11:13", true],
      ["2026.02.11 11:28", true],
      ["2026.02.11 11:43", true],
      ["2026.02.11 11:58", true],
      ["2026.02.11 12:14", true],
      ["2026.02.11 12:29", true],
      ["2026.02.11 12:44", true],
      ["2026.02.11 12:59", true],
      ["2026.02.11 13:14", true],
      ["2026.02.11 13:29", true],
      ["2026.02.11 13:44", true]
    ],
    "healthy_percentage_overall": 96,
    "connectivity": "All",
    "__show_last_seen": false
  }],
  "last_update": "2026-02-11T13:44:58.378028578Z",
  "latest_commit": "dcec1eb458886076f862622a5e841f82891df672"
}

async function fetchNitterInstance(): Promise<string> {
  try {
    const response = await fetch('https://status.d420.de/api/v1/instances');
    let data: NitterInstancesResponse;
    if (response.status !== 200) {
      console.error('Failed to fetch Nitter instances, status code:', response.status);
      data = testResponse; // Fallback to test data if API request fails
      // throw new Error(`API request failed with status ${response.status}`);
    }
    try {
      data = await response.json();
    } catch (jsonError) {
      console.error('Failed to parse API response as JSON:', jsonError);
      data = testResponse; // Fallback to test data if JSON parsing fails
      // throw new Error('Failed to parse API response as JSON');
    }

    if (!data.hosts || !Array.isArray(data.hosts)) {
      console.error('Unexpected API response format:', data);
      throw new Error('Invalid API response format');
    }

    const healthyInstances = data.hosts.filter((host: NitterHost) => host.healthy && !host.is_bad_host);

    if (healthyInstances.length > 0) {
      const randomInstance = healthyInstances[Math.floor(Math.random() * healthyInstances.length)];
      return randomInstance.url;
    } else {
      console.warn('No healthy Nitter instances found.');
    }
  } catch (error) {
    console.error('Error fetching Nitter instances:', error);
    throw error;
  }
  return "";
}

const rebuildPath = (req: HonoRequest) => {
  return `${req.path}?${Object.entries(req.query()).map(([key, value]) => `${key}=${value}`).join('&')}`;
}

app.get('/*', async (c) => {
  const nitterDomain = staticURL.length > 1 ? staticURL : await fetchNitterInstance();

  console.log(`current path: ${rebuildPath(c.req)}; selected instance: ${nitterDomain}`);
  return c.redirect(`${nitterDomain}${rebuildPath(c.req)}`);
})

export default app
