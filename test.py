import sys
input = sys.stdin.readline
INF = int(1e18)
def main():
    N, M, X = map(int, input().split())
    G = [list(map(int, input().split())) for _ in range(N)]
    ans = INF
    dp = [[INF] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            if i > 0:
                dp[i][j] = min(dp[i][j], dp[i - 1][j])
            if j > 0:
                dp[i][j] = min(dp[i][j], dp[i][j - 1])

            if dp[i][j] != INF:
                cost = G[i][j] + X * (i + j) + dp[i][j]
                ans = min(ans, cost)
            dp[i][j] = min(dp[i][j], G[i][j] - X * (i + j))
    dp = [[INF] * M for _ in range(N)]
    for i in range(N):
        for j in range(M - 1, -1, -1):
            if i > 0:
                dp[i][j] = min(dp[i][j], dp[i - 1][j])
            if j + 1 < M:
                dp[i][j] = min(dp[i][j], dp[i][j + 1])

            if dp[i][j] != INF:
                cost = G[i][j] + X * (i - j) + dp[i][j] + X * 2 * j
                ans = min(ans, cost)

            dp[i][j] = min(dp[i][j], G[i][j] - X * (i - j))
    print(ans)
if __name__ == "__main__":
    main()