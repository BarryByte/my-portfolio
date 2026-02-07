import projectsConfig from '../config/projects.json'

const GITHUB_API_BASE = 'https://api.github.com'
const CACHE_KEY = 'github_repos_cache'
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

/**
 * Fetches public repositories for a user from GitHub API
 * with localStorage caching to avoid rate limits
 */
export async function fetchUserRepos(username = 'BarryByte') {
    // Check cache first
    const cached = getFromCache()
    if (cached) {
        return filterAndSortRepos(cached)
    }

    try {
        const token = import.meta.env.VITE_GITHUB_TOKEN
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        const response = await fetch(
            `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`,
            { headers }
        )

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`)
        }

        const repos = await response.json()

        // Cache the response
        saveToCache(repos)

        return filterAndSortRepos(repos)
    } catch (error) {
        console.error('Failed to fetch repos:', error)

        // If API fails, try to return stale cache
        const staleCache = localStorage.getItem(CACHE_KEY)
        if (staleCache) {
            const { data } = JSON.parse(staleCache)
            return filterAndSortRepos(data)
        }

        return []
    }
}

function filterAndSortRepos(repos) {
    const { hidden, featured } = projectsConfig

    // Filter out hidden repos and forks
    const filtered = repos.filter(repo =>
        !hidden.includes(repo.name) && !repo.fork
    )

    // Sort: featured first, then by updated date
    return filtered.sort((a, b) => {
        const aFeatured = featured.includes(a.name)
        const bFeatured = featured.includes(b.name)

        if (aFeatured && !bFeatured) return -1
        if (!aFeatured && bFeatured) return 1

        return new Date(b.updated_at) - new Date(a.updated_at)
    })
}

function getFromCache() {
    try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (!cached) return null

        const { data, timestamp } = JSON.parse(cached)

        // Check if cache is still valid
        if (Date.now() - timestamp < CACHE_TTL) {
            return data
        }
    } catch {
        return null
    }
    return null
}

function saveToCache(data) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
        }))
    } catch (error) {
        console.warn('Failed to cache repos:', error)
    }
}

/**
 * Get language color for display
 */
export function getLanguageColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Python: '#3572A5',
        Java: '#b07219',
        Go: '#00ADD8',
        HTML: '#e34c26',
        CSS: '#563d7c',
        'Jupyter Notebook': '#DA5B0B',
    }
    return colors[language] || '#6e7681'
}
