//每次只能爬一个或两个，问多少种爬法

function climbStairs(n){//动态规划解题法
    const dp=[];
    dp[0]=1;
    dp[1]=1;
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[i];

}
